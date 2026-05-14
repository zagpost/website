import { execSync } from "child_process";
import type { TargetLanguageCode } from "deepl-node";
import * as deepl from "deepl-node";
import * as fs from "fs";
import * as path from "path";
import * as readline from "readline/promises";

const DEEPL_API_KEY = process.env.DEEPL_API_KEY;

if (!DEEPL_API_KEY) {
  console.error("Error: DEEPL_API_KEY is missing from .env.local");
  process.exit(1);
}

const translator = new deepl.Translator(DEEPL_API_KEY);
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  try {
    const defaultPagePath = path.join(process.cwd(), "src", "routes", "+page.svelte");

    // Check if the default file exists
    if (!fs.existsSync(defaultPagePath)) {
      console.error(`Error: Default page not found at ${defaultPagePath}`);
      process.exit(1);
    }

    const targetLocale = (
      await rl.question('Enter the full target locale for DeepL (e.g. "de-DE", "es-ES"): ')
    ).trim();

    if (!targetLocale) {
      console.error("Error: No locale provided.");
      process.exit(1);
    }

    // Slice to 2 characters for the local directory (e.g. 'de-DE' -> 'de')
    const shortLocale = targetLocale.substring(0, 2).toLowerCase();

    const newLocaleDir = path.join(process.cwd(), "src", "routes", shortLocale);
    const newPagePath = path.join(newLocaleDir, "+page.svelte");

    // Prevent overwriting existing locale
    if (fs.existsSync(newPagePath)) {
      const decision = await rl.question(
        `A page already exists for locale "${shortLocale}". Do you want to overwrite it? (y/n): `,
      );
      if (decision.toLowerCase() !== "y") {
        console.error(`Error: A file already exists at ${newPagePath}`);
        process.exit(1);
      }
    }

    console.log(`Reading default page from ${defaultPagePath}...`);
    const defaultContent = fs.readFileSync(defaultPagePath, "utf8");

    // Extract script and style blocks
    const scriptRegex = /<script\b[^>]*>[\s\S]*?<\/script>/gi;
    const styleRegex = /<style\b[^>]*>[\s\S]*?<\/style>/gi;

    const scripts = defaultContent.match(scriptRegex) || [];
    const styles = defaultContent.match(styleRegex) || [];

    const contentToTranslate = defaultContent.replace(scriptRegex, "").replace(styleRegex, "");

    console.log(`Translating content to ${targetLocale.toUpperCase()} via DeepL...`);
    const translationResult = await translator.translateText(
      contentToTranslate,
      null, // Source language (auto-detect)
      targetLocale as TargetLanguageCode,
      {
        tagHandling: "html",
        formality: "less",
        modelType: "prefer_quality_optimized",
        preserveFormatting: true,
        tagHandlingVersion: "v2",
      },
    );

    // Ensure directory exists
    if (!fs.existsSync(newLocaleDir)) {
      fs.mkdirSync(newLocaleDir, { recursive: true });
    }

    const finalContent = [...scripts, translationResult.text, ...styles].join("\n\n");

    fs.writeFileSync(newPagePath, finalContent);
    console.log(`Successfully translated and saved to ${newPagePath}`);

    console.log("Running prettier...");
    execSync(`pnpm prettier --write "src/routes/${shortLocale}/+page.svelte"`, { stdio: "inherit" });

    console.log("Done!");
  } catch (error) {
    console.error("An error occurred during translation:", error);
  } finally {
    rl.close();
  }
}

main();
