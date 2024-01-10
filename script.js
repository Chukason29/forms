// collecting DOM data

const personalSection = document.getElementById("personal")
const companySection = document.getElementById("company")
const personalForm = document.getElementById("personal-form")
const companyForm = document.getElementById("company-form")
const personalEmail = document.getElementById("personal-email")
const personalName = document.getElementById("personal-name")
const personalPassword = document.getElementById("personal-password")
const companyEmail = document.getElementById("company-email")
const companyName = document.getElementById("company-name")
const companyPassword = document.getElementById("company-password")

const hide = (element) =>{
    element.classList.add("hide")
}
const show = (element) => {
    element.classList.remove("hide")
}

personalSection.addEventListener("click", () => {
    show(personalForm)
    hide(companyForm)
    companySection.classList.remove("active-section")
    personalSection.classList.add("active-section")
})
companySection.addEventListener("click", () => {
    show(companyForm)
    hide(personalForm)
    personalSection.classList.remove("active-section")
    companySection.classList.add("active-section")
})
const inputStatusMessage = (element, message, success, failure) => {
    if(message){
        element.innerText = success
        element.classList.add("success")
        element.classList.remove("failure")
    }else{
        element.innerText = failure
        element.classList.add("failure")
        element.classList.remove("success")
    }
}

const emailChecker = (email) =>{
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,4}$/
    return message = emailRegex.test(email) ? 1 : 0
}
const nameChecker = (name) =>{
    const nameRegex = /^[a-z]+[a-z_'- ]{4,29}$/i
    return message = nameRegex.test(name) ? 1 : 0
}
const passwordChecker = (password) => {
    const passwordRegex = /^[@a-zA-Z0-9_. ]/
    return message =passwordRegex.test(password) ? 1 : 0
}
personalEmail.addEventListener("keypress", (event) =>{
    const element = document.querySelector("#personal-email ~ p")
    inputStatusMessage(element, emailChecker(personalEmail.value), "valid email", "invalid email")
})
personalName.addEventListener("keypress", (event) =>{
    const element = document.querySelector("#personal-name ~ p")
    inputStatusMessage(element, nameChecker(personalName.value), "valid name", "invalid name")
})
