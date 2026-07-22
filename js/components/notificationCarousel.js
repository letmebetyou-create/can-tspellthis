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


    if (
        !STATE.Notifications ||
        STATE.Notifications.length === 0
    ) {

        STATE.Notifications =
            DEFAULT_NOTIFICATIONS.slice();

    }


    STATE.CurrentNotification = 0;


    updateNotification();


    setupNotificationButtons();


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


    const total =
        STATE.Notifications.length;


    const current =
        STATE.CurrentNotification + 1;


    counter.textContent =
        "< " +
        current +
        " / " +
        total +
        " >";


    text.textContent =
        STATE.Notifications[
            STATE.CurrentNotification
        ];


}



// =================================
// Previous Notification
// =================================

function previousNotification() {


    if (
        STATE.CurrentNotification > 0
    ) {

        STATE.CurrentNotification--;

    }
    else {

        STATE.CurrentNotification =
            STATE.Notifications.length - 1;

    }


    updateNotification();


}



// =================================
// Next Notification
// =================================

function nextNotification() {


    if (
        STATE.CurrentNotification <
        STATE.Notifications.length - 1
    ) {

        STATE.CurrentNotification++;

    }
    else {

        STATE.CurrentNotification = 0;

    }


    updateNotification();


}



// =================================
// Setup Buttons
// =================================

function setupNotificationButtons() {


    // Version 1

    // Placeholder.

    // We'll make the arrows clickable
    // once we redesign the notification
    // layout.


}
