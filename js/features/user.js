```javascript
// =================================
// BET YOU CAN'T SPELL THIS
// Username
// =================================


// =================================
// Initialise Username Screen
// =================================

function initUsername() {

    const usernameInput =
        document.getElementById("username");


    const continueButton =
        document.getElementById("continueButton");


    if (!usernameInput || !continueButton) {

        return;

    }


    continueButton.addEventListener(
        "click",
        function() {

            handleUsernameContinue(
                usernameInput
            );

        }
    );

}


// =================================
// Handle Continue
// =================================

function handleUsernameContinue(
    usernameInput
) {

    const username =
        usernameInput.value.trim();


    console.log(
        "Username entered:",
        username
    );

}


// =================================
// Start
// =================================

initUsername();
```

