
        const signupButton = document.getElementById("button_signup");
        const emailID = document.getElementById("email");
        const emailError = document.getElementById("email_error_msg")
        const passwordError = document.getElementById("pass_error_msg")
        const password = document.getElementById("password")

        
        

        const handleSignupClick = (event) => {
            event.preventDefault();

            let isEmailValid=false
            let isPasswordValid = false
        
            let emailEntered = emailID.value;
            let passwordEntered = password.value;


            if(emailEntered.includes("@") && (emailEntered.includes(".in")|| emailEntered.includes(".com"))){
                isEmailValid = true 
                } else {
                    isEmailValid = false
                }
            if(!isEmailValid) {
                emailError.classList.add("show")
            }    else {
                emailError.classList.remove("show")
                }
            var numbers = /[0-9]/g;
           
                number.passwordEntered.remove("show");
                 number.passwordEntered.add("show");
                  }
            if(passwordEntered.length < 4 || passwordEntered.length > 12){
                isPasswordValid = false
                } else {
                isPasswordValid = true
                }
        
            if(!isPasswordValid){
                passwordError.classList.add("show")
                } else {
                passwordError.classList.remove("show")
                }
            
            }
        
        signupButton.addEventListener("click", handleSignupClick)           
            
        