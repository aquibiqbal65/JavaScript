    //document.getElementById('buildings').onclick= function(){
   //     alert('buildings clicked')
 //   }


//  document.getElementById('images').addEventListener('click', function(e){
//     console.log("Clicked inside UL")
// }, false)

// document.getElementById('buildings').addEventListener('click', function(e){
//     console.log("Clicked inside Buildings")
//     e.stopPropagation() // this will stop from propagating the outer elements
// }, false) 


// if true it is knowas capturing in this case outer to inner events occurs
//if false it is knownas bubble in this case inner to outer events occurs


// type,   timestamp, defaultPrevented
//target, toElement, srcElement , currentTarget,
//clientX, ClientY, screenX, screenY
// altkey, ctrlkey, shiftkey , keycode



// attachEvent()
//jquery - onevent
// document.getElementById('google').addEventListener(click, function(e){
//     e.preventDefault();
    
// },false)

document.querySelector('#images').addEventListener('click', function(e){
    if(e.target.tagName === 'IMG'){
   let removeit= e.target.parentNode
   removeit.remove()
   //removeit.parentNode.removeChild(removeit)
    }
    
})
