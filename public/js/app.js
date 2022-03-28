// Validation -----------------------------------------------------------------------------
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Validation main form on Enter button press
        document.addEventListener("keypress", function (event) {
            if (event.target.className.includes("modal fade show")) {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    event.target.querySelector('button[type="submit"]').click()
                }
            }
        });

        // onInput and onBlur of each input validation
        const singleForms = document.getElementsByClassName('form-floating');
        const inputValidation = Array.prototype.filter.call(singleForms, function (form) {
            const input = form.querySelector('input');
            input.addEventListener('blur', function () {
                if (!input.value && input.id !== "password-confirmation-input") {
                    input.classList.add('is-invalid')
                }
            }, false);
            input.addEventListener('input', function () {
                input.classList.remove('is-valid', 'is-invalid')
                form.classList.add('was-validated')
            }, false);
        });
    }, false);
})();

// show/hide password button------------------------------------------------------------------
function handleShowHidePassword(event) {
    const input = document.getElementById(event.currentTarget.name);
    const icon = document.getElementById(`${event.currentTarget.name}-icon`)
    if (input.type === "password") {
        input.type = "text"
        icon.className = "fa icon-eye-open fa-eye"
        icon.title = "Hide your password"
    } else {
        input.type = "password"
        icon.title = "Show your password"
        icon.className = "fa icon-eye-close fa-eye-slash"
    }
}

// Validation main form on submit button click
function handleValidation(event, form) {
    event.preventDefault();
    event.stopPropagation();
    form.checkValidity() ? form.submit() : form.classList.add('was-validated')

}

// Validation of password confirm input
function handlePasswordConfirmValidation(password, passwordConfirm) {
    passwordConfirm.setCustomValidity(passwordConfirm.value !== password.value ? false : "")
}