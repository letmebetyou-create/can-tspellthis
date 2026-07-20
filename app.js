// =================================
// Bet You - Game Engine
// =================================

// =================================
// VERSION
// =================================

const APP_VERSION = "v0.1.0";

const app = document.getElementById("app");

// Temporary test challenge
// This will later come from Google Apps Script API

const testChallenge = {

    title: "SPELL THIS",

    words: [

        {
            beeGuide: "cat",
            partOfSpeech: "Noun",
            definition: "A small domesticated animal often kept as a pet.",
            answer: "cat"
        },


        {
            beeGuide: "rhythm",
            partOfSpeech: "Noun",
            definition: "A regular repeated pattern of sounds or movement.",
            answer: "rhythm"
        },


        {
            beeGuide: "zeh-buh",
            partOfSpeech: "Noun",
            definition: "A striped animal native to Africa.",
            answer: "zebra"
        },


        {
            beeGuide: "ahd-vark",
            partOfSpeech: "Noun",
            definition: "A nocturnal burrowing mammal from Africa.",
            answer: "aardvark"
        }

    ]

};



// Game variables

let currentWordIndex = 0;

let playerAnswers = [];

let currentChallenge = testChallenge;




// =================================
// HOME SCREEN
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


    <button class="menu-item" onclick="startChallenge()">
        DAILY CHALLENGE
    </button>


    <button class="menu-item" onclick="showArchive()">
        ANSWERS ARCHIVE
    </button>


    <button class="menu-item" onclick="showBlitz()">
        BLITZ
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
${versionFooter()}
    `;


}




// =================================
// START CHALLENGE
// =================================


function startChallenge() {


    currentWordIndex = 0;

    playerAnswers = [];

    showWord();

}




// =================================
// SHOW CURRENT WORD
// =================================


function showWord() {


    const word =
        currentChallenge.words[currentWordIndex];


    app.innerHTML = `


        <div class="border">
            ========================================
        </div>


        <h1>
            SPELL THIS
        </h1>


        <p>
            WORD ${currentWordIndex + 1}
            /
            ${currentChallenge.words.length}
        </p>


        <div class="divider">
            ----------------------------------------
        </div>


        <p>
            ${word.beeGuide}
        </p>


        <p>
            ${word.partOfSpeech}
        </p>


        <p>
            ${word.definition}
        </p>


        <br>


        <input
            id="answerInput"
            type="text"
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
        >


        <br><br>


        <button
            class="menu-item"
            onclick="submitAnswer()"
        >
            NEXT
        </button>


        <div class="border">
            ========================================
        </div>


    `;


}




// =================================
// SAVE ANSWER
// =================================


function submitAnswer() {


    const input =
        document.getElementById("answerInput");


    const answer =
        input.value.trim();


    playerAnswers.push({

        given:
            answer,

        correct:
            answer.toLowerCase() ===
            currentChallenge.words[currentWordIndex]
                .answer

    });



    currentWordIndex++;



    if (
        currentWordIndex >=
        currentChallenge.words.length
    ) {


        showResults();

        return;

    }



    showWord();


}



// =================================
// RESULTS
// =================================

function showResults() {


    let score = 0;


    playerAnswers.forEach(function(answer) {

        if (answer.correct) {

            score++;

        }

    });



    app.innerHTML = `


        <div class="border">
            ========================================
        </div>


        <h1>
            RESULTS
        </h1>


        <div class="divider">
            ----------------------------------------
        </div>


        <p>
            YAY YOU DID IT!
        </p>


        <p>
            You got
            ${score}
            /
            ${currentChallenge.words.length}
            correct.
        </p>


        <p>
            Answers will be posted in
            the Answers Archive tomorrow.
        </p>


        <br>


        <button
            class="menu-item"
            onclick="showHome()"
        >
            HOME
        </button>


        ${versionFooter()}


        <div class="border">
            ========================================
        </div>


    `;


}
// =================================
// VERSION DISPLAY
// =================================

function versionFooter() {

    return `

        <div class="version">
            ${APP_VERSION}
        </div>

    `;

}

// =================================
// SIMPLE PAGE TEMPLATE
// =================================

function showSimplePage(title, content) {


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


        ${content}


        <br>


        <button
            class="menu-item"
            onclick="showHome()"
        >
            BACK
        </button>

        ${versionFooter()}
        <div class="border">
            ========================================
        </div>


    `;


}



// =================================
// OTHER SCREENS
// =================================

function showArchive() {

    showSimplePage(

        "ANSWERS ARCHIVE",

        `
        <p>
        Previous challenges will appear here.
        </p>
        `

    );

}



function showBlitz() {

    showSimplePage(

        "PRACTICE BLITZ",

        `
        <p>
        Choose how many words you want to practise.
        </p>

        <p>
        5 &nbsp; 10 &nbsp; 25 &nbsp; 50
        </p>
        `

    );

}



function showLeaderboard() {

    showSimplePage(

        "LEADERBOARD",

        `
        <p>
        Weekly rankings will appear here.
        </p>
        `

    );

}



function showSuggestions() {

    showSimplePage(

        "SUGGESTIONS",

        `
        <p>
        Community word suggestions will appear here.
        </p>
        `

    );

}



function showAbout() {

    showSimplePage(

        "ABOUT",

        `
        <p>
        The story behind Bet You Can't Spell This.
        </p>
        `

    );

}



// Start

showHome();

