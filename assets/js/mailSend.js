// contact form submission

$(document).on('click', 'cv-section__contact-mail-send-btn', function () {
    var form = $('.cv-section__contact-form-fields');

    var name = $('input[name="name"]').val();
    var phone = $('input[name="phone"]').val();
    var subject = $('input[name="subject"]').val();
    var message = $('textarea[name="message"]').val();
    var mail = $('input[name="email"]').val();
    
    var emailreg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    var valid = true;

    if (name.trim() == "") {
        $('#name-error').html("Please enter name.");
        valid = false;
    } else {
        $('#name-error').html("");
    }

    if (mail.trim() == "") {
        $('#email-error').html("Please enter email.");
        valid = false;
    } else if (!emailreg.test(mail)) {
        $('#email-error').html("Please enter valid email.");
        valid = false;
    } else {
        $('#email-error').html("");
    }

    if (phone.trim() == "") {
        $('#phone-error').html("Please enter phone number.");
        valid = false;
    } else {
        $('#phone-error').html("");
    }

    if (subject.trim() == "") {
        $('#subject-error').html("Please enter subject.");
        valid = false;
    } else {
        $('#subject-error').html("");
    }

    if (message.trim() == "") {
        $('#message-error').html("Please enter message.");
        valid = false;
    } else {
        $('#message-error').html("");
    }

    if (valid) {
        $.ajax({
            type: "POST",
            url: "http://kamal.buddyspizzaandcafe.com/template/kamal-sidebar/dark/assets/php/mail.php",
            data: form.serialize(),
            beforeSend: function () {
                $(".loading").show();
            },
            success: function (response) {
                $(".loading").hide();
                var response = JSON.parse(response);
                if (response.success) {
                    $('.response-msg').html(response.success);
                    $('#contact-form')[0].reset();
                }
                if (response.error) {
                    $('.response-msg').html(response.error);
                }
            }
        });
    }
    return false;
});