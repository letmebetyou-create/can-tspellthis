// =================================
// Bet You - Game Engine
// =================================


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


            <button class="menu-item">
                ANSWERS ARCHIVE
            </button>


            <button class="menu-item">
                LEADERBOARD
            </button>


            <button class="menu-item">
                SUGGESTIONS
            </button>


            <button class="menu-item">
                ABOUT
            </button>


        </nav>


        <div class="border">
            ========================================
        </div>

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


    playerAnswers.forEach(function(item) {


        if (item.correct) {

            score++;

        }


    });



    app.innerHTML = `


        <div class="border">
            ========================================
        </div>


        <h1>
            DAILY COMPLETE
        </h1>


        <div class="divider">
            ----------------------------------------
        </div>


        <p>
            YAY YOU DID IT!
        </p>


        <p>
            YOU GOT
            ${score}
            /
            ${playerAnswers.length}
            CORRECT
        </p>


        <br>


        <p>
            Answers will be posted in
            the Answers Archive tomorrow.
        </p>


        <br>


        <button class="menu-item">
            SHARE
        </button>


        <button
            class="menu-item"
            onclick="showHome()"
        >
            HOME
        </button>


        <div class="border">
            ========================================
        </div>


    `;


}



// Start

showHome();
