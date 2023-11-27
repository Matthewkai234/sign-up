const passwordInput = document.getElementById("Password");
let passwordError = document.getElementById("passwordError")
passwordInput.addEventListener("blur",()=>{
    if(passwordInput.value.length <8){
        passwordError.innerText="Password Required";
        passwordError.style.color="red";
    }
})
passwordInput.addEventListener("input",()=>{

    if(passwordInput.value.length === 0){
        passwordError.innerText = "Password is empty";
        passwordError.style.color = "red";
    }

    else if(passwordInput.value.length < 8){
        passwordError.innerText = "Your password must be at least 8 characters long";
        passwordError.style.color = "red";
    }

    else{
        passwordError.innerText = "";

    }


})

