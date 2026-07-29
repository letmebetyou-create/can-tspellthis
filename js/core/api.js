// =================================
// BET YOU CAN'T SPELL THIS
// Backend API
// =================================


// =================================
// API URL
// =================================

// TODO
// Replace with your deployed Apps Script Web App URL.

const API_URL = "";



// =================================
// Call Backend
// =================================

async function callAPI(action, data = {}) {

    console.log("=================================");
    console.log("API CALL");
    console.log("=================================");
    console.log("Action:", action);
    console.log("Data:", data);


    if (!API_URL) {

        throw new Error(
            "API_URL has not been configured."
        );

    }


    const response =
        await fetch(

            API_URL,

            {

                method: "POST",

                headers: {

                    "Content-Type":
                        "text/plain;charset=utf-8"

                },

                body: JSON.stringify({

                    action: action,

                    ...data

                })

            }

        );


    if (!response.ok) {

        throw new Error(
            "Backend request failed: " +
            response.status
        );

    }


    const result =
        await response.json();


    console.log(
        "API RESPONSE:",
        result
    );


    if (!result.success) {

        throw new Error(
            result.error ||
            "Backend request failed."
        );

    }


    return result.data;

}





// =================================
// Settings
// =================================

async function loadBackendSettings() {

    return await callAPI(
        ACTIONS.LoadSettings
    );

}



// =================================
// User
// =================================

async function loginUser(username) {

    return await callAPI(

        ACTIONS.LoginUser,

        {
            Username: username
        }

    );

}


async function createUser(username) {

    return await callAPI(

        ACTIONS.CreateUser,

        {
            Username: username
        }

    );

}


async function recoverUser(recoveryCode) {

    return await callAPI(

        ACTIONS.RecoverUser,

        {
            RecoveryCode: recoveryCode
        }

    );

}



// =================================
// Notifications
// =================================

async function loadNotifications() {

    return await callAPI(
        ACTIONS.LoadNotifications
    );

}



// =================================
// Daily Challenge
// =================================

async function loadDailyChallenge() {

    return await callAPI(
        ACTIONS.LoadDailyChallenge
    );

}


async function submitChallenge(playerAnswers) {

    return await callAPI(

        ACTIONS.SubmitChallenge,

        {
            Answers: playerAnswers
        }

    );

}



// =================================
// Archive
// =================================

async function loadArchive() {

    return await callAPI(
        ACTIONS.LoadArchive
    );

}



// =================================
// Leaderboard
// =================================

async function loadLeaderboard() {

    return await callAPI(
        ACTIONS.LoadLeaderboard
    );

}



// =================================
// Suggestions
// =================================

async function loadSuggestions() {

    return await callAPI(
        ACTIONS.LoadSuggestions
    );

}


async function submitSuggestion(word) {

    return await callAPI(

        ACTIONS.SubmitSuggestion,

        {
            Word: word
        }

    );

}
