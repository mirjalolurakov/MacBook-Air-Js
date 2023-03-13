let modalWindow = document.querySelector(".modal")
let openWindow = document.querySelector(".btn__modal")
let closeWindow = document.querySelector(".modal__close")
let memoryBtn = document.querySelectorAll(".memory")
// let openBtnModal = () => {
//     modalWindow.style.dispaly = "flex"


//     setTimeout(() => {
//         modalWindow.style.opacity = "1"
//         modalWindow.style.scale = "1"
//         modalWindow.style.rotate = "0deg"
//     }, 200)
// }

// openWindow.addEventListener('click', openBtnModal)

document.addEventListener('click', event => {
    if (memoryBtn) {
        event.target.focus()
    }
})

openWindow.onclick = () => {
    modalWindow.style.display = 'flex'
    modalBg.style.display = 'block'


    setTimeout(() => {
        modalWindow.style.opacity = '1'
        modalBg.style.opacity = '1'
        modalWindow.style.scale = '1'
        modalWindow.style.rotate = '0deg'

    }, 200)

}
closeWindow.onclick = () => {
    modalWindow.style.display = 'none'
    modalBg.style.display = 'none'

    setTimeout(() => {

        modalWindow.style.rotate = '360deg'
        modalWindow.style.scale = '.2'
        modalWindow.style.opacity = '0'
        modalBg.style.opacity = '0'
    }, 200)
}

let whiteBtn = document.querySelector(".white_btn")
let spaceBtn = document.querySelector(".space_btn")
let mainImg = document.querySelector(".main__img")
let span = document.querySelector("span")

let img1 = "./src/assets/img/img1.svg"
let img2 = "./src/assets/img/img2.svg"

let change__img1 = () => {
    mainImg.src = img1
    span.innerText = "White"
    whiteBtn.style.background.
}

let change__img2 = () => {
    mainImg.src = img2
    span.innerText = "Space Gray"
}

whiteBtn.addEventListener('click', change__img1)

spaceBtn.addEventListener('click', change__img2)

let basePrice = 1999;

let macPrice = document.querySelector(".mac__price")
macPrice.innerText = `$${basePrice}`
let memory_defTb = document.querySelector(".memory_defTb")
let memoryOneTb = document.querySelector(".memory_oneTb")
let memoryTwoTb = document.querySelector(".memory_twoTb")
let memoryThreeTb = document.querySelector(".memory_threeTb")
let memoryOneAdded = 0;
let memoryTwoAdded = 0;
let memoryThreeAdded = 0;
let price = 200;
let falseBTn = false;

memory_defTb.onclick = () => {
    macPrice.innerText = `$${basePrice}`
}

memoryOneTb.onclick = () => {
    if (memoryOneAdded == 0) {
        basePrice = basePrice + 200
        macPrice.innerText = `$${basePrice}`
        memoryOneAdded = memoryOneAdded + 1
    } else if (memoryOneTb = falseBTn) {

    }
    else {
        macPrice.innerText = `$${basePrice}`
    }




}

memoryTwoTb.onclick = () => {
    if (memoryTwoAdded == 0) {
        basePrice = basePrice + 600
        macPrice.innerText = `$${basePrice}`
        memoryTwoAdded = memoryTwoAdded + 1
        basePrice--
    } else {
        macPrice.innerText = `$${basePrice}`
    }


}

memoryThreeTb.onclick = () => {
    if (memoryThreeAdded == 0) {
        basePrice = basePrice + 1200
        macPrice.innerText = `$${basePrice}`
        memoryThreeAdded = memoryThreeAdded + 1
    } else {
        macPrice.innerText = `$${basePrice}`
    }



}
