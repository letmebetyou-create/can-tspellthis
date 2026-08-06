
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
        document.getElementById("recoverAccountButton");


    if (!continueButton) {

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

    const errorMessage =
        document.getElementById("usernameError");


    if (!errorMessage) {

        return;

    }


    errorMessage.textContent =
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
// Initialise Recovery Screen
// =================================

function initRecovery() {


    const storedUser =
        loadStorage(
            USER_STORAGE_KEY
        );


    const newSection =
        document.getElementById(
            "newRecoverySection"
        );


    const recoverSection =
        document.getElementById(
            "recoverAccountSection"
        );


    const recoveryCode =
        document.getElementById(
            "recoveryCode"
        );

    const usernameDisplay = 
        document.getElementById(
            "recoveryUsernameDisplay"
        );


    const continueButton =
        document.getElementById(
            "recoveryContinueButton"
        );


    const recoverButton =
        document.getElementById(
            "recoverButton"
        );



    // New account flow

    if (
        storedUser &&
        storedUser.recoveryCode
    ) {


        if (newSection) {

            newSection.style.display =
                "block";

        }


        if (recoverSection) {

            recoverSection.style.display =
                "none";

        }

        if (usernameDisplay) {
            usernameDisplay.textContent =
                storedUser.username;
        }

        if (recoveryCode) {
            recoveryCode.textContent = 
                storedUser.recoveryCode;
        }



        continueButton.addEventListener(
            "click",
            function() {

                loadPage("home");

            }
        );


        return;

    }



    // Existing account recovery flow

    if (newSection) {

        newSection.style.display =
            "none";

    }


    if (recoverSection) {

        recoverSection.style.display =
            "block";

    }



    recoverButton.addEventListener(
        "click",
        handleAccountRecovery
    );


}

// =================================
// Handle Account Recovery
// =================================

async function handleAccountRecovery() {

    const usernameInput = 
        document.getElementById(
            "recoveryUsername"
            );
    const input =
        document.getElementById(
            "recoveryInput"
        );


    const errorMessage =
        document.getElementById(
            "recoveryError"
        );

    const username = 
        usernameInput.value
            .trim();
    const code =
        input.value
        .trim()
        .toUpperCase();

    if (!username) {
        errorMessage.textContent = 
            "PLEASE INPUT USERNAME.";
        return;
    }

    if (!code) {

        errorMessage.textContent =
            "PLEASE INPUT RECOVERY CODE.";

        return;

    }



    try {


        const user =
            await recoverUser(
                username,
                code
            );



        if (!user) {

            errorMessage.textContent =
                "INVALID RECOVERY CODE.";

            return;

        }



        saveStorage(
            USER_STORAGE_KEY,
            user
        );


        loadPage("home");


    }


    catch(error) {


        console.error(error);


        errorMessage.textContent =
            "RECOVERY FAILED. Please contact us for support.";

    }


}
