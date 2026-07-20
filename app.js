// =================================
// BET YOU CAN'T SPELL THIS
// Frontend Game Engine
// =================================


// =================================
// VERSION
// =================================

const APP_VERSION = "v0.1.0";

const app = document.getElementById("app");


// =================================
// TEST CHALLENGE DATA
// =================================

const testChallenge = {

    title: "SPELL THIS",

    date: "20 JUL 2026",

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


// =================================
// GAME STATE
// =================================

let currentChallenge = testChallenge;

let currentWordIndex = 0;

let playerAnswers = [];


// =================================
// HOME
// =================================

function showHome() {


    app.innerHTML = `

        <div class="border">
        ========================================
        </div>


        <h1>
        BET YOU
        </h1>

        <h2>
        CAN'T SPELL THIS
        </h2>


        <div class="divider">
        ----------------------------------------
        </div>


        <p>
        NOTIFICATIONS
        </p>

        <p>
        < &nbsp; 1 / 1 &nbsp; >
        </p>

        <p>
        Welcome to Bet You Can't Spell This.
        </p>


        <div class="divider">
        ----------------------------------------
        </div>


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


        <div class="border">
        ========================================
        </div>


        ${versionFooter()}

    `;

}



// =================================
// DAILY CHALLENGE INTRO
// =================================

function startChallenge() {


    currentWordIndex = 0;

    playerAnswers = [];

    showChallengeIntro();

}



function showChallengeIntro() {


    app.innerHTML = `

        <div class="border">
        ========================================
        </div>


        <h1>
        ${currentChallenge.title}
        </h1>


        <div class="divider">
        ----------------------------------------
        </div>


        <p>
        ${currentChallenge.date}
        </p>


        <p>
        ${currentChallenge.words.length}
        WORDS
        </p>


        <p>
        ARE YOU READY?
        </p>


        <button class="menu-item" onclick="showWord()">
        START
        </button>


        <button class="menu-item" onclick="showHome()">
        BACK
        </button>


        ${versionFooter()}

    `;

}



// =================================
// WORD SCREEN
// =================================

function showWord() {


    const word = currentChallenge.words[currentWordIndex];


    app.innerHTML = `


        <div class="border">
        ========================================
        </div>


        <h1>
        ${currentChallenge.title}
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


        <input
        id="answerInput"
        type="text"
        autocomplete="off"
        autocorrect="off"
        spellcheck="false"
        >


        <br><br>


        <button class="menu-item" onclick="submitAnswer()">
        NEXT
        </button>


        ${versionFooter()}

    `;


}



// =================================
// SUBMIT ANSWER
// =================================

function submitAnswer() {


    const input =
    document.getElementById("answerInput");


    const answer =
    input.value.trim().toLowerCase();


    const correct =
    answer ===
    currentChallenge.words[currentWordIndex].answer;


    playerAnswers.push(correct);


    currentWordIndex++;


    if (
        currentWordIndex >= currentChallenge.words.length
    ) {

        showResults();

    } else {

        showWord();

    }

}



// =================================
// RESULTS
// =================================

function showResults() {


    let score = 0;


    playerAnswers.forEach(function(answer){

        if(answer){
            score++;
        }

    });


    app.innerHTML = `


        <div class="border">
        ========================================
        </div>


        <h1>
        ${currentChallenge.title}
        </h1>


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
        Answers Archive tomorrow.
        </p>


        <button class="menu-item" onclick="showHome()">
        HOME
        </button>


        ${versionFooter()}

    `;


}



// =================================
// OTHER PAGES
// =================================

function showArchive(){

    simplePage(
        "ANSWERS ARCHIVE",
        "Past challenge answers will appear here."
    );

}


function showBlitz(){

    simplePage(
        "BLITZ",
        "Choose words and practise continuously."
    );

}


function showLeaderboard(){

    simplePage(
        "LEADERBOARD",
        "Weekly rankings will appear here."
    );

}


function showSuggestions(){

    simplePage(
        "SUGGESTIONS",
        "Suggest words and view community words here."
    );

}


function showAbout(){

    simplePage(
        "ABOUT",
        "The story behind Bet You Can't Spell This."
    );

}



// =================================
// SHARED PAGE
// =================================

function simplePage(title, text){


    app.innerHTML = `


        <div class="border">
        ========================================
        </div>


        <h1>
        ${title}
        </h1>


        <p>
        ${text}
        </p>


        <button class="menu-item" onclick="showHome()">
        BACK
        </button>


        ${versionFooter()}


    `;

}



// =================================
// VERSION FOOTER
// =================================

function versionFooter(){


    return `

    <p class="version">
    ${APP_VERSION}
    </p>

    `;

}



// =================================
// START APP
// =================================

showHome();
