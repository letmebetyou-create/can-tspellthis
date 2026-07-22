// =================================
// BET YOU CAN'T SPELL THIS
// Interactions
// =================================


// =================================
// Interaction Settings
// =================================

const INTERACTION = {

    HoverPrefix: "> ",

    HoverSuffix: "",

    ClickPrefix: "> ",

    ClickSuffix: " <",

    ClickDelay: 120

};



// =================================
// Make Interactive
// =================================

function makeInteractive(element, callback) {


    if (!element) {

        return;

    }


    const originalText =
        element.textContent.trim();


    element.style.cursor = "pointer";


    element.addEventListener("mouseenter", function () {

        element.textContent =
            INTERACTION.HoverPrefix +
            originalText +
            INTERACTION.HoverSuffix;

    });


    element.addEventListener("mouseleave", function () {

        element.textContent =
            originalText;

        element.style.fontWeight =
            "normal";

    });


    element.addEventListener("mousedown", function () {

        element.textContent =
            INTERACTION.ClickPrefix +
            originalText +
            INTERACTION.ClickSuffix;

        element.style.fontWeight =
            "bold";

    });


    element.addEventListener("mouseup", function () {

        setTimeout(function () {

            callback();

        }, INTERACTION.ClickDelay);

    });


}
