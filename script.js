// Récupérer tous les liens du menu
const menuLinks = document.querySelectorAll('nav a');

// Fonction pour définir le lien actif
function setActiveLink() {
    // Récupérer le chemin de l'URL actuelle (par exemple "parcours.html")
    const currentPage = window.location.pathname.split("/").pop();

    // Parcourir tous les liens pour trouver celui qui correspond au chemin actuel
    menuLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active'); // Ajouter la classe "active" au lien correspondant
        } else {
            link.classList.remove('active'); // Supprimer la classe "active" des autres liens
        }
    });
}

// Appeler la fonction pour définir le lien actif
setActiveLink();
