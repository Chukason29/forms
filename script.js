"use strict"
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
const gender = document.querySelector("input[name=gender]:checked")
const personalSubmit = document.getElementById("personal-submit")

const capitals = document.getElementById("capitals")
const lowers = document.getElementById("lowers")
const number = document.getElementById("number")
const specials = document.getElementById("specials")
const length = document.getElementById("length")
var emailFlag = 0
var passwordFlag = 0
var nameFlag = 0

const flagArray = []
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
        return 0
    }else{
        element.innerText = failure
        element.classList.add("failure")
        element.classList.remove("success")
        return 1
    }
}

const emailChecker = (email) =>{
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,4}$/
    const message = emailRegex.test(email) ? 1 : 0
    return message
}
const nameChecker = (name) =>{
    const nameRegex = /^[a-z]+[a-z_' -]{4,29}$/i
    const message = nameRegex.test(name) ? 1 : 0
    return message
}

const passwordChecker = (password) => {
    let innerPass = 0
    const passwordCases = (element, regex) =>{
        if(regex.test(password)){
            element.classList.add("success")
            element.classList.remove("failure")
            innerPass = 1
        }else{
            element.classList.add("failure")
            element.classList.remove("success")
            innerPass = 0
        }
    }
    // for upper cases
    passwordCases(capitals, /[A-Z]/)

    //for lowercases
    passwordCases(lowers, /[a-z]/)

    //for numbers
    passwordCases(number, /[0-9]/)

    // for specials
    passwordCases(specials, /[\@\$\+\/\_\.]/)
    // for length
    if (innerPass === 1 && password.length >= 8) {
        length.classList.remove("failure")
        length.classList.add("success")
        passwordFlag = 1
    }else{
        length.classList.remove("success")
        length.classList.add("failure")
        innerPass = 0
        passwordFlag = 0
    }
}
const disableSubmit = () => {
    if (emailFlag == 1 && nameFlag == 1 && passwordFlag == 1 && gender.value != null){
        personalSubmit.removeAttribute("disabled")
        personalSubmit.classList.remove("disabled")
    }else{
        personalSubmit.setAttribute("disabled", "")
        personalSubmit.classList.add("disabled")
    }
}
personalEmail.addEventListener("input", () =>{
    const element = document.querySelector("#personal-email ~ p")
    if(!inputStatusMessage(element, emailChecker(personalEmail.value), "valid email", "invalid email")){
        emailFlag = 1
    }
    disableSubmit()
})
personalName.addEventListener("input", () =>{
    const element = document.querySelector("#personal-name ~ p")
    if(!inputStatusMessage(element, nameChecker(personalName.value), "valid name", "invalid name")){
        nameFlag = 1
    }
    disableSubmit()
})
personalPassword.addEventListener("input", () =>{
    const element = document.querySelector("#personal-password ~ p")
    document.querySelector("form ul").classList.remove("hide")
    passwordChecker(personalPassword.value)
})
personalPassword.addEventListener("focusout", ()=>{
    document.querySelector("form ul").classList.add("hide")
})
