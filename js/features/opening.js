// =================================
// BET YOU CAN'T SPELL THIS
// Opening Screen
// =================================


function initOpening() {


    const beeMovement =
    document.getElementById("beeMovement");


    if (!beeMovement) {

        return;

    }



    setTimeout(function(){


        beeMovement.classList.add("fly");


    }, 500);



    setTimeout(function(){


        loadPage("home");


    }, 3000);


}
