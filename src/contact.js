
export default function contact() {
    
  
    const content = document.createElement('div')
    const mainContainer = document.createElement('main')
    const header = document.createElement('header')
    const section = document.createElement('section')
 
    //Header
    const h2 = document.createElement('h2')
    h2.innerText = "Sam's hummus"
    header.append(h2)
    content.append(header)
    header.classList.add('contact-header', 'centerFlex')



    //Summary
    const pSummary = document.createElement('p')
    pSummary.innerText =
     `Sam's Hummus joint has been running since early 2013 
    and ever since then we can promise you that no other hummus 
    in the world will make you fart like Sam's! Hope to see you soon.
    `
    const imageHummus = new Image()
    imageHummus.src = image;
  
    article_summary.append(pSummary)
    article_summary.append(imageHummus)
    //Hours
    const weekHours = document.createElement('p')
    const fridayHours =  document.createElement('p')
    const saturdayHours = document.createElement('p')

    weekHours.innerText = `Open all Week from 10am - 19pm`
    fridayHours.innerText = `Open from 9am - 14pm`
    saturdayHours.innerText = `Closed, but don't forget to grab a take away 
    on friday!`

    article_hours.append(weekHours,fridayHours,saturdayHours)

    //Location
    const pLocation = document.createElement('p')
    const h4Location = document.createElement('h4')
    h4Location.innerText = 'You can find us at'

    pLocation.innerText = 'Ha-Dolfin St 1, Tel Aviv-Yafo, Israel '
    article_location.append(h4Location, pLocation)


    section.append(article_summary,article_hours,article_location)
    section.classList.add('centerFlex', 'contact-section')
    content.append(section)

    console.log('I get called from contact.js!');
    return content
    
  }



