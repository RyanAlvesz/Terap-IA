'use strict'

const username = document.getElementById('user')
const password = document.getElementById('password')
const loginButton = document.getElementById('login-button')
const loadText = document.getElementById('load-animation')

let users

const getUsers = async() => {

    const url = 'https://back-login.vercel.app/usuarios'
    const response = await fetch(url)
    const data = await response.json()
    return data

}

const loginValidation = () => {

    let validation = false

    users.forEach((user)=>{
        
        if(
            username.value.toUpperCase() == user.nome.toUpperCase() && 
            password.value.toUpperCase() == user.senha.toUpperCase()
        ){
            localStorage.setItem('user', user.nome)
            validation = true
        }

    })

    return validation

}

const login = () => {

    let validation = loginValidation()

    if(validation){

        window.location = './src/pages/home.html'

    }else{

        Swal.fire({
            position: 'center',
            timer: 3000,
            icon: 'warning',
            iconColor: '#272523',
            heightAuto: false,
            showConfirmButton: false,
            width: '28rem',
            padding: '0 0 28px 0',
            title: '<p class="text-4xl font-standard text-dark-gray"> Invalid user or password </p>',
            html: "<p class='text-xl font-standard text-dark-gray'> I'll sue you if you step on my lawn </p>"
        })

    }


}

const loadAnimation = async() => {

    let time = 1000

    for (let text of loadText.children){

        setTimeout(() => {
            if(text.classList.contains('opacity-0'))
                text.classList.remove('opacity-0')
            else
                text.classList.add('opacity-0')
        }, time);

        time+=1000

    }

    time = 1000

}

const enableAnimation = async() => {

    let time = 0, loadAnimationTime = loadText.children.length * 1000

    for(let i = 0; i < 1000; i++){

        setTimeout(() => {
            loadAnimation()
        }, time);
        
        time+=loadAnimationTime

    }

}

loginButton.addEventListener('click', login)
username.addEventListener('keypress', (e) => { if(e.key === 'Enter') {login()} })
username.addEventListener('keypress', (e) => { if(e.key === 'Enter') {login()} })
password.addEventListener('keypress', (e) => { if(e.key === 'Enter') {login()} })
window.addEventListener('load', async() => {
    enableAnimation()
    users = await getUsers()    
})