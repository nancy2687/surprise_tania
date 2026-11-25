document.addEventListener("DOMContentLoaded", () => {

    const contenuSurprise =
        document.getElementById("contenu-surprise");

    const messageVerrouillage =
        document.getElementById("message-verrouillage");


    // DATE ET HEURE DE DÉVERROUILLAGE
    const dateDebloquage =
        new Date("2026-12-07T12:00:00");


    // VÉRIFIER L'ACCÈS
    function verifierAcces() {

        const maintenant = new Date();

        if (maintenant >= dateDebloquage) {

            // ACCÈS AUTORISÉ
            contenuSurprise.hidden = false;

            messageVerrouillage.hidden = true;

        } else {

            // ACCÈS REFUSÉ
            contenuSurprise.hidden = true;

            messageVerrouillage.hidden = false;

        }

    }


    // VÉRIFICATION INITIALE
    verifierAcces();


    // VÉRIFICATION AUTOMATIQUE CHAQUE SECONDE
    setInterval(verifierAcces, 1000);

});
