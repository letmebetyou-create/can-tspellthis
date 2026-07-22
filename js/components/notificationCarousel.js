// =================================
// BET YOU CAN'T SPELL THIS
// Notification Carousel
// =================================


// =================================
// Default Notifications
// =================================

const DEFAULT_NOTIFICATIONS = [

    "Welcome to Bet You Can't Spell This."

];



// =================================
// Initialise Notification Carousel
// =================================

function initNotificationCarousel() {


    if (STATE.Notifications.length === 0) {

        STATE.Notifications =
            DEFAULT_NOTIFICATIONS.slice();

    }


    STATE.CurrentNotification = 0;


    setupNotificationButtons();


    updateNotification();


}



// =================================
// Setup Buttons
// =================================

function setupNotificationButtons() {


    makeInteractive(

        document.getElementById(
            "notificationPrevious"
        ),

        previousNotification

    );


    makeInteractive(

        document.getElementById(
            "notificationNext"
        ),

        nextNotification

    );


}



// =================================
// Previous Notification
// =================================

function previousNotification() {


    if (STATE.CurrentNotification === 0) {

        STATE.CurrentNotification =
            STATE.Notifications.length - 1;

    }

    else {

        STATE.CurrentNotification--;

    }


    updateNotification();


}



// =================================
// Next Notification
// =================================

function nextNotification() {


    if (
        STATE.CurrentNotification >=
        STATE.Notifications.length - 1
    ) {

        STATE.CurrentNotification = 0;

    }

    else {

        STATE.CurrentNotification++;

    }


    updateNotification();


}



// =================================
// Update Notification
// =================================

function updateNotification() {


    const counter =
        document.getElementById(
            "notificationCounter"
        );


    const text =
        document.getElementById(
            "notificationText"
        );


    if (!counter || !text) {

        return;

    }


    counter.textContent =

        (STATE.CurrentNotification + 1) +

        " / " +

        STATE.Notifications.length;


    text.textContent =

        STATE.Notifications[
            STATE.CurrentNotification
        ];


}
