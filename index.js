const input = document.querySelector(".input");
const output = document.querySelector(".addButton");
const container = document.querySelector(".container");
// id for each todo
let i = 0;
//To do Add button
output.addEventListener("click", (e) => {
  let newElem = document.createElement("div");
  let editElem = document.createElement("span");
  let delElem = document.createElement("span");
  e.preventDefault();
  // edit button
  editElem.innerHTML = "EDIT";
  editElem.classList.add("editButton");
  // delete button
  delElem.innerHTML = "DELETE";
  delElem.classList.add("deleteButton");
  // new todo
  newElem.innerHTML = `${input.value}`;
  newElem.setAttribute("id", i++);
  // cssText way of adding styles to an element
  newElem.style.cssText += `font-size: 3rem;
  font-weight: 50;
  margin: 1rem 0 3rem;
  text-align: center;
  color: rgb(255, 255, 255);
  font-family: "Bebas Neue", cursive;`;
  newElem.classList.add("item");

  newElem.append(editElem);
  newElem.append(delElem);
  container.insertAdjacentElement("afterbegin", newElem);
  container.classList.add("container");

  // edit btn on click
  editElem.addEventListener("click", (e) => {
    e.preventDefault();
    let editableId = editElem.parentElement.id;
    let editable = editElem.previousSibling.textContent;
    let newVal = prompt("enter what you need to update", editable);
    if (newVal !== "") {
      let newOne = document.getElementById(`${editableId}`);
      newOne.textContent = newVal.trim();
      newOne.append(editElem);
      newOne.append(delElem);
    } else {
      alert("You didn't updated any valid one");
    }
  });
  // delete button onclick
  delElem.addEventListener("click", () => {
    setTimeout(() => {
      delElem.parentElement.remove();
    }, 500);
  });
  // clear input field
  input.value = "";
});
//
