const flash = {

    init: function() {
        // récupération du bouton permettant de fermer le flash message
        const buttonClose = document.querySelector('.messages__close');
        buttonClose.addEventListener('click', flash.handleCloseMessage);
    },

    /**
     * To close Flash Message
     * 
     * @param {*} evt 
     */
    handleCloseMessage: function(evt) {
        // récupération du bouton lié à l'event
        const buttonClose = evt.currentTarget;
        // récupération du parent du bouton de fermeture
        const messageBlock = buttonClose.closest(".messages");

        // suppression du message
        messageBlock.remove();
    }
}

document.addEventListener("DOMContentLoaded", flash.init);