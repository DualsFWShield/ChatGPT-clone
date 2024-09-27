// Variables pour le mode roast
let roastMode = false;

// Sélecteurs d'éléments
const messagesContainer = document.getElementById('messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const fileButton = document.getElementById('file-btn');
const fileInput = document.getElementById('file-input');
const typingIndicator = document.getElementById('typing-indicator');
const newChatButton = document.getElementById('new-chat-btn');
const gifButton = document.getElementById('gif-btn'); // Nouveau bouton pour envoyer un GIF

// Ajouter des événements sur les boutons
sendButton.addEventListener('click', sendMessage);
fileButton.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', simulateFileUpload);
newChatButton.addEventListener('click', startNewChat);
gifButton.addEventListener('click', sendGif); // Gestion du clic sur le bouton "Envoyer un GIF"

// Fonction pour envoyer un message
async function sendMessage() {
    const userMessageRaw = userInput.value.trim(); // Message original
    const userMessage = userMessageRaw.toLowerCase(); // Convertir en minuscule pour la logique

    if (userMessage !== '') {
        addMessage(userMessageRaw, 'user-message'); // Afficher le message tel quel
        userInput.value = '';
        showTypingIndicator(true);

        // Activer ou désactiver le mode roast
        if (userMessage.includes('roast')) {
            roastMode = true;
            addMessage("Oui, Mr. Roast est dans la place !", 'bot-message');
            showTypingIndicator(false); // Cacher l'indicateur de saisie après activation
            return;
        }

        // Simule une réponse du bot après un délai
        setTimeout(async () => {
            showTypingIndicator(false);
            let botResponse;

            if (userMessage.includes("docx")) {
                botResponse = await getUserInfo();
            } else if (userMessage.includes("image")) {
                botResponse = sendRandomImage();
            } else if (userMessage.includes("gif")) {
                botResponse = sendRandomGif(); // Demander explicitement un GIF
            } else if (userMessage.includes("pierre") || userMessage.includes("papier") || userMessage.includes("ciseaux")) {
                botResponse = playRockPaperScissors(userMessage);
            } else {
                botResponse = getBotResponse(userMessage);
            }

            if (botResponse) { // Vérifier si une réponse a été générée
                addMessage(botResponse, 'bot-message');

                // En mode roast, ajouter parfois un GIF
                if (roastMode && Math.random() < 0.2) { // 20% de chances d'envoyer un GIF
                    const randomGif = sendRandomGif();
                    addMessage(randomGif, 'bot-message');
                }
            }
        }, 1500);
    }
}

// Fonction pour envoyer un GIF sur demande de l'utilisateur
function sendGif() {
    const gifMessage = sendRandomGif(); // Récupère un GIF aléatoire
    addMessage(gifMessage, 'user-message'); // Affiche le GIF comme message utilisateur
    showTypingIndicator(true);

    // Simuler une réponse du bot après envoi du GIF
    setTimeout(() => {
        showTypingIndicator(false);
        const botResponse = getBotResponse('gif'); // Réponse générique après un GIF
        addMessage(botResponse, 'bot-message');
    }, 1000);
}

// Fonction pour envoyer un GIF aléatoire
function sendRandomGif() {
    const totalGifs = 20; // Nombre total de GIFs disponibles
    const randomIndex = Math.floor(Math.random() * totalGifs) + 1; // Choisit un nombre entre 1 et totalGifs
    return `<img src="gifs/G (${randomIndex}).gif" alt="Random GIF" style="max-width: 100%; height: auto;" />`;
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
    const totalImages = 378; // Remplacez par le nombre total d'images disponibles
    const randomIndex = Math.floor(Math.random() * totalImages) + 1; // Choisit un nombre entre 1 et totalImages
    const imgTag = `<img src="images/M (${randomIndex}).jpg" alt="Random Image" style="max-width: 100%; height: auto;" />`;
    return imgTag;
}

// Fonction pour récupérer les informations de l'utilisateur, y compris l'adresse IP réelle
async function getUserInfo() {
    try {
        // Récupérer l'adresse IP publique de l'utilisateur
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        const userip = ipData.ip;

        // Informations sur le navigateur et le système
        const userAgent = navigator.userAgent;
        const language = navigator.language;
        const languages = navigator.languages.join(", ");
        const onlineStatus = navigator.onLine ? "En ligne" : "Hors ligne";

        // Informations sur l'écran
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        const colorDepth = window.screen.colorDepth;

        // Informations sur l'appareil
        const deviceMemory = navigator.deviceMemory || "Non disponible";
        const hardwareConcurrency = navigator.hardwareConcurrency || "Non disponible";

        // Informations sur la batterie (Asynchrone)
        let batteryLevel = "Non disponible";
        let charging = "Non disponible";
        try {
            const battery = await navigator.getBattery();
            batteryLevel = (battery.level * 100) + "%";
            charging = battery.charging ? "En charge" : "Non en charge";
        } catch (error) {
            console.warn("Impossible de récupérer les informations de la batterie.");
        }

        // Exemple simplifié de message avec les informations de l'utilisateur
        const message = `
            <strong>Informations sur votre appareil :</strong><br/>
            - <strong>Navigateur :</strong> ${userAgent}<br/>
            - <strong>Langue :</strong> ${language}<br/>
            - <strong>Adresse IP :</strong> ${userip}<br/>
            - <strong>Langues disponibles :</strong> ${languages}<br/>
            - <strong>Statut en ligne :</strong> ${onlineStatus}<br/>
            - <strong>Résolution de l'écran :</strong> ${screenWidth}x${screenHeight}<br/>
            - <strong>Profondeur de couleur :</strong> ${colorDepth} bits<br/>
            - <strong>Mémoire de l'appareil :</strong> ${deviceMemory} GB<br/>
            - <strong>Nombre de cœurs :</strong> ${hardwareConcurrency}<br/>
            - <strong>Niveau de batterie :</strong> ${batteryLevel}<br/>
            - <strong>Statut de la batterie :</strong> ${charging}
        `;

        return message.trim();
    } catch (error) {
        console.error("Erreur lors de la récupération des informations utilisateur :", error);
        return "Impossible de récupérer les informations utilisateur.";
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

// Fonction pour récupérer la réponse du bot (gentille ou roast)
function getBotResponse(userMessage) {
    // Vérifier pour les noms spécifiques
    for (const name in window.nameResponses) {
        if (userMessage.includes(name.toLowerCase())) {
            // Réponse spécifique pour le nom
            const response = window.nameResponses[name];

            // Ajouter un message avec la réponse spécifique
            addMessage(response, 'bot-message');

            // Ajouter un GIF aléatoire après la réponse spécifique
            const randomGif = getRandomGif();
            setTimeout(() => {
                addMessage(`<img src="gifs/G (${randomGif}).gif" alt="Random GIF" style="max-width: 100%; height: auto;" />`, 'bot-message');
            }, 1000); // Attendre 1 seconde avant d'ajouter le GIF

            return ""; // Retourner une chaîne vide car le message est déjà ajouté
        }
    }

    // Vérifier les mots ou phrases clés spécifiques
    for (const key in window.specificResponses) {
        const isAlone = userMessage === key;
        const isInSentence = userMessage.includes(key);

        if (isAlone) {
            return window.specificResponses[key].alone;
        } else if (isInSentence) {
            return window.specificResponses[key].inSentence;
        }
    }

    // Réponses par défaut basées sur le mode roast ou normal
    let responseList;
    if (roastMode) {
        responseList = window.roasts;
    } else if (window.kindresponses && window.kindresponses.length > 0) {
        responseList = window.kindresponses;
    } else {
        // Fallback si kindresponses est vide
        responseList = ["Je suis là pour t'aider ! Pose-moi une question.", "Comment puis-je t'assister aujourd'hui ?"];
    }

    if (responseList.length === 0) {
        // Si la liste des réponses est vide, éviter de renvoyer un message vide
        return "Je n'ai pas de réponse à te donner pour le moment.";
    }

    const randomIndex = Math.floor(Math.random() * responseList.length);
    return responseList[randomIndex];
}

// Fonction pour simuler le téléchargement d'un fichier avec des réponses aléatoires et des aperçus
function simulateFileUpload() {
    const file = fileInput.files[0];
    if (file) {
        const fileType = file.type;
        const fileName = file.name;
        const fileCategory = getFileType(fileType);
        const responses = window.fileResponses[fileCategory] || ["Fichier reçu, mais je ne sais pas quoi en faire."];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];

        // Réponse instantanée lorsque le fichier est envoyé
        addMessage(`Fichier <strong>${fileName}</strong> reçu.`, 'user-message');

        // Afficher un aperçu ou un lien de téléchargement sur le côté utilisateur
        const reader = new FileReader();
        reader.onload = function(e) {
            let preview;
            if (fileType.startsWith('image/')) {
                preview = `<img src="${e.target.result}" alt="Aperçu de l'image" style="max-width: 100%; height: auto; margin-top: 10px;" />`;
            } else if (fileType === 'application/pdf') {
                preview = `<iframe src="${e.target.result}" style="width: 100%; height: 500px; margin-top: 10px;" frameborder="0"></iframe>`;
            } else if (
                fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
                fileType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
                fileType === 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
            ) {
                // Amélioration pour les fichiers Office
                preview = `
                    <div style="margin: 10px 0; padding: 10px; background-color: #292929; border: 1px solid #444; border-radius: 5px;">
                        <p>Aperçu non disponible pour les fichiers Office.</p>
                        <a href="${e.target.result}" download="${fileName}" style="color: #ff6347; text-decoration: underline;">Télécharger le fichier ${fileName}</a>
                    </div>
                `;
            } else {
                // Pour tous les autres types de fichiers
                preview = `
                    <div style="margin: 10px 0; padding: 10px; background-color: #292929; border: 1px solid #444; border-radius: 5px;">
                        <p>Aperçu non disponible pour ce type de fichier.</p>
                        <a href="${e.target.result}" download="${fileName}" style="color: #ff6347; text-decoration: underline;">Télécharger le fichier ${fileName}</a>
                    </div>
                `;
            }
            // Ajouter le preview ou le lien de téléchargement au côté utilisateur
            addMessage(preview, 'user-message');

            // Ajouter la réponse du bot
            setTimeout(() => {
                addMessage(randomResponse, 'bot-message');
            }, 1000); // Délai de 1 seconde avant la réponse du bot
        };
        reader.readAsDataURL(file);
    }
}

// Fonction pour obtenir le type de fichier basé sur l'extension MIME
function getFileType(fileType) {
    if (fileType.startsWith('image/')) return 'image';
    if (fileType === 'application/pdf') return 'pdf';
    if (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') return 'word';
    if (fileType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') return 'excel';
    if (fileType === 'application/vnd.openxmlformats-officedocument.presentationml.presentation') return 'powerpoint';
    return 'unknown';
}

// Fonction pour commencer un nouveau chat
function startNewChat() {
    messagesContainer.innerHTML = ''; // Vide les messages existants
    roastMode = false; // Réinitialiser le mode roast
    addMessage("Nouvelle discussion commencée.", 'bot-message');
}

// Montrer ou cacher l'indicateur de saisie
function showTypingIndicator(show) {
    typingIndicator.style.display = show ? 'block' : 'none';
}
