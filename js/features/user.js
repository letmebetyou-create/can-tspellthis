
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

    const recoverButton =
        document.getElementbyId("recoverAccountButton");


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

            clearUsernameError()

        }
    );

    if (recoverButton) {
        recoverButton.addEventListener(
            "click",
            function() {
                loadPage("recovery");
            }
        );
    }

}


// =================================
// Handle Continue
// =================================

async function handleUsernameContinue(
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


    setUsernameLoading(true);


    try {

        const user =
            await createUser(username);


        if (!user) {

            showUsernameError(
                "That username is already taken."
            );

            return;

        }


        saveStorage(
            USER_STORAGE_KEY,
            user
        );


        console.log(
            "User created:",
            user
        );


        loadPage("recovery");


    } catch (error) {

        console.error(
            "Create user failed:",
            error
        );


        showUsernameError(
            "Something went wrong. Please try again."
        );


    } finally {

        setUsernameLoading(false);

    }

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
// Loading State
// =================================

function setUsernameLoading(isLoading) {

    const button =
        document.getElementById("continueButton");


    const input =
        document.getElementById("username");


    if (!button || !input) {

        return;

    }


    button.disabled =
        isLoading;


    input.disabled =
        isLoading;


    button.textContent =
        isLoading
            ? "CREATING..."
            : "CONTINUE";

}



// =================================
// Recovery Code Screen
// =================================

function initRecovery() {

    const recoveryCodeElement =
        document.getElementById("recoveryCode");


    const continueButton =
        document.getElementById(
            "recoveryContinueButton"
        );


    if (!recoveryCodeElement || !continueButton) {

        return;

    }


    const user =
        loadStorage(
            USER_STORAGE_KEY
        );


    if (!user || !user.recoveryCode) {

        loadPage("username");

        return;

    }


    recoveryCodeElement.textContent =
        user.recoveryCode;


    continueButton.addEventListener(
        "click",
        function() {

            loadPage("home");

        }
    );

}


