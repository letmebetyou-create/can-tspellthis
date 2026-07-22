// =================================
// BET YOU CAN'T SPELL THIS
// Notification Carousel
// =================================


// =================================
// Initialise
// =================================

function initNotificationCarousel() {


    const previous =
        document.getElementById(
            "notificationPrevious"
        );


    const next =
        document.getElementById(
            "notificationNext"
        );


    if (!previous || !next) {

        return;

    }



    previous.onclick = function() {

        previousNotification();

    };


    next.onclick = function() {

        nextNotification();

    };


    updateNotification();

}



// =================================
// Navigation
// =================================

function nextNotification() {


    if (
        STATE.CurrentNotification
        <
        STATE.Notifications.length - 1
    ) {

        STATE.CurrentNotification++;

    }


    updateNotification();

}



// =================================
// Previous
// =================================

function previousNotification() {


    if (
        STATE.CurrentNotification > 0
    ) {

        STATE.CurrentNotification--;

    }


    updateNotification();

}



// =================================
// Update Display
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



    const notifications =
        STATE.Notifications;



    if (
        notifications.length === 0
    ) {


        counter.innerHTML =
            "1 / 1";


        text.innerHTML =
            "Welcome to Bet You Can't Spell This.";


        return;

    }



    counter.innerHTML =
        `${STATE.CurrentNotification + 1} / ${notifications.length}`;


    text.innerHTML =
        notifications[
            STATE.CurrentNotification
        ];

}
