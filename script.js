let user_password = document.querySelector("#user_password");
let confirm_password = document.querySelector("#confirm_password");

function checkPassword() {
    if (user_password != confirm_password) {
        confirm_password.setCustomValidity("Passwords do not match");
    } else {
        confirm_password.setCustomValidity("");
    }
    confirm_password.reportValidity();
}

confirm_password.addEventListener('keyup', checkPassword);