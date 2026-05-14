<script lang="ts">
  import Head, { type SeoConfig } from "$lib/components/Head.svelte";
  import JsonLd from "$lib/components/JsonLd.svelte";

  const seo_config: SeoConfig = {
    title: "Zag Post - Une messagerie privée pour tout le monde",
    description:
      "Zag Post est une messagerie qui privilégie la confidentialité. Pas besoin de numéro de téléphone.",
    url: "https://zagpost.org/fr",
    language: "fr",
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

<b>Une messagerie privée pour tout le monde.</b>

<p>
  <b>Zag Post</b> est une messagerie qui privilégie la confidentialité, conçue pour les amis, les familles et les
  petits groupes – tous ceux qui veulent profiter de la commodité de WhatsApp sans confier leurs métadonnées à une
  agence de pub. Pas besoin de numéro de téléphone. Pas de profils de métadonnées. Pas de scan des messages privés.
  Pas de pubs, jamais.
</p>

<p>
  Pas besoin de numéro de téléphone. Pas de profils de métadonnées. Pas de lecture des messages privés. Pas de
  pubs, jamais.
</p>

<h2 id="why-zag-post">Pourquoi Zag Post ?</h2>

<p>
  Zag Post s&#x27;adresse aux utilisateurs que WhatsApp, Signal et Matrix ont chacun déçus à leur manière :
</p>

<ul>
  <li>WhatsApp est simple, mais appartient à Meta et est saturé de collecte de métadonnées.</li>
  <li>
    Signal est la référence en matière de confidentialité et de facilité d&#x27;utilisation, mais il exige
    toujours un numéro de téléphone lors de l&#x27;inscription, est hébergé aux États-Unis et conserve
    également des métadonnées sur ses serveurs.
  </li>
  <li>
    Matrix/Element résout le problème de la décentralisation mais échoue complètement en matière
    d&#x27;ergonomie : clients fragmentés, configuration complexe, pas de parité cohérente des
    fonctionnalités.
  </li>
</ul>

<p>
  Avec <b>Zag Post,</b> on veut toucher les gens qui veulent une messagerie privée et fluide pour leur famille
  et leurs groupes d&#x27;amis — pas un outil de surveillance, pas un protocole, et pas une appli qui
  nécessite toujours un numéro de téléphone comme base. Les compromis explicites de <b>Zag Post</b> sont l&#x27;absence
  de fédération, l&#x27;absence d&#x27;auto-hébergement (dans la v1) et une expérience contrôlée, mais en contrepartie,
  tu obtiens un produit hébergé dans l&#x27;UE, sans publicité, sans IA, avec un stockage en texte chiffré uniquement,
  que même ta grand-mère peut utiliser.
</p>

<h2 id="roadmap">Feuille de route</h2>

<p>
  <b>Zag Post</b> en est aux premiers stades de développement, mais nous visons une version bêta fermée en décembre
  2026.
</p>

<div class="min-w-100 overflow-x-auto">
  <table class="table-zebra">
    <thead>
      <tr>
        <th>Étapes clés</th>
        <th>Quand</th>
        <th>Quoi</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>M0 – Fondations</td>
        <td>Mai-juin 2026</td>
        <td>Répos, plan, prototype d&#x27;interface utilisateur</td>
      </tr>
      <tr>
        <td>M1 – Authentification</td>
        <td>Juillet 2026</td>
        <td>Comptes, connexion, WebSocket</td>
      </tr>
      <tr>
        <td>M2 – E2EE</td>
        <td>Août-septembre 2026</td>
        <td>Messages privés et groupes chiffrés</td>
      </tr>
      <tr>
        <td>M3 – Médias</td>
        <td>Oct. 2026</td>
        <td>Fichiers, photos, notes vocales</td>
      </tr>
      <tr>
        <td>M4 – Lancement et préparation de la version bêta</td>
        <td>Nov. 2026</td>
        <td>Notifications, exportation, surveillance</td>
      </tr>
      <tr>
        <td>M5 – Bêta privée</td>
        <td>Déc. 2026</td>
        <td>50 à 100 utilisateurs invités</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="our-commitments">Nos engagements</h2>

<p>Nous prenons des engagements techniques précis, pas de vagues promesses.</p>

<ol>
  <li>
    <b>Pas de publicité, jamais.</b> Zag Post est financé par des dons. Tes données ne sont pas le produit.
  </li>
  <li>
    <b>Un minimum de métadonnées.</b> Les données de routage des messages ont une durée de vie très courte. On enregistre
    le moins possible et on documente exactement ce qu&#x27;on conserve. Pas de scan de contenu côté serveur ni
    côté client.
  </li>
  <li>
    <b>Aucune analyse de contenu côté serveur ou côté client.</b> Les discussions privées restent privées. Nous
    n’analysons pas, n’indexons pas et ne formons pas de modèles à partir de tes messages.
  </li>
  <li>
    <b>Aucun numéro de téléphone requis.</b> Tu peux en ajouter un et contrôler si les autres peuvent te trouver
    grâce à lui. Tu peux également le supprimer à tout moment.
  </li>
  <li>
    <b>Hébergement dans l&#x27;UE par défaut.</b> Tes données ne quittent pas l&#x27;UE sans ton consentement explicite.
  </li>
  <li>
    <b>Transparence sur les compromis.</b> Lorsque nous faisons un compromis entre commodité et confidentialité,
    nous le signalons clairement.
  </li>
</ol>

<h2 id="open-source">Open Source</h2>

<p>
  Nous développons la plupart de nos fonctionnalités en open source, mais tout ne sera pas public dès le
  départ pour des raisons de sécurité. Cependant, nous souhaitons ouvrir le plus possible notre code à
  l&#x27;avenir, car une sécurité qui ne peut être vérifiée ne peut inspirer confiance.
</p>

<hr />

<h2 id="join-us">Rejoins-nous</h2>

<p>
  Je (LukeZ) suis actuellement le seul à travailler sur Zag Post, mais j’espère constituer une petite équipe
  de bénévoles et, à terme, de contributeurs rémunérés pour aider à le développer et à le maintenir.<br />
  Je recherche actuellement :
</p>

<div class="min-w-100 overflow-y-auto">
  <table class="table-zebra">
    <thead>
      <tr>
        <th>Rôle</th>
        <th>Quoi</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Designer</td>
        <td>Je suis nul en design</td>
      </tr>
      <tr>
        <td>Architecte</td>
        <td>Quelqu&#x27;un qui a de l&#x27;expérience en conception de systèmes</td>
      </tr>
      <tr>
        <td>Développeur</td>
        <td>
          Expérience avec Rust, Kotlin ou Swift, et Svelte 5.<br />
          <small>
            Rust est le langage backend ; Kotlin/Swift sont destinés aux applications mobiles qui font partie
            de la feuille de route mais ne constituent pas la prochaine étape immédiate ; Svelte 5 est le
            langage utilisé pour l&#x27;application web ainsi que pour le site web de ce produit.
          </small>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<p>
  Tout repose actuellement sur le bénévolat — la vie privée passe avant tout, mais si tu souhaites contribuer
  de quelque manière que ce soit, n&#x27;hésite pas à me contacter à l&#x27;adresse <a
    href="mailto:contact@zagpost.org"
    target="_blank">contact@zagpost.org</a
  >
  ou sur <a href="https://bsky.app/profile/zagpost.org" target="_blank">Bluesky</a>.
</p>

<hr />

<footer id="contact">
  <p>
    <b>Contact</b> : <a href="mailto:contact@zagpost.org" target="_blank">contact@zagpost.org</a>
  </p>
  <p>
    <b>GitHub</b> : <a href="https://github.com/orgs/zagpost" target="_blank">GitHub</a>
  </p>
  <p>
    <b>Bluesky</b> : <a href="https://bsky.app/profile/zagpost.org" target="_blank">Bluesky</a>
  </p>
  <small>© 2026 zagpost.org </small>
</footer>
