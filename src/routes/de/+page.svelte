<script lang="ts">
  import Head, { type SeoConfig } from "$lib/components/Head.svelte";
  import JsonLd from "$lib/components/JsonLd.svelte";

  const seo_config: SeoConfig = {
    title: "Zag Post - Private Nachrichten für alle",
    description:
      "Zag Post ist ein Messenger, bei dem der Datenschutz an erster Stelle steht. Keine Telefonnummer erforderlich.",
    url: "https://zagpost.org/de",
    language: "de",
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

<b>Private Nachrichten für alle.</b>

<p>
  <b>Zag Post</b> ist ein Messenger, bei dem der Datenschutz an erster Stelle steht. Er wurde für Freunde, Familien
  und kleine Gruppen entwickelt – für alle, die den Komfort von WhatsApp nutzen möchten, ohne ihre Metadaten an
  ein Werbeunternehmen weiterzugeben.
</p>

<p>
  Keine Telefonnummer erforderlich. Keine Metadaten-Profile. Kein Scannen privater Nachrichten. Keine Werbung,
  niemals.
</p>

<h2 id="why-zag-post">Warum Zag Post?</h2>

<p>
  Zag Post richtet sich an die Nutzer, bei denen WhatsApp, Signal und Matrix auf unterschiedliche Weise
  versagt haben:
</p>

<ul>
  <li>WhatsApp ist einfach, gehört aber Meta und ist vollgestopft mit Metadaten-Erfassung.</li>
  <li>
    Signal ist der Goldstandard für Datenschutz und Benutzerfreundlichkeit, verlangt aber bei der
    Registrierung immer noch die Angabe einer Telefonnummer, wird in den USA gehostet und speichert zudem
    Metadaten auf seinen Servern.
  </li>
  <li>
    Matrix/Element löst das Problem der Dezentralisierung, versagt aber völlig bei der Benutzerfreundlichkeit
    – fragmentierte Clients, komplexe Einrichtung, keine einheitliche Funktionsparität.
  </li>
</ul>

<p>
  Mit <b>Zag Post</b> wollen wir diejenigen erreichen, die einen privaten, reibungslosen Messenger für
  Familien und Freundeskreise suchen – kein Überwachungswerkzeug, kein Protokoll und keine App, die im Kern
  immer noch eine Telefonnummer erfordert.
  <b>Zag Post</b> geht bewusst Kompromisse ein: keine Föderation, kein Selbsthosting (in v1) und eine kontrollierte
  Benutzererfahrung, aber dafür bekommst du ein in der EU gehostetes, werbefreies, KI-freies Speicherprodukt, das
  ausschließlich verschlüsselte Daten speichert und das sogar deine Oma nutzen kann.
</p>

<h2 id="roadmap">Roadmap</h2>

<p>
  <b>Zag Post</b> befindet sich in der frühen Entwicklungsphase, aber wir streben eine Closed-Beta-Veröffentlichung
  im Dezember 2026 an.
</p>

<div class="w-full overflow-x-auto">
  <table class="table-zebra">
    <thead>
      <tr>
        <th>Meilenstein</th>
        <th>Wann</th>
        <th>Was</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>M0 – Grundlagen</td>
        <td>Mai–Juni 2026</td>
        <td>Repos, Plan, UI-Prototyp</td>
      </tr>
      <tr>
        <td>M1 – Authentifizierung</td>
        <td>Juli 2026</td>
        <td>Konten, Anmeldung, WebSocket</td>
      </tr>
      <tr>
        <td>M2 – E2EE</td>
        <td>Aug.–Sep. 2026</td>
        <td>Verschlüsselte Direktnachrichten + Gruppen</td>
      </tr>
      <tr>
        <td>M3 – Medien</td>
        <td>Okt. 2026</td>
        <td>Dateien, Fotos, Sprachnachrichten</td>
      </tr>
      <tr>
        <td>M4 – Push &amp; Beta-Vorbereitung</td>
        <td>Nov. 2026</td>
        <td>Benachrichtigungen, Export, Überwachung</td>
      </tr>
      <tr>
        <td>M5 – Private Beta</td>
        <td>Dez. 2026</td>
        <td>50–100 eingeladene Nutzer</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="our-commitments">Unsere Verpflichtungen</h2>

<ol>
  <li>
    <b>Keine Werbung, niemals.</b> Zag Post wird durch Spenden finanziert. Deine Daten sind nicht das Produkt.
  </li>
  <li>
    <b>Minimale Metadaten.</b> Daten zur Nachrichtenweiterleitung sind kurzlebig. Wir protokollieren so wenig wie
    möglich und dokumentieren genau, was wir speichern.
  </li>
  <li>
    <b>Kein Scannen von Inhalten auf Server- oder Client-Seite.</b> Private Chats bleiben privat. Wir scannen, indexieren
    oder trainieren nicht mit deinen Nachrichten.
  </li>
  <li>
    <b>Keine Telefonnummer erforderlich.</b> Du kannst eine hinzufügen und selbst bestimmen, ob andere dich darüber
    finden können. Du kannst sie auch jederzeit entfernen.
  </li>
  <li>
    <b>Standardmäßig Hosting in der EU.</b> Deine Daten verlassen die EU nicht ohne deine ausdrückliche Zustimmung.
  </li>
  <li>
    <b>Ehrlichkeit bei Kompromissen.</b> Wo wir einen Kompromiss zwischen Komfort und Datenschutz eingehen, dokumentieren
    wir dies klar und deutlich.
  </li>
</ol>

<h2 id="open-source">Open Source</h2>

<p>
  Wir entwickeln das meiste als Open Source, aus Sicherheitsgründen wird jedoch nicht alles von Anfang an
  öffentlich sein. Wir wollen jedoch in Zukunft so viel wie möglich als Open Source veröffentlichen, denn
  Sicherheit, die nicht überprüft werden kann, ist nicht vertrauenswürdig.
</p>

<hr />

<h2 id="join-us">Mach mit</h2>

<p>
  Ich (LukeZ) arbeite derzeit als Einziger an Zag Post, aber ich hoffe, ein kleines Team aus Freiwilligen und
  später auch bezahlten Mitwirkenden aufzubauen, das beim Aufbau und der Pflege hilft.<br />
  Ich suche derzeit nach:
</p>

<div class="w-full overflow-x-auto">
  <table class="table-zebra">
    <thead>
      <tr>
        <th>Rolle</th>
        <th>Was</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Grafik Designer</td>
        <td>
          Ich bin furchtbar im designen von Grafiken<br />
          <small>Es geht primär um das designen vom Logo und anderen Grafiken.</small>
        </td>
      </tr>
      <tr>
        <td>Architekt</td>
        <td>
          Jemand mit Erfahrung im Systemdesign<br />
          <small>
            Jemand, den ich nach Feedback fragen kann und welcher mir einfach nur hilfreich zur Seite steht.
          </small>
        </td>
      </tr>
      <tr>
        <td>Entwickler</td>
        <td>
          Erfahrung mit Rust, Kotlin oder Swift und Svelte 5.<br />
          <small>
            Rust ist die Backend-Sprache; Kotlin/Swift sind für mobile Apps gedacht, die zwar auf der Roadmap
            stehen, aber nicht der unmittelbare nächste Schritt sind; Svelte 5 ist die Basis, auf der die
            Web-App sowie diese Produkt-Website aufgebaut sind.
          </small>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<p>
  Derzeit läuft alles auf Freiwilligenbasis – das Privatleben hat Vorrang, aber wenn du in irgendeiner Weise
  mitwirken möchtest, melde dich bitte bei mir unter
  <a href="mailto:contact@zagpost.org" target="_blank">contact@zagpost.org</a> oder auf
  <a href="https://bsky.app/profile/zagpost.org" target="_blank">Bluesky</a>.
</p>

<hr />

<footer id="contact">
  <p>
    <b>Kontakt</b>: <a href="mailto:contact@zagpost.org" target="_blank">contact@zagpost.org</a>
  </p>
  <p>
    <b>GitHub</b>: <a href="https://github.com/orgs/zagpost" target="_blank">GitHub</a>
  </p>
  <p>
    <b>Bluesky</b>: <a href="https://bsky.app/profile/zagpost.org" target="_blank">Bluesky</a>
  </p>
  <small>© 2026 zagpost.org </small>
</footer>
