// =================================
// BET YOU CAN'T SPELL THIS
// Opening Screen
// =================================


function showOpening() {


    app.innerHTML = `

        <div class="opening-screen">


            <div class="opening-title">

                BET YOU CAN'T SPELL THIS

            </div>


            <div class="opening-line">

                ========================================

            </div>


            <div class="bee-container">

                🐝

            </div>


        </div>

    `;


    setTimeout(function(){

        goToHome();

    }, 2500);


}



// =================================
// Opening Navigation
// =================================

function goToHome(){

    loadPage("home");

}
