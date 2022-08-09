
export default function home() {
    
    const content = document.createElement('div')
    const mainContainer = document.createElement('main')
    const header = document.createElement('header')
    const section = document.createElement('section')
    const article_summary = document.createElement('article')
    const article_hours =  document.createElement('article')
    const article_location = document.createElement('article')

    content.innerText = 'we got mail'
    content.append(mainContainer,header)


    console.log('I get called from home.js!');
    return content
    
  }



