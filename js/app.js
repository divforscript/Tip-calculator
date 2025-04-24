const rootVar = document.documentElement.style;
const peopleZero = document.querySelector("#people-zero");

let pressedKey = ""
let inputStr = ""
let inputNum = 0

// FUNCTIONS
// Both: bill-input-wrapper and people-input-wrapper
const handleInitialZero = (event,pressKey,inputStr,inputNum) => {
  //for onkeydown events
  if(pressKey==="." && inputNum===0){
    event.target.value = "0"
    return
  }

  if(pressKey==="0" && (inputStr==="" || inputStr==="0")){
    event.target.value = ""
  }
}


const handleNotNumberInput = (number,alertDiv,inputFocus) => {
  //for onkeyup events
  if(!(number+1)||number<0) {
    alertDiv.classList.remove("hidden-div")
    rootVar.setProperty(inputFocus,"var(--errorColor)")
    return
  } 
  
  alertDiv.classList.add("hidden-div")
  rootVar.setProperty(inputFocus,"var(--okColor)")
  
}


// Once: people-input-wrapper
const handleZeroPeople = (number,alertDiv) => {
  if(number===0) {
    alertDiv.classList.remove("hidden-div")
    peopleZeroErrorFlag = 1
    // rootVar.setProperty(inputFocus,"var(--errorFocus)")
    return
  }
  alertDiv.classList.add("hidden-div")
  peopleZeroErrorFlag = 0
  // rootVar.setProperty(inputFocus,"var(--okFocus)")
}

const handleNonInteger = (number,alertDiv) => {

  if(number<0 || (number !== Math.floor(number))) {
    alertDiv.classList.remove("hidden-div")
    // rootVar.setProperty(inputFocus,"var(--errorFocus)")
    peopleNotNumberErrorFlag = 1
    return
  }
  
  
  alertDiv.classList.add("hidden-div")
  peopleNotNumberErrorFlag = 0
  // rootVar.setProperty(inputFocus,"var(--okFocus)")
}



// SECTION: bill-input-wrapper
const billInputWrapper = document.querySelector("#bill-input-wrapper");
const billNotNumber = document.querySelector("#bill-not-number")
const billMount = document.querySelector("#bill-mount");



billInputWrapper.onclick = () => {
  billMount.focus()
}

billMount.onkeydown = (event) => {
  
  pressedKey = event.key
  inputStr = event.target.value
  inputNum = Number(inputStr)

  handleInitialZero(event,pressedKey,inputStr,inputNum)
}

billMount.onkeyup = (event) => {

  pressedKey = Number(event.key)
  inputStr = event.target.value
  inputNum = Number(inputStr)

  handleNotNumberInput(inputNum,billNotNumber,"--billBorderColor")
}



// SECTION: people-input-wrapper
const peopleInputWrapper = document.querySelector("#people-input-wrapper");
// const peopleZero = document.querySelector("#people-zero");
const peopleNotNumber = document.querySelector("#people-not-number")
const peopleNum = document.querySelector("#people-num");
let peopleZeroErrorFlag = 0
let peopleNotNumberErrorFlag = 0


peopleInputWrapper.onclick = () => {
  peopleNum.focus()
}


peopleNum.onkeydown = (event) => {
  
  pressedKey = event.key
  inputStr = event.target.value
  inputNum = Number(inputStr)

  handleInitialZero(event,pressedKey,inputStr,inputNum)
}


peopleNum.onkeyup = (event) => {

  pressedKey = Number(event.key)
  inputStr = event.target.value
  inputNum = Number(inputStr)

  console.log(inputStr)
  console.log(inputNum)

  handleNotNumberInput(inputNum,peopleNotNumber,"--peopleBorderColor")

  handleZeroPeople(inputNum,peopleZero)

  handleNonInteger(inputNum,peopleNotNumber)

  peopleZeroErrorFlag || peopleNotNumberErrorFlag ? rootVar.setProperty("--peopleBorderColor","var(--errorColor)") : rootVar.setProperty("--peopleBorderColor","var(--okColor)")
  

}

















// INITIAL VERSION
// const rootVar = document.documentElement.style;
// const peopleZero = document.querySelector("#people-zero");

// // FUNCTIONS
// const handleInitialZero = function (event,inputType) {

//   const pressedKey = Number(event.key)

//   const billInputStr = event.target.value
//   const billInput = Number(billInputStr)

//   console.log(billInputStr)

  
//   if(pressedKey + billInput === 0) {
//     event.target.value = ""

//     if(inputType === "people"){
//       peopleZero.classList.remove("hide-div")
//       rootVar.setProperty("--peopleFocusBorderColor","var(--errorFocus)")
//     }

//     return
//   }

//   if(billInputStr === "0"){
//     event.target.value = billInputStr.replace("0","")
//     peopleZero.classList.add("hide-div")
//     rootVar.setProperty("--peopleFocusBorderColor","var(--okFocus)")
//   }

// } 


// const handleNotNumbers = function (event,currProp,currentErrorDiv) {

//   let input = Number(event.target.value)
//   console.log(input)

//   let currentProperty = "--peopleFocusBorderColor"
//   if(currProp === "bill") currentProperty = "--billFocusBorderColor"

//   if(input >= 0){
//     rootVar.setProperty(currentProperty,"var(--okFocus)")
//     currentErrorDiv.classList.add("hide-div")
//     return
//   }

//   rootVar.setProperty(currentProperty,"var(--errorFocus)")
//   currentErrorDiv.classList.remove("hide-div")

// }



// // Handle number inputs behavior
// const billInputWrapper = document.querySelector("#bill-input-wrapper");
// const billNotNumber = document.querySelector("#bill-not-number")
// const billMount = document.querySelector("#bill-mount");


// billInputWrapper.onclick = () => {
//   billMount.focus()
// }

// billMount.onkeydown = (event) => {
//   handleInitialZero(event,"bill")
// }

// billMount.onkeyup = (event) => {
//   handleNotNumbers(event,"bill",billNotNumber)
// }




// const peopleInputWrapper = document.querySelector("#people-input-wrapper");
// // const peopleZero = document.querySelector("#people-zero");
// const peopleNotNumber = document.querySelector("#people-not-number")
// const peopleNum = document.querySelector("#people-num");

// peopleInputWrapper.onclick = () => {
//   peopleNum.focus()
// }

// peopleNum.onkeydown = (event) => {
//   handleInitialZero(event,"people")
// }

// peopleNum.onkeyup = (event) => {
//   handleNotNumbers(event,"people",peopleNotNumber)
// }