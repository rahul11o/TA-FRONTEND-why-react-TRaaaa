let input = document.querySelector(`input[type='text']`)
let rootElem = document.querySelector(".list")

let allMovies =[];

function createMovieUi(){
    allMovies.forEach((elem)=>{
        let li = document.createElement("li");
        let p = document.createElement("p")
        p.innerText = elem.name;
        let button = document.createElement("button")
        if(elem.watched === false){
            button.innerText = "To watch"
        }else{
            button.innertext = "Watched"
        }
        li.append(p, button )
        rootElem.append(li)
    })
}

input.addEventListener("keyup",(event)=>{
    if(event.keyCode === 13){
        allMovies.push({
            name : event.target.value,
            watched : false
        });
        event.target.value ="";
        rootElem.innerHTML = "";
        createMovieUi()
    }
})