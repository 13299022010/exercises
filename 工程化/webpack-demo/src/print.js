export default function printMe(num){
    console.log('Iga  a ae  aaa t qqwww ee aa fr o m   pr  nt')
    console.log(num)
    let ele = document.createElement('h1')
    ele.innerText = "no refresh"
    document.body.appendChild(ele)
    setTimeout(() => {
        document.body.removeChild(ele)
    }, 5000);
}