function showTitle(title){
    let h1 = document.createElement('h1') 
    h1.innerText = title
    console.log(h1)
    
    document.body.appendChild(h1)
}
let title = "zheshi biao ti"

export {showTitle, title}
