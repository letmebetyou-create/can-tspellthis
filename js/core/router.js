// =================================
// BET YOU CAN'T SPELL THIS
// Router
// =================================


// =================================
// Page Routes
// =================================

const ROUTES = {

    opening: "pages/opening.html",

    home: "pages/home.html",

    username: "pages/username.html",

    recovery: "pages/recovery.html",

    challengeIntro: "pages/challengeIntro.html",

    challengeWord: "pages/challengeWord.html",

    challengeResults: "pages/challengeResults.html",

    archive: "pages/archive.html",

    blitz: "pages/blitz.html",

    leaderboard: "pages/leaderboard.html",

    suggestions: "pages/suggestions.html",

    about: "pages/about.html"

};


// =================================
// Page Initialisers
// =================================

const PAGE_INITIALISERS = {

    opening: initOpening,

    home: initHome,

    username: initUsername,

    recovery: initRecovery,

    challengeIntro: initChallengeIntro,

    challengeWord: initChallengeWord,

    challengeResults: initChallengeResults,

    archive: initArchive,

    blitz: initBlitz,

    leaderboard: initLeaderboard,

    suggestions: initSuggestions,

    about: initAbout

};


// =================================
// Load Page
// =================================

async function loadPage(routeName) {


    const page = ROUTES[routeName];


    if (!page) {

        showRouterError(
            "Unknown page.",
            routeName
        );

        return;

    }


    try {


        const response =
            await fetch(page);


        if (!response.ok) {

            throw new Error(
                response.status +
                " " +
                response.statusText
            );

        }


        const html =
            await response.text();


        document.getElementById("app").innerHTML =
            html;


        STATE.CurrentPage =
            routeName;


        runPageInitialiser(routeName);


    }

    catch (error) {

        console.error(error);

        showRouterError(
            "Unable to load page.",
            routeName
        );

    }

}


// =================================
// Run Page Initialiser
// =================================

function runPageInitialiser(routeName) {


    const initialiser =
        PAGE_INITIALISERS[routeName];


    if (initialiser) {

        initialiser();

    }

}


// =================================
// Router Error Page
// =================================

function showRouterError(message, routeName) {


    document.getElementById("app").innerHTML = `

        <div class="border">

        ========================================

        </div>


        <h1>

        PAGE ERROR

        </h1>


        <p>

        ${message}

        </p>


        <p>

        ${routeName}

        </p>


        <p onclick="loadPage('home')">

        HOME

        </p>


        <div class="border">

        ========================================

        </div>

    `;

}
