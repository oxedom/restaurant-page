import './style.css';
//Hook to Inject Content
let content = document.getElementById('content')

//Creations of NavHeader
let header = document.createElement('header')
let nav = document.createElement('nav')
nav.classList.add('nav-bar', 'centerFlex')
//Creation of Btns
let homeBtn = document.createElement('div')
let menuBtn = document.createElement('div')
let contactBtn =document.createElement('div')
let arrOfBtns = [homeBtn,contactBtn,menuBtn]
    homeBtn.innerText = 'Home'
    menuBtn.innerText = 'Menu'
    contactBtn.innerText = 'Contact'
    arrOfBtns.forEach(btn => { 
         btn.classList.add('nav-btn')
        btn.addEventListener('click', e => {handleClick(e)})
        } )
    nav.append(homeBtn,menuBtn,contactBtn)

//Creation of Footer;
let footer = document.createElement('footer')
let spanOne = document.createElement('span')
let spanTwo = document.createElement('span')
let spanThree = document.createElement('span')
footer.append(spanOne,spanTwo,spanThree)
footer.classList.add('footer', 'centerFlex')

//Adds nav-btn class to each btn
header.append(nav)
content.append(header)
content.append(footer)


//HandleClick 
function handleClick(e){}
