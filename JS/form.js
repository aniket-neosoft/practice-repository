$(document).ready(function () {
    $('#name, #email, #password, #confirm_password').css({
        'padding': '10px',
        'margin-bottom': '15px',
        'border': '1px solid #ccc',
        'border-radius': '4px'
    });

    $('#name, #email, #password, #confirm_password').focus(function () {
        $(this).css('border-color', '#333');
    });

    $('#name, #email, #password, #confirm_password').blur(function () {
        $(this).css('border-color', '#ccc');
    });

    const nameNode = $('#name');
    const emailNode = $('#email');
    const passwordNode = $('#password');
    const confirmPassNode = $('#confirm_password');

    const errorNode1 = $('#error1');
    const errorNode2 = $('#error2');
    const errorNode3 = $('#error3');
    const errorNode4 = $('#error4');

    nameNode.blur(() => validate1());

    const validate1 = function () {
        if (nameNode.val().length < 2) {
            errorNode1.text("enter a valid name!");
            return false;
        } else if (!nameNode.val().match("^[A-Za-z ]*$")) {
            errorNode1.text("please enter valid name ex: Aniket Kumar");
            return false;
        }
        errorNode1.text("");
        return true;
    }

    emailNode.blur(() => validate2());

    const validate2 = function () {
        if (!emailNode.val().includes("@") || emailNode.val().startsWith("@") || emailNode.val().endsWith("@") || emailNode.val().endsWith(".") || emailNode.val().startsWith(".")) {
            errorNode2.text("please enter valid email id!");
            return false;
        }
        errorNode2.text("");
        return true;
    }

    const passwordPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{6,12}$"; // 6 - 12 range

    passwordNode.blur(() => validate3());

    const validate3 = function () {
        if (!passwordNode.val().match(passwordPattern)) {
            errorNode3.text("please enter valid password!");
            return false;
        }
        errorNode3.text("");
        return true;
    }

    confirmPassNode.blur(() => validate4());

    const validate4 = function () {
        if (passwordNode.val() != confirmPassNode.val()) {
            errorNode4.text("password not matched!");
            return false;
        }
        errorNode4.text("");
        return true;
    }

    function validateAll() {
        const result1 = validate1();
        const result2 = validate2();
        const result3 = validate3();
        const result4 = validate4();
        return result1 && result2 && result3 && result4;
    }
});
