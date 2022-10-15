const block2 = document.querySelector('.block2');

let position = 0
let topPosition = 0



const moveBlock = function () {
    if(position <= 350 && topPosition == 0){
        position+= 15
        block2.style.left = `${position}px`
        setTimeout(moveBlock, 100)
    }
    else if(position >= 350 && topPosition <= 350){
        topPosition+= 15
        block2.style.top = `${topPosition}px`
        setTimeout(moveBlock, 100)
    }
    else if(position != 0 && topPosition >= 350){
        position-= 15
        block2.style.left = `${position}px`
        setTimeout(moveBlock, 100)
    }
    else if(position == 0 && topPosition != 0){
        topPosition-= 15
        block2.style.top = `${topPosition}px`
        setTimeout(moveBlock, 100)
    }
}
moveBlock()


let x = 0 
const counter = () => {
    x++
    console.log(x)
}
setInterval(counter,1000)