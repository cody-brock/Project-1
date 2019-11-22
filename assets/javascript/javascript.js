$(document).ready(function () {
    var database = firebase.database();

    // BUTTONS FOR entry-page.html
    $("#button-to-login-page").on("click", function (event) {
        event.preventDefault();
        window.location = 'login-page.html';
    })

    $("#button-to-registration-page").on("click", function (event) {
        event.preventDefault();
        window.location = 'registration.html';
    })
    // END BUTTONS FOR entry-page.html


    // BUTTONS FOR registration.html
    $("#registration-submit").on("click", function (event) {
        event.preventDefault();

        //parses user input from registration page...
        const name = $("#user-name").val().trim();
        const email = $("#user-email").val().trim();
        const password = $("#user-password").val().trim();
        const city = $("#user-city").val().trim();
        const bartStart = $("#bart-start").val().trim();
        const bartEnd = $("#bart-end").val().trim();

        // ...pushes it into firebase.
        database.ref('/users').push({
            name,
            email,
            password,
            city,
            bartStart,
            bartEnd,
        })

        // Puts logal storage, so can return to page and remain logged in
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);

        console.log("submit local name", localStorage.getItem("name"))
        console.log("submit local email", localStorage.getItem("email"))

        // takes user to main content page
        window.location = 'main-content.html';
    })
    // END BUTTONS FOR registration.html


    //BUTTONS FOR login-page.html
    $("#login-submit").on("click", function (event) {
        event.preventDefault();

        //hides incorrect login warning
        $("#incorrect-login").css("display", "none");

        //parses the input
        const email = $("#email").val().trim();
        const password = $("#password").val().trim();

        //combs firebase for corresponding email...
        database.ref('/users').orderByChild('email').equalTo(email).on("value", snapshot => {
            snapshot.forEach(function (data) {
                // ...if email and password match in firebase...
                if (snapshot.val()[data.key].email === email && snapshot.val()[data.key].password === password) {
                    // ... takes user to their main-content page
                    localStorage.setItem("name", snapshot.val()[data.key].name);
                    localStorage.setItem("email", snapshot.val()[data.key].email);
                    window.location = 'main-content.html';
                    return
                }
            });
            // ...if incorrect login, then displays message telling user the input was incorrect
            $("#incorrect-login").css("display", "block");
        })
        // Puts corresponding name and email into local storage, so user doesn't have to log in next time
        //TODO: rework this to get from firebase
        

        console.log("submit local name", localStorage.getItem("name"))
        console.log("submit local email", localStorage.getItem("email"))
    })
    //END BUTTONS FOR login-page.html

})