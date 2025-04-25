const rootVar = document.documentElement.style;


let tipAmountByPerson = 0
let totalByPerson = 0
let localErrorFlag = 0

// HANDLE FUNCTIONS
// Both: bill-input-wrapper and people-input-wrapper
function handleInitialZero (event,pressKey,inputStr,inputNum) {
  //for onkeydown events
  if(pressKey==="." && inputNum===0){
    event.target.value = "0"
    return
  }

  if(pressKey==="0" && (inputStr==="" || inputStr==="0")){
    event.target.value = ""
  }
}


function handleNotNumberInput(number,alertDiv,inputFocus) { 
  //for onkeyup events
  if(!(number+1)||number<0) {
    alertDiv.classList.remove("hidden-div")
    rootVar.setProperty(inputFocus,"var(--errorColor)")
    return 1
  } 
  
  alertDiv.classList.add("hidden-div")
  rootVar.setProperty(inputFocus,"var(--okColor)")
  return 0
  
}

// Once: select-tip wrapper div
function handleTipClick(selectedPercent,tipFlag) {

  customInput.value = ""
  rootVar.setProperty("--customBorderColor","var(--okColor)")
  customInput.classList.remove("custom-error")

  if(tipFlag){
    selectedPercent.classList.add("selected-tip")
    return
  }

  selectedPercent.classList.remove("selected-tip")
  selectedPercent.blur();

}


// Once: people-input-wrapper
function handleZeroPeople(number,alertDiv) {

  if(number===0) {
    alertDiv.classList.remove("hidden-div");
    peopleZeroErrorFlag = 1;
    return
  }

  alertDiv.classList.add("hidden-div")
  peopleZeroErrorFlag = 0

}


function handleNonInteger(number,alertDiv) {

  if(number<0 || (number !== Math.floor(number))) {
    alertDiv.classList.remove("hidden-div")
    peopleNotNumberErrorFlag = 1
    return
  }
  
  alertDiv.classList.add("hidden-div")
  peopleNotNumberErrorFlag = 0

}


// GET FUNCTIONS
function getBill()  {
  if(billErrorFlag) return 0
  return Number(billMount.value)
}


function getCustomPercent() {
  if(customErrorFlag) return 0
  return Number(custom.value)*0.01
}


function getNumPeople () {
  if(peopleErrorFlag) return 1
  return peopleNum.value? Number(peopleNum.value) : 1
}


function getSelectedTip(selecedTip,tipFlag) {
  tipPercent = tipFlag ? selecedTip : 0; 
}


// CALC FUNCTIONS: MATH
function calcTipByPerson(bill,tipPercent,numPeople) {
  return (bill*tipPercent)/numPeople
}


function calcTotalByPerson(bill,numPeople,tipByPers) {
  return (bill/numPeople) + tipByPers
}




// SET FUNCTIONS: CALCULATED VALUES 
function setCalculatedValues() {
  bill = getBill()
  numberOfPeople = getNumPeople()

  tipAmountByPerson = calcTipByPerson(bill,tipPercent,numberOfPeople)
  totalByPerson = calcTotalByPerson(bill,numberOfPeople,tipAmountByPerson)

  localErrorFlag = (!billMount.value || !tipPercent || !peopleNum.value || billErrorFlag || customErrorFlag || peopleErrorFlag)

  if(localErrorFlag) {
    tipAmountValue.textContent = "$0.00"
    totalMountValue.textContent = "$0.00"
    return
  }

  tipAmountValue.textContent = "$"+(Math.trunc(tipAmountByPerson*100)/100).toFixed(2)
  totalMountValue.textContent = "$"+totalByPerson.toFixed(2)
}



// SECTION: bill-input-wrapper
const billInputWrapper = document.querySelector("#bill-input-wrapper");
const billNotNumber = document.querySelector("#bill-not-number")
const billMount = document.querySelector("#bill-mount");
let billErrorFlag = 0
let bill = 0

billInputWrapper.onclick = () => {
  billMount.focus();
}


billMount.onkeydown = (event) => {
  
  pressedKey = event.key
  inputStr = event.target.value
  inputNum = Number(inputStr)

  handleInitialZero(event,pressedKey,inputStr,inputNum)
}


billMount.onkeyup = (event) => {

  inputStr = event.target.value
  inputNum = Number(inputStr)

  billErrorFlag = handleNotNumberInput(inputNum,billNotNumber,"--billBorderColor") || (!inputStr)

  setCalculatedValues();
  
}



// SECTION: TIP PERCENT
// select tip
const tip0 = document.querySelector("#tip0") // TIP0
let tip0Flag = false

const tip1 = document.querySelector("#tip1") // 5%
let tip1Flag = false

const tip2 = document.querySelector("#tip2") // 10%
let tip2Flag = false

const tip3 = document.querySelector("#tip3") // 15%
let tip3Flag = false

const tip4 = document.querySelector("#tip4") // 25%
let tip4Flag = false

const tip5 = document.querySelector("#tip5") // 50%
let tip5Flag = false


let tipPercent = 0


tip1.onclick = () => {

  tip1Flag = !tip1Flag
  tip2Flag = false
  tip3Flag = false
  tip4Flag = false
  tip5Flag = false

  getSelectedTip(0.05,tip1Flag);
  handleTipClick(tip1,tip1Flag);
  handleTipClick(tip2,tip2Flag);
  handleTipClick(tip3,tip3Flag);
  handleTipClick(tip4,tip4Flag);
  handleTipClick(tip5,tip5Flag);
  setCalculatedValues();

}


tip2.onclick = () => {

  tip1Flag = false
  tip2Flag = !tip2Flag
  tip3Flag = false
  tip4Flag = false
  tip5Flag = false

  getSelectedTip(0.1,tip2Flag);
  handleTipClick(tip1,tip1Flag);
  handleTipClick(tip2,tip2Flag);
  handleTipClick(tip3,tip3Flag);
  handleTipClick(tip4,tip4Flag);
  handleTipClick(tip5,tip5Flag);
  setCalculatedValues();

}


tip3.onclick = () => {

  tip1Flag = false
  tip2Flag = false
  tip3Flag = !tip3Flag
  tip4Flag = false
  tip5Flag = false

  getSelectedTip(0.15,tip3Flag);
  handleTipClick(tip1,tip1Flag);
  handleTipClick(tip2,tip2Flag);
  handleTipClick(tip3,tip3Flag);
  handleTipClick(tip4,tip4Flag);
  handleTipClick(tip5,tip5Flag);
  setCalculatedValues();

}


tip4.onclick = () => {

  tip1Flag = false
  tip2Flag = false
  tip3Flag = false
  tip4Flag = !tip4Flag
  tip5Flag = false
  
  getSelectedTip(0.25,tip4Flag);
  handleTipClick(tip1,tip1Flag);
  handleTipClick(tip2,tip2Flag);
  handleTipClick(tip3,tip3Flag);
  handleTipClick(tip4,tip4Flag);
  handleTipClick(tip5,tip5Flag);
  setCalculatedValues();

}


tip5.onclick = () => {
  
  tip1Flag = false
  tip2Flag = false
  tip3Flag = false
  tip4Flag = false
  tip5Flag = !tip5Flag

  getSelectedTip(0.5,tip5Flag);
  handleTipClick(tip1,tip1Flag);
  handleTipClick(tip2,tip2Flag);
  handleTipClick(tip3,tip3Flag);
  handleTipClick(tip4,tip4Flag);
  handleTipClick(tip5,tip5Flag);
  setCalculatedValues();

}


// custom-input
const customInput = document.querySelector("#custom")
let customErrorFlag = 0

customInput.onclick = () => {

  tip1.classList.remove("selected-tip")
  tip2.classList.remove("selected-tip")
  tip3.classList.remove("selected-tip")
  tip4.classList.remove("selected-tip")
  tip5.classList.remove("selected-tip")
  tipPercent = 0

  setCalculatedValues()

}

customInput.onkeydown = (event) => {

  pressedKey = event.key
  inputStr = event.target.value
  inputNum = Number(inputStr)

  handleInitialZero(event,pressedKey,inputStr,inputNum)

}


customInput.onkeyup = (event) => {

  inputStr = event.target.value
  inputNum = Number(inputStr)

  if(!(inputNum+1)|| inputNum<0 || inputNum>100) {
    rootVar.setProperty("--customBorderColor","var(--errorColor)")
    customInput.classList.add("custom-error")
    customErrorFlag = 1
    setCalculatedValues();
    return
  } 
  
  rootVar.setProperty("--customBorderColor","var(--okColor)")
  customInput.classList.remove("custom-error")
  customErrorFlag = 0
  tipPercent = getCustomPercent()

  tip1Flag = false
  tip2Flag = false
  tip3Flag = false
  tip4Flag = false
  tip5Flag = false

  setCalculatedValues();

}



// SECTION: people-input-wrapper
const peopleInputWrapper = document.querySelector("#people-input-wrapper");
const peopleZero = document.querySelector("#people-zero");
const peopleNotNumber = document.querySelector("#people-not-number")
const peopleNum = document.querySelector("#people-num");
let peopleZeroErrorFlag = 0
let peopleNotNumberErrorFlag = 0
let peopleErrorFlag = 0
let numberOfPeople = 1

peopleInputWrapper.onclick = (event) => {

  peopleNum.focus();


  inputStr = event.target.value
  inputNum = Number(inputStr)
  handleZeroPeople(inputNum,peopleZero)

}


peopleNum.onkeydown = (event) => {
  
  pressedKey = event.key
  inputStr = event.target.value
  inputNum = Number(inputStr)

  handleInitialZero(event,pressedKey,inputStr,inputNum)

}


peopleNum.onkeyup = (event) => {

  inputStr = event.target.value
  inputNum = Number(inputStr)

  peopleNotNumberErrorFlag = handleNotNumberInput(inputNum,peopleNotNumber,"--peopleBorderColor")

  handleNonInteger(inputNum,peopleNotNumber)

  handleZeroPeople(inputNum,peopleZero)

  peopleErrorFlag = peopleZeroErrorFlag || peopleNotNumberErrorFlag;
  
  peopleErrorFlag 
    ? rootVar.setProperty("--peopleBorderColor","var(--errorColor)") 
    : rootVar.setProperty("--peopleBorderColor","var(--okColor)")

  setCalculatedValues();
  
}



// SECTION: CALCULATION
const tipAmountValue = document.querySelector("#tipAmount-byPerson")
const totalMountValue = document.querySelector("#total-mount")
const resetButton = document.querySelector("#reset-button")

resetButton.onclick = () => {

  billMount.value = ""
  customInput.value = ""
  peopleNum.value = ""

  bill = 0
  tipPercent = 0
  numberOfPeople = 1

  tip1.classList.remove("selected-tip")
  tip2.classList.remove("selected-tip")
  tip3.classList.remove("selected-tip")
  tip4.classList.remove("selected-tip")
  tip5.classList.remove("selected-tip")


  billNotNumber.classList.add("hidden-div")
  rootVar.setProperty("--billBorderColor","var(--okColor)")
  
  rootVar.setProperty("--customBorderColor","var(--okColor)")
  customInput.classList.remove("custom-error")
  
  peopleZero.classList.add("hidden-div")
  peopleNotNumber.classList.add("hidden-div")
  rootVar.setProperty("--peopleBorderColor","var(--okColor)")

  setCalculatedValues();
}






// CONSOLE.LOG TESTERS

// TIP FLAGS
// console.log("===============")
// console.log("f1: ",tip1Flag)
// console.log("f2: ",tip2Flag)
// console.log("f3: ",tip3Flag)
// console.log("f4: ",tip4Flag)
// console.log("f5: ",tip5Flag)
// console.log(tipPercent)

