"use strict";

const number1 = document.querySelector(".number-1");
const number2 = document.querySelector(".number-2");
const number3 = document.querySelector(".number-3");
const number4 = document.querySelector(".number-4");

const bgFor1 = document.querySelector(".bgFor1");
const bgFor2 = document.querySelector(".bgFor2");
const bgFor3 = document.querySelector(".bgFor3");
const bgFor4 = document.querySelector(".bgFor4");

const forPhone = document.querySelector("#forPhone");

const stepOneNext = document.querySelector(".stepOneNext");
const stepTwoNext = document.querySelector(".stepTwoNext");
const stepThreeNext = document.querySelector(".stepThreeNext");

const alertshit = document.querySelector(".alertshit");

const placeForBtns = document.querySelector(".placeForBtns");

const personalInfo = document.querySelector(".personalInfo");
const detailsForTitle = document.querySelector(".detailsForTitle");

const rightShitForm1 = document.querySelector(".rightShitForm1");

const stepOne = document.querySelector(".stepOne");


//QUERIES FOR STEP 2

let infoFromStepTwo =[] ;
let infoFromStepThree =[] ;

const stepTwo = document.querySelector(".stepTwo");

const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");

const cardsStep2 = [card1, card2, card3];

const monthly = document.querySelector(".monthly");
const yearly = document.querySelector(".yearly");
const toggleIcon = document.querySelector(".toggleIcon");

const twoMomthsFree = [document.querySelectorAll(".twoMomthsFree")];
const twoMomthsFreeArray = Array.from(twoMomthsFree[0]);

const chooseABundle = document.querySelector(".chooseABundle");

const arcadePriceMonth = document.querySelector(".arcadePriceMonth");
const advancedPriceMonth = document.querySelector(".advancedPriceMonth");
const proPriceMonth = document.querySelector(".proPriceMonth");




//Queries for step 3

const chek1 = document.querySelector("#chek1");
const chek2 = document.querySelector("#chek2");
const chek3 = document.querySelector("#chek3");

const stepThree = document.querySelector(".stepThree");

const stepFour = document.querySelector(".stepFour");

const stepFourBack = document.querySelector(".stepFourBack");

const firstElementStep3 = document.querySelector(".firstElementStep3");
const secondElementStep3 = document.querySelector(".secondElementStep3");
const thirdElementStep3 = document.querySelector(".thirdElementStep3");

const arrOfStep3El = [firstElementStep3 , secondElementStep3 , thirdElementStep3]

const forYear1 = document.querySelector(".forYear1");
const forYear2 = document.querySelector(".forYear2");
const forYear3 = document.querySelector(".forYear3");


//cards change function
const cardsFunction = function () {};

//query for goback button
const stepOneBack = document.querySelector(".stepOneBack");
const stepTwoBack = document.querySelector(".stepTwoBack");
const stepThreeBack = document.querySelector(".stepThreeBack");


//Queries for Step 4
const s4FirstInfo = document.querySelector(".s4FirstInfo");
const s4FirstInfo2 = document.querySelector(".s4FirstInfo2");
const s4SecondInfo = document.querySelector(".s4SecondInfo");
const s4SecondInfo2 = document.querySelector(".s4SecondInfo2");
const s4ThirdInfo = document.querySelector(".s4ThirdInfo");
const s4ThirdInfo2 = document.querySelector(".s4ThirdInfo2");
const s4ForthInfo = document.querySelector(".s4ForthInfo");
const s4ForthInfo2 = document.querySelector(".s4ForthInfo2");
const totalInfo = document.querySelector(".totalInfo");
const totalInfo2 = document.querySelector(".totalInfo2");



//animation for cards in step 2

for (let i = 0; i < 3; i++) {
  cardsStep2[i].addEventListener("click", function () {
    if (i === 0) {
      cardsStep2[i].classList.remove("bg-transparent");
      cardsStep2[i].classList.add("bg-red-200/50");
      cardsStep2[i + 1].classList.contains("bg-red-200/50")
        ? cardsStep2[i + 1].classList.add("bg-transparent")
        : "";
         cardsStep2[i + 2].classList.contains("bg-red-200/50")
        ? cardsStep2[i + 2].classList.add("bg-transparent")
        : "";
        yearly.addEventListener
        infoFromStepTwo[0] = cardsStep2[i].firstElementChild.nextElementSibling.textContent;
        infoFromStepTwo[1] = cardsStep2[i].firstElementChild.nextElementSibling.nextElementSibling.textContent;
    } else if (i === 1) {
      cardsStep2[i].classList.remove("bg-transparent");
      cardsStep2[i].classList.add("bg-red-200/50");
      cardsStep2[i + 1].classList.contains("bg-red-200/50")
        ? cardsStep2[i + 1].classList.add("bg-transparent")
        : "";
      cardsStep2[i - 1].classList.contains("bg-red-200/50")
        ? cardsStep2[i - 1].classList.add("bg-transparent")
        : "";
        infoFromStepTwo[0] = (cardsStep2[i].firstElementChild.nextElementSibling.textContent);
        infoFromStepTwo[1] = (cardsStep2[i].firstElementChild.nextElementSibling.nextElementSibling.textContent);
    } else {
      cardsStep2[i].classList.remove("bg-transparent");
      cardsStep2[i].classList.add("bg-red-200/50");
      cardsStep2[i - 1].classList.contains("bg-red-200/50")
        ? cardsStep2[i - 1].classList.add("bg-transparent")
        : "";
      cardsStep2[i - 2].classList.contains("bg-red-200/50")
        ? cardsStep2[i - 2].classList.add("bg-transparent")
        : "";
        infoFromStepTwo[0] = (cardsStep2[i].firstElementChild.nextElementSibling.textContent);
        infoFromStepTwo[1] = (cardsStep2[i].firstElementChild.nextElementSibling.nextElementSibling.textContent);
    }
  });
}

//toggle for step 2
yearly.addEventListener("click", function () {
  for (let i = 0; i < twoMomthsFreeArray.length; i++) {
    twoMomthsFreeArray[i].style.display = "block";
    if (card1.classList.contains('bg-red-200/50')) {
      infoFromStepTwo[1] = '$90/yr';
      monthly.addEventListener('click' , function() {
        infoFromStepTwo[1] = '$9/mo';
      })
    } else if (card2.classList.contains('bg-red-200/50')){
      infoFromStepTwo[1] = '$120/yr';
      monthly.addEventListener('click' , function() {
        infoFromStepTwo[1] = '$12/mo';
      })
    } else if (card3.classList.contains('bg-red-200/50')){
      infoFromStepTwo[1] = '$150/yr';
      monthly.addEventListener('click' , function() {
        infoFromStepTwo[1] = '$15/mo';
      })
    }
    arcadePriceMonth.textContent = '$90/yr';
    advancedPriceMonth.textContent = '$120/yr';
    proPriceMonth.textContent = '$150/yr';
  }

  toggleIcon.classList.replace("fa-toggle-off", "fa-toggle-on");
  if (yearly.classList.contains("text-gray-500")) {
    yearly.classList.remove("text-gray-500");
    yearly.classList.add("text-blue-900");
    monthly.classList.remove("text-blue-900");
    monthly.classList.add("text-gray-500");
  } else {
    yearly.classList.add("text-blue-900");
  }
});

//toggle for monthly

monthly.addEventListener("click", function () {
  for (let i = 0; i < twoMomthsFreeArray.length; i++) {
    twoMomthsFreeArray[i].style.display = "none";
    arcadePriceMonth.textContent = '$9/mo';
    advancedPriceMonth.textContent = '$12/mo';
    proPriceMonth.textContent = '$15/mo';
  }

  toggleIcon.classList.replace("fa-toggle-on", "fa-toggle-off");
  yearly.classList.remove("text-blue-900");
  yearly.classList.add("text-gray-500");
  if (monthly.classList.contains("text-gray-500")) {
    monthly.classList.remove("text-gray-500");
    monthly.classList.add("text-blue-900");
  } else {
    monthly.classList.add("text-blue-900");
  }
});

// const tryFun = function() {
//   arrOfStep3El[i].addEventListener('click' , function() {
//     arrOfStep3El[i].classList.add ('bg-purple-200/50')
//   })
// }

for (let i =0 ; i<arrOfStep3El.length ; i++){
  if (i===0) {
    arrOfStep3El[i].addEventListener('mousedown' , function() {
    arrOfStep3El[i].classList.toggle ('bg-purple-200/50')
    if (arrOfStep3El[i].classList.contains('bg-purple-200/50')) {
      infoFromStepThree.push((arrOfStep3El[i].firstElementChild).firstElementChild.nextElementSibling.firstElementChild.textContent);
      infoFromStepThree.push(arrOfStep3El[i].firstElementChild.nextElementSibling.textContent);
    } else {
      infoFromStepThree.pop(arrOfStep3El[i].firstElementChild.nextElementSibling.textContent)
      infoFromStepThree.pop((arrOfStep3El[i].firstElementChild).firstElementChild.nextElementSibling.firstElementChild.textContent);
    }
  })
  
} else if (i ===1) {
  arrOfStep3El[i].addEventListener('mousedown' , function() {
    arrOfStep3El[i].classList.toggle ('bg-purple-200/50')
    if (arrOfStep3El[i].classList.contains('bg-purple-200/50')) {
      infoFromStepThree.push((arrOfStep3El[i].firstElementChild).firstElementChild.nextElementSibling.firstElementChild.textContent);
      infoFromStepThree.push(arrOfStep3El[i].firstElementChild.nextElementSibling.textContent);
    } else {
      infoFromStepThree.pop((arrOfStep3El[i].firstElementChild).firstElementChild.nextElementSibling.firstElementChild.textContent);
      infoFromStepThree.pop(arrOfStep3El[i].firstElementChild.nextElementSibling.textContent)
    }
  })
} else {
  arrOfStep3El[i].addEventListener('mousedown' , function() {
    arrOfStep3El[i].classList.toggle ('bg-purple-200/50')
    if (arrOfStep3El[i].classList.contains('bg-purple-200/50')) {
      infoFromStepThree.push((arrOfStep3El[i].firstElementChild).firstElementChild.nextElementSibling.firstElementChild.textContent);
      infoFromStepThree.push(arrOfStep3El[i].firstElementChild.nextElementSibling.textContent);
    } else {
      infoFromStepThree.pop(arrOfStep3El[i].firstElementChild.nextElementSibling.textContent)
      infoFromStepThree.pop((arrOfStep3El[i].firstElementChild).firstElementChild.nextElementSibling.firstElementChild.textContent);
    }
  })
}
}


stepOneNext.addEventListener('click' , function() {
  //for empty input
  if (!forPhone.value) {
    forPhone.style.border = '2px solid red'
    forPhone.style.outline = 'transparent'
    alertshit.classList.remove('hidden')
    stepOneNext.addEventListener ('click' , function(e) {
      e.preventDefault()
    })
  }
  //all good
  else {
  stepOne.classList.add ('hidden');
  stepTwo.classList.remove('hidden');
  bgFor1.classList.replace('bg-cyan-300' , 'bg-transparent');
  number1.classList.replace('text-black' , 'text-white')
  bgFor2.classList.replace( 'bg-transparent','bg-cyan-300');
  number2.classList.replace('text-white' , 'text-black')
  }
})

stepTwoNext.addEventListener('click' , function() {
  for (let i=0 ; i<cardsStep2.length ;i++) {
    if(!cardsStep2[i].classList.contains('bg-red-200/50')) {
      stepTwoNext.addEventListener('click' , function(e) {
        e.preventDefault()
      })
      chooseABundle.classList.remove('hidden')
    } else {

  
  stepTwo.classList.add ('hidden');
  stepThree.classList.remove('hidden');
  bgFor2.classList.replace('bg-cyan-300' , 'bg-transparent');
  number2.classList.replace('text-black' , 'text-white')
  bgFor3.classList.replace( 'bg-transparent','bg-cyan-300');
  number3.classList.replace('text-white' , 'text-black')

  if (yearly.classList.contains('text-blue-900')) {
    forYear1.textContent = '$12/yr';
    forYear2.textContent = '$24/yr';
    forYear3.textContent = '$24/yr';
  }
    }
  }
})

stepThreeNext.addEventListener('click' , function() {
  stepThree.classList.add ('hidden');
  stepFour.classList.remove('hidden');
  bgFor3.classList.replace('bg-cyan-300' , 'bg-transparent');
  number3.classList.replace('text-black' , 'text-white')
  bgFor4.classList.replace( 'bg-transparent','bg-cyan-300');
  number4.classList.replace('text-white' , 'text-black');


  //for Step 4 preparation
  s4FirstInfo.textContent = infoFromStepTwo[0];
  s4FirstInfo2.textContent = infoFromStepTwo[1];

  s4SecondInfo.textContent = infoFromStepThree[0];
  s4SecondInfo2.textContent = infoFromStepThree[1];

  s4ThirdInfo.textContent = infoFromStepThree[2];
  s4ThirdInfo2.textContent = infoFromStepThree[3];

  s4ForthInfo.textContent = infoFromStepThree[4];
  s4ForthInfo2.textContent = infoFromStepThree[5];

  // totalFun()
  console.log(totalFun());
})

// Go Back
stepTwoBack.addEventListener('click' , function() {
  stepTwo.classList.add ('hidden');
  stepOne.classList.remove('hidden');
  bgFor1.classList.replace('bg-transparent' , 'bg-cyan-300');
  number1.classList.replace('text-white' , 'text-black')
  bgFor2.classList.replace( 'bg-cyan-300' , 'bg-transparent');
  number2.classList.replace('text-black' , 'text-white')
})

stepThreeBack.addEventListener('click' , function() {
  stepTwo.classList.remove ('hidden');
  stepThree.classList.add('hidden');
  bgFor2.classList.replace('bg-transparent' , 'bg-cyan-300');
  number2.classList.replace('text-white' , 'text-black')
  bgFor3.classList.replace( 'bg-cyan-300' , 'bg-transparent');
  number3.classList.replace('text-black' , 'text-white')
})

stepFourBack.addEventListener('click' , function() {
  stepFour.classList.add ('hidden');
  stepThree.classList.remove('hidden');
  bgFor3.classList.replace('bg-transparent' , 'bg-cyan-300');
  number3.classList.replace('text-white' , 'text-black')
  bgFor4.classList.replace( 'bg-cyan-300' , 'bg-transparent');
  number4.classList.replace('text-black' , 'text-white')
})

