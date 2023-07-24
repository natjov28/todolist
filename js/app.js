'use strict';
const KEY_ENTER = 13
document.addEventListener("DOMContentLoaded", () => {
    const newTodoElement = document.querySelector(".new-todo")
    const todoListElement = document.querySelector(".todo-list")
    const footerElement = document.querySelector(".footer")
    const todoCountElement =document.querySelector(".todo-count strong")
    const clearCompletedElement = document.querySelector(".clear-completed")

   const refreshFooter = () => {
      if (todoListElement.children.length === 0) {
        footerElement.style.display = "none"         //prekrizeno i nije prekrizeno
      } else {
        footerElement.style.display =""
      }
  /*
      let todoCounter = 0                                      // brojac djece u listi
      for (const todoListItem of todoListElement.children) { 
         if (!todoListItem.classList.contains("completed")) {
          todoCounter++
         }

      }
      */
      let todoCounter = todoListElement.querySelectorAll("li:not(.completed)").length
      todoCountElement.innerText = todoCounter

      let completedCounter = todoListElement.querySelectorAll("li.completed").length

        if(completedCounter === 0){
          clearCompletedElement.style.display = "none"

        } else {
          clearCompletedElement.style.display =""
        }
        }
        refreshFooter()

    const addCallbacksForLi = (liElement) => {
          // console.log(liElement.innerHTML) //pokazuje nam sve html elemente kad upisemo novi element
          const checkboxElement = liElement.querySelector(".toggle")
          const destroyButtonElement = liElement.querySelector(".destroy")
          checkboxElement.addEventListener("change", () => {
          if (checkboxElement.checked) {
            liElement.classList.add("completed")
          }else {
            liElement.classList.remove("completed")

            refreshFooter()
          }

           destroyButtonElement.addEventListener("click", () => {
              liElement.remove()
           })
           refreshFooter()

          })
           
    }





    newTodoElement.addEventListener("keypress", (event) => {
      if (event.which === KEY_ENTER && newTodoElement.value !== "") { // kad je stisnut enter i (&&) kad je tekst u upisan u okvir ulazimo u if
        const newButtonElement = document.createElement("button")     // linija 8 i 9 jednaka je <button  class="destroy"  ></button> u htmlu
        newButtonElement.classList.add("destroy") 

        const newLabelElement = document.createElement("label")  // linija 11 i 12 jednaka je <label>Taste JavaScript</label> u htmlu
        newLabelElement.appendChild(
            document.createTextNode(newTodoElement.value)
        )
        const newInputCheckbox = document.createElement("input")// linija 15,16,17 jednaka je <input class="toggle" type="checkbox"> u htmlu
        newInputCheckbox.type ="checkbox"
        newInputCheckbox.classList.add("toggle")

      

        const newDivElement = document.createElement("div") // linija 19 do 23 prikazuje element div u htmlu s djecom istim redoslijedom input,label, buton
        newDivElement.classList.add("view")
        newDivElement.appendChild(newInputCheckbox)
        newDivElement.appendChild(newLabelElement)
        newDivElement.appendChild(newButtonElement)

        const newLiElement = document.createElement("Li")
        newLiElement.appendChild(newDivElement)
        addCallbacksForLi(newLiElement)

        todoListElement.prepend(newLiElement)
        newTodoElement.value = ""


        refreshFooter()
      }
        //console.log(event.which)
    })
     clearCompletedElement.addEventListener("click", (event) => {
      const completedLiElements = todoListElement.querySelectorAll("li.completed")
      for(const completedLiElement of completedLiElements) {
        completedLiElement.remove()
      }
      refreshFooter()
     })  




});


//<button  class="destroy"  ></button>

console.log(find_max([2, 3 , 5,9,-3,7]))

function find_max(nums) {
   let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
   for (let num of nums) {
   if (num > max_num) {
  max_num = num
   }
   }
   return max_num;
   }
