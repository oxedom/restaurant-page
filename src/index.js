import './style.css';
import home from './home'
import menu from './home'
import contact from './contact'


let dom = function() {
    
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
    let arrOfBtns = [homeBtn,menuBtn, contactBtn]
        homeBtn.innerText = 'Home'
        menuBtn.innerText = 'Menu'
        contactBtn.innerText = 'Contact'
        //Giving Btns ID's from 1-3, Class of nav-btn and BindingHandleClick

        for (let index = 0; index < 3; index++) {
            arrOfBtns[index].setAttribute('id', index+1)
            arrOfBtns[index].classList.add('nav-btn')
            arrOfBtns[index].addEventListener('click', e => {handleClick(e)})
        }
        
        nav.append(homeBtn,menuBtn,contactBtn)
   
    let main = document.createElement('main')    
    //Creation of Footer;
    let footer = document.createElement('footer')
    let spanOne = document.createElement('span')
    let spanTwo = document.createElement('span')
    let spanThree = document.createElement('span')
    footer.append(spanOne,spanTwo,spanThree)
    footer.classList.add('footer', 'centerFlex')

    //Appending Default Content to index file 
    header.append(nav)
    content.append(header)
    content.append(main)
    content.append(footer)
    
    //Still need to create contactPage and MenuPage !!
    const homePage = home()
    const logic = { selectedPage: homePage}
        
    //HandleClick 
    function handleClick(e){
        //Removes the Page element before appending new page to dom
        logic.selectedPage.remove()

        //If Home Button clicked
        if(parseInt(e.target.id) === 1)  { 
        logic.selectedPage = homePage
        main.append(homePage);};
       
        //If Home Menu clicked
       if(parseInt(e.target.id) === 2) 

       { console.log('Menu');};


        //If Home Contact clicked
       if(parseInt(e.target.id) === 3) 
       { console.log('Contact');};
    }
    //Init for homepage
    handleClick({target: {id: 1}})
}()


