// =================================
// BET YOU CAN'T SPELL THIS
// Opening Screen
// =================================


function initOpening() {


    const bee =
    document.getElementById("bee");


    if (!bee) {

        return;

    }


    setTimeout(function(){


        bee.classList.add("fly");


    }, 300);



    setTimeout(function(){


        loadPage("home");


    }, 2500);


}
