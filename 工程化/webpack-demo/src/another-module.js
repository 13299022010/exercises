// import _ from 'lodash'

// console.log(
//     _.join(['Another','module','log'],' ')
// )
function getComponent(){
    return import(/*webpackChunkName:"lodash"*/'lodash').then(_ => {
        let element = document.createElement('div')

        element.innerHTML = _.join(['Hello','world'],' ')

        return element
    }).catch(err=> `${err}An error occurred while loading the component`)
}

getComponent().then(component=>{
    console.log(component)
    document.body.appendChild(component)
})