// =================================
// BET YOU CAN'T SPELL THIS
// Router
// =================================


// =================================
// Page Routes
// =================================

const ROUTES = {

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

async function loadPage(pageName) {

    const page = ROUTES[pageName];

    if (!page) {

        console.error("Unknown page:", pageName);

        return;

    }

    try {

        const response = await fetch(page);

        const html = await response.text();

        document.getElementById("app").innerHTML = html;

        STATE.CurrentPage = pageName;

    }

    catch (error) {

        console.error("Unable to load page.");

        console.error(error);

    }

}
