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

   Il ne te reste qu'à remplacer les "??? à dater" par les vraies
   dates (ou une période approximative si tu ne sais plus le jour
   exact, ex: "Automne 2023"). Réordonne les blocs si besoin,
   l'ordre du tableau = l'ordre d'affichage.
   ============================================================ */
window.TIMELINE_DATA = [
  {
    date: "6 octobre 2023",
    icon: "✨",
    title: "Le début d'une histoire",
    description: "Le soir où on s'est rencontré."
  },
  {
    date: "6 octobre 2023",
    icon: "🎮",
    title: "Premières parties ensemble",
    description: "On a commencé à traîner sur le jeu ensemble."
  },
  {
    date: "6 octobre 2023",
    icon: "🥰",
    title: "Premier compliment",
    description: "Le premier compliment que tu ma fait c'etait pour mon dessin de monsieur jack"
  },
   {
    date: "14 novembre 2023",
    icon: "💬",
    title: "Mon clone ?",
    description: "Le premier surnom qu'on s'est donné."
  },
   {
    date: "27 janvier 2024",
    icon: "🥲",
    title: "Premier moment emotion",
    description: "Se soir la, on c'etait pas parler pendant 3j et on voulait pas se quitté tellement on c'etait manquer."
  },
   {
    date: "28 janvier 2024",
    icon: "🥺",
    title: "Premier vrai surnom",
    description: "Mon chacal préferer fut le premier des nombreux surnom que tu ma donné et toi c'etait bebou"
  },
  {
    date: "6 juillet 2024",
    icon: "💥",
    title: "Première dispute",
    description: ""
  },
  {
    date: "7 juillet 2024",
    icon: "🫶",
    title: "Première réconciliation",
    description: "..."
  },
  {
    date: "24 juillet 2024",
    icon: "📞",
    title: "Premier appel",
    description: "Premiere fois que j'entender ta douce voix "
  },
  {
    date: "??? à dater",
    icon: "🤝",
    title: "Devenus amis",
    description: "..."
  },
  {
    date: "17 février 2025",
    icon: "🫂",
    title: "Meilleurs amis",
    description: "Se soir la je t'es annoncé que pour moi tu était ma meilleur amie"
  },
  {
    date: "??? à dater",
    icon: "📸",
    title: "Premier face reveal",
    description: "Sans filtre."
  },
  {
    date: "6 mai 2026",
    icon: "😳",
    title: "Premier \"je t'aime\"",
    description: "Se soir la tu a fait un craquage pour de la physique chimie, et tu ma dit je t'aime.. Sa ma fait tellement fondre et sa continue de le faire encore et encore.."
  },
  {
    date: "13 juin 2026",
    icon: "💕",
    title: "Officiellement ensemble",
    description: "Le jour où le déni a pris fin des deux cotés lors de notre premier sleepcall"
  }
];


