// =================================
// BET YOU CAN'T SPELL THIS
// Home
// =================================


// =================================
// Initialise Home
// =================================

function initHome() {


    initFooter();


    initNotificationCarousel();


    setupHomeMenu();


}



// =================================
// Home Menu
// =================================

function setupHomeMenu() {


    makeInteractive(

        document.getElementById("btnChallenge"),

        function () {

            loadPage("challengeIntro");

        }

    );


    makeInteractive(

        document.getElementById("btnArchive"),

        function () {

            loadPage("archive");

        }

    );


    makeInteractive(

        document.getElementById("btnBlitz"),

        function () {

            loadPage("blitz");

        }

    );


    makeInteractive(

        document.getElementById("btnLeaderboard"),

        function () {

            loadPage("leaderboard");

        }

    );


    makeInteractive(

        document.getElementById("btnSuggestions"),

        function () {

            loadPage("suggestions");

        }

    );


    makeInteractive(

        document.getElementById("btnAbout"),

        function () {

            loadPage("about");

        }

    );


}
