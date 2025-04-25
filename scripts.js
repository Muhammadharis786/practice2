let container =document.querySelector('.container_child')
let isDragstart =false,prevpage,prevScrollleft
console.log(container.scrollLeft)
const dragstart =()=>{
}
const draggaing =(e)=>{
    if(isDragstart==true)
    {
        let position =e.pageX -prevpage
        console.log(position)
   

container.scrollLeft =prevScrollleft-position
    }


}
container.addEventListener('mousedown',function(e){
   prevpage =e.pageX

   prevScrollleft=container.scrollLeft 
    isDragstart =true
    container.style.cursor='grabbing'
e.preventDefault()

})
container.addEventListener('mouseup',function(e){
    container.style.cursor='grab'
    isDragstart =false
e.preventDefault()

})
container.addEventListener('mousemove',draggaing)
container.addEventListener('mouseleave',function(e){
    isDragstart=false
    container.style.cursor='grab'

})

