let count = 0
function increment() {
    	count += 1
        document.getElementById("yo").innerText = count
}

function reset() {
    count = 0
    document.getElementById("yo").innerText = count
    let prev_saves = document.getElementById("save-el")
    prev_saves.innerText = "Previous Saves : "
}

function off() {
    if (count > 0) {
        count -= 1
        document.getElementById("yo").innerText = count
      }
      else {
          alert('No passengers in the train')
      }
}

function save() {
    let saveEl  = document.getElementById("save-el")
    if (count > 0) {
       let text = count + " - "
       saveEl.innerText += text}

    else {
        alert('No passengers in the train')
       }
    }

let top_message = document.getElementById("topmsg")
let namee = "Hello Arosh"
let greet = " Welcome Back !!"

top_message.innerText =  namee + greet

