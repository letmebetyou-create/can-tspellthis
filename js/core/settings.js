// =================================
// BET YOU CAN'T SPELL THIS
// Default Settings
// =================================

const DEFAULT_SETTINGS = {

    // =================================
    // Application
    // =================================

    StartPage: "home",

    // =================================
    // Theme
    // =================================

    Theme: APP.defaultTheme,

    // =================================
    // Language
    // =================================

    Language: APP.defaultLanguage,

    // =================================
    // User
    // =================================

    UsernameMaxLength: 20,

    UsernameAllowedCharacters:
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_",

    // =================================
    // Daily Challenge
    // =================================

    WordsPerChallenge: 10,

    HistoryDaysVisible: 7,

    AllowProgressSaving: false,

    AllowAutoCorrect: false,

    // =================================
    // Practice Blitz
    // =================================

    PracticeUnlockDays: 7,

    BlitzOptions: [
        5,
        10,
        25,
        50
    ],

    // =================================
    // Notifications
    // =================================

    NotificationsPerPage: 1

};


// =================================
// Runtime Settings
// =================================

let SETTINGS = {

    ...DEFAULT_SETTINGS

};


// =================================
// Load Settings
// =================================

async function loadSettings() {

    // TODO
    // Load settings from Apps Script.

    SETTINGS = {

        ...DEFAULT_SETTINGS

    };

}
