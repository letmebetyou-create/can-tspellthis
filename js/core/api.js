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

    // TODO
    // Connect to Apps Script backend.

    return null;

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
