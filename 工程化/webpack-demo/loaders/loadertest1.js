module.exports = function loadertest1(text){
    console.log(222222222222)
    console.log(text)
    return `export default function(){
        console.log(${text})
    }`
}