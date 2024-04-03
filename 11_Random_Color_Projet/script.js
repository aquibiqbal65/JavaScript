const randomColor = function(){ 
    const hex = '0123456789ABCDEF';
    let color = '#';

    for(let i=0; i<6; i++)
    {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

// console.log(randomColor());
let intervalid
const intervalcolor = function(){
    document.body.style.backgroundColor = randomColor();
}

document.querySelector('#start').addEventListener('click', function(){
    intervalid= setInterval(intervalcolor, 1000);
})

document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(intervalid)
    intervalid = null;
})

