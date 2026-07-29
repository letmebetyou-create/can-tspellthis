// =================================
// BET YOU CAN'T SPELL THIS
// Backend API
// =================================


// =================================
// API URL
// =================================

const API_URL = "https://script.google.com/macros/s/AKfycbx-NQN_oZHN9hksLidfwIWUbgiqFTPHSEU2neMtnzATxZecNd_HOWeBfF2SnVNy8JjP/exec";

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
            username: username
        }

    );

}


async function createUser(username) {

    return await callAPI(

        ACTIONS.CreateUser,

        {
            username: username
        }

    );

}


async function recoverUser(recoveryCode) {

    return await callAPI(

        ACTIONS.RecoverUser,

        {
            recoveryCode: recoveryCode
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
            answers: playerAnswers
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
            word: word
        }

    );

}
