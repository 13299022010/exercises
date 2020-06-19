const $btn = document.querySelector('button')
const $p = document.querySelector('p')

function init(){
    $btn.onclick = e => {
        $p.innerText = '点我了'
    }
}

module.exports.init = init