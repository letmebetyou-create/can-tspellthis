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


    usernameInput.addEventListener(
        "input",
        function() {

            clearUsernameError();

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


    const validation =
        validateUsername(username);


    if (!validation.valid) {

        showUsernameError(
            validation.message
        );

        return;

    }


    clearUsernameError();


    console.log(
        "Username is valid:",
        username
    );

}


// =================================
// Validate Username
// =================================

function validateUsername(username) {


    if (!username) {

        return {

            valid: false,

            message:
                "Please enter a username."

        };

    }


    if (username.length > 20) {

        return {

            valid: false,

            message:
                "Username must be 20 characters or fewer."

        };

    }


    const usernamePattern =
        /^[A-Za-z0-9_]+$/;


    if (!usernamePattern.test(username)) {

        return {

            valid: false,

            message:
                "Use only letters, numbers, and underscores."

        };

    }


    return {

        valid: true,

        message: ""

    };

}


// =================================
// Show Username Error
// =================================

function showUsernameError(message) {

    const error =
        document.getElementById("usernameError");


    if (!error) {

        return;

    }


    error.textContent =
        message;

}


// =================================
// Clear Username Error
// =================================

function clearUsernameError() {

    const error =
        document.getElementById("usernameError");


    if (!error) {

        return;

    }


    error.textContent =
        "";

}


// =================================
// Start
// =================================

initUsername();
```
