// =================================
// BET YOU CAN'T SPELL THIS
// Local Storage
// =================================

// =================================
// Storage
// =================================

const USER_STORAGE_KEY =
    "BET_YOU_USER";



// =================================
// Save Value
// =================================

function saveStorage(key, value) {

    localStorage.setItem(

        key,

        JSON.stringify(value)

    );

}



// =================================
// Load Value
// =================================

function loadStorage(key) {

    const value = localStorage.getItem(key);

    if (value === null) {

        return null;

    }

    return JSON.parse(value);

}



// =================================
// Remove Value
// =================================

function removeStorage(key) {

    localStorage.removeItem(key);

}



// =================================
// Clear Storage
// =================================

function clearStorage() {

    localStorage.clear();

}
