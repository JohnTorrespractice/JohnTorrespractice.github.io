const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('Submit', (e) =>{
    let message = []
    
    if(password.value === '' || password.value == null){
        message.push("Password is required")
    }
    if(message.length > 0){
        e.preventDefault()
        errorElement.innerText = message.join(', ')
    }
})