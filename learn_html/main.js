const inputBox = document.getElementById('input-text');
const listContanier = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ""){
        alert ("you must write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContanier.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.setAttribute("aria-label", "Delete task");
        li.appendChild(span);
        savData()
    }

    inputBox.value = "";
    savData()
};



listContanier.addEventListener("click", function(e){

    if(e.target.tagName === "LI"){

        e.target.classList.toggle("checked");
    }else if( e.target.tagName === "SPAN"){

        e.target.parentElement.remove()
    }
    savData()

},false);

function savData(){
    localStorage.setItem("data", listContanier.innerHTML);
}

function showTask(){

    listContanier.innerHTML = localStorage.getItem("data")

}

showTask()










































// const inputBox = document.getElementById("input-box");
// const listContanier = document.getElementById("list-contanier");

// function addTask(){
//     if(inputBox.value === ""){
//         alert ("you must write something!")
//     }else{
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContanier.appendChild(li);

       

//          saveData();
//     let span = document.createElement("span");
//     span.innerHTML = "\u00d7";
//     li.appendChild(span)
//     }
//     inputBox.value = "";
//    saveData();
// }

// listContanier.addEventListener("click", function(e){
//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle("checked");
//         saveData();
//     }else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove()
//         saveData();
//     }
// }, false);

// function saveData(){
//     localStorage.setItem("data", listContanier.innerHTML)
// }

// function showTask(){
//     listContanier.innerHTML = localStorage.getItem("data")
// }
// showTask()