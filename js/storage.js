// =================================
// LOCAL STORAGE
// =================================


function saveUser(user) {


    localStorage.setItem(
        "betYouUser",
        JSON.stringify(user)
    );


}



function getSavedUser() {


    const saved =
        localStorage.getItem(
            "betYouUser"
        );


    if (!saved) {

        return null;

    }


    return JSON.parse(saved);


}



function clearUser() {


    localStorage.removeItem(
        "betYouUser"
    );


}
