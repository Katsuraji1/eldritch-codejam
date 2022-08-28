import ancientsData from '../eldritch-codejam/data/ancients.js'
import {
    brownCards,
    blueCards,
    greenCards
  } from './data/mythicCards/index.js'

const Azathoth = document.querySelector('.Azathoth')
const Cthulthu = document.querySelector('.Cthulthu')
const IogSothoth = document.querySelector('.IogSothoth')
const ShubNig = document.querySelector('.ShubNig')
const veryEasy = document.querySelector('.veryEasy')
const easy = document.querySelector('.easy')
const normal = document.querySelector('.normal')
const hard = document.querySelector('.hard')
const veryHard = document.querySelector('.veryHard')
const commonCard = document.querySelector('.commonCard')
const currentCard = document.querySelector('.currentCard')
const firstStepFirstPoint = document.querySelector('.firstStepFirstPoint')
const firstStepSecondPoint = document.querySelector('.firstStepSecondPoint')
const firstStepThirdPoint = document.querySelector('.firstStepThirdPoint')
const secondStepFirstPoint = document.querySelector('.secondStepFirstPoint')
const secondStepSecondPoint = document.querySelector('.secondStepSecondPoint')
const secondStepThirdPoint = document.querySelector('.secondStepThirdPoint')
const thirdStepFirstPoint = document.querySelector('.thirdStepFirstPoint')
const thirdStepSecondPoint = document.querySelector('.thirdStepSecondPoint')
const thirdStepThirdPoint = document.querySelector('.thirdStepThirdPoint')
const difficultyLevel = document.querySelector('.difficultyLevel')
const decTracker = document.querySelector('.decTracker')
const cardTracker = document.querySelector('.cardTracker')
const ancientContainer = document.querySelector('.ancientContainer')

let newCardArray;

function chooseAnciet() {
ancientContainer.classList.add('hideAncient')
difficultyLevel.classList.add('visability')
}



const arraySh = (min,max)=>{
    let arr= Array.from(Array(max-min+1).keys(),x=>x+min)
    return arr
}

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

const resultSh = (min,max,n) =>{
    let res = arraySh(min,max)
    let finRes=shuffleArray(res)
    let finNum
    for (let i=1;i<2;i++){
        finNum =finRes.splice(0,n)
    }
    return finNum
}

const changeArr = (array,el1,n)=>{
    let j;
    let arr = []
    for (let i = 0;i<n;i++){
    j = el1[array[i]];
    arr.push(j)
    }

    return arr;
}


const track = ()=>{
    firstStepFirstPoint.innerHTML=ancientsData[0].firstStage.greenCards
    firstStepSecondPoint.innerHTML=ancientsData[0].firstStage.brownCards
    firstStepThirdPoint.innerHTML=ancientsData[0].firstStage.blueCards

    secondStepFirstPoint.innerHTML=ancientsData[0].secondStage.greenCards
    secondStepSecondPoint.innerHTML=ancientsData[0].secondStage.brownCards
    secondStepThirdPoint.innerHTML=ancientsData[0].secondStage.blueCards

   thirdStepFirstPoint.innerHTML=ancientsData[0].thirdStage.greenCards
   thirdStepSecondPoint.innerHTML=ancientsData[0].thirdStage.brownCards
   thirdStepThirdPoint.innerHTML=ancientsData[0].thirdStage.blueCards
}

const track1 = ()=>{
    firstStepFirstPoint.innerHTML=ancientsData[1].firstStage.greenCards
    firstStepSecondPoint.innerHTML=ancientsData[1].firstStage.brownCards
    firstStepThirdPoint.innerHTML=ancientsData[1].firstStage.blueCards

    secondStepFirstPoint.innerHTML=ancientsData[1].secondStage.greenCards
    secondStepSecondPoint.innerHTML=ancientsData[1].secondStage.brownCards
    secondStepThirdPoint.innerHTML=ancientsData[1].secondStage.blueCards

   thirdStepFirstPoint.innerHTML=ancientsData[1].thirdStage.greenCards
   thirdStepSecondPoint.innerHTML=ancientsData[1].thirdStage.brownCards
   thirdStepThirdPoint.innerHTML=ancientsData[1].thirdStage.blueCards
}

const track2 = ()=>{
    firstStepFirstPoint.innerHTML=ancientsData[2].firstStage.greenCards
    firstStepSecondPoint.innerHTML=ancientsData[2].firstStage.brownCards
    firstStepThirdPoint.innerHTML=ancientsData[2].firstStage.blueCards

    secondStepFirstPoint.innerHTML=ancientsData[2].secondStage.greenCards
    secondStepSecondPoint.innerHTML=ancientsData[2].secondStage.brownCards
    secondStepThirdPoint.innerHTML=ancientsData[2].secondStage.blueCards

   thirdStepFirstPoint.innerHTML=ancientsData[2].thirdStage.greenCards
   thirdStepSecondPoint.innerHTML=ancientsData[2].thirdStage.brownCards
   thirdStepThirdPoint.innerHTML=ancientsData[2].thirdStage.blueCards
}

const track3 = ()=>{
    firstStepFirstPoint.innerHTML=ancientsData[3].firstStage.greenCards
    firstStepSecondPoint.innerHTML=ancientsData[3].firstStage.brownCards
    firstStepThirdPoint.innerHTML=ancientsData[3].firstStage.blueCards

    secondStepFirstPoint.innerHTML=ancientsData[3].secondStage.greenCards
    secondStepSecondPoint.innerHTML=ancientsData[3].secondStage.brownCards
    secondStepThirdPoint.innerHTML=ancientsData[3].secondStage.blueCards

   thirdStepFirstPoint.innerHTML=ancientsData[3].thirdStage.greenCards
   thirdStepSecondPoint.innerHTML=ancientsData[3].thirdStage.brownCards
   thirdStepThirdPoint.innerHTML=ancientsData[3].thirdStage.blueCards
}

let firstStageArr = []
let secondStageArr = []
let thirdStageArr = []

function diff () {
    firstStageArr = []
    secondStageArr = []
    thirdStageArr = []
    commonCard.classList.add('visability')
    currentCard.classList.add('visability')
    decTracker.classList.add('visability')

    track()

   let cardArray = [];

   let greenFirstCard = changeArr(resultSh(0,17,5),greenCards,5)
   let brownFirstCards = changeArr(resultSh(0,19,9),brownCards,9)
    let blueFirstCards = changeArr(resultSh(0,11,2),blueCards,2)

    cardArray.push(greenFirstCard,brownFirstCards,blueFirstCards)
     newCardArray = cardArray.reduce((acc,val)=>acc.concat(val))
     let blueArr =  newCardArray.filter(function(color,index) {
        return color.color == "blue" 
    });
    let brownArray = newCardArray.filter(function(color,index) {
        return color.color == "brown" 
    });
    let greenArray = newCardArray.filter(function(color,index) {
        return color.color == "green" 
    });

    firstStageArr.push(greenArray[0],brownArray[0],brownArray[1],blueArr[0])
    secondStageArr.push(greenArray[1],greenArray[2],brownArray[2],brownArray[3],brownArray[4],blueArr[1])
    thirdStageArr.push(greenArray[3],greenArray[4],brownArray[5],brownArray[6],brownArray[7],brownArray[8])
    shuffleArray(firstStageArr)
    shuffleArray(secondStageArr)
    shuffleArray(thirdStageArr)
    console.log('firstStageArr',firstStageArr);
    console.log('secondStageArr',secondStageArr);
    console.log('thirdStageArr',thirdStageArr);
return firstStageArr,secondStageArr,thirdStageArr;
}

const rundomNum = (min,max)=>{
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random()*(max-min+1)+min)
}
let idCard
let color
let number
let currentCards

function openCommonCard() {
    if(firstStageArr.length!==0){
    number = rundomNum(1,firstStageArr.length)
    currentCards = firstStageArr.pop()
    idCard = currentCards.id
    color = currentCards.color
    if(currentCards.color=='blue'){
        let blueMas =firstStageArr.filter(function(color,index) {
            return color.color == "blue" 
        });
   firstStepThirdPoint.innerHTML=blueMas.length
    }
    else if (currentCards.color=='brown'){
        let blueMas =  firstStageArr.filter(function(color,index) {
            return color.color == "brown" 
        });
    firstStepSecondPoint.innerHTML=blueMas.length
    }
    else if (currentCards.color =='green'){
        let blueMas = firstStageArr.filter(function(color,index){
            return color.color == "green" 
        })
        firstStepFirstPoint.innerHTML=blueMas.length
    }
    setCard()
    }
    else if (firstStageArr.length===0&& secondStageArr.length!==0){
        number = rundomNum(1,secondStageArr.length)
        currentCards = secondStageArr.pop()
        idCard = currentCards.id
        color = currentCards.color
        if(color=='blue'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "blue" 
            });
            secondStepThirdPoint.innerHTML=blueMas.length
        }
        else if (color=='brown'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "brown" 
            });
            secondStepSecondPoint.innerHTML=blueMas.length
        }
        else if (color =='green'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "green" 
            });
            secondStepFirstPoint.innerHTML=blueMas.length
        }
        setCard()
    }

    else if (firstStageArr.length===0&& thirdStageArr.length!==0 && secondStageArr==0 ){
        number = rundomNum(1,thirdStageArr.length)
        currentCards = thirdStageArr.pop()
        idCard = currentCards.id
        color = currentCards.color
        if(color=='blue'){
            
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "blue" 
            });
            thirdStepThirdPoint.innerHTML=blueMas.length
        }
        else if (color=='brown'){
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "brown" 
            });
            thirdStepSecondPoint.innerHTML=blueMas.length
        }
        else if (color =='green'){
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "green" 
            });
            thirdStepFirstPoint.innerHTML=blueMas.length
        }
        setCard()
    }

}

function setCard () {
    currentCard.style.backgroundImage = `url(./assets/MythicCards/${color}/${idCard}.png)`
}

let dif;
Azathoth.addEventListener('click',()=>{
    
chooseAnciet()

normal.addEventListener('click',()=>{
    cardTracker.classList.add('visability')
    difficultyLevel.classList.remove('visability')
    diff()
    dif=3;
    return dif;
}
)
easy.addEventListener('click',()=>{easydiff()
    cardTracker.classList.add('visability')
    difficultyLevel.classList.remove('visability')
    dif=2;
    return dif;
})
hard.addEventListener('click',()=>{
    cardTracker.classList.add('visability')
    difficultyLevel.classList.remove('visability')
    harddiff()
    dif=4;
    return dif
})
veryEasy.addEventListener('click',()=>{
    cardTracker.classList.add('visability')
    difficultyLevel.classList.remove('visability')
    veryeasydiff()
    dif=1
    return dif;
})
 veryHard.addEventListener('click',()=>{
    cardTracker.classList.add('visability')
    difficultyLevel.classList.remove('visability')
     veryharddiff()
     dif=4
     return dif;
 })

commonCard.addEventListener('click',()=>{
    if (dif == 3){
        openCommonCard()
    }
    else if (dif==2){
        openCommonCardEasy()
    }
    else if (dif==4){
        openCommonCardEasy()
    }
    else if (dif==1){
        openCommonCardVeryEasy()
    }
     else if (dif==5){
        openCommonCardVeryHard()
    }
}) })

let difCthulthu;
Cthulthu.addEventListener('click',()=>{
    
    chooseAnciet()
    
    normal.addEventListener('click',()=>{
        cardTracker.classList.add('visability')
        difficultyLevel.classList.remove('visability')
        diffCthulthu()
        difCthulthu=3;
        return  difCthulthu;
    }
    )
    easy.addEventListener('click',()=>{
        cardTracker.classList.add('visability')
        difficultyLevel.classList.remove('visability')
        easydiffCthulthu()
        difCthulthu=2;
        return  difCthulthu;
    })
    hard.addEventListener('click',()=>{
        cardTracker.classList.add('visability')
        difficultyLevel.classList.remove('visability')
        harddiffCthulthu()
        difCthulthu=4;
        return  difCthulthu
    })
    veryEasy.addEventListener('click',()=>{
        cardTracker.classList.add('visability')
        difficultyLevel.classList.remove('visability')
        veryeasydiffCthulthu()
        difCthulthu=1
        return  difCthulthu;
    })
     veryHard.addEventListener('click',()=>{
        cardTracker.classList.add('visability')
        difficultyLevel.classList.remove('visability')
         veryharddiffCthulthu()
         difCthulthu=4
         return  difCthulthu;
     })
    
    commonCard.addEventListener('click',()=>{
        if ( difCthulthu == 3){
            openCommonCardCthulthu()
        }
        else if ( difCthulthu==2){
            openCommonCardEasyCthulthu()
        }
        else if ( difCthulthu==4){
            openCommonCardEasyCthulthu()
        }
        else if ( difCthulthu==1){
            openCommonCardVeryEasy()
        }
         else if ( difCthulthu==5){
            openCommonCardVeryHard()
        }
    }) })

    let difIogSothoth;
IogSothoth.addEventListener('click',()=>{
    
    chooseAnciet()
    
    normal.addEventListener('click',()=>{
        cardTracker.classList.add('visability')
        difficultyLevel.classList.remove('visability')
        diffIogSothoth()
        difIogSothoth=3;
        return  difIogSothoth;
    }
    )
    easy.addEventListener('click',()=>{
        cardTracker.classList.add('visability')
        difficultyLevel.classList.remove('visability')
        easydiffIogSothoth()
        difIogSothoth=2;
        return  difIogSothoth;
    })
    hard.addEventListener('click',()=>{
        cardTracker.classList.add('visability')
        difficultyLevel.classList.remove('visability')
        harddiffIogSothoth()
        difIogSothoth=4;
        return  difIogSothoth
    })
    veryEasy.addEventListener('click',()=>{
        cardTracker.classList.add('visability')
        difficultyLevel.classList.remove('visability')
        veryeasydiffIogSothoth()
        difIogSothoth=1
        return  difIogSothoth;
    })
     veryHard.addEventListener('click',()=>{
        cardTracker.classList.add('visability')
        difficultyLevel.classList.remove('visability')
         veryharddiffIogSothoth()
         difIogSothoth=4
         return  difIogSothoth;
     })
    
    commonCard.addEventListener('click',()=>{
        
        if ( difIogSothoth == 3){
            openCommonCardIogSothoth()
        }
        else if ( difIogSothoth==2){
            openCommonCardEasyIogSothoth()
        }
        else if ( difIogSothoth==4){
            openCommonCardEasyIogSothoth()
        }
        else if ( difIogSothoth==1){
            openCommonCardVeryEasy()
        }
         else if ( difIogSothoth==5){
            openCommonCardVeryHard()
        }
    }) })
    let difShubNig;
        ShubNig.addEventListener('click',()=>{
    
        chooseAnciet()
        
        normal.addEventListener('click',()=>{
            cardTracker.classList.add('visability')
            difficultyLevel.classList.remove('visability')
            diffShubNig()
            difShubNig=3;
            return  difShubNig;
        }
        )
        easy.addEventListener('click',()=>{
            cardTracker.classList.add('visability')
            difficultyLevel.classList.remove('visability')
            easydiffShubNig()
            difShubNig=2;
            return  difShubNig;
        })
        hard.addEventListener('click',()=>{
            cardTracker.classList.add('visability')
            difficultyLevel.classList.remove('visability')
            harddiffShubNig()
            difShubNig=4;
            return  difShubNig
        })
        veryEasy.addEventListener('click',()=>{
            cardTracker.classList.add('visability')
            difficultyLevel.classList.remove('visability')
            veryeasydiffShubNig()
            difShubNig=1
            return  difShubNig;
        })
         veryHard.addEventListener('click',()=>{
            cardTracker.classList.add('visability')
            difficultyLevel.classList.remove('visability')
             veryharddiffShubNig()
             difShubNig=4
             return  difShubNig;
         })
        
        commonCard.addEventListener('click',()=>{
            if ( difShubNig == 3){
                openCommonCardShubNig()
            }
            else if ( difShubNig==2){
                openCommonCardEasyShubNig()
            }
            else if ( difShubNig==4){
                openCommonCardEasyShubNig()
            }
            else if ( difShubNig==1){
                openCommonCardVeryEasy()
            }
             else if ( difShubNig==5){
                openCommonCardVeryHard()
            }
        }) })



const resultSh1 = (min,max,n) =>{
    let res = arraySh(min,max)
    let finRes=shuffleArray(res)
    let finNum
    for (let i=1;i<2;i++){
        finNum =finRes.splice(0,n)
    }
    return finNum
}

const changeArr1 = (array,el1,n)=>{
    let j;
    let arr = []
    for (let i = 0;i<n;i++){
    j = el1[array[i]];
        arr.push(j)
    }
    return arr;
}

//добавил легкий уровень сложности
const greenCardsWithoutHard = greenCards.filter(function(diff){
    return diff.difficulty !=='hard' && diff.color=='green'
})
const brownCardsWithoutHard = brownCards.filter(function(diff){
    return diff.difficulty !=='hard' && diff.color=='brown'
})
const blueCardsWithoutHard = blueCards.filter(function(diff){
    return diff.difficulty !=='hard' && diff.color=='blue'
})



function easydiff () {
    firstStageArr = []
    secondStageArr = []
    thirdStageArr = []
    commonCard.classList.add('visability')
    currentCard.classList.add('visability')
    decTracker.classList.add('visability')

    track()

   let cardArray = [];

   let greenFirstCard = changeArr1(resultSh1(0,greenCardsWithoutHard.length-1,5),greenCardsWithoutHard,5)
   let brownFirstCards = changeArr1(resultSh1(0,brownCardsWithoutHard.length-1,9),brownCardsWithoutHard,9)
    let blueFirstCards = changeArr1(resultSh1(0,blueCardsWithoutHard.length-1,2),blueCardsWithoutHard,2)

    //зашафлил

    shuffleArray(greenFirstCard)
    shuffleArray(brownFirstCards)
    shuffleArray(blueFirstCards)

    cardArray.push(greenFirstCard,brownFirstCards,blueFirstCards)
     newCardArray = cardArray.reduce((acc,val)=>acc.concat(val))
     let blueArr =  newCardArray.filter(function(color) {
        return color.color == "blue"
    });
    let brownArray = newCardArray.filter(function(color,index) {
        return color.color == "brown"
    });
    let greenArray = newCardArray.filter(function(color,index) {
        return color.color == "green"
    });



    firstStageArr.push(greenArray[0],brownArray[0],brownArray[1],blueArr[0])
    secondStageArr.push(greenArray[1],greenArray[2],brownArray[2],brownArray[3],brownArray[4],blueArr[1])
    thirdStageArr.push(greenArray[3],greenArray[4],brownArray[5],brownArray[6],brownArray[7],brownArray[8])
    shuffleArray(firstStageArr)
    shuffleArray(secondStageArr)
    shuffleArray(thirdStageArr)
    console.log('firstStageArr',firstStageArr);
    console.log('secondStageArr',secondStageArr);
    console.log('thirdStageArr',thirdStageArr);
    return firstStageArr,secondStageArr,thirdStageArr;
}

function openCommonCardEasy() {
    if(firstStageArr.length!==0){
    number = rundomNum(1,firstStageArr.length)
    currentCards = firstStageArr.pop()
    idCard = currentCards.id
    color = currentCards.color
    if(currentCards.color=='blue'){
        let blueMas =firstStageArr.filter(function(color,index) {
            return color.color == "blue"
        });
   firstStepThirdPoint.innerHTML=blueMas.length
    }
    else if (currentCards.color=='brown'){
        let blueMas =  firstStageArr.filter(function(color,index) {
            return color.color == "brown"
        });
    firstStepSecondPoint.innerHTML=blueMas.length
    }
    else if (currentCards.color =='green'){
        let blueMas = firstStageArr.filter(function(color,index){
            return color.color == "green"
        })
        firstStepFirstPoint.innerHTML=blueMas.length
    }
    setCard()
    }
    else if (firstStageArr.length===0&& secondStageArr.length!==0){
        number = rundomNum(1,secondStageArr.length)
        currentCards = secondStageArr.pop()
        idCard = currentCards.id
        color = currentCards.color
        if(color=='blue'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "blue" 
            });
            secondStepThirdPoint.innerHTML=blueMas.length
        }
        else if (color=='brown'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "brown" 
            });
            secondStepSecondPoint.innerHTML=blueMas.length
        }
        else if (color =='green'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "green" 
            });
            secondStepFirstPoint.innerHTML=blueMas.length
        }
        setCard()
    }

    else if (firstStageArr.length===0&& thirdStageArr.length!==0 && secondStageArr==0 ){
        number = rundomNum(1,thirdStageArr.length)
        currentCards = thirdStageArr.pop()
        idCard = currentCards.id
        color = currentCards.color
        if(color=='blue'){
            
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "blue" 
            });
            thirdStepThirdPoint.innerHTML=blueMas.length
        }
        else if (color=='brown'){
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "brown" 
            });
            thirdStepSecondPoint.innerHTML=blueMas.length
        }
        else if (color =='green'){
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "green" 
            });
            thirdStepFirstPoint.innerHTML=blueMas.length
        }
        setCard()
    }

    
}

const greenCardsWithoutEasy = greenCards.filter(function(diff){
    return diff.difficulty !=='easy' && diff.color=='green'
})
const brownCardsWithoutEasy = brownCards.filter(function(diff){
    return diff.difficulty !=='easy' && diff.color=='brown'
})
const blueCardsWithoutEasy = blueCards.filter(function(diff){
    return diff.difficulty !=='easy' && diff.color=='blue'
})

function harddiff () {
    firstStageArr = []
    secondStageArr = []
    thirdStageArr = []
    commonCard.classList.add('visability')
    currentCard.classList.add('visability')
    decTracker.classList.add('visability')

    track()

   let cardArray = [];

   let greenFirstCard = changeArr1(resultSh1(0,greenCardsWithoutEasy.length-1,5),greenCardsWithoutEasy,5)
   let brownFirstCards = changeArr1(resultSh1(0,brownCardsWithoutEasy.length-1,9),brownCardsWithoutEasy,9)
    let blueFirstCards = changeArr1(resultSh1(0,blueCardsWithoutEasy.length-1,2),blueCardsWithoutEasy,2)

    //зашафлил

    shuffleArray(greenFirstCard)
    shuffleArray(brownFirstCards)
    shuffleArray(blueFirstCards)

    cardArray.push(greenFirstCard,brownFirstCards,blueFirstCards)
     newCardArray = cardArray.reduce((acc,val)=>acc.concat(val))
     let blueArr =  newCardArray.filter(function(color) {
        return color.color == "blue"
    });
    let brownArray = newCardArray.filter(function(color,index) {
        return color.color == "brown"
    });
    let greenArray = newCardArray.filter(function(color,index) {
        return color.color == "green"
    });



    firstStageArr.push(greenArray[0],brownArray[0],brownArray[1],blueArr[0])
    secondStageArr.push(greenArray[1],greenArray[2],brownArray[2],brownArray[3],brownArray[4],blueArr[1])
    thirdStageArr.push(greenArray[3],greenArray[4],brownArray[5],brownArray[6],brownArray[7],brownArray[8])
    shuffleArray(firstStageArr)
    shuffleArray(secondStageArr)
    shuffleArray(thirdStageArr)
    console.log('firstStageArr',firstStageArr);
    console.log('secondStageArr',secondStageArr);
    console.log('thirdStageArr',thirdStageArr);
    return firstStageArr,secondStageArr,thirdStageArr;
}

const greenCardsWithEasy = greenCards.filter(function(diff){
    return diff.difficulty !=='hard' && diff.color=='green'
})
const brownCardsWithEasy = brownCards.filter(function(diff){
    return diff.difficulty !=='hard' && diff.color=='brown'
})
const blueCardsWithEasy = blueCards.filter(function(diff){
    return diff.difficulty !=='hard' && diff.color=='blue'
})

const newGreenCardsWithEasy = [...greenCardsWithEasy].sort((a,b)=>a.difficulty>b.difficulty? 1:-1)
const newBrownCardsWithEasy = [...brownCardsWithEasy].sort((a,b)=>a.difficulty>b.difficulty? 1:-1)
const newBlueCardsWithEasy = [...blueCardsWithEasy].sort((a,b)=>a.difficulty>b.difficulty? 1:-1)


const resultSh2 = (min,max,n) =>{
    let res = arraySh(min,max)
    let finNum
    for (let i=1;i<2;i++){
        finNum =res.splice(0,n)
    }
    return finNum
}

function veryeasydiff () {
    firstStageArr = []
    secondStageArr = []
    thirdStageArr = []
    commonCard.classList.add('visability')
    currentCard.classList.add('visability')
    decTracker.classList.add('visability')

    track()

   let cardArray = [];

   let greenFirstCard = changeArr1(resultSh2(0,newGreenCardsWithEasy.length-1,5),newGreenCardsWithEasy,5)
   let brownFirstCards = changeArr1(resultSh2(0,newBrownCardsWithEasy.length-1,9),newBrownCardsWithEasy,9)
    let blueFirstCards = changeArr1(resultSh2(0,newBlueCardsWithEasy.length-1,2),newBlueCardsWithEasy,2)


    //зашафлил

    shuffleArray(greenFirstCard)
    shuffleArray(brownFirstCards)
    shuffleArray(blueFirstCards)

    cardArray.push(greenFirstCard,brownFirstCards,blueFirstCards)
     newCardArray = cardArray.reduce((acc,val)=>acc.concat(val))
     let blueArr =  newCardArray.filter(function(color) {
        return color.color == "blue"
    });
    let brownArray = newCardArray.filter(function(color,index) {
        return color.color == "brown"
    });
    let greenArray = newCardArray.filter(function(color,index) {
        return color.color == "green"
    });



    firstStageArr.push(greenArray[0],brownArray[0],brownArray[1],blueArr[0])
    secondStageArr.push(greenArray[1],greenArray[2],brownArray[2],brownArray[3],brownArray[4],blueArr[1])
    thirdStageArr.push(greenArray[3],greenArray[4],brownArray[5],brownArray[6],brownArray[7],brownArray[8])
    shuffleArray(firstStageArr)
    shuffleArray(secondStageArr)
    shuffleArray(thirdStageArr)
    console.log('firstStageArr',firstStageArr);
    console.log('secondStageArr',secondStageArr);
    console.log('thirdStageArr',thirdStageArr);
    return firstStageArr,secondStageArr,thirdStageArr;
}



function openCommonCardVeryEasy() {
    if(firstStageArr.length!==0){
    number = rundomNum(1,firstStageArr.length)
    currentCards = firstStageArr.pop()
    idCard = currentCards.id
    color = currentCards.color
    if(currentCards.color=='blue'){
        let blueMas =firstStageArr.filter(function(color,index) {
            return color.color == "blue"
        });
   firstStepThirdPoint.innerHTML=blueMas.length
    }
    else if (currentCards.color=='brown'){
        let blueMas =  firstStageArr.filter(function(color,index) {
            return color.color == "brown"
        });
    firstStepSecondPoint.innerHTML=blueMas.length
    }
    else if (currentCards.color =='green'){
        let blueMas = firstStageArr.filter(function(color,index){
            return color.color == "green"
        })
        firstStepFirstPoint.innerHTML=blueMas.length
    }
    setCard()
    }
    else if (firstStageArr.length===0&& secondStageArr.length!==0){
        number = rundomNum(1,secondStageArr.length)
        currentCards = secondStageArr.pop()
        idCard = currentCards.id
        color = currentCards.color
        if(color=='blue'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "blue" 
            });
            secondStepThirdPoint.innerHTML=blueMas.length
        }
        else if (color=='brown'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "brown" 
            });
            secondStepSecondPoint.innerHTML=blueMas.length
        }
        else if (color =='green'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "green" 
            });
            secondStepFirstPoint.innerHTML=blueMas.length
        }
        setCard()
    }

    else if (firstStageArr.length===0&& thirdStageArr.length!==0 && secondStageArr==0 ){
        number = rundomNum(1,thirdStageArr.length)
        currentCards = thirdStageArr.pop()
        idCard = currentCards.id
        color = currentCards.color
        if(color=='blue'){
            
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "blue" 
            });
            thirdStepThirdPoint.innerHTML=blueMas.length
        }
        else if (color=='brown'){
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "brown" 
            });
            thirdStepSecondPoint.innerHTML=blueMas.length
        }
        else if (color =='green'){
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "green" 
            });
            thirdStepFirstPoint.innerHTML=blueMas.length
        }
        setCard()
    }

    
}

const greenCardsWithHard = greenCards.filter(function(diff){
    return diff.difficulty !=='easy' && diff.color=='green'
})
const brownCardsWithHard = brownCards.filter(function(diff){
    return diff.difficulty !=='easy' && diff.color=='brown'
})
const blueCardsWithHard = blueCards.filter(function(diff){
    return diff.difficulty !=='easy' && diff.color=='blue'
})

const newGreenCardsWithHard = [...greenCardsWithHard].sort((a,b)=>a.difficulty>b.difficulty? 1:-1)
const newBrownCardsWithHard = [...brownCardsWithHard].sort((a,b)=>a.difficulty>b.difficulty? 1:-1)
const newBlueCardsWithHard = [...blueCardsWithHard].sort((a,b)=>a.difficulty>b.difficulty? 1:-1)




function veryharddiff () {
    firstStageArr = []
    secondStageArr = []
    thirdStageArr = []
    commonCard.classList.add('visability')
    currentCard.classList.add('visability')
    decTracker.classList.add('visability')

    track()

   let cardArray = [];

   let greenFirstCard = changeArr1(resultSh2(0,newGreenCardsWithHard.length-1,5),newGreenCardsWithHard,5)
   let brownFirstCards = changeArr1(resultSh2(0,newBrownCardsWithHard.length-1,9),newBrownCardsWithHard,9)
    let blueFirstCards = changeArr1(resultSh2(0,newBlueCardsWithHard.length-1,2),newBlueCardsWithHard,2)


    //зашафлил

    shuffleArray(greenFirstCard)
    shuffleArray(brownFirstCards)
    shuffleArray(blueFirstCards)

    cardArray.push(greenFirstCard,brownFirstCards,blueFirstCards)
     newCardArray = cardArray.reduce((acc,val)=>acc.concat(val))
     let blueArr =  newCardArray.filter(function(color) {
        return color.color == "blue"
    });
    let brownArray = newCardArray.filter(function(color,index) {
        return color.color == "brown"
    });
    let greenArray = newCardArray.filter(function(color,index) {
        return color.color == "green"
    });



    firstStageArr.push(greenArray[0],brownArray[0],brownArray[1],blueArr[0])
    secondStageArr.push(greenArray[1],greenArray[2],brownArray[2],brownArray[3],brownArray[4],blueArr[1])
    thirdStageArr.push(greenArray[3],greenArray[4],brownArray[5],brownArray[6],brownArray[7],brownArray[8])
    shuffleArray(firstStageArr)
    shuffleArray(secondStageArr)
    shuffleArray(thirdStageArr)
    console.log('firstStageArr',firstStageArr);
    console.log('secondStageArr',secondStageArr);
    console.log('thirdStageArr',thirdStageArr);
    return firstStageArr,secondStageArr,thirdStageArr;
}



function openCommonCardVeryHard() {
    if(firstStageArr.length!==0){
    number = rundomNum(1,firstStageArr.length)
    currentCards = firstStageArr.pop()
    idCard = currentCards.id
    color = currentCards.color
    if(currentCards.color=='blue'){
        let blueMas =firstStageArr.filter(function(color,index) {
            return color.color == "blue"
        });
   firstStepThirdPoint.innerHTML=blueMas.length
    }
    else if (currentCards.color=='brown'){
        let blueMas =  firstStageArr.filter(function(color,index) {
            return color.color == "brown"
        });
    firstStepSecondPoint.innerHTML=blueMas.length
    }
    else if (currentCards.color =='green'){
        let blueMas = firstStageArr.filter(function(color,index){
            return color.color == "green"
        })
        firstStepFirstPoint.innerHTML=blueMas.length
    }
    setCard()
    }
    else if (firstStageArr.length===0&& secondStageArr.length!==0){
        number = rundomNum(1,secondStageArr.length)
        currentCards = secondStageArr.pop()
        idCard = currentCards.id
        color = currentCards.color
        if(color=='blue'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "blue" 
            });
            secondStepThirdPoint.innerHTML=blueMas.length
        }
        else if (color=='brown'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "brown" 
            });
            secondStepSecondPoint.innerHTML=blueMas.length
        }
        else if (color =='green'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "green" 
            });
            secondStepFirstPoint.innerHTML=blueMas.length
        }
        setCard()
    }

    else if (firstStageArr.length===0&& thirdStageArr.length!==0 && secondStageArr==0 ){
        number = rundomNum(1,thirdStageArr.length)
        currentCards = thirdStageArr.pop()
        idCard = currentCards.id
        color = currentCards.color
        if(color=='blue'){
            
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "blue" 
            });
            thirdStepThirdPoint.innerHTML=blueMas.length
        }
        else if (color=='brown'){
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "brown" 
            });
            thirdStepSecondPoint.innerHTML=blueMas.length
        }
        else if (color =='green'){
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "green" 
            });
            thirdStepFirstPoint.innerHTML=blueMas.length
        }
        setCard()
    }

    
}

function diffCthulthu () {
    firstStageArr = []
    secondStageArr = []
    thirdStageArr = []
    commonCard.classList.add('visability')
    currentCard.classList.add('visability')
    decTracker.classList.add('visability')

    track1()

   let cardArray = [];

   let greenFirstCard = changeArr(resultSh(0,17,4),greenCards,4)
   let brownFirstCards = changeArr(resultSh(0,19,9),brownCards,9)
    let blueFirstCards = changeArr(resultSh(0,11,2),blueCards,2)

    cardArray.push(greenFirstCard,brownFirstCards,blueFirstCards)
     newCardArray = cardArray.reduce((acc,val)=>acc.concat(val))
     let blueArr =  newCardArray.filter(function(color,index) {
        return color.color == "blue" 
    });
    let brownArray = newCardArray.filter(function(color,index) {
        return color.color == "brown" 
    });
    let greenArray = newCardArray.filter(function(color,index) {
        return color.color == "green" 
    });

    firstStageArr.push(brownArray[0],brownArray[1],blueArr[0],blueArr[1])
    secondStageArr.push(greenArray[0],brownArray[2],brownArray[3],brownArray[4])
    thirdStageArr.push(greenArray[1],greenArray[2],greenArray[3],brownArray[5],brownArray[6],brownArray[7],brownArray[8])
    shuffleArray(firstStageArr)
    shuffleArray(secondStageArr)
    shuffleArray(thirdStageArr)
    console.log('firstStageArr',firstStageArr);
    console.log('secondStageArr',secondStageArr);
    console.log('thirdStageArr',thirdStageArr);
return firstStageArr,secondStageArr,thirdStageArr;
}

function openCommonCardCthulthu() {
    if(firstStageArr.length!==0){
    number = rundomNum(1,firstStageArr.length)
    currentCards = firstStageArr.pop()
    idCard = currentCards.id
    color = currentCards.color
    if(currentCards.color=='blue'){
        let blueMas =firstStageArr.filter(function(color,index) {
            return color.color == "blue" 
        });
   firstStepThirdPoint.innerHTML=blueMas.length
    }
    else if (currentCards.color=='brown'){
        let blueMas =  firstStageArr.filter(function(color,index) {
            return color.color == "brown" 
        });
    firstStepSecondPoint.innerHTML=blueMas.length
    }
    else if (currentCards.color =='green'){
        let blueMas = firstStageArr.filter(function(color,index){
            return color.color == "green" 
        })
        firstStepFirstPoint.innerHTML=blueMas.length
    }
    setCard()
    }
    else if (firstStageArr.length===0&& secondStageArr.length!==0){
        number = rundomNum(1,secondStageArr.length)
        currentCards = secondStageArr.pop()
        idCard = currentCards.id
        color = currentCards.color
        if(color=='blue'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "blue" 
            });
            secondStepThirdPoint.innerHTML=blueMas.length
        }
        else if (color=='brown'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "brown" 
            });
            secondStepSecondPoint.innerHTML=blueMas.length
        }
        else if (color =='green'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "green" 
            });
            secondStepFirstPoint.innerHTML=blueMas.length
        }
        setCard()
    }

    else if (firstStageArr.length===0&& thirdStageArr.length!==0 && secondStageArr==0 ){
        number = rundomNum(1,thirdStageArr.length)
        currentCards = thirdStageArr.pop()
        idCard = currentCards.id
        color = currentCards.color
        if(color=='blue'){
            
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "blue" 
            });
            thirdStepThirdPoint.innerHTML=blueMas.length
        }
        else if (color=='brown'){
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "brown" 
            });
            thirdStepSecondPoint.innerHTML=blueMas.length
        }
        else if (color =='green'){
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "green" 
            });
            thirdStepFirstPoint.innerHTML=blueMas.length
        }
        setCard()
    }

}

function easydiffCthulthu () {
    firstStageArr = []
    secondStageArr = []
    thirdStageArr = []
    commonCard.classList.add('visability')
    currentCard.classList.add('visability')
    decTracker.classList.add('visability')

    track1()

   let cardArray = [];



    
   let greenFirstCard = changeArr1(resultSh1(0,greenCardsWithoutHard.length-1,4),greenCardsWithoutHard,4)
   let brownFirstCards = changeArr1(resultSh1(0,brownCardsWithoutHard.length-1,9),brownCardsWithoutHard,9)
    let blueFirstCards = changeArr1(resultSh1(0,blueCardsWithoutHard.length-1,2),blueCardsWithoutHard,2)

    //зашафлил

    shuffleArray(greenFirstCard)
    shuffleArray(brownFirstCards)
    shuffleArray(blueFirstCards)

    cardArray.push(greenFirstCard,brownFirstCards,blueFirstCards)
     newCardArray = cardArray.reduce((acc,val)=>acc.concat(val))
     let blueArr =  newCardArray.filter(function(color) {
        return color.color == "blue"
    });
    let brownArray = newCardArray.filter(function(color,index) {
        return color.color == "brown"
    });
    let greenArray = newCardArray.filter(function(color,index) {
        return color.color == "green"
    });



    firstStageArr.push(brownArray[0],brownArray[1],blueArr[0],blueArr[1])
    secondStageArr.push(greenArray[0],brownArray[2],brownArray[3],brownArray[4])
    thirdStageArr.push(greenArray[1],greenArray[2],greenArray[3],brownArray[5],brownArray[6],brownArray[7],brownArray[8])
    shuffleArray(firstStageArr)
    shuffleArray(secondStageArr)
    shuffleArray(thirdStageArr)
    console.log('firstStageArr',firstStageArr);
    console.log('secondStageArr',secondStageArr);
    console.log('thirdStageArr',thirdStageArr);
    return firstStageArr,secondStageArr,thirdStageArr;
}

function openCommonCardEasyCthulthu() {
    if(firstStageArr.length!==0){
    number = rundomNum(1,firstStageArr.length)
    currentCards = firstStageArr.pop()
    idCard = currentCards.id
    color = currentCards.color
    if(currentCards.color=='blue'){
        let blueMas =firstStageArr.filter(function(color,index) {
            return color.color == "blue"
        });
   firstStepThirdPoint.innerHTML=blueMas.length
    }
    else if (currentCards.color=='brown'){
        let blueMas =  firstStageArr.filter(function(color,index) {
            return color.color == "brown"
        });
    firstStepSecondPoint.innerHTML=blueMas.length
    }
    else if (currentCards.color =='green'){
        let blueMas = firstStageArr.filter(function(color,index){
            return color.color == "green"
        })
        firstStepFirstPoint.innerHTML=blueMas.length
    }
    setCard()
    }
    else if (firstStageArr.length===0&& secondStageArr.length!==0){
        number = rundomNum(1,secondStageArr.length)
        currentCards = secondStageArr.pop()
        idCard = currentCards.id
        color = currentCards.color
        if(color=='blue'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "blue" 
            });
            secondStepThirdPoint.innerHTML=blueMas.length
        }
        else if (color=='brown'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "brown" 
            });
            secondStepSecondPoint.innerHTML=blueMas.length
        }
        else if (color =='green'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "green" 
            });
            secondStepFirstPoint.innerHTML=blueMas.length
        }
        setCard()
    }

    else if (firstStageArr.length===0&& thirdStageArr.length!==0 && secondStageArr==0 ){
        number = rundomNum(1,thirdStageArr.length)
        currentCards = thirdStageArr.pop()
        idCard = currentCards.id
        color = currentCards.color
        if(color=='blue'){
            
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "blue" 
            });
            thirdStepThirdPoint.innerHTML=blueMas.length
        }
        else if (color=='brown'){
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "brown" 
            });
            thirdStepSecondPoint.innerHTML=blueMas.length
        }
        else if (color =='green'){
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "green" 
            });
            thirdStepFirstPoint.innerHTML=blueMas.length
        }
        setCard()
    }

    
}

function harddiffCthulthu () {
    firstStageArr = []
    secondStageArr = []
    thirdStageArr = []
    commonCard.classList.add('visability')
    currentCard.classList.add('visability')
    decTracker.classList.add('visability')

    track1()

   let cardArray = [];

   let greenFirstCard = changeArr1(resultSh1(0,greenCardsWithoutEasy.length-1,4),greenCardsWithoutEasy,4)
   let brownFirstCards = changeArr1(resultSh1(0,brownCardsWithoutEasy.length-1,9),brownCardsWithoutEasy,9)
    let blueFirstCards = changeArr1(resultSh1(0,blueCardsWithoutEasy.length-1,2),blueCardsWithoutEasy,2)

    //зашафлил

    shuffleArray(greenFirstCard)
    shuffleArray(brownFirstCards)
    shuffleArray(blueFirstCards)

    cardArray.push(greenFirstCard,brownFirstCards,blueFirstCards)
     newCardArray = cardArray.reduce((acc,val)=>acc.concat(val))
     let blueArr =  newCardArray.filter(function(color) {
        return color.color == "blue"
    });
    let brownArray = newCardArray.filter(function(color,index) {
        return color.color == "brown"
    });
    let greenArray = newCardArray.filter(function(color,index) {
        return color.color == "green"
    });


    firstStageArr.push(brownArray[0],brownArray[1],blueArr[0],blueArr[1])
    secondStageArr.push(greenArray[0],brownArray[2],brownArray[3],brownArray[4])
    thirdStageArr.push(greenArray[1],greenArray[2],greenArray[3],brownArray[5],brownArray[6],brownArray[7],brownArray[8])
    shuffleArray(firstStageArr)
    shuffleArray(secondStageArr)
    shuffleArray(thirdStageArr)
    console.log('firstStageArr',firstStageArr);
    console.log('secondStageArr',secondStageArr);
    console.log('thirdStageArr',thirdStageArr);
    return firstStageArr,secondStageArr,thirdStageArr;
}

function veryeasydiffCthulthu () {
    firstStageArr = []
    secondStageArr = []
    thirdStageArr = []
    commonCard.classList.add('visability')
    currentCard.classList.add('visability')
    decTracker.classList.add('visability')

    track1()

   let cardArray = [];

   let greenFirstCard = changeArr1(resultSh2(0,newGreenCardsWithEasy.length-1,4),newGreenCardsWithEasy,4)
   let brownFirstCards = changeArr1(resultSh2(0,newBrownCardsWithEasy.length-1,9),newBrownCardsWithEasy,9)
    let blueFirstCards = changeArr1(resultSh2(0,newBlueCardsWithEasy.length-1,2),newBlueCardsWithEasy,2)


    //зашафлил

    shuffleArray(greenFirstCard)
    shuffleArray(brownFirstCards)
    shuffleArray(blueFirstCards)

    cardArray.push(greenFirstCard,brownFirstCards,blueFirstCards)
     newCardArray = cardArray.reduce((acc,val)=>acc.concat(val))
     let blueArr =  newCardArray.filter(function(color) {
        return color.color == "blue"
    });
    let brownArray = newCardArray.filter(function(color,index) {
        return color.color == "brown"
    });
    let greenArray = newCardArray.filter(function(color,index) {
        return color.color == "green"
    });



    firstStageArr.push(brownArray[0],brownArray[1],blueArr[0],blueArr[1])
    secondStageArr.push(greenArray[0],brownArray[2],brownArray[3],brownArray[4])
    thirdStageArr.push(greenArray[1],greenArray[2],greenArray[3],brownArray[5],brownArray[6],brownArray[7],brownArray[8])
    shuffleArray(firstStageArr)
    shuffleArray(secondStageArr)
    shuffleArray(thirdStageArr)
    console.log('firstStageArr',firstStageArr);
    console.log('secondStageArr',secondStageArr);
    console.log('thirdStageArr',thirdStageArr);
    return firstStageArr,secondStageArr,thirdStageArr;
}

function veryharddiffCthulthu () {
    firstStageArr = []
    secondStageArr = []
    thirdStageArr = []
    commonCard.classList.add('visability')
    currentCard.classList.add('visability')
    decTracker.classList.add('visability')

    track1()

   let cardArray = [];

   let greenFirstCard = changeArr1(resultSh2(0,newGreenCardsWithHard.length-1,4),newGreenCardsWithHard,4)
   let brownFirstCards = changeArr1(resultSh2(0,newBrownCardsWithHard.length-1,9),newBrownCardsWithHard,9)
    let blueFirstCards = changeArr1(resultSh2(0,newBlueCardsWithHard.length-1,2),newBlueCardsWithHard,2)


    //зашафлил

    shuffleArray(greenFirstCard)
    shuffleArray(brownFirstCards)
    shuffleArray(blueFirstCards)

    cardArray.push(greenFirstCard,brownFirstCards,blueFirstCards)
     newCardArray = cardArray.reduce((acc,val)=>acc.concat(val))
     let blueArr =  newCardArray.filter(function(color) {
        return color.color == "blue"
    });
    let brownArray = newCardArray.filter(function(color,index) {
        return color.color == "brown"
    });
    let greenArray = newCardArray.filter(function(color,index) {
        return color.color == "green"
    });



    firstStageArr.push(brownArray[0],brownArray[1],blueArr[0],blueArr[1])
    secondStageArr.push(greenArray[0],brownArray[2],brownArray[3],brownArray[4])
    thirdStageArr.push(greenArray[1],greenArray[2],greenArray[3],brownArray[5],brownArray[6],brownArray[7],brownArray[8])
    shuffleArray(firstStageArr)
    shuffleArray(secondStageArr)
    shuffleArray(thirdStageArr)
    console.log('firstStageArr',firstStageArr);
    console.log('secondStageArr',secondStageArr);
    console.log('thirdStageArr',thirdStageArr);
    return firstStageArr,secondStageArr,thirdStageArr;
}



function diffIogSothoth () {
    firstStageArr = []
    secondStageArr = []
    thirdStageArr = []
    commonCard.classList.add('visability')
    currentCard.classList.add('visability')
    decTracker.classList.add('visability')

    track2()

   let cardArray = [];

   let greenFirstCard = changeArr(resultSh(0,17,5),greenCards,5)
   let brownFirstCards = changeArr(resultSh(0,19,9),brownCards,9)
    let blueFirstCards = changeArr(resultSh(0,11,2),blueCards,2)

    cardArray.push(greenFirstCard,brownFirstCards,blueFirstCards)
     newCardArray = cardArray.reduce((acc,val)=>acc.concat(val))
     let blueArr =  newCardArray.filter(function(color,index) {
        return color.color == "blue" 
    });
    let brownArray = newCardArray.filter(function(color,index) {
        return color.color == "brown" 
    });
    let greenArray = newCardArray.filter(function(color,index) {
        return color.color == "green" 
    });

    firstStageArr.push(brownArray[0],brownArray[1],blueArr[0])
    secondStageArr.push(greenArray[0],greenArray[1],brownArray[2],brownArray[3],brownArray[4],blueArr[1])
    thirdStageArr.push(greenArray[2],greenArray[3],brownArray[5],brownArray[6],brownArray[7],brownArray[8])
    shuffleArray(firstStageArr)
    shuffleArray(secondStageArr)
    shuffleArray(thirdStageArr)
    console.log('firstStageArr',firstStageArr);
    console.log('secondStageArr',secondStageArr);
    console.log('thirdStageArr',thirdStageArr);
return firstStageArr,secondStageArr,thirdStageArr;
}

function openCommonCardIogSothoth() {
    if(firstStageArr.length!==0){
    number = rundomNum(1,firstStageArr.length)
    currentCards = firstStageArr.pop()
    idCard = currentCards.id
    color = currentCards.color
    if(currentCards.color=='blue'){
        let blueMas =firstStageArr.filter(function(color,index) {
            return color.color == "blue" 
        });
   firstStepThirdPoint.innerHTML=blueMas.length
    }
    else if (currentCards.color=='brown'){
        let blueMas =  firstStageArr.filter(function(color,index) {
            return color.color == "brown" 
        });
    firstStepSecondPoint.innerHTML=blueMas.length
    }
    else if (currentCards.color =='green'){
        let blueMas = firstStageArr.filter(function(color,index){
            return color.color == "green" 
        })
        firstStepFirstPoint.innerHTML=blueMas.length
    }
    setCard()
    }
    else if (firstStageArr.length===0&& secondStageArr.length!==0){
        number = rundomNum(1,secondStageArr.length)
        currentCards = secondStageArr.pop()
        idCard = currentCards.id
        color = currentCards.color
        if(color=='blue'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "blue" 
            });
            secondStepThirdPoint.innerHTML=blueMas.length
        }
        else if (color=='brown'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "brown" 
            });
            secondStepSecondPoint.innerHTML=blueMas.length
        }
        else if (color =='green'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "green" 
            });
            secondStepFirstPoint.innerHTML=blueMas.length
        }
        setCard()
    }

    else if (firstStageArr.length===0&& thirdStageArr.length!==0 && secondStageArr==0 ){
        number = rundomNum(1,thirdStageArr.length)
        currentCards = thirdStageArr.pop()
        idCard = currentCards.id
        color = currentCards.color
        if(color=='blue'){
            
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "blue" 
            });
            thirdStepThirdPoint.innerHTML=blueMas.length
        }
        else if (color=='brown'){
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "brown" 
            });
            thirdStepSecondPoint.innerHTML=blueMas.length
        }
        else if (color =='green'){
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "green" 
            });
            thirdStepFirstPoint.innerHTML=blueMas.length
        }
        setCard()
    }

}

function easydiffIogSothoth () {
    firstStageArr = []
    secondStageArr = []
    thirdStageArr = []
    commonCard.classList.add('visability')
    currentCard.classList.add('visability')
    decTracker.classList.add('visability')

    track2()

   let cardArray = [];



    
   let greenFirstCard = changeArr1(resultSh1(0,greenCardsWithoutHard.length-1,5),greenCardsWithoutHard,5)
   let brownFirstCards = changeArr1(resultSh1(0,brownCardsWithoutHard.length-1,9),brownCardsWithoutHard,9)
    let blueFirstCards = changeArr1(resultSh1(0,blueCardsWithoutHard.length-1,2),blueCardsWithoutHard,2)

    //зашафлил

    shuffleArray(greenFirstCard)
    shuffleArray(brownFirstCards)
    shuffleArray(blueFirstCards)

    cardArray.push(greenFirstCard,brownFirstCards,blueFirstCards)
     newCardArray = cardArray.reduce((acc,val)=>acc.concat(val))
     let blueArr =  newCardArray.filter(function(color) {
        return color.color == "blue"
    });
    let brownArray = newCardArray.filter(function(color,index) {
        return color.color == "brown"
    });
    let greenArray = newCardArray.filter(function(color,index) {
        return color.color == "green"
    });



    firstStageArr.push(brownArray[0],brownArray[1],blueArr[0])
    secondStageArr.push(greenArray[0],greenArray[1],brownArray[2],brownArray[3],brownArray[4],blueArr[1])
    thirdStageArr.push(greenArray[2],greenArray[3],brownArray[5],brownArray[6],brownArray[7],brownArray[8])
    shuffleArray(firstStageArr)
    shuffleArray(secondStageArr)
    shuffleArray(thirdStageArr)
    console.log('firstStageArr',firstStageArr);
    console.log('secondStageArr',secondStageArr);
    console.log('thirdStageArr',thirdStageArr);
    return firstStageArr,secondStageArr,thirdStageArr;
}

function openCommonCardEasyIogSothoth() {
    if(firstStageArr.length!==0){
    number = rundomNum(1,firstStageArr.length)
    currentCards = firstStageArr.pop()
    idCard = currentCards.id
    color = currentCards.color
    if(currentCards.color=='blue'){
        let blueMas =firstStageArr.filter(function(color,index) {
            return color.color == "blue"
        });
   firstStepThirdPoint.innerHTML=blueMas.length
    }
    else if (currentCards.color=='brown'){
        let blueMas =  firstStageArr.filter(function(color,index) {
            return color.color == "brown"
        });
    firstStepSecondPoint.innerHTML=blueMas.length
    }
    else if (currentCards.color =='green'){
        let blueMas = firstStageArr.filter(function(color,index){
            return color.color == "green"
        })
        firstStepFirstPoint.innerHTML=blueMas.length
    }
    setCard()
    }
    else if (firstStageArr.length===0&& secondStageArr.length!==0){
        number = rundomNum(1,secondStageArr.length)
        currentCards = secondStageArr.pop()
        idCard = currentCards.id
        color = currentCards.color
        if(color=='blue'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "blue" 
            });
            secondStepThirdPoint.innerHTML=blueMas.length
        }
        else if (color=='brown'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "brown" 
            });
            secondStepSecondPoint.innerHTML=blueMas.length
        }
        else if (color =='green'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "green" 
            });
            secondStepFirstPoint.innerHTML=blueMas.length
        }
        setCard()
    }

    else if (firstStageArr.length===0&& thirdStageArr.length!==0 && secondStageArr==0 ){
        number = rundomNum(1,thirdStageArr.length)
        currentCards = thirdStageArr.pop()
        idCard = currentCards.id
        color = currentCards.color
        if(color=='blue'){
            
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "blue" 
            });
            thirdStepThirdPoint.innerHTML=blueMas.length
        }
        else if (color=='brown'){
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "brown" 
            });
            thirdStepSecondPoint.innerHTML=blueMas.length
        }
        else if (color =='green'){
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "green" 
            });
            thirdStepFirstPoint.innerHTML=blueMas.length
        }
        setCard()
    }

    
}

function harddiffIogSothoth () {
    firstStageArr = []
    secondStageArr = []
    thirdStageArr = []
    commonCard.classList.add('visability')
    currentCard.classList.add('visability')
    decTracker.classList.add('visability')

    track2()

   let cardArray = [];

   let greenFirstCard = changeArr1(resultSh1(0,greenCardsWithoutEasy.length-1,5),greenCardsWithoutEasy,5)
   let brownFirstCards = changeArr1(resultSh1(0,brownCardsWithoutEasy.length-1,9),brownCardsWithoutEasy,9)
    let blueFirstCards = changeArr1(resultSh1(0,blueCardsWithoutEasy.length-1,2),blueCardsWithoutEasy,2)

    //зашафлил

    shuffleArray(greenFirstCard)
    shuffleArray(brownFirstCards)
    shuffleArray(blueFirstCards)

    cardArray.push(greenFirstCard,brownFirstCards,blueFirstCards)
     newCardArray = cardArray.reduce((acc,val)=>acc.concat(val))
     let blueArr =  newCardArray.filter(function(color) {
        return color.color == "blue"
    });
    let brownArray = newCardArray.filter(function(color,index) {
        return color.color == "brown"
    });
    let greenArray = newCardArray.filter(function(color,index) {
        return color.color == "green"
    });


    firstStageArr.push(brownArray[0],brownArray[1],blueArr[0])
    secondStageArr.push(greenArray[0],greenArray[1],brownArray[2],brownArray[3],brownArray[4],blueArr[1])
    thirdStageArr.push(greenArray[2],greenArray[3],brownArray[5],brownArray[6],brownArray[7],brownArray[8])
    shuffleArray(firstStageArr)
    shuffleArray(secondStageArr)
    shuffleArray(thirdStageArr)
    console.log('firstStageArr',firstStageArr);
    console.log('secondStageArr',secondStageArr);
    console.log('thirdStageArr',thirdStageArr);
    return firstStageArr,secondStageArr,thirdStageArr;
}

function veryeasydiffIogSothoth () {
    firstStageArr = []
    secondStageArr = []
    thirdStageArr = []
    commonCard.classList.add('visability')
    currentCard.classList.add('visability')
    decTracker.classList.add('visability')

    track2()

   let cardArray = [];

   let greenFirstCard = changeArr1(resultSh2(0,newGreenCardsWithEasy.length-1,5),newGreenCardsWithEasy,5)
   let brownFirstCards = changeArr1(resultSh2(0,newBrownCardsWithEasy.length-1,9),newBrownCardsWithEasy,9)
    let blueFirstCards = changeArr1(resultSh2(0,newBlueCardsWithEasy.length-1,2),newBlueCardsWithEasy,2)


    //зашафлил

    shuffleArray(greenFirstCard)
    shuffleArray(brownFirstCards)
    shuffleArray(blueFirstCards)

    cardArray.push(greenFirstCard,brownFirstCards,blueFirstCards)
     newCardArray = cardArray.reduce((acc,val)=>acc.concat(val))
     let blueArr =  newCardArray.filter(function(color) {
        return color.color == "blue"
    });
    let brownArray = newCardArray.filter(function(color,index) {
        return color.color == "brown"
    });
    let greenArray = newCardArray.filter(function(color,index) {
        return color.color == "green"
    });



    firstStageArr.push(brownArray[0],brownArray[1],blueArr[0])
    secondStageArr.push(greenArray[0],greenArray[1],brownArray[2],brownArray[3],brownArray[4],blueArr[1])
    thirdStageArr.push(greenArray[2],greenArray[3],brownArray[5],brownArray[6],brownArray[7],brownArray[8])
    shuffleArray(firstStageArr)
    shuffleArray(secondStageArr)
    shuffleArray(thirdStageArr)
    console.log('firstStageArr',firstStageArr);
    console.log('secondStageArr',secondStageArr);
    console.log('thirdStageArr',thirdStageArr);
    return firstStageArr,secondStageArr,thirdStageArr;
}

function veryharddiffIogSothoth () {
    firstStageArr = []
    secondStageArr = []
    thirdStageArr = []
    commonCard.classList.add('visability')
    currentCard.classList.add('visability')
    decTracker.classList.add('visability')

    track2()

   let cardArray = [];

   let greenFirstCard = changeArr1(resultSh2(0,newGreenCardsWithHard.length-1,5),newGreenCardsWithHard,5)
   let brownFirstCards = changeArr1(resultSh2(0,newBrownCardsWithHard.length-1,9),newBrownCardsWithHard,9)
    let blueFirstCards = changeArr1(resultSh2(0,newBlueCardsWithHard.length-1,2),newBlueCardsWithHard,2)


    //зашафлил

    shuffleArray(greenFirstCard)
    shuffleArray(brownFirstCards)
    shuffleArray(blueFirstCards)

    cardArray.push(greenFirstCard,brownFirstCards,blueFirstCards)
     newCardArray = cardArray.reduce((acc,val)=>acc.concat(val))
     let blueArr =  newCardArray.filter(function(color) {
        return color.color == "blue"
    });
    let brownArray = newCardArray.filter(function(color,index) {
        return color.color == "brown"
    });
    let greenArray = newCardArray.filter(function(color,index) {
        return color.color == "green"
    });



    firstStageArr.push(brownArray[0],brownArray[1],blueArr[0])
    secondStageArr.push(greenArray[0],greenArray[1],brownArray[2],brownArray[3],brownArray[4],blueArr[1])
    thirdStageArr.push(greenArray[2],greenArray[3],brownArray[5],brownArray[6],brownArray[7],brownArray[8])
    shuffleArray(firstStageArr)
    shuffleArray(secondStageArr)
    shuffleArray(thirdStageArr)
    console.log('firstStageArr',firstStageArr);
    console.log('secondStageArr',secondStageArr);
    console.log('thirdStageArr',thirdStageArr);
    return firstStageArr,secondStageArr,thirdStageArr;
}

function diffShubNig () {
    firstStageArr = []
    secondStageArr = []
    thirdStageArr = []
    commonCard.classList.add('visability')
    currentCard.classList.add('visability')
    decTracker.classList.add('visability')

    track3()

   let cardArray = [];

   let greenFirstCard = changeArr(resultSh(0,17,6),greenCards,6)
   let brownFirstCards = changeArr(resultSh(0,19,8),brownCards,8)
    let blueFirstCards = changeArr(resultSh(0,11,2),blueCards,2)

    cardArray.push(greenFirstCard,brownFirstCards,blueFirstCards)
     newCardArray = cardArray.reduce((acc,val)=>acc.concat(val))
     let blueArr =  newCardArray.filter(function(color,index) {
        return color.color == "blue" 
    });
    let brownArray = newCardArray.filter(function(color,index) {
        return color.color == "brown" 
    });
    let greenArray = newCardArray.filter(function(color,index) {
        return color.color == "green" 
    });

    firstStageArr.push(greenArray[0],brownArray[0],brownArray[1],blueArr[0])
    secondStageArr.push(greenArray[1],greenArray[2],greenArray[3],brownArray[2],brownArray[3],blueArr[1])
    thirdStageArr.push(greenArray[4],greenArray[5],brownArray[4],brownArray[5],brownArray[6],brownArray[7])
    shuffleArray(firstStageArr)
    shuffleArray(secondStageArr)
    shuffleArray(thirdStageArr)
    console.log('firstStageArr',firstStageArr);
    console.log('secondStageArr',secondStageArr);
    console.log('thirdStageArr',thirdStageArr);
return firstStageArr,secondStageArr,thirdStageArr;
}

function openCommonCardShubNig() {
    if(firstStageArr.length!==0){
    number = rundomNum(1,firstStageArr.length)
    currentCards = firstStageArr.pop()
    idCard = currentCards.id
    color = currentCards.color
    if(currentCards.color=='blue'){
        let blueMas =firstStageArr.filter(function(color,index) {
            return color.color == "blue" 
        });
   firstStepThirdPoint.innerHTML=blueMas.length
    }
    else if (currentCards.color=='brown'){
        let blueMas =  firstStageArr.filter(function(color,index) {
            return color.color == "brown" 
        });
    firstStepSecondPoint.innerHTML=blueMas.length
    }
    else if (currentCards.color =='green'){
        let blueMas = firstStageArr.filter(function(color,index){
            return color.color == "green" 
        })
        firstStepFirstPoint.innerHTML=blueMas.length
    }
    setCard()
    }
    else if (firstStageArr.length===0&& secondStageArr.length!==0){
        number = rundomNum(1,secondStageArr.length)
        currentCards = secondStageArr.pop()
        idCard = currentCards.id
        color = currentCards.color
        if(color=='blue'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "blue" 
            });
            secondStepThirdPoint.innerHTML=blueMas.length
        }
        else if (color=='brown'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "brown" 
            });
            secondStepSecondPoint.innerHTML=blueMas.length
        }
        else if (color =='green'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "green" 
            });
            secondStepFirstPoint.innerHTML=blueMas.length
        }
        setCard()
    }

    else if (firstStageArr.length===0&& thirdStageArr.length!==0 && secondStageArr==0 ){
        number = rundomNum(1,thirdStageArr.length)
        currentCards = thirdStageArr.pop()
        idCard = currentCards.id
        color = currentCards.color
        if(color=='blue'){
            
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "blue" 
            });
            thirdStepThirdPoint.innerHTML=blueMas.length
        }
        else if (color=='brown'){
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "brown" 
            });
            thirdStepSecondPoint.innerHTML=blueMas.length
        }
        else if (color =='green'){
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "green" 
            });
            thirdStepFirstPoint.innerHTML=blueMas.length
        }
        setCard()
    }

}

function easydiffShubNig () {
    firstStageArr = []
    secondStageArr = []
    thirdStageArr = []
    commonCard.classList.add('visability')
    currentCard.classList.add('visability')
    decTracker.classList.add('visability')

    track3()

   let cardArray = [];



    
   let greenFirstCard = changeArr1(resultSh1(0,greenCardsWithoutHard.length-1,6),greenCardsWithoutHard,6)
   let brownFirstCards = changeArr1(resultSh1(0,brownCardsWithoutHard.length-1,8),brownCardsWithoutHard,8)
    let blueFirstCards = changeArr1(resultSh1(0,blueCardsWithoutHard.length-1,2),blueCardsWithoutHard,2)

    //зашафлил

    shuffleArray(greenFirstCard)
    shuffleArray(brownFirstCards)
    shuffleArray(blueFirstCards)

    cardArray.push(greenFirstCard,brownFirstCards,blueFirstCards)
     newCardArray = cardArray.reduce((acc,val)=>acc.concat(val))
     let blueArr =  newCardArray.filter(function(color) {
        return color.color == "blue"
    });
    let brownArray = newCardArray.filter(function(color,index) {
        return color.color == "brown"
    });
    let greenArray = newCardArray.filter(function(color,index) {
        return color.color == "green"
    });



    firstStageArr.push(greenArray[0],brownArray[0],brownArray[1],blueArr[0])
    secondStageArr.push(greenArray[1],greenArray[2],greenArray[3],brownArray[2],brownArray[3],blueArr[1])
    thirdStageArr.push(greenArray[4],greenArray[5],brownArray[4],brownArray[5],brownArray[6],brownArray[7])
    shuffleArray(firstStageArr)
    shuffleArray(secondStageArr)
    shuffleArray(thirdStageArr)
    console.log('firstStageArr',firstStageArr);
    console.log('secondStageArr',secondStageArr);
    console.log('thirdStageArr',thirdStageArr);
    return firstStageArr,secondStageArr,thirdStageArr;
}

function openCommonCardEasyShubNig() {
    if(firstStageArr.length!==0){
    number = rundomNum(1,firstStageArr.length)
    currentCards = firstStageArr.pop()
    idCard = currentCards.id
    color = currentCards.color
    if(currentCards.color=='blue'){
        let blueMas =firstStageArr.filter(function(color,index) {
            return color.color == "blue"
        });
   firstStepThirdPoint.innerHTML=blueMas.length
    }
    else if (currentCards.color=='brown'){
        let blueMas =  firstStageArr.filter(function(color,index) {
            return color.color == "brown"
        });
    firstStepSecondPoint.innerHTML=blueMas.length
    }
    else if (currentCards.color =='green'){
        let blueMas = firstStageArr.filter(function(color,index){
            return color.color == "green"
        })
        firstStepFirstPoint.innerHTML=blueMas.length
    }
    setCard()
    }
    else if (firstStageArr.length===0&& secondStageArr.length!==0){
        number = rundomNum(1,secondStageArr.length)
        currentCards = secondStageArr.pop()
        idCard = currentCards.id
        color = currentCards.color
        if(color=='blue'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "blue" 
            });
            secondStepThirdPoint.innerHTML=blueMas.length
        }
        else if (color=='brown'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "brown" 
            });
            secondStepSecondPoint.innerHTML=blueMas.length
        }
        else if (color =='green'){
            let blueMas =secondStageArr.filter(function(color,index) {
                return color.color == "green" 
            });
            secondStepFirstPoint.innerHTML=blueMas.length
        }
        setCard()
    }

    else if (firstStageArr.length===0&& thirdStageArr.length!==0 && secondStageArr==0 ){
        number = rundomNum(1,thirdStageArr.length)
        currentCards = thirdStageArr.pop()
        idCard = currentCards.id
        color = currentCards.color
        if(color=='blue'){
            
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "blue" 
            });
            thirdStepThirdPoint.innerHTML=blueMas.length
        }
        else if (color=='brown'){
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "brown" 
            });
            thirdStepSecondPoint.innerHTML=blueMas.length
        }
        else if (color =='green'){
            let blueMas =thirdStageArr.filter(function(color,index) {
                return color.color == "green" 
            });
            thirdStepFirstPoint.innerHTML=blueMas.length
        }
        setCard()
    }

    
}

function harddiffShubNig () {
    firstStageArr = []
    secondStageArr = []
    thirdStageArr = []
    commonCard.classList.add('visability')
    currentCard.classList.add('visability')
    decTracker.classList.add('visability')

    track3()

   let cardArray = [];

   let greenFirstCard = changeArr1(resultSh1(0,greenCardsWithoutEasy.length-1,6),greenCardsWithoutEasy,6)
   let brownFirstCards = changeArr1(resultSh1(0,brownCardsWithoutEasy.length-1,8),brownCardsWithoutEasy,8)
    let blueFirstCards = changeArr1(resultSh1(0,blueCardsWithoutEasy.length-1,2),blueCardsWithoutEasy,2)

    //зашафлил

    shuffleArray(greenFirstCard)
    shuffleArray(brownFirstCards)
    shuffleArray(blueFirstCards)

    cardArray.push(greenFirstCard,brownFirstCards,blueFirstCards)
     newCardArray = cardArray.reduce((acc,val)=>acc.concat(val))
     let blueArr =  newCardArray.filter(function(color) {
        return color.color == "blue"
    });
    let brownArray = newCardArray.filter(function(color,index) {
        return color.color == "brown"
    });
    let greenArray = newCardArray.filter(function(color,index) {
        return color.color == "green"
    });


    firstStageArr.push(greenArray[0],brownArray[0],brownArray[1],blueArr[0])
    secondStageArr.push(greenArray[1],greenArray[2],greenArray[3],brownArray[2],brownArray[3],blueArr[1])
    thirdStageArr.push(greenArray[4],greenArray[5],brownArray[4],brownArray[5],brownArray[6],brownArray[7])
    shuffleArray(firstStageArr)
    shuffleArray(secondStageArr)
    shuffleArray(thirdStageArr)
    console.log('firstStageArr',firstStageArr);
    console.log('secondStageArr',secondStageArr);
    console.log('thirdStageArr',thirdStageArr);
    return firstStageArr,secondStageArr,thirdStageArr;
}

function veryeasydiffShubNig () {
    firstStageArr = []
    secondStageArr = []
    thirdStageArr = []
    commonCard.classList.add('visability')
    currentCard.classList.add('visability')
    decTracker.classList.add('visability')

    track3()

   let cardArray = [];

   let greenFirstCard = changeArr1(resultSh2(0,newGreenCardsWithEasy.length-1,6),newGreenCardsWithEasy,6)
   let brownFirstCards = changeArr1(resultSh2(0,newBrownCardsWithEasy.length-1,8),newBrownCardsWithEasy,8)
    let blueFirstCards = changeArr1(resultSh2(0,newBlueCardsWithEasy.length-1,2),newBlueCardsWithEasy,2)


    //зашафлил

    shuffleArray(greenFirstCard)
    shuffleArray(brownFirstCards)
    shuffleArray(blueFirstCards)

    cardArray.push(greenFirstCard,brownFirstCards,blueFirstCards)
     newCardArray = cardArray.reduce((acc,val)=>acc.concat(val))
     let blueArr =  newCardArray.filter(function(color) {
        return color.color == "blue"
    });
    let brownArray = newCardArray.filter(function(color,index) {
        return color.color == "brown"
    });
    let greenArray = newCardArray.filter(function(color,index) {
        return color.color == "green"
    });



    firstStageArr.push(greenArray[0],brownArray[0],brownArray[1],blueArr[0])
    secondStageArr.push(greenArray[1],greenArray[2],greenArray[3],brownArray[2],brownArray[3],blueArr[1])
    thirdStageArr.push(greenArray[4],greenArray[5],brownArray[4],brownArray[5],brownArray[6],brownArray[7])
    shuffleArray(firstStageArr)
    shuffleArray(secondStageArr)
    shuffleArray(thirdStageArr)
    console.log('firstStageArr',firstStageArr);
    console.log('secondStageArr',secondStageArr);
    console.log('thirdStageArr',thirdStageArr);
    return firstStageArr,secondStageArr,thirdStageArr;
}

function veryharddiffShubNig () {
    firstStageArr = []
    secondStageArr = []
    thirdStageArr = []
    commonCard.classList.add('visability')
    currentCard.classList.add('visability')
    decTracker.classList.add('visability')

    track3()

   let cardArray = [];

   let greenFirstCard = changeArr1(resultSh2(0,newGreenCardsWithHard.length-1,6),newGreenCardsWithHard,6)
   let brownFirstCards = changeArr1(resultSh2(0,newBrownCardsWithHard.length-1,8),newBrownCardsWithHard,8)
    let blueFirstCards = changeArr1(resultSh2(0,newBlueCardsWithHard.length-1,2),newBlueCardsWithHard,2)


    //зашафлил

    shuffleArray(greenFirstCard)
    shuffleArray(brownFirstCards)
    shuffleArray(blueFirstCards)

    cardArray.push(greenFirstCard,brownFirstCards,blueFirstCards)
     newCardArray = cardArray.reduce((acc,val)=>acc.concat(val))
     let blueArr =  newCardArray.filter(function(color) {
        return color.color == "blue"
    });
    let brownArray = newCardArray.filter(function(color,index) {
        return color.color == "brown"
    });
    let greenArray = newCardArray.filter(function(color,index) {
        return color.color == "green"
    });



    firstStageArr.push(greenArray[0],brownArray[0],brownArray[1],blueArr[0])
    secondStageArr.push(greenArray[1],greenArray[2],greenArray[3],brownArray[2],brownArray[3],blueArr[1])
    thirdStageArr.push(greenArray[4],greenArray[5],brownArray[4],brownArray[5],brownArray[6],brownArray[7])
    shuffleArray(firstStageArr)
    shuffleArray(secondStageArr)
    shuffleArray(thirdStageArr)
    console.log('firstStageArr',firstStageArr);
    console.log('secondStageArr',secondStageArr);
    console.log('thirdStageArr',thirdStageArr);
    return firstStageArr,secondStageArr,thirdStageArr;
}



document.querySelector('.reload').addEventListener('click',()=>{
location.reload()
})
