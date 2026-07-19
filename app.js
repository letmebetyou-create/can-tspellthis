
// =================================
// Bet You - Main Menu Interaction
// =================================


const menuItems = document.querySelectorAll(".menu-item");


// Add selection behaviour

menuItems.forEach(function(item) {


    item.addEventListener("click", function() {


        // Remove previous selection

        menuItems.forEach(function(button) {

            button.classList.remove("selected");

        });


        // Select current item

        item.classList.add("selected");


    });


});
