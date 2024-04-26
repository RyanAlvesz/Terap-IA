'use strict'

const username = localStorage.getItem('user')
const buttonScrollTop = document.getElementById('scroll-top')
const searchContainer = document.getElementById('search-container')
const searchBarContainer = document.getElementById('search-bar-container')
const searchBar = document.getElementById('search-bar')
const welcomeMessage = document.getElementById('welcome-message')

const scrollTop = () => {

    window.scroll({
        top: 0,
        behavior: 'smooth'
    })

}

const scrollItem = (container) => {

    setTimeout(() => {
        window.scroll({
            top: container.getBoundingClientRect().top + window.scrollY - 15,
            behavior: 'smooth'
        })
    }, 4000)

}

const setSearchBarBackground = () => {

    if(searchContainer.scrollHeight > screen.height * 0.85){
        searchBarContainer.classList.add('bg-dark-gray')
    }

}

const removeWelcomeMessage = () => {
    
    
    setTimeout(() => {
        welcomeMessage.classList.add('opacity-0')
        setTimeout(() => {
            welcomeMessage.classList.add('hidden')
            welcomeMessage.classList.remove('flex')
        }, 1000)
    }, 1000)

}

const addAsnwerSection = () => {

    searchContainer.classList.remove('hidden')
    searchContainer.classList.add('flex')

}

const createMessage = (info, loading) => {

    const message = document.createElement('div')
    message.classList.add('grid', 'grid-cols-[3rem_1fr]', 'gap-4', 'max-sm:grid-cols-[2rem_1fr]')

    const icon = document.createElement('img')
    icon.classList.add('rounded-full', 'object-cover', 'duration-200', 'ease-linear')
    icon.src = info.icon
    icon.alt = info.user

    const div = document.createElement('div')
    div.classList.add('grid', 'grid-rows-[3rem_auto]', 'items-center', 'text-white', 'gap-2', 'max-sm:grid-rows-[2rem_auto]')

    const name = document.createElement('h2')
    name.classList.add('text-3xl', 'font-typewriter', 'tracking-widest', 'text-light-gray', 'duration-200', 'ease-linear', 'max-sm:text-2xl')
    name.textContent = info.user

    const messageText = document.createElement('p')
    messageText.classList.add('text-xl', 'duration-200', 'ease-linear', 'max-sm:text-lg')
    messageText.textContent = info.message

    message.replaceChildren(icon, div)
    div.replaceChildren(name, messageText)

    if(loading){

        messageText.classList.add('opacity-0')
        icon.classList.add('opacity-0')
        name.classList.add('opacity-0')
        setTimeout(() => {
            icon.classList.remove('opacity-0')
            name.classList.remove('opacity-0')
            setTimeout(() => {
                messageText.classList.remove('opacity-0')
            }, 1000)
        }, 3000)

    } else {

        messageText.classList.add('opacity-0')
        icon.classList.add('opacity-0')
        name.classList.add('opacity-0')
        setTimeout(() => {
            icon.classList.remove('opacity-0')
            name.classList.remove('opacity-0')
            setTimeout(() => {
                messageText.classList.remove('opacity-0')
            }, 1000)
        }, 1000)

    }

    return message 

}

let messages = [

    {
        user: username,
        message: 'What is the meaning of art?',
        icon: '../images/icon.jpeg'
    },
    {
        user: 'TerapIA',
        message: 'A smirk creeps onto this poet’s face Because it’s the worst men that I write best And so I enter into evidence My tarnished coat of arms My muses, acquired like bruises My talismans and charms The tick, tick, tick of love bombs My veins of pitch black ink All’s fair in love and poetry Sincerely, The Chairman of The Tortured Poets Departmen',
        icon: '../images/favicon.png'
    },
    {
        user: username,
        message: 'Qual o significado de arte?',
        icon: '../images/icon.jpeg'
    },
    {
        user: 'TerapIA',
        message: 'Um sorriso se insinua no rosto desta poeta Porque é sobre os piores homens que eu escrevo melhor. E então eu entro com evidências Meu brasão manchado Minhas musas, adquiridas como hematomas Meus talismãs e encantos O tique, tique, tique de bombas de amor Minhas veias de tinta preta Vale tudo no amor e na poesia… Atenciosamente, a presidenta do Departamento dos Poetas Torturados',
        icon: '../images/favicon.png'
    }

]   

const createAnswerContainer = (messages) => {

    const container = document.createElement('div')
    container.classList.add('grid', 'grid-cols-[1fr_1px_1fr]', 'h-fit', 'max-md:grid-cols-1')

    const line = document.createElement('div')
    line.classList.add('h-full', 'bg-white','max-md:hidden')

    const result = document.createElement('div')
    result.classList.add('flex', 'flex-col', 'gap-8', 'px-24', 'pb-8', 'max-md:px-16', 'max-sm:px-4')

    const resultado = document.createElement('div')
    resultado.classList.add('flex', 'flex-col', 'gap-8', 'px-24', 'pb-8', 'max-md:hidden')

    container.replaceChildren(result, line, resultado)
    result.replaceChildren(
        createMessage(messages[0]),
        createMessage(messages[1], true)
    )
    resultado.replaceChildren(
        createMessage(messages[2]),
        createMessage(messages[3], true)
    )

    return container

}

const setAsnwer = () => {

    removeWelcomeMessage()
    
    setTimeout(() => {
        addAsnwerSection()
        const answerContainer = createAnswerContainer(messages)
        searchContainer.appendChild(answerContainer)
        scrollItem(answerContainer)
        setSearchBarBackground()
    }, 2000)

}

const search = () => {

    let search = searchBar.value

}

buttonScrollTop.addEventListener('click', scrollTop)
searchBar.addEventListener('keypress', (e) => { if(e.key === 'Enter') {search()} })
window.addEventListener('load', () => {
    setSearchBarBackground()
    setAsnwer()

    setTimeout(() => {
        setAsnwer()
    }, 4000)
    
    setTimeout(() => {
        setAsnwer()
    }, 8000)

})

