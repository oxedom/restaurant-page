
export default function menu() {


    const content = document.createElement('div')
    const mainContainer = document.createElement('main')
    const header = document.createElement('header')
    const section = document.createElement('section')

    //Header
    const h2 = document.createElement('h2')
    h2.innerText = "MENU"
    header.append(h2)
    header.classList.add('centerFlex', 'header')

    //TABLE OF FOOD
    const table = document.createElement('table')

    const item1 = 'Sweet Cream - Hummus and IceCream | 55'
    const item2 = 'Pain by farts - Hummus and ten boiled eggs | 49'
    const item3 = 'Pain by farts - Hummus and ten boiled eggs | 49'

    const tr1 = document.createElement('tr')
    const td1 = document.createElement('td')
    td1.innerText = item1
    tr1.append(td1)

    const tr2 = document.createElement('tr')
    const td2 = document.createElement('td')
    td2.innerText = item2
    tr2.append(td2)

    const tr3 = document.createElement('tr')
    const td3 = document.createElement('td')
    td3.innerText = item3
    tr3.append(td3)


    table.append(tr1, tr2, tr3)
    table.classList.add('table')

    section.classList.add('centerFlex')
    section.append(table)
    content.append(header, section)






    return content

}



