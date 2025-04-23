const rootVar = document.documentElement.style;
const peopleZero = document.querySelector("#people-zero");

// FUNCTIONS
const onKeyDownFunc = function (event,inputType) {

  const pressedKey = Number(event.key)

  const billInputStr = event.target.value
  const billInput = Number(billInputStr)

  console.log(billInputStr)

  
  if(pressedKey + billInput === 0) {
    event.target.value = ""

    if(inputType === "people"){
      peopleZero.classList.remove("hide-div")
      rootVar.setProperty("--peopleFocusBorderColor","var(--errorFocus)")
    }

    return
  }

  if(billInputStr === "0"){
    event.target.value = billInputStr.replace("0","")
    peopleZero.classList.add("hide-div")
    rootVar.setProperty("--peopleFocusBorderColor","var(--okFocus)")
  }

} 


const onKeyUpFunc = function (event,currProp,currentErrorDiv) {

  let input = Number(event.target.value)
  console.log(input)

  let currentProperty = "--peopleFocusBorderColor"
  if(currProp === "bill") currentProperty = "--billFocusBorderColor"

  if(input >= 0){
    rootVar.setProperty(currentProperty,"var(--okFocus)")
    currentErrorDiv.classList.add("hide-div")
    return
  }

  rootVar.setProperty(currentProperty,"var(--errorFocus)")
  currentErrorDiv.classList.remove("hide-div")

}



// Handle number inputs behavior
const billInputWrapper = document.querySelector("#bill-input-wrapper");
const billNotNumber = document.querySelector("#bill-not-number")
const billMount = document.querySelector("#bill-mount");


billInputWrapper.onclick = () => {
  billMount.focus()
}

billMount.onkeydown = (event) => {
  onKeyDownFunc(event,"bill")
}

billMount.onkeyup = (event) => {
  onKeyUpFunc(event,"bill",billNotNumber)
}




const peopleInputWrapper = document.querySelector("#people-input-wrapper");
// const peopleZero = document.querySelector("#people-zero");
const peopleNotNumber = document.querySelector("#people-not-number")
const peopleNum = document.querySelector("#people-num");

peopleInputWrapper.onclick = () => {
  peopleNum.focus()
}

peopleNum.onkeydown = (event) => {
  onKeyDownFunc(event,"people")
}

peopleNum.onkeyup = (event) => {
  onKeyUpFunc(event,"people",peopleNotNumber)
}

















// INITIAL VERSION
// // Handle number inputs behavior
// const rootVar = document.documentElement.style;

// const billInputWrapper = document.querySelector("#bill-input-wrapper");
// const billNotNumber = document.querySelector("#bill-not-number")
// const billMount = document.querySelector("#bill-mount");

// billInputWrapper.onclick = () => {
//   billMount.focus()
// }

// billMount.onkeydown = function (event) {

//   let pressedKey = Number(event.key)

//   let billInputStr = event.target.value
//   let billInput = Number(billInputStr)

//   console.log(pressedKey)

//   console.log("billInputStr = ",billInputStr)
//   console.log("billInput = ",billInput)
//   console.log(typeof billInputStr)


//   if(pressedKey + billInput === 0) {
//     this.value = ""
//     return
//   }

//   if(billInputStr === "0"){
//     // console.log("cero")
//     this.value = billInputStr.replace("0","")
//   }
// } 

// billMount.onkeyup = function (event) {

//   let billInput = Number(event.target.value)
//   // console.log(event.target.value)
//   console.log(billInput)
  
//   if(billInput >= 0){
//     rootVar.setProperty("--focusBorderColor","var(--okFocus)")
//     billNotNumber.classList.add("hide-div")
//     return
//   }

//   rootVar.setProperty("--focusBorderColor","var(--errorFocus)")
//   billNotNumber.classList.remove("hide-div")

// }

// const peopleInputWrapper = document.querySelector("#people-input-wrapper")
// const peopleNum = document.querySelector("#people-num");

// peopleInputWrapper.onclick = () => {
//   peopleNum.focus()
// }
