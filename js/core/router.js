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


    const functionName =
        "init" +
        routeName.charAt(0).toUpperCase() +
        routeName.slice(1);


    const initialisePage =
        window[functionName];


    if (typeof initialisePage === "function") {

        initialisePage();

    }


}



// =================================
// Router Error
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


        <div class="border">

        ========================================

        </div>

    `;


}
