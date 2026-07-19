// =================================
// Bet You - Screen System
// =================================


const app = document.getElementById("app");


// =================================
// Main Menu
// =================================


function showHome() {


    app.innerHTML = `


        <div class="border">
            ========================================
        </div>


        <section class="title">

            <h1>
                BET YOU
            </h1>

            <h2>
                CAN'T SPELL THIS
            </h2>

        </section>


        <div class="divider">
            ----------------------------------------
        </div>


        <nav class="menu">


            <button class="menu-item" onclick="showChallenge()">
                DAILY CHALLENGE
            </button>


            <button class="menu-item" onclick="showArchive()">
                ANSWERS ARCHIVE
            </button>


            <button class="menu-item" onclick="showLeaderboard()">
                LEADERBOARD
            </button>


            <button class="menu-item" onclick="showSuggestions()">
                SUGGESTIONS
            </button>


            <button class="menu-item" onclick="showAbout()">
                ABOUT
            </button>


        </nav>


        <div class="border">
            ========================================
        </div>


    `;


    activateMenu();

}



// =================================
// Daily Challenge Screen
// =================================


function showChallenge() {


    app.innerHTML = `


        <div class="border">
            ========================================
        </div>


        <h1>
            SPELL THIS
        </h1>


        <div class="divider">
            ----------------------------------------
        </div>


        <p>
            TODAY'S CHALLENGE
        </p>


        <p>
            10 WORDS
        </p>


        <br>


        <button class="menu-item">
            START
        </button>


        <br>


        <button class="menu-item" onclick="showHome()">
            BACK
        </button>


        <div class="border">
            ========================================
        </div>


    `;

}



// =================================
// Placeholder Screens
// =================================


function showArchive() {

    simpleScreen(
        "ANSWERS ARCHIVE"
    );

}


function showLeaderboard() {

    simpleScreen(
        "LEADERBOARD"
    );

}


function showSuggestions() {

    simpleScreen(
        "SUGGESTIONS"
    );

}


function showAbout() {

    simpleScreen(
        "ABOUT"
    );

}



// =================================
// Generic Screen
// =================================


function simpleScreen(title) {


    app.innerHTML = `


        <div class="border">
            ========================================
        </div>


        <h1>
            ${title}
        </h1>


        <div class="divider">
            ----------------------------------------
        </div>


        <p>
            Coming soon...
        </p>


        <br>


        <button class="menu-item" onclick="showHome()">
            BACK
        </button>


        <div class="border">
            ========================================
        </div>


    `;


}



// =================================
// Menu Selection
// =================================


function activateMenu() {


    const menuItems =
        document.querySelectorAll(".menu-item");


    menuItems.forEach(function(item) {


        item.addEventListener(
            "click",
            function() {


                menuItems.forEach(function(button) {

                    button.classList.remove(
                        "selected"
                    );

                });


                item.classList.add(
                    "selected"
                );


            }
        );


    });


}



// =================================
// Start App
// =================================


showHome();
