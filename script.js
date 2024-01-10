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
const gender = document.querySelector(".radios > div > *")

const capitals = document.getElementById("capitals")
const lowers = document.getElementById("lowers")
const number = document.getElementById("number")
const specials = document.getElementById("specials")
const length = document.getElementById("length")

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
    const nameRegex = /^[a-z]+[a-z_' -]{4,29}$/i
    return message = nameRegex.test(name) ? 1 : 0
}

const passwordChecker = (password) => {
    const passwordCases = (element, regex) =>{
        if(regex.test(password)){
            element.classList.add("success")
            element.classList.remove("failure")
        }else{
            element.classList.add("failure")
            element.classList.remove("success")
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
    if (password.length >= 8) {
        length.classList.remove("failure")
        length.classList.add("success")
    }else{
        length.classList.remove("success")
        length.classList.add("failure")
    }
}
personalEmail.addEventListener("input", () =>{
    const element = document.querySelector("#personal-email ~ p")
    inputStatusMessage(element, emailChecker(personalEmail.value), "valid email", "invalid email")
})
personalName.addEventListener("input", () =>{
    //event.preventDefault()
    const element = document.querySelector("#personal-name ~ p")
    inputStatusMessage(element, nameChecker(personalName.value), "valid name", "invalid name")
})
personalPassword.addEventListener("input", () =>{
    const element = document.querySelector("#personal-password ~ p")
    document.querySelector("form ul").classList.remove("hide")
    passwordChecker(personalPassword.value)
})
personalPassword.addEventListener("focusout", ()=>{
    document.querySelector("form ul").classList.add("hide")
})
gender.addEventListener("click", ()=>{
    const genderValue = document.querySelector(".radios input[name=gender]").value
    console.log(genderValue);
})