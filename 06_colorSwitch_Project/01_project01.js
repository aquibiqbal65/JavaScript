const button= document.querySelectorAll('.button')
const body = document.querySelector("body")

button.forEach(function(button) {
    button.addEventListener('click', function(e) {
        if(e.target.id === "grey")
        {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "lavender")
        {
            body.style.backgroundColor = '#ACACFF';
            console.log(e.target.id)
        }
        if(e.target.id === "yellow")
        {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "blue")
        {
            body.style.backgroundColor = e.target.id;
        }
    })
})