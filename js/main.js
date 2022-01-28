const signupForm = document.querySelector("#signup-form");

const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const username = document.querySelector("#username");
const id = document.querySelector("#id");
const date = document.querySelector("#date");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const url = document.querySelector("#url");

const firstNameError = document.querySelector("#first-name-error");
const lastNameError = document.querySelector("#last-name-error");
const usernameError = document.querySelector("#username-error");
const idError = document.querySelector("#id-error");
const dateError = document.querySelector("#date-error");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");
const confirmPasswordError = document.querySelector("#confirm-password-error");
const urlError = document.querySelector("#url-error");

const firstNameIcon = document.querySelector("#done-icon-1");
const lastNameIcon = document.querySelector("#done-icon-2");
const usernameIcon = document.querySelector("#done-icon-3");
const idIcon = document.querySelector("#done-icon-4");
const dateIcon = document.querySelector("#done-icon-5");
const emailIcon = document.querySelector("#done-icon-6");
const passwordIcon = document.querySelector("#done-icon-7");
const confirmPasswordIcon = document.querySelector("#done-icon-8");
const urlIcon = document.querySelector("#done-icon-9");

const firstNameErrorIcon = document.querySelector("#error-icon-1");
const lastNameErrorIcon = document.querySelector("#error-icon-2");
const usernameErrorIcon = document.querySelector("#error-icon-3");
const idErrorIcon = document.querySelector("#error-icon-4");
const dateErrorIcon = document.querySelector("#error-icon-5");
const emailErrorIcon = document.querySelector("#error-icon-6");
const passwordErrorIcon = document.querySelector("#error-icon-7");
const confirmPasswordErrorIcon = document.querySelector("#error-icon-8");
const urlErrorIcon = document.querySelector("#error-icon-9");

function validateFirstName() {
  const firstNameValue = document.querySelector("#first-name").value;
  if (!(/^[a-zA-Z]+$/.test(firstNameValue) || firstNameValue.length == 0)) {
    firstNameError.innerText = "Only alphabets are allowed";
    firstNameIcon.style.display = "none";
    firstNameErrorIcon.style.display = "inline-block";
  } else if (firstName.value == "") {
    firstNameError.innerText = "Required field";
    firstNameErrorIcon.style.display = "inline-block";
    firstNameIcon.style.display = "none";
  } else {
    firstNameErrorIcon.style.display = "none";
    firstNameIcon.style.display = "inline-block";
    firstNameError.innerText = "";
  }
}
function validateLastName(){
    const lastNameValue = document.querySelector('#last-name').value;
    if(!(/^[a-zA-Z]+$/.test(lastNameValue) || lastNameValue.length == 0)) {
        lastNameError.innerText = 'Only alphabets are allowed';
        lastNameIcon.style.display = 'none';
        lastNameErrorIcon.style.display = 'inline-block';
    } else if(lastName.value == "") {
        lastNameError.innerText = 'Required field';
        lastNameErrorIcon.style.display = 'inline-block';
        lastNameIcon.style.display = 'none';
    } else {
        lastNameError.innerText = '';
        lastNameErrorIcon.style.display = 'none';
        lastNameIcon.style.display = 'inline-block';
    }
}
function validateUsername(){
    if(!username.validity.valid){
        usernameIcon.style.display = 'none';
        usernameErrorIcon.style.display = 'inline-block';
        if(username.validity.tooShort){
            usernameError.innerText = 'Minimum 4 characters required'
        } else {
            usernameError.innerText = 'Required field';
        }
    } else {
        usernameError.innerText = '';
        usernameErrorIcon.style.display = 'none';
        usernameIcon.style.display = 'inline-block';
    }
}
function validateId(){
    const idValue = document.querySelector('#id').value;
    if(idValue.length <= 10){
        idError.innerText = 'Minimum 11 digits required';
        idIcon.style.display = 'none';
        idErrorIcon.style.display = 'inline-block';
    }else if(idValue.length > 11){
        idError.innerText = 'Maximum 11 digits allowed';
        idIcon.style.display = 'none';
        idErrorIcon.style.display = 'inline-block';
    } else {
        idError.innerText = '';
        idErrorIcon.style.display = 'none';
        idIcon.style.display = 'inline-block';
    }
    if(id.value == ''){
        idError.innerText = 'Required field';
    }
}
function validateDate(){
    if(!date.validity.valid){
        dateError.innerText = '';
        if(date.validity.typeMismatch){
            dateError.innerText = '';
        } else {
            dateError.innerText = 'Required field';
        }
    } else {
        dateError.innerText = '';
    }
}
function validateEmail(){
    if(!email.validity.valid){
        emailIcon.style.display = 'none';
        emailErrorIcon.style.display = 'inline-block';
        if(email.validity.typeMismatch){
            emailError.innerText = 'Enter valid E-Mail';
        } else {
            emailError.innerText = 'Required field'
        }
    } else {
        emailError.innerText = '';
        emailErrorIcon.style.display = 'none';
        emailIcon.style.display = 'inline-block';
    }
}
function validatePassword(){
    if(!password.validity.valid){
        passwordIcon.style.display = 'none';
        passwordErrorIcon.style.display = 'inline-block';
        if(password.validity.tooShort){
            passwordError.innerText = 'Minimum 8 characters required';
        } else {
            passwordError.innerText = 'Required field';
        }
    } else {
        passwordError.innerText = '';
        passwordErrorIcon.style.display = 'none';
        passwordIcon.style.display = 'inline-block';
    }
}
function validateConfirmPassword(){
    const passwordValue = document.querySelector('#password').value;
    const confirmPasswordValue = document.querySelector('#confirm-password').value;
    if(confirmPasswordValue !== passwordValue){
        confirmPasswordError.innerText = 'Password does not match';
        confirmPasswordIcon.style.display = 'none';
        confirmPasswordErrorIcon.style.display = 'inline-block';
    } else {
        confirmPasswordError.innerText = '';
        confirmPasswordErrorIcon.style.display = 'none';
        confirmPasswordIcon.style.display = 'inline-block';
    }
}
function validateUrl(){
    if(!url.validity.valid){
        urlIcon.style.display = 'none';
        urlErrorIcon.style.display = 'inline-block';
        if(url.validity.typeMismatch){
            urlError.innerText = 'Enter valid URL';
        } else {
            urlError.innerText = 'Required field';
        }
    } else {
        urlError.innerText = '';
        urlErrorIcon.style.display = 'none';
        urlIcon.style.display = 'inline-block';
    }
}

firstName.addEventListener("input", () => {
  validateFirstName();
});
lastName.addEventListener("input", () => {
  validateLastName();
});
username.addEventListener('input', () => {
    validateUsername();
})
id.addEventListener('input', () =>{
    validateId();
})
date.addEventListener('input', () => {
    validateDate();
})
email.addEventListener('input', () => {
    validateEmail();
})
password.addEventListener('input', () => {
    validatePassword();
})
confirmPassword.addEventListener('input', () => {
    validateConfirmPassword();
})
url.addEventListener('input', () => {
    validateUrl();
})