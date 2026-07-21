// =================================
// BET YOU CAN'T SPELL THIS
// Home Feature
// =================================



// =================================
// Initialise Home Screen
// =================================

function initHome() {


    const buttons =
        document.querySelectorAll(".menu-item");



    buttons.forEach(function(button) {


        button.addEventListener(
            "click",
            function() {


                const page =
                    button.dataset.page;


                if (page) {

                    loadPage(page);

                }


            }
        );


    });


}
