
function makeDiv(text){
    var div = document.createElement("div")
    div.textContent = text
    if(Number(text)%2==0){
        div.classList.add("even-box")
    }
    else{div.classList.add("odd-box")}
    
    return div
    
}

function appendChildren(parent, arr){
    arr.forEach(child =>    {
        parent.appendChild(child)
    });
}

even = []
odd = []
for(i=1;i<=100;i++){
    if(i%2==0){even.push(makeDiv(i))}
    else{odd.push(makeDiv(i))}
    
}


var box1 = document.getElementById("num-1")
var box2 = document.getElementById("num-2")

appendChildren(box2,even)
appendChildren(box1,odd)
