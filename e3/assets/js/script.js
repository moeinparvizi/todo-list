const inp = document.querySelector('#input')
const bt = document.querySelector('#bt')
const ul = document.querySelector('#ul')
const close = document.querySelectorAll('#close')

bt.addEventListener('click', () => {
  if (inp.value) {
    inp.style.border = '2px solid #bf007e'
    const values = inp.value
    ul.innerHTML += `
        <li class="flex justify-between my-[5px] list-none">
          <div class="row cursor-pointer" id="check">
            <i onclick="checked(event)" class="bi bi-circle"></i>
            <a href="#" contenteditable>${values}</a>
          </div>
          <i id="close" onclick="removeLi(event)" class="bi bi-x cursor-pointer"></i>
        </li>
    `
    inp.value = ''
    inp.focus()
  } else {
    inp.style.border = '3px solid red'
  }
})

// close.forEach((val, index) => {
//   console.log(close[index])
//   close[index].addEventListener('click', () => {
//     document.querySelector('#ul').children.item(index).remove()
//   })
// });

const removeLi = (event) => {
  event.target.parentElement.remove()
}


const checked = (event) => {
  const i = event.target
  if (event.target.classList.contains('bi-circle')) {
    i.classList.remove('bi-circle')
    i.classList.add('bi-check2-circle')
    i.nextSibling.nextSibling.classList.add('line-through')
  } else {
    if (i.classList.contains('bi-check2-circle')) {
      i.classList.remove('bi-check2-circle')
      i.nextSibling.nextSibling.classList.remove('line-through')
    }
    i.classList.add('bi-circle')
  }
}
