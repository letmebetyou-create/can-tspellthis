// =================================
// BET YOU CAN'T SPELL THIS
// Interactions
// =================================


// =================================
// Interaction Settings
// =================================

const INTERACTION = {

    ClickDelay: 120

};



// =================================
// Make Interactive
// =================================

function makeInteractive(
    element,
    callback,
    style = "menu"
) {


    if (!element) {

        return;

    }


    const originalText =
        element.textContent.trim();


    element.style.cursor = "pointer";


    // =================================
    // Hover
    // =================================

    element.addEventListener("mouseenter", function () {

        element.style.fontWeight = "bold";


        switch (style) {


            case "menu":

            case "button":

                element.textContent =
                    "> " +
                    originalText;

                break;


            case "arrow":

                element.textContent =
                    originalText;

                break;

        }


    });


    // =================================
    // Leave
    // =================================

    element.addEventListener("mouseleave", function () {

        element.style.fontWeight =
            "normal";


        element.textContent =
            originalText;

    });


    // =================================
    // Mouse Down
    // =================================

    element.addEventListener("mousedown", function () {

        element.style.fontWeight =
            "bold";


        switch (style) {


            case "menu":

            case "button":

                element.textContent =
                    "> " +
                    originalText +
                    " <";

                break;


            case "arrow":

                element.textContent =
                    originalText;

                break;

        }


    });


    // =================================
    // Click
    // =================================

    element.addEventListener("click", function () {

        setTimeout(function () {

            callback();

        }, INTERACTION.ClickDelay);

    });


}
