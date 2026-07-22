// =================================
// BET YOU CAN'T SPELL THIS
// Footer
// =================================


// =================================
// Initialise Footer
// =================================

function initFooter() {

    const footer =
        document.getElementById("footer");

    if (!footer) {

        return;

    }

    footer.innerHTML = `

        <p class="version">

            ${APP.version}

        </p>

    `;

}
