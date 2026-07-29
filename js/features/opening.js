
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


        const user =
            loadStorage(
                USER_STORAGE_KEY
            );


        if (user) {

            loadPage("home");

            return;

        }


        loadPage("username");


    }, 1000);

}

