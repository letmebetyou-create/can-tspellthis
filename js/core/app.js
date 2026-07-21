// =================================
// BET YOU CAN'T SPELL THIS
// Application
// =================================


// =================================
// Start Application
// =================================

async function startApp() {

    console.log("=================================");
    console.log(APP.name);
    console.log(APP.version);
    console.log("=================================");

    // Load settings

    await loadSettings();

    // Load first page

    await loadPage(
        SETTINGS.StartPage
    );

}



// =================================
// Application Ready
// =================================

document.addEventListener(

    "DOMContentLoaded",

    function () {

        startApp();

    }

);
