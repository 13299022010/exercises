const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

const tabs = Array.from($$(".tab-tag"))
const contents = Array.from($$(".tab-content"))
const tabPart = $(".tab-head")
const actLine = $(".tab-head>.line") 
let index = 0

let clickTab = (index) => {
    contents[index].classList.add("show")
    tabs[index].classList.add("active")
    tabs.filter((item,i)=>{return index != i}).map(item=>item.classList.remove('active'))
    contents.filter((item,i)=>{return index != i}).map(item=>item.classList.remove('show'))
}
clickTab(0)
tabPart.addEventListener("click",function(e){
    let target = e.target
    actLine.style.width = target.offsetWidth+"px"
    actLine.style.transform = `translateX(${target.offsetLeft}px)`
    index = tabs.indexOf(target)
    if(index > -1){
        clickTab(index) 
    }
})


