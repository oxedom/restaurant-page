
export default function contact() {


  const content = document.createElement('div')
  const header = document.createElement('header')
  const section = document.createElement('section')

  //Header
  const h2 = document.createElement('h2')
  h2.innerText = "Contact"
  header.append(h2)
  header.classList.add('centerFlex', 'header')

  //
  const form = document.createElement('form')
  const input = document.createElement('textarea')
  const btn = document.createElement('button')
  const h3 = document.createElement('h3')
  h3.innerText = "07-7776694"
  h3.style = 'text-align: center'

  input.setAttribute('placeholder', 'Your Complaint here...')
  btn.innerText = 'Send me'
  form.append(h3, input, btn)
  form.classList.add('form')



  section.append(form)
  section.classList.add('centerFlex')

  content.append(header, section)
  return content

}



