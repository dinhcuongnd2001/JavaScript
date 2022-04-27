const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const hElements = $$('.header__element')
const cElements = $$('.content__element')
// console.log(hElement, cElement)

const hElementActive = $('.header__element.active');
const line = $('.line');


console.log([hElementActive, line])
hElements.forEach((element, index) =>{
    const cElement  = cElements[index];
    element.onclick = function()
    {
        
        line.style.left = element.offsetLeft + "px";
        line.style.width = element.offsetWidth + 'px'; 
        $('.header__element.active').classList.remove('active');
        this.classList.add('active');
        $('.content__element.show').classList.remove('show');
        cElement.classList.add('show');
    }
})

