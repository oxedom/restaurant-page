let content = document.getElementById('content')
let header = document.createElement('header')
let nav = document.createElement('nav')
let homeBtn = document.createElement('div')
let menuBtn = document.createElement('div')
let contactBtn =document.createElement('div')
let arrOfBtns = [homeBtn,contactBtn,menuBtn]
import './style.css';


arrOfBtns.forEach(btn => { 
    btn.classList.add('nav-btn')
    btn.innerText = 'lorem'}
    
    )
nav.append(homeBtn,menuBtn,contactBtn)

header.append(nav)
content.append(header)

