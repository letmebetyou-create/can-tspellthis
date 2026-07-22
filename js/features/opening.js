// =================================
// BET YOU CAN'T SPELL THIS
// Opening Screen
// =================================


// =================================
// Initialise Opening Screen
// =================================

function initOpening() {


    showVersion();


    startApp();


}


// =================================
// Show Version
// =================================

function showVersion() {


    const version =
        document.getElementById("version");


    if (version) {

        version.textContent =
            APP.version;

    }


}


// =================================
// Start App
// =================================

function startApp() {


    setTimeout(function () {

        loadPage("home");

    }, 1000);


}
