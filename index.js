const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pass1 = document.getElementById("pass1")
let pass2 = document.getElementById("pass2")


function validatePassword(password){
    const hasUpperCase = /[A-Z]/.test(password) 
    const hasLowerCase =  /[a-z]/.test(password) 
    const hasNumber = /[0-9]/.test(password)
    const hasSpecial = /[~`!@#$%^&*()_\-+={[}\]|:;"'<>,.?/]/.test(password)

    return hasUpperCase && hasLowerCase && hasNumber && hasSpecial
}


function generateValidPassword() {
    let password = ""

    while (true) {
        password = ""

        for (let i = 0; i < 12; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length)
            password += characters[randomIndex]
        }

        if (validatePassword(password)) {
            return password
        }
    }
}

function generatePasswords(){
    pass1.textContent = generateValidPassword()
    pass2.textContent = generateValidPassword()
    }
    


