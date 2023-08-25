// let button = document.querySelector("#btn");
let button = document.querySelectorAll('#bt')

button.forEach((val, index) => {
  val.addEventListener('click', () => {
    button.forEach((vali, i) => {
      console.log(vali, i)
      document.querySelectorAll('#para')[i].classList.remove('contentive')
      document.querySelectorAll('#para')[i].classList.add('hidden')
      document.querySelectorAll('#bt')[i].classList.remove('active')
    })
    let parag = document.querySelectorAll('#para')[index]
    parag.classList.add('contentive')
    parag.classList.remove('hidden')
    button[index].classList.add('active')
  })
})
