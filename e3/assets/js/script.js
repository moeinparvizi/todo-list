const inp = document.querySelector("#input");
const bt = document.querySelector("#bt");
const ul = document.querySelector("#ul");
const close = document.querySelectorAll("#close");
let flagstorage = 0;

for (let i = 0; i < parseInt(sessionStorage.getItem("count")); i++) {
  ul.innerHTML += `
    <li class="flex justify-between my-[5px] list-none">
      <div class="row cursor-pointer" id="check">
        <i onclick="checked(event)" class="bi bi-circle"></i>
        <a href="#" contenteditable>${localStorage.getItem("inp" + i)}</a>
      </div>
      <i id="close" onclick="removeLi(event)" class="bi bi-x cursor-pointer"></i>
    </li>
  `;
}

// for (let x = 0; 90; x++) {
//   if (
//     ul.children[x].children[0].children[1].innerText == "null" ||
//     ul.children[x].children[0].children[1].innerText == ""
//   ) {
//     ul.children[x].remove();
//   }
// }

bt.addEventListener("click", () => {
  if (inp.value) {
    inp.style.border = "2px solid #bf007e";
    const values = inp.value;
    ul.innerHTML += `
        <li class="flex justify-between my-[5px] list-none">
          <div class="row cursor-pointer" id="check">
            <i onclick="checked(event)" class="bi bi-circle"></i>
            <a href="#" contenteditable>${values}</a>
          </div>
          <i id="close" onclick="removeLi(event)" class="bi bi-x cursor-pointer"></i>
        </li>
      `;
    localStorage.setItem("inp" + flagstorage, values);
    sessionStorage.setItem("count", localStorage.length);
    flagstorage++;
    inp.value = "";
    inp.focus();
  } else {
    inp.style.border = "3px solid red";
  }
});

const removeLi = (event) => {
  event.target.parentElement.remove();
  for (let i = 0; i < 20; i++) {
    const evalinner =
      event.target.parentElement.children[0].children[1].innerText;
    console.log(evalinner);
    if (evalinner == localStorage.getItem("inp" + i)) {
      localStorage.removeItem("inp" + i);
      sessionStorage.setItem("count", parseInt(localStorage.length) - 1);
    }
  }
};

const checked = (event) => {
  const i = event.target;
  if (event.target.classList.contains("bi-circle")) {
    i.classList.remove("bi-circle");
    i.classList.add("bi-check2-circle");
    i.nextSibling.nextSibling.classList.add("line-through");
  } else {
    if (i.classList.contains("bi-check2-circle")) {
      i.classList.remove("bi-check2-circle");
      i.nextSibling.nextSibling.classList.remove("line-through");
    }
    i.classList.add("bi-circle");
  }
};
