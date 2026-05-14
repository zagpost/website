<script lang="ts">
  import { SiteTitles } from "$lib";
  import Head, { type SeoConfig } from "$lib/components/Head.svelte";
  import JsonLd from "$lib/components/JsonLd.svelte";

  // ! This is not automatically translated using the script, so make sure to update the SEO config in the other language pages as well when you update it here.
  const seo_config: SeoConfig = {
    // svelte-ignore state_referenced_locally
    title: SiteTitles.en,
    description:
      "Zag Post is a privacy-first messenger being built for friends, families and small groups. No phone number required.",
    url: "https://zagpost.org/",
    language: "en",
  };

  const jsonLdData: JsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: seo_config.title,
    description: seo_config.description,
    url: seo_config.url,
  };
</script>

<Head {seo_config} />
<JsonLd item={jsonLdData} />

<h1>Private Messaging for the people.</h1>

<p>
  <b>Zag Post</b> is a privacy-first messenger being built for friends, families and small groups - people who want
  the convenience of WhatsApp without handing their metadata to an advertising company.
</p>

<p>No phone number required. No metadata profiles. No scanning of private messages. No ads, ever.</p>

<h2 id="why-zag-post">Why Zag Post?</h2>

<p>Zagpost targets the users that WhatsApp, Signal, and Matrix have each failed in different ways:</p>

<ul>
  <li>WhatsApp is easy but owned by Meta and saturated with metadata collection.</li>
  <li>
    Signal is the gold standard for privacy and ease-of-use, but it's still phone-number-first at
    registration, US-hosted and also retains metadata on its servers.
  </li>
  <li>
    Matrix/Element solves decentralization but fails completely at usability - fragmented clients, complex
    setup, no consistent feature parity.
  </li>
</ul>

<p>
  With <b>Zag Post</b> we want to reach those people who want a private, friction-free messenger for families
  and friend groups - not a surveillance tool, not a protocol, and not an app that still requires a phone
  number at its core.
  <b>Zag Post</b>'s explicit trade-off are no federation, no self-hosting (in v1) and one controlled
  experience, but in return you get an EU-hosted, no-ads, no-AI, ciphertext-only storage product that even
  your grandma can use.
</p>

<h2 id="roadmap">Roadmap</h2>

<p><b>Zag Post</b> is in early development, but we target a closed beta release in December 2026.</p>

<div class="w-full overflow-x-auto">
  <table class="table-zebra">
    <thead>
      <tr>
        <th>Milestone</th>
        <th>When</th>
        <th>What</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>M0 – Foundation</td>
        <td>May–Jun 2026</td>
        <td>Repos, plan, UI prototype</td>
      </tr>
      <tr>
        <td>M1 – Auth</td>
        <td>Jul 2026</td>
        <td>Accounts, login, WebSocket</td>
      </tr>
      <tr>
        <td>M2 – E2EE</td>
        <td>Aug–Sep 2026</td>
        <td>Encrypted DMs + groups</td>
      </tr>
      <tr>
        <td>M3 – Media</td>
        <td>Oct 2026</td>
        <td>Files, photos, voice notes</td>
      </tr>
      <tr>
        <td>M4 – Push & Beta Prep</td>
        <td>Nov 2026</td>
        <td>Notifications, export, monitoring</td>
      </tr>
      <tr>
        <td>M5 – Private Beta</td>
        <td>Dec 2026</td>
        <td>50–100 invited users</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="our-commitments">Our Commitments</h2>

<ol>
  <li>
    <b>No ads, ever.</b> Zag Post is funded by donations. Your data is not the product.
  </li>
  <li>
    <b>Minimal metadata.</b> Message routing data is short-lived. We log as little as possible and document exactly
    what we do retain.
  </li>
  <li>
    <b>No server- and client-side content scanning.</b> Private chats are private. We do not scan, index, or train
    on your messages.
  </li>
  <li>
    <b>No phone number required.</b> You can add one and control whether others can find you by it. You can also
    remove it at any time.
  </li>
  <li>
    <b>EU hosting by default.</b> Your data does not leave the EU without your explicit consent.
  </li>
  <li>
    <b>Honest about trade-offs.</b> Where we make a compromise between convenience and privacy, we document it clearly.
  </li>
</ol>

<h2 id="open-source">Open Source</h2>

<p>
  We build most of the stuff as open source, not everything will be public from the get-go due to security
  considerations. However we want to open source as much as possible in the future because security, that
  can't be verified, can't be trusted.
</p>

<hr />

<h2 id="join-us">Join Us</h2>

<p>
  I (LukeZ) am currently the only one working on Zag Post, but I hope to build a small team of volunteers and
  eventually paid contributors to help build and maintain it.<br />
  I am currently on the lookout for:
</p>

<div class="w-full overflow-x-auto">
  <table class="table-zebra">
    <thead>
      <tr>
        <th>Role</th>
        <th>What</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Graphics Designer</td>
        <td>
          I am terrible at designing graphics<br />
          <small>It's primarily about designing the logo and other graphics.</small>
        </td>
      </tr>
      <tr>
        <td>Architect/Experienced Developer</td>
        <td>
          Someone with experience in system design<br />
          <small>Someone I can ask for feedback and who is simply helpful to have around.</small>
        </td>
      </tr>
      <tr>
        <td>Developer</td>
        <td>
          Experience with Rust, Kotlin or Swift and Svelte 5.<br />
          <small>
            Rust is the backend language; Kotlin/Swift are for mobile apps which are on the roadmap but not
            the immediate next step; Svelte 5 is what the webapp is built in as well as this product website.
          </small>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<p>
  Everything is currently volunteer-based - private life comes first, but if you want to contribute in any
  way, please reach out to me at
  <a href="mailto:contact@zagpost.org" target="_blank">contact@zagpost.org</a> or on
  <a href="https://bsky.app/profile/zagpost.org" target="_blank">Bluesky</a>.
</p>

<hr />

<footer id="contact">
  <p>
    <b>Contact</b>: <a href="mailto:contact@zagpost.org" target="_blank">contact@zagpost.org</a>
  </p>
  <p>
    <b>GitHub</b>: <a href="https://github.com/orgs/zagpost" target="_blank">GitHub</a>
  </p>
  <p>
    <b>Bluesky</b>: <a href="https://bsky.app/profile/zagpost.org" target="_blank">Bluesky</a>
  </p>
  <small>
    &copy; 2026 zagpost.org | <a href="/imprint">Imprint</a>
  </small>
</footer>
