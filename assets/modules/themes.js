const themes = {

    init: function() {
        // récupération du bouton permettant de changer le thème
        const switchButton = document.querySelector(".control");
        switchButton.addEventListener("click", themes.handleSwitchTheme);
    },

    /**
     * To switch theme (dark<<>>light)
     * 
     * @param {*} evt 
     */
    handleSwitchTheme: function(evt) {
        const switchButton = evt.currentTarget;

        // changement de la classe en fonction de la valeur de la data
        if(document.body.className == "shadow") {
            // light theme
            switchButton.classList.remove("control__black");
            // création d'un cookie (bouton pour switcher de theme)
            document.cookie = 'Control=';

            // suppression du black theme
            document.body.classList.remove("shadow");
            document.body.classList.add("light");

            // création d'un cookie (theme sur l'ensemble du doc)
            document.cookie = 'Theme=light';
        } else {
            // black theme
            switchButton.classList.add("control__black");
            // création d'un cookie (bouton pour switcher de theme)
            document.cookie = 'Control=control__black';

            document.body.classList.remove("light");
            // ajout du black theme
            document.body.classList.add("shadow");

            // création d'un cookie (theme sur l'ensemble du doc)
            document.cookie = 'Theme=shadow';
        }
    },

    /**
     * Charge le thème choisi à la précédente visite et stocké dans des cookies
     */
    handleLoadTemplate : function()
    {
        // récupération bouton pour switcher de theme
        const switchButton = document.querySelector(".control");

        const cookies = document.cookie.split('; ');
        const buttonTheme = cookies[1].replace("Control=", "");
        const bodyTheme = cookies[2].replace("Theme=", "");

        const isCookie = document.cookie.indexOf( "Theme=" );
        if( isCookie >= 0){
            if(buttonTheme === "") {
                switchButton.classList.remove("control__black");  
            } else {
                switchButton.classList.add("control__black");  
            }
            document.body.className = bodyTheme;
        }
    },
}

document.addEventListener("DOMContentLoaded", themes.init);
document.addEventListener('DOMContentLoaded', themes.handleLoadTemplate);