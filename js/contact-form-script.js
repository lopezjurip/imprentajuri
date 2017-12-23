$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "¿Seguro que llenaste bien el formulario?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm() {
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var message = $("#message").val();

    $.ajax({
        url: "https://formspree.io/patricia@imprentajuri.cl",
        method: "POST",
        data: {
            email: email,
            message: message,
            _phone: phone,
            _subject: "Mensaje de " + name + " desde imprentajuri.cl"
        },
        dataType: "json",
        success: function (text) {
            formSuccess();
        }
    });
}

function formSuccess() {
    $("#contactForm")[0].reset();
    submitMSG(true, "¡Mensaje enviado!")
}

function submitMSG(valid, msg) {
    if (valid) {
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}
