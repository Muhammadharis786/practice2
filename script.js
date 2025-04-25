let list =document.querySelector('.list')
let width =320
console.log(list.scrollWidth)
function  scrolls(direction){
if(direction=='right'){
  list.scrollLeft=list.scrollLeft+width
}
if(direction=='left'){
  list.scrollLeft=list.scrollLeft-width

}
}

let refresh = setInterval(()=>{
scrolls(direction)


},3000)


