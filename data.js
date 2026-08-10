/* ============================================================
   DATA.JS — le seul fichier à toucher pour ajouter un mois
   ============================================================

   Pour ajouter un nouveau mois (ex: le 2 mois, 13 août) :
   1. Copie le bloc du dernier mois dans le tableau MONTHS
   2. Change "number", "dateRange", le thème, le poème, les photos
   3. C'est tout — index.html s'occupe du reste automatiquement.

   Le thème ("theme") = 2 couleurs en RGB "r,g,b" (sans "rgb()")
   qui redécorent le titre, le compteur et les accents de la page.
   Choisis-les selon ce qu'elle kiffe / le thème du mois.
   ============================================================ */

window.SITE_DATA = {
  startDate: "2026-06-13", // date où vous êtes devenus officiellement ensemble

  months: [
    {
      number: 1,
      dateRange: "13 juin → 13 juillet 2026",
      subtitle: "d'amour et de bonheur",
      counterSub: "Le premier de plein d'autres ❤",
      theme: {
        c1: "210,100,150",   // rose principal
        c2: "160,90,210",    // violet secondaire
        glow: "120,20,80"    // lueur de fond
      },
      flowerType: "lys", // forme des fleurs déco : "lys" ou "tulipe"
      petals: ["🌸", "🌺", "🌸", "🌷", "🌸", "🌺", "🌸", "🌷", "🌸", "🌺", "🌸", "🌷"],
      poem: [
        {
          lines: [
            "T'étais déjà là bien avant le premier mot,",
            "Mon amie, ma confidente, mon tout.",
            "On riait, on parlait, sans même le savoir,",
            "Qu'on construisait quelque chose, doucement, le soir."
          ]
        },
        {
          special: true,
          lines: [
            "Et puis un soir, sans qu'on s'y attende,",
            "T'es devenue la fille que j'attendais."
          ]
        },
        {
          lines: [
            "T'es belle sans le savoir, naturelle et vraie,",
            "Pas besoin de masque pour que tu m'éblouisses.",
            "Juste toi, comme t'es, et c'est déjà parfait,",
            "Ta façon d'être unique qui me rend complice."
          ]
        },
        {
          lines: [
            "Je sais que la distance nous sépare,",
            "Que les kilomètres pèsent parfois trop lourd.",
            "Mais mon cœur, lui, il reste avec toi chaque jour,",
            "Et aucune route ne peut effacer mon amour."
          ]
        },
        {
          special: true,
          lines: [
            "Douce, drôle, forte à ta façon,",
            "T'es ma reine, ma fleur, ma raison."
          ]
        },
        {
          lines: [
            "Alors ce soir, pour notre premier mois,",
            "Je voulais juste que tu saches une chose :",
            "Que même de loin, je pense encore à toi,",
            "Et que je t'aime, follement, comme une rose."
          ]
        },
        {
          special: true,
          lines: [
            "Et moi je suis là, de loin je veille,",
            "Follement amoureux de ma merveille."
          ]
        }
      ],
      secretMessage: "Peu importe la distance,<br>il y aura toujours un endroit<br>où je penserai à toi. ❤",
      photos: [] // pas de photo pour le mois 1
    },

    // ── TODO : mois 2 (13 août 2026) ─────────────────────────
    // Tu me redonnes ce fichier après votre journée du 24 août
    // et je remplis le poème + les photos avec toi.
    {
      number: 2,
      dateRange: "13 juillet → 13 août 2026",
      subtitle: "et ça continue de grandir",
      counterSub: "À compléter avec toi",
      theme: {
        c1: "215,45,55",    // rouge tulipe
        c2: "225,150,60",   // doré chaud, en accord avec le rouge
        glow: "130,15,25"   // lueur rouge profond
      },
      flowerType: "tulipe",
      petals: ["🌷", "🌷", "🌹", "🌷", "🌷", "🌹", "🌷", "🌷", "🌷", "🌹", "🌷", "🌷"],
      poem: [
        {
          lines: [
            "( à écrire — nouveau poème pour le 2 mois )"
          ]
        }
      ],
      secretMessage: "( petit mot secret du 2 mois à écrire )",
      photos: []
    }
  ]
};

/* ============================================================
   CHRONOLOGIE — les grandes étapes de votre histoire
   Affichée sur chronologie.html

   POUR ALLER VITE (en retraçant vos messages Discord) :
   Duplique le bloc { ... } ci-dessous pour chaque souvenir,
   colle-le dans le tableau, et change juste date / title / description.
   Garde l'ordre chronologique (du plus ancien en haut au plus récent).

   Icônes toutes prêtes selon le type de moment :
   💬 premier message     ✨ la rencontre         😂 premier fou rire
   🎮 première session     📞 premier appel        🤝 devenus amis
   😳 premier "je t'aime"  💕 officiellement ensemble   🎁 premier cadeau
   ✈️ premiere rencontre IRL   📸 premières photos ensemble   🎂 anniversaire
   ============================================================ */
window.TIMELINE_DATA = [
  {
    date: "6 octobre 2023",
    icon: "✨",
    title: "Le debut d'une histoire,
    description: "Le soir ou on c'est rencontrer"
  },
  {
    date: "14 novembre 2023",
    icon: "💕",
    title: "Mon clone ?",
    description: "Le premier surnom qu'on c'est donné"
  },
  {
    date: "13 juin 2026",
    icon: "💕",
    title: "Officiellement ensemble",
    description: "Le jour où c'est devenu officiel."
  }
  // ↓ colle un bloc comme celui-ci par souvenir, virgule après chaque bloc sauf le dernier
  // ,{
  //   date: "Mars 2026",
  //   icon: "💬",
  //   title: "Premier message",
  //   description: "..."
  // }
];

