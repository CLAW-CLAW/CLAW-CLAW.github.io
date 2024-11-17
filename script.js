// Récupérez le nom de fichier de la page actuelle
const currentPage = window.location.href;

// Liste des pages et des IDs correspondants
const pageLinks = {
    "index.html": "home-link",
    "services.html": "services-link",
    "competences.html": "competences-link",
    "parcours.html": "parcours-link",
    "experiences.html": "experiences-link",
    "contacts.html": "contacts-link"
};

// Parcourez les pages et ajoutez la classe "active" au lien correspondant
for (const [page, linkId] of Object.entries(pageLinks)) {
    if (currentPage.includes(page)) {
        document.getElementById(linkId).classList.add("active");
        break; // Arrête la boucle une fois que la bonne page est trouvée
    }
}

// Récupérer tous les liens du menu
const menuLinks = document.querySelectorAll('nav a');

// Fonction pour changer la couleur du lien actif
function setActiveLink() {
    // Supprimer la classe "active" de tous les liens
    menuLinks.forEach(link => link.classList.remove('active'));

    // Ajouter la classe "active" au lien sur lequel l'utilisateur a cliqué
    this.classList.add('active');
}

// Ajouter un événement click à chaque lien
menuLinks.forEach(link => {
    link.addEventListener('click', setActiveLink);
});


