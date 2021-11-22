const themes = {

    init: function() {

        const switchButton = document.querySelector(".control");
        switchButton.addEventListener("click", themes.handleSwitchTheme);
    },


    handleSwitchTheme: function(evt) {
        const switchButton = evt.currentTarget;

        const switchIcon = switchButton.querySelector("svg");

        // changement de la classe en fonction de la valeur de la data
        if(switchIcon.dataset.prefix === "far") {
            // light theme
            switchIcon.dataset.prefix = "fas";
            switchButton.classList.remove("control__black");

            // suppression du black theme
            document.body.classList.remove("shadow");
        } else {
            // black theme
            switchIcon.dataset.prefix = "far";
            switchButton.classList.add("control__black");

            // ajout du black theme
            document.body.classList.add("shadow");
        }
    }
}

document.addEventListener("DOMContentLoaded", themes.init);