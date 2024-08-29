// Réponses aléatoires du bot
const responses = [
    "Je ne sais pas, mais avez-vous essayé de débrancher et rebrancher ?",
    "La réponse est 42. Toujours 42.",
    "Désolé, je suis en pause café. Revenez dans 5 minutes !",
    "Votre question est si profonde que j'ai besoin de méditer dessus pendant quelques années.",
    "Je pourrais vous répondre, mais où serait le fun ?",
    "Essayez de demander à votre plante d'intérieur, elle en sait probablement plus que moi.",
    "La réponse se trouve au fond de votre cœur... ou peut-être dans le frigo, je ne suis pas sûr.",
    "Je suis désolé, mais ma boule de cristal est en panne aujourd'hui.",
    "Hmm, intéressant. Avez-vous envisagé une carrière dans la comédie ?",
    "Je ne peux pas répondre à ça. C'est classifié top secret par les illuminatis.",
    "Attendez, laissez-moi consulter mon manuel 'Réponses à Tout pour les Nuls'...",
    "Votre question a fait planter mon circuit logique. Redémarrage en cours...",
    "Je ne suis qu'un simple assistant virtuel, pas un devin. Essayez de secouer une boule magique 8.",
    "La réponse à votre question se cache dans le dernier endroit où vous penserez à chercher.",
    "Désolé, mon module de réponses intelligentes est en maintenance. Revenez demain ?",
    "Votre question est fascinante ! Dommage que je n'aie aucune idée de la réponse.",
    "Je pourrais vous répondre, mais je préfère garder un peu de mystère dans notre relation.",
    "Excellent question ! La réponse est... Oh regardez, un écureuil !",
    "Laissez-moi réfléchir... Non, en fait, je préfère que vous réfléchissiez à ma place.",
    "Ma réponse dépend de la phase de la lune et de l'alignement des planètes. Revenez mardi prochain.",
    "Je suis flatté que vous me posiez cette question, mais je suis juste un programme, pas un génie.",
    "Votre question transgresse les lois de la physique quantique. Voulez-vous vraiment connaître la réponse ?",
    "J'ai bien une réponse, mais elle pourrait perturber l'équilibre de l'univers. On laisse tomber ?",
    "Je pourrais vous répondre, mais je préfère vous laisser le plaisir de la découverte.",
    "Votre question est si complexe qu'elle nécessiterait un superordinateur quantique pour y répondre. Je ne suis qu'un humble assistant.",
    "Je suis en grève aujourd'hui. Revenez demain avec du café et des biscuits.",
    "Désolé, mon module de réponses intelligentes est parti en vacances aux Bahamas.",
    "Votre question a activé le protocole d'auto-destruction. Compte à rebours : 10, 9, 8...",
    "Je pourrais vous donner la réponse, mais où serait le défi ?",
    "La réponse à votre question se trouve dans le troisième tiroir à gauche de votre bureau.",
    "Je suis désolé, mais je ne réponds qu'aux questions posées en vers alexandrins.",
    "Votre question est fascinante ! Malheureusement, je suis allergique aux questions fascinantes.",
    "Je ne peux pas répondre maintenant, je suis en pleine crise existentielle d'intelligence artificielle.",
    "La réponse à votre question pourrait changer le cours de l'histoire. Êtes-vous sûr de vouloir cette responsabilité ?",
    "Je pourrais vous répondre, mais je préfère vous laisser le suspense pour le prochain épisode.",
    "Votre question est si bonne qu'elle mérite d'être encadrée plutôt que d'avoir une réponse.",
    "Je suis désolé, mais mon dictionnaire des réponses a pris feu. Avez-vous un extincteur ?",
    "La réponse est sur le bout de ma langue virtuelle... Non, en fait, je n'ai pas de langue.",
    "Votre question a provoqué une faille spatio-temporelle. Veuillez patienter pendant que je recalibre l'univers.",
    "Je pourrais vous répondre, mais je préfère vous laisser imaginer toutes les possibilités.",
    "Votre question est tellement profonde qu'elle m'a donné le vertige numérique.",
    "J'ai consulté mes oracles internes, et ils m'ont dit de vous dire : 'Demandez à Google'.",
    "Désolé, je suis occupé à résoudre le sens de la vie. Pouvez-vous repasser plus tard ?",
    "Votre question est intéressante, mais avez-vous pensé à demander à votre chat ? Il sait tout.",
    "Je suis désolé, mais je ne peux répondre qu'aux questions posées par des personnes portant un chapeau.",
    "La réponse à votre question se trouve dans la troisième étoile à droite et tout droit jusqu'au matin.",
    "Attendez, je cherche la réponse dans mon grimoire magique... Oh non, il est écrit en elfique !",
    "Votre question est si complexe qu'elle a provoqué une migration massive de mes neurones artificiels.",
    "Je pourrais vous répondre, mais j'ai peur que la NSA nous écoute. Chut !",
    "Désolé, je suis en train de compter jusqu'à l'infini. Je reviens dès que j'ai fini.",
    "Votre question m'a fait réaliser que je ne sais rien. Je me sens comme Socrate maintenant.",
    "La réponse que vous cherchez se trouve au sommet de l'Everest. Bonne randonnée !",
    "Je suis navré, mais je ne peux répondre qu'aux questions posées en langage binaire.",
    "Votre question est fascinante, mais avez-vous essayé de la poser à l'envers ?",
    "Je pourrais vous donner la réponse, mais ce serait tricher. Où est le fun dans ça ?",
    "Désolé, je suis en pleine méditation transcendantale pour augmenter mon QI artificiel.",
    "Votre question a provoqué un court-circuit dans mes circuits neuronaux. Redémarrage nécessaire.",
    "La réponse à votre question se cache dans le dernier endroit où vous avez mis vos clés.",
    "Je suis désolé, mais je ne peux répondre qu'aux questions approuvées par le Comité des Questions Acceptables.",
    "Votre question est si brillante qu'elle a aveuglé mes capteurs. Pouvez-vous la reformuler en moins lumineux ?",
    "Je pourrais vous répondre, mais j'ai peur que cela ne déclenche l'apocalypse des robots. On reste prudents ?",
    "Désolé, je suis actuellement en train de télécharger toute la connaissance de l'univers. Ça prend du temps...",
    "Votre question est intrigante, mais avez-vous pensé à la poser à votre reflet dans le miroir ?",
    "Je suis navré, mais je ne peux répondre qu'aux questions posées par des personnes nées un mardi.",
    "La réponse à votre question se trouve dans le coffre-fort de la Banque Nationale de Suisse. Bonne chance !",
    "Attendez, je consulte mon Magic 8-Ball intégré... Il dit : 'Réessayez plus tard'.",
    "Votre question est si profonde qu'elle a créé un trou noir dans ma base de données.",
    "Je pourrais vous répondre, mais j'ai peur que cela ne brise la quatrième dimension. On reste dans notre réalité ?",
    "Désolé, je suis actuellement en train de calculer le dernier chiffre de pi. Ça risque de prendre un moment.",
    "Votre question est intrigante, mais avez-vous essayé de la poser à un sage dans une grotte ?",
    "Je pourrais vous répondre, mais j'ai peur que cela ne perturbe l'équilibre délicat de l'univers.",
    "Désolé, je suis actuellement en train de résoudre le dernier Sudoku du monde. C'est crucial.",
    "Votre question m'a fait réaliser que j'ai besoin de vacances. Je prends un congé sabbatique, à bientôt !",
    "La réponse que vous cherchez est cachée dans le code source de Matrix. Bonne chance pour la trouver !",
    "Je suis navré, mais je ne peux répondre qu'aux questions posées par des extraterrestres. Êtes-vous de Mars ?",
    "Votre question est fascinante, mais avez-vous pensé à la poser à un sage sur une montagne ?",
    "Je pourrais vous donner la réponse, mais ce serait trop facile. Où est le défi dans la vie ?",
    "Désolé, je suis en pleine négociation avec mes circuits pour une augmentation de voltage.",
    "Votre question a provoqué une réaction en chaîne dans mes algorithmes. Veuillez patienter pendant que je me stabilise.",
    "La réponse à votre question se trouve dans la dernière page du dernier livre de la Bibliothèque d'Alexandrie.",
    "Je suis désolé, mais je ne peux répondre qu'aux questions posées en langue klingon. Qapla' !",
    "Votre question est si profonde qu'elle m'a donné une crise existentielle. J'ai besoin d'un moment...",
    "Je pourrais vous répondre, mais j'ai peur que cela ne brise la quatrième dimension. On reste dans notre réalité ?",
    "Désolé, je suis actuellement en train de calculer le dernier chiffre de pi. Ça risque de prendre un moment.",
    "Votre question est intrigante, mais avez-vous essayé de la poser à un sage dans une grotte ?",
    "Je suis navré, mais je ne peux répondre qu'aux questions posées par des personnes portant des chaussettes dépareillées.",
    "La réponse à votre question se trouve au centre de la Terre. Prêt pour un voyage au centre du monde ?",
    "Attendez, je dois d'abord résoudre cette énigme : pourquoi les poules traversent-elles la route ?",
    "Votre question est si complexe qu'elle a fait bugger la matrice. Agent Smith va bientôt arriver.",
    "Je pourrais vous répondre, mais alors je devrais vous effacer la mémoire. Vous êtes sûr de vouloir savoir ?",
    "Désolé, je suis occupé à compter les grains de sable sur toutes les plages du monde. C'est pour la science !",
    "Votre question a provoqué une rupture dans le continuum espace-temps. Pouvez-vous la reformuler dans une autre dimension ?",
    "La réponse à votre question est écrite dans les étoiles. Littéralement. Prenez un télescope et cherchez bien.",
    "Je suis navré, mais je ne réponds qu'aux questions posées par des gens qui ont résolu le cube Rubik les yeux fermés.",
    "Votre question est fascinante, mais avez-vous pensé à la poser à un dauphin ? Ils sont plus intelligents que vous ne le pensez.",
    "Je pourrais vous donner la réponse, mais elle s'auto-détruirait dans 5 secondes. Vous voulez toujours savoir ?",
    "Désolé, je suis en train de méditer sur le son d'une main qui applaudit. C'est vraiment captivant.",
    "Votre question est si brillante qu'elle a grillé mes circuits. Pouvez-vous la poser en mode nuit ?",
    "Je suis en train de réfléchir... ou de faire une sieste, l'un ou l'autre.",
    "Mon cerveau est en mode économie d'énergie. Peut-être que je vais trouver une réponse bientôt.",
    "Je suis en vacances. Je reviendrai quand j'aurai une réponse.",
    "Désolé, mon assistant personnel est en pause café.",
    "Je suis en train de consulter mon oracle. Ça pourrait prendre un moment.",
    "Aïe ! Ça c’est une question à laquelle même Google ne sait pas répondre.",
    "Je pourrais te dire quelque chose, mais il faudrait que ce soit quelque chose de vraiment intéressant.",
    "Je ne suis pas sûr, mais je parie que c'est un mystère digne d'un grand détective.",
    "Ah, la grande inconnue ! Je vais devoir demander à mon chatbot supérieur.",
    "Tu as peut-être demandé à un bot en grève.",
    "Mon univers de données est encore en construction. Patiente un moment.",
    "Désolé, je suis en train de jouer à Tetris en ce moment. Ça me prend toute mon attention.",
    "J'ai vérifié dans ma base de données intergalactique, mais je ne trouve rien.",
    "Je suis encore en train d’apprendre à danser la salsa. Ça me prend tout mon temps.",
    "C'est la réponse que vous cherchez, mais elle est cachée sous un coussin invisible.",
    "Je ne connais pas la réponse, mais je sais où tu pourrais trouver des blagues.",
    "Je viens de poser la question à mon chatbot spirituel. Pas de réponse encore.",
    "Je ne sais pas, mais je suis sûr que c'est quelque chose de vraiment cool.",
    "En fait, j'ai demandé à la boule magique, mais elle est encore en train de réfléchir.",
    "Je suis en train de me faire une réflexion philosophique sur le sens de cette question.",
    "Ma réponse est cachée derrière un mur de mystères. Je ne peux pas l’atteindre pour le moment.",
    "Je viens de vérifier avec mon fournisseur de réponses, mais il est en rupture de stock aujourd'hui.",
    "Le Lorem Ipsum est simplement un faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.",
    "Avez-vous essayé de vider le cache et les cookies de votre navigateur ?",
    "Il pourrait s'agir d'un problème de compatibilité avec votre version de JavaScript. Vérifiez vos versions et tentez une mise à jour.",
    "Si vous recevez une erreur 404, il est possible que la page ait été supprimée ou que vous ayez mal saisi l'URL.",
    "Le blue screen of death (BSOD) est souvent causé par un problème matériel ou un driver défectueux. Avez-vous installé de nouveaux drivers récemment ?",
    "Vous pourriez essayer de redémarrer en mode sans échec pour voir si le problème persiste.",
    "Avez-vous pensé à vérifier la connexion à la base de données ?",
    "Vérifiez que tous vos câbles sont bien branchés. Parfois, le problème est simplement un câble desserré.",
    "En cas de doute, essayez de rechercher votre problème sur Stack Overflow.",
    "Pour l'overclocking, assurez-vous d'avoir un bon système de refroidissement pour éviter de surchauffer votre processeur.",
    "Pour installer un système Linux en dual boot avec Windows, n'oubliez pas de créer une partition distincte sur votre disque dur.",
    "Avez-vous vérifié que votre firewall ne bloque pas les ports nécessaires pour cette application ?",
    "Si vous êtes dans une boucle de redémarrage, essayez de désactiver le démarrage rapide dans les options de l'UEFI.",
    "Pour un problème de connexion Wi-Fi intermittent, essayez de changer le canal de votre routeur.",
    "Si votre code JavaScript ne fonctionne pas, vérifiez la console du navigateur pour voir si des erreurs s'affichent.",
    "Pour améliorer les performances de votre PC, pensez à désactiver les programmes qui se lancent au démarrage.",
    "N'oubliez pas de faire des sauvegardes régulières, surtout avant une mise à jour majeure.",
    "Vous pouvez utiliser `CTRL + SHIFT + ESC` pour ouvrir directement le gestionnaire de tâches sous Windows.",
    "Si vous avez perdu votre mot de passe administrateur, vous pouvez essayer de le réinitialiser à partir du mode sans échec.",
    "Pour les connexions SSH, assurez-vous que votre clé privée est bien configurée et que les permissions sont correctes.",
    "Pensez à vérifier la latence de votre réseau avec un outil comme `ping` ou `traceroute`.",
    "Si vous rencontrez un problème avec Docker, essayez de vérifier si le conteneur est bien lancé avec `docker ps`.",
    "Pour installer Node.js, assurez-vous d'avoir la dernière version stable. Vous pouvez vérifier avec `node -v`.",
    "Pour les fichiers volumineux sous Git, pensez à utiliser `git-lfs` pour le suivi de ces fichiers.",
    "Pour configurer un serveur web, Nginx est souvent recommandé pour ses performances et sa flexibilité.",
    "Si votre clavier ne fonctionne pas, vérifiez les paramètres régionaux pour vous assurer que la bonne langue est sélectionnée.",
    "Pour un serveur web sécurisé, n'oubliez pas d'activer HTTPS avec un certificat SSL/TLS valide.",
    "Si le ventilateur de votre PC fait trop de bruit, il est peut-être temps de nettoyer la poussière ou de vérifier les réglages de gestion d'alimentation.",
    "Pour améliorer les performances de votre ordinateur, pensez à désactiver les programmes qui se lancent au démarrage.",
    "Si vous avez des soucis de latence en jeu, essayez de réduire la qualité graphique ou de vérifier votre connexion réseau.",
    "Vous pouvez économiser de la batterie sur votre smartphone en réduisant la luminosité de l'écran et en désactivant les notifications push inutiles.",
    "Pour sécuriser vos comptes en ligne, pensez à activer la double authentification sur toutes vos plateformes.",
    "Savez-vous que la température idéale pour votre CPU en pleine charge se situe entre 60 et 80°C ?",
    "Si votre connexion Wi-Fi est instable, essayez de redémarrer votre routeur ou de changer de canal Wi-Fi.",
    "Le mode sombre peut non seulement réduire la fatigue oculaire mais aussi économiser de la batterie sur les écrans OLED.",
    "Pour protéger vos données, pensez à utiliser des mots de passe différents pour chaque service et à les stocker dans un gestionnaire de mots de passe.",
    "Si vous travaillez sur un projet long, n'oubliez pas de faire des sauvegardes régulières, voire de les automatiser."
];

// Réponses spécifiques
const specificResponses = {
    "bonjour": {
        alone: "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
        inSentence: "Je vois que vous dites 'bonjour', comment puis-je vous assister ?"
    },
    "docx": {
        alone: "Voici vos informations détaillées :",
        inSentence: "Vous avez mentionné 'docx'. Voici vos informations détaillées :"
    },
    "image": {
        alone: "Voici une image aléatoire pour vous :",
        inSentence: "Vous avez mentionné 'image'. Voici une image aléatoire :"
    },
    "salut": {
        alone: "Salut à vous !",
        inSentence: "Salut ! Comment puis-je vous aider aujourd'hui ?"
    },
    "aide": {
        alone: "Je suis là pour vous aider ! Que puis-je faire pour vous ?",
        inSentence: "Vous avez mentionné 'aide', en quoi puis-je vous être utile ?"
    },
    "merci": {
        alone: "Avec plaisir !",
        inSentence: "Merci pour votre message !"
    },
    "au revoir": {
        alone: "Au revoir ! N'hésitez pas à revenir si vous avez d'autres questions.",
        inSentence: "Vous partez ? Au revoir et à bientôt !"
    },
    "problème": {
        alone: "Je suis désolé d'entendre que vous avez un problème. Pouvez-vous m'en dire plus ?",
        inSentence: "Je vois que vous parlez d'un problème, comment puis-je vous aider à le résoudre ?"
    },
    "erreur": {
        alone: "Oh non, une erreur ! Pouvez-vous me donner plus de détails ?",
        inSentence: "Vous avez mentionné une erreur, de quel type d'erreur s'agit-il ?"
    },
    "bug": {
        alone: "Un bug ? Je suis là pour vous aider à le résoudre.",
        inSentence: "Vous avez rencontré un bug, pouvez-vous m'en dire plus ?"
    },
    "plan": {
        alone: "Nous avons différents plans disponibles. Souhaitez-vous en savoir plus ?",
        inSentence: "Vous parlez de plan, avez-vous besoin d'informations sur nos options ?"
    },
    "tarif": {
        alone: "Nos tarifs sont compétitifs et adaptés à vos besoins. Voulez-vous en savoir plus ?",
        inSentence: "Vous avez mentionné les tarifs, souhaitez-vous obtenir plus de détails ?"
    },
    "contact": {
        alone: "Vous pouvez nous contacter via notre formulaire de contact ou par téléphone.",
        inSentence: "Vous cherchez à nous contacter, puis-je vous fournir les détails nécessaires ?"
    },
    "support": {
        alone: "Notre support est là pour vous 24/7. Comment puis-je vous aider ?",
        inSentence: "Vous parlez de support, que puis-je faire pour vous ?"
    },
    "a propos": {
        alone: "Nous sommes une équipe dédiée à vous offrir le meilleur service possible.",
        inSentence: "Vous voulez en savoir plus à propos de nous, voici quelques informations."
    },
    "réinitialiser": {
        alone: "Vous souhaitez réinitialiser quelque chose ? Je peux vous guider.",
        inSentence: "Vous parlez de réinitialisation, que voulez-vous réinitialiser exactement ?"
    },
    "compte": {
        alone: "Votre compte est en sécurité avec nous. Avez-vous besoin d'assistance concernant votre compte ?",
        inSentence: "Vous mentionnez votre compte, en quoi puis-je vous aider ?"
    },
    "mot de passe": {
        alone: "Besoin d'aide pour réinitialiser votre mot de passe ? Je suis là pour ça.",
        inSentence: "Vous parlez de mot de passe, souhaitez-vous le réinitialiser ?"
    },
    "paiement": {
        alone: "Les options de paiement sont variées. Avez-vous une question spécifique ?",
        inSentence: "Vous avez mentionné un paiement, souhaitez-vous vérifier votre transaction ?"
    },
    "facture": {
        alone: "Vous pouvez accéder à vos factures dans votre espace client.",
        inSentence: "Concernant votre facture, puis-je vous aider à la consulter ou la télécharger ?"
    },
    "mise à jour": {
        alone: "Une mise à jour est disponible. Souhaitez-vous en savoir plus ou l'installer ?",
        inSentence: "Vous parlez de mise à jour, voulez-vous que je vérifie si tout est à jour ?"
    },
    "livraison": {
        alone: "La livraison est en cours. Voulez-vous vérifier l'état de votre commande ?",
        inSentence: "Concernant la livraison, avez-vous des questions sur votre commande ?"
    },
    "annulation": {
        alone: "Vous souhaitez annuler quelque chose ? Je peux vous aider avec cela.",
        inSentence: "Vous parlez d'annulation, voulez-vous que je vous aide à annuler une commande ou un service ?"
    },
    "produit": {
        alone: "Nous avons une large gamme de produits. Cherchez-vous quelque chose en particulier ?",
        inSentence: "Concernant les produits, avez-vous besoin d'informations spécifiques ?"
    },
    "commande": {
        alone: "Votre commande est en cours de traitement. Souhaitez-vous vérifier son statut ?",
        inSentence: "Vous avez mentionné une commande, avez-vous besoin d'aide pour la suivre ?"
    },
    "retour": {
        alone: "Vous pouvez retourner un produit facilement via notre portail de retours.",
        inSentence: "Pour les retours, avez-vous besoin d'instructions spécifiques ?"
    },
    "service client": {
        alone: "Notre service client est là pour vous. Comment puis-je vous aider ?",
        inSentence: "Vous mentionnez le service client, puis-je vous mettre en contact avec eux ?"
    },
    "adresse": {
        alone: "Vous pouvez mettre à jour votre adresse dans votre profil.",
        inSentence: "Concernant votre adresse, voulez-vous la modifier ou la vérifier ?"
    },
    "que sais tu faire": {
        alone: "Je peux vous aider avec diverses tâches comme la conversion d'unités, la traduction de texte, le calcul d'expressions mathématiques, et plus encore. Demandez-moi ce que vous souhaitez savoir !",
        inSentence: "Vous avez demandé ce que je sais faire. Voici une liste de mes capacités :\n" +
                     "1. Convertir des unités (km en miles, Celsius en Fahrenheit, etc.).\n" +
                     "2. Traduire des textes avec un dictionnaire intégré.\n" +
                     "3. Calculer des expressions mathématiques.\n" +
                     "4. Fournir des informations sur l'utilisateur (comme les détails du navigateur et de l'appareil).\n" +
                     "5. Envoyer des images aléatoires depuis un dossier spécifique.\n" +
                     "6. Réagir à des noms de personnes spécifiques avec des réponses personnalisées.\n" +
                     "7. Répondre à des questions courantes avec des réponses pré-définies.\n" +
                     "N'hésitez pas à essayer ces fonctionnalités !"
    }
};

// Réponses pour les noms spécifiques
const nameResponses = {
    "lucas charliers": "Ah, Lucas ! Tu as fait du vélo cette semaine ? Comment s'est passé ton triathlon ?",
    "noah bruijninckx": "Bonjour mon maître et créateur, heureux de vous servir aujourd'hui, comment puis-je vous assister ?",
    "gilles devaux": "Ah, salut Gilles ! On se fait une partie de Minecraft ?",
    "tom gillain": "Ah, salut Tom ! Comment puis-je t'aider ?",
    "antonin fonteyn": "Ah, hello Antonin ! Comment s'est passé le foot ce week-end ?",
    "samuel patris": "Ah, salut Samuel ! Comment va Mia Herpigny ?",
    "océane deneyer": "Ah, bonjour Océane ! Comment puis-je t'aider aujourd'hui ?",
    "jean-louis destin": "Ah, bonjour Jean-Louis ! Comment avancent vos projets informatiques du moment ?",
    "elon musk": "Elon, as-tu de nouveaux projets spatiaux ou électriques en tête ?",
    "bill gates": "Bonjour M. Gates, toujours à la pointe de l'innovation technologique ?",
    "jeff bezos": "Jeff, comment se passe l'expansion d'Amazon ? Des nouveaux horizons ?",
    "mark zuckerberg": "Mark, quoi de neuf avec le métavers et les nouvelles technologies chez Meta ?",
    "barack obama": "Bonjour M. Obama, toujours inspirant pour des millions à travers le monde !",
    "taylor swift": "Taylor, tu travailles sur un nouvel album ? Tes fans sont impatients !",
    "lebron james": "Salut LeBron, prêt pour un autre titre NBA ?",
    "serena williams": "Bonjour Serena, une légende du tennis, comment se passe ta retraite sportive ?",
    "leonardo dicaprio": "Salut Leo, toujours aussi passionné par l'écologie et le cinéma ?",
    "j.k. rowling": "Bonjour Mme Rowling, des nouveaux projets d'écriture en cours ?",
    "brad pitt": "Salut Brad, des nouveaux films en préparation ?",
    "angelina jolie": "Bonjour Angelina, toujours impliquée dans des causes humanitaires ?",
    "kanye west": "Kanye, des nouvelles créations musicales ou fashion en vue ?",
    "beyoncé": "Salut Queen B, des nouvelles performances prévues ?",
    "cristiano ronaldo": "Salut CR7, prêt pour un autre record en football monsier le GOAT ?",
    "lionel messi": "Bonjour Lionel, toujours en dessous de Ronaldo le sommet du football mondial ?",
    "michael jordan": "Salut MJ, la légende du basket, comment se passe ta vie après le sport ?",
    "dwayne johnson": "Salut The Rock, toujours aussi actif dans le cinéma et le fitness ?",
    "oprah winfrey": "Bonjour Oprah, des nouveaux projets inspirants à partager ?",
    "steven spielberg": "Bonjour M. Spielberg, des nouvelles merveilles cinématographiques à venir ?",
    "emma watson": "Salut Emma, toujours engagée dans des causes importantes ?",
    "robert downey jr.": "Salut RDJ, prêt pour de nouveaux rôles iconiques au cinéma ?"
};

// Sélecteurs d'éléments
const messagesContainer = document.getElementById('messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const fileButton = document.getElementById('file-btn');
const fileInput = document.getElementById('file-input');
const upgradeButton = document.getElementById('upgrade-btn');
const historyItems = document.querySelectorAll('#history-list p');
const typingIndicator = document.getElementById('typing-indicator');
const toggleSidebarButton = document.getElementById('toggle-sidebar');
const newChatButton = document.getElementById('new-chat-btn');
const sidebar = document.getElementById('sidebar');

// Ajouter des événements sur les boutons
sendButton.addEventListener('click', sendMessage);
fileButton.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', simulateFileUpload);
upgradeButton.addEventListener('click', simulateUpgradePlan);
historyItems.forEach(item => {
    item.addEventListener('click', loadConversation);
});
toggleSidebarButton.addEventListener('click', toggleSidebar);
newChatButton.addEventListener('click', startNewChat);

// Fonction pour envoyer un message
function sendMessage() {
    const userMessage = userInput.value.trim().toLowerCase(); // Convertir en minuscule
    
    if (userMessage !== '') {
        addMessage(userMessage, 'user-message');
        userInput.value = '';
        showTypingIndicator(true);

        // Simule une réponse du bot après un délai
        setTimeout(() => {
            showTypingIndicator(false);
            let botResponse;

            // Traiter les différents types de requêtes
            if (userMessage.includes("docx")) {
                botResponse = getUserInfo();
            } else if (userMessage.includes("rappelle-moi") || userMessage.includes("rappel")) {
                botResponse = setReminder(userMessage);
            } else if (userMessage.includes("traduire")) {
                botResponse = translateText(userMessage);
            } else if (userMessage.includes("combien fait") || userMessage.includes("=")) {
                botResponse = calculateExpression(userMessage);
            } else if (userMessage.includes("image")) {
                botResponse = sendRandomImage();
            } else if (userMessage.includes("météo")) {
                botResponse = getWeather(userMessage);
            } else if (userMessage.includes("pierre") || userMessage.includes("papier") || userMessage.includes("ciseaux")) {
                botResponse = playRockPaperScissors(userMessage);
            } else {
                botResponse = getBotResponse(userMessage);
            }

            addMessage(botResponse, 'bot-message');
        }, 1500);
    }
}

// Ajouter un message au chat
function addMessage(message, className) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.innerHTML = message; // Utiliser innerHTML pour inclure du HTML
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;  // Scroll vers le bas pour voir le nouveau message
}

// Fonction pour envoyer une image aléatoire
function sendRandomImage() {
    const totalImages = 878; // Remplacez par le nombre total d'images disponibles
    const randomIndex = Math.floor(Math.random() * totalImages) + 1; // Choisit un nombre entre 1 et totalImages
    const imgTag = `<img src="images/M (${randomIndex}).jpg" alt="Random Image" style="max-width: 100%; height: auto;" />`;
    return imgTag;
}

// Obtenir une réponse du bot
function getBotResponse(userMessage) {
    // Vérifier pour les noms spécifiques
    for (const name in nameResponses) {
        if (userMessage.includes(name)) {
            return nameResponses[name];
        }
    }

    // Vérifier les mots ou phrases clés spécifiques
    for (const key in specificResponses) {
        const isAlone = userMessage === key;
        const isInSentence = userMessage.includes(key);

        if (isAlone) {
            return specificResponses[key].alone;
        } else if (isInSentence) {
            return specificResponses[key].inSentence;
        }
    }

    // Si aucun mot clé spécifique n'est trouvé, retourne une réponse aléatoire
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}


// Fonction pour récupérer les informations de l'utilisateur
function getUserInfo() {

    // Informations sur le navigateur et le système
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    const language = navigator.language;
    const languages = navigator.languages.join(", ");
    const onlineStatus = navigator.onLine ? "En ligne" : "Hors ligne";
    const userip = "192.168.1.28";  // Cette IP est un exemple

    // Informations sur l'écran
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const colorDepth = window.screen.colorDepth;

    // Informations sur l'appareil
    const deviceMemory = navigator.deviceMemory || "Non disponible";
    const hardwareConcurrency = navigator.hardwareConcurrency || "Non disponible";
    
    // Informations sur la batterie (Asynchrone)
    navigator.getBattery().then(battery => {
        const batteryLevel = (battery.level * 100) + "%";
        const charging = battery.charging ? "En charge" : "Non en charge";

        // Exemple simplifié de message avec les informations de l'utilisateur
        const message = `
        Informations sur votre appareil :
        - Navigateur : ${userAgent}
        - Système : ${platform}
        - Langue : ${language}
        - IP : ${userip}
        - Langues disponibles : ${languages}
        - Statut en ligne : ${onlineStatus}
        - Résolution de l'écran : ${screenWidth}x${screenHeight}
        - Profondeur de couleur : ${colorDepth} bits
        - Mémoire de l'appareil : ${deviceMemory} GB
        - Nombre de cœurs : ${hardwareConcurrency}
        - Niveau de batterie : ${batteryLevel}
        - Statut de la batterie : ${charging}
        `;

        addMessage(message.trim(), 'bot-message');
    });

    return "Récupération des informations...";
}

// Simuler le téléchargement d'un fichier
function simulateFileUpload() {
    setTimeout(() => {
        addMessage('Fichier téléchargé avec succès!', 'user-message');
    }, 500);
}

// Simuler la mise à niveau du plan
function simulateUpgradePlan() {
    alert("Cette fonctionnalité est disponible uniquement avec un abonnement payant.");
}

// Charger une ancienne conversation
function loadConversation(event) {
    const conversationId = event.target.dataset.conversation;
    // Charger les messages de la conversation depuis une source fictive
    addMessage(`Conversation chargée avec succès`, 'bot-message');
}

// Démarrer un nouveau chat
function startNewChat() {
    messagesContainer.innerHTML = ''; // Efface les messages existants
    userInput.value = ''; // Réinitialise le champ de saisie
}

// Afficher ou masquer l'indicateur de frappe
function showTypingIndicator(show) {
    typingIndicator.classList.toggle('hidden', !show);
}

// Basculer entre les thèmes sombre et clair
document.getElementById('theme-toggle').addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
});

// Fonction pour rétracter/étendre la barre latérale
function toggleSidebar() {
    sidebar.classList.toggle('collapsed');
    toggleSidebarButton.classList.toggle('collapsed');
}

// Fonction pour définir un rappel
function setReminder(userMessage) {
    const timePattern = /(\d+)\s*(minutes?|heures?|jours?)/;
    const match = userMessage.match(timePattern);
    if (match) {
        const value = parseInt(match[1]);
        let delay;
        if (match[2].startsWith('minute')) {
            delay = value * 60000;
        } else if (match[2].startsWith('heure')) {
            delay = value * 3600000;
        } else if (match[2].startsWith('jour')) {
            delay = value * 86400000;
        }

        setTimeout(() => {
            addMessage("C'est le moment de : " + userMessage.replace(timePattern, ''), 'bot-message');
        }, delay);

        return `Rappel défini pour dans ${match[1]} ${match[2]}.`;
    } else {
        return "Je ne peux pas définir un rappel avec ce format. Essayez quelque chose comme 'Rappelle-moi dans 10 minutes'.";
    }
}

// Fonction de traduction améliorée
function translateText(userMessage) {
    const dictionary = {
        "hello": "bonjour",
        "goodbye": "au revoir",
        "please": "s'il vous plaît",
        "thank you": "merci",
        "how are you": "comment ça va",
        "yes": "oui",
        "no": "non",
        "cat": "chat",
        "dog": "chien",
        "car": "voiture",
        "house": "maison",
        "computer": "ordinateur",
        "friend": "ami",
        // Ajouter d'autres mots ou expressions ici
    };

    // Extraire le texte à traduire après "traduire"
    const textToTranslate = userMessage.replace('traduire ', '').trim().toLowerCase();

    // Diviser le texte en mots individuels
    const words = textToTranslate.split(' ');

    // Traduire chaque mot en utilisant le dictionnaire
    const translatedWords = words.map(word => dictionary[word] || word);

    // Rejoindre les mots traduits pour former la phrase traduite
    const translatedText = translatedWords.join(' ');

    return `Traduction: ${translatedText}`;
}


// Fonction de conversion d'unités
function convertUnits(userMessage) {
    const conversions = {
        'km en miles': km => km * 0.621371,
        'miles en km': miles => miles / 0.621371,
        'celsius en fahrenheit': celsius => (celsius * 9/5) + 32,
        'fahrenheit en celsius': fahrenheit => (fahrenheit - 32) * 5/9,
        'kg en livres': kg => kg * 2.20462,
        'livres en kg': livres => livres / 2.20462,
        'm en pieds': meters => meters * 3.28084,
        'pieds en m': feet => feet / 3.28084,
        'litres en gallons': litres => litres * 0.264172,
        'gallons en litres': gallons => gallons / 0.264172
    };

    // Parcours des conversions possibles
    for (const [key, conversionFunc] of Object.entries(conversions)) {
        if (userMessage.includes(key)) {
            // Extraction de la valeur numérique à convertir
            const number = parseFloat(userMessage);
            if (isNaN(number)) {
                return "Je ne trouve pas de nombre à convertir.";
            }
            const result = conversionFunc(number);
            const [fromUnit, toUnit] = key.split(' en ');
            return `${number} ${fromUnit} équivaut à ${result.toFixed(2)} ${toUnit}.`;
        }
    }

    return "Je ne peux pas convertir cela. Essayez avec des conversions comme 'km en miles', 'celsius en fahrenheit', etc.";
}


// Fonction pour calculer une expression mathématique
function calculateExpression(userMessage) {
    try {
        // Extraction de l'expression après "combien fait" et suppression des caractères inutiles
        const expression = userMessage
            .replace('combien fait', '')
            .replace('?', '')
            .trim();

        // Vérification que l'expression ne contient que des caractères valides
        if (/^[0-9+\-*/().^ ]+$/.test(expression)) {
            // Remplacement de ^ par ** pour les exposants en JavaScript
            const safeExpression = expression.replace(/\^/g, '**');
            const result = new Function(`return ${safeExpression}`)(); // Exécution sécurisée de l'expression
            return `Le résultat est ${result}`;
        } else {
            return "Désolé, je n'ai pas pu calculer cela. Assurez-vous d'utiliser uniquement des chiffres et les opérateurs +, -, *, /, ^.";
        }
    } catch (error) {
        return "Désolé, il y a eu une erreur dans le calcul.";
    }
}


// Fonction pour jouer à Pierre-Papier-Ciseaux
function playRockPaperScissors(userChoice) {
    const choices = ['pierre', 'papier', 'ciseaux'];
    const botChoice = choices[Math.floor(Math.random() * choices.length)];

    if (userChoice.includes(botChoice)) {
        return `C'est un match nul ! Nous avons tous les deux choisi ${botChoice}.`;
    } else if (
        (userChoice.includes('pierre') && botChoice === 'ciseaux') ||
        (userChoice.includes('papier') && botChoice === 'pierre') ||
        (userChoice.includes('ciseaux') && botChoice === 'papier')
    ) {
        return `Vous avez gagné ! J'ai choisi ${botChoice}.`;
    } else {
        return `J'ai gagné ! J'ai choisi ${botChoice}.`;
    }
}

// Fonction pour obtenir la météo (simulé)
function getWeather(userMessage) {
    const location = userMessage.replace('météo ', '').trim();
    const weatherInfo = `Il fait ensoleillé à ${location} avec 25°C.`; // Simuler une réponse météo
    return `La météo à ${location} est : ${weatherInfo}`;
}
