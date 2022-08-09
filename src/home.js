
export default function home() {
    
    const content = document.createElement('div')
    const mainContainer = document.createElement('main')
    const header = document.createElement('header')
    const section = document.createElement('section')
    const article_summary = document.createElement('article')
    const article_hours =  document.createElement('article')
    const article_location = document.createElement('article')

    const h1 = document.createElement('h1')
    h1.innerText = "Welcome to Sam's hummus"
    header.append(h1)
    content.append(header)


    console.log('I get called from home.js!');
    return content
    
  }



