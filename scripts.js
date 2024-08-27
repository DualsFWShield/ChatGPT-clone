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
    "Je viens de vérifier avec mon fournisseur de réponses, mais il est en rupture de stock aujourd'hui."
];

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
    const userMessage = userInput.value.trim();
    
    if (userMessage !== '') {
        addMessage(userMessage, 'user-message');
        userInput.value = '';
        showTypingIndicator(true);

        // Simule une réponse du bot après un délai
        setTimeout(() => {
            showTypingIndicator(false);
            const botResponse = getBotResponse();
            addMessage(botResponse, 'bot-message');
        }, 1500);
    }
}

// Ajouter un message au chat
function addMessage(message, className) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.className = `message ${className}`;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;  // Scroll vers le bas pour voir le nouveau message
}

// Obtenir une réponse aléatoire du bot
function getBotResponse() {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

// Simuler le téléchargement d'un fichier
function simulateFileUpload() {
    setTimeout(() => {
        addMessage('File uploaded successfully!', 'user-message');
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
    addMessage(`Loaded conversation successfully`, 'bot-message');
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
