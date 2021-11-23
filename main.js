// document.getElementById("yo").innerText = 4
// let my_age =31
// console.log(my_age)
// let myAge = 31
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)
// let bonusPoint = 50
// console.log(bonusPoint)
// bonusPoint = bonusPoint + 50
// console.log(bonusPoint)
// bonusPoint = bonusPoint - 75
// console.log(bonusPoint)
// bonusPoint = bonusPoint + 45
// console.log(bonusPoint)

// let counter = 0

// function increment() {
    
//     counter = counter + 1
//     document.getElementById("yo").innerText = counter
// }


// function arosh(){
//     console.log(42)
// }

// arosh()


// let lap1 = 34
// let lap2 = 43
// let lap3 = 23

// function lapTime() {
//     lapTime = lap1 + lap2 + lap3
//     console.log(lapTime)
// }

// lapTime()

// let lapsCompleted = 0

// function incr() {
//     lapsCompleted = lapsCompleted + 1
// }

// incr()
// incr()
// incr()
// console.log(lapsCompleted)

let count = 0
function increment() {
    	count = count +1
        document.getElementById("yo").innerText = count
}

function reset() {
    count = 0
    document.getElementById("yo").innerText = count
}

function off() {
    if (count > 0) {
        count = count -1
        document.getElementById("yo").innerText = count
      }
      else {
          alert('No passengers in the train')
      }
}

// function save() {
//     console.log(count)
// }

let welcomeEl = document.getElementById("welcome-el")
let name = "Arosh "
let greeting = "Welcome to the passenger count app!!"
let emoji = ' tata'
// greeting = greeting + emoji
welcomeEl.innerText = welcomeEl.innerText + "tata"

// }

// let name = 'Arosh'
// let greeting = 'Hi, My name is '

// let myGreeting = greeting + name
// console.log(myGreeting)