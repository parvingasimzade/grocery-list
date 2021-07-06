let myList = ["bananas", "milk", "apples", "eggs", "cake"];
const btnAdd = document.querySelector("#addNew");
const output = document.querySelector(".output");
const newItem = document.querySelector("#addItem");

function addLists() {
    if(newItem.value){
        myList.push(newItem.value);
        build();
        newItem.value = "";
    }
}

btnAdd.addEventListener("click", function() {
    addLists();
})

newItem.addEventListener("keyup", (event) => {
    if(event.which === 13) {
        addLists();
    }
})

window.onload = build;

function build(){
    output.innerHTML = "<h2>MY LIST</h2>";
    const tbl = document.createElement("table");
    for(let i=0; i<myList.length; i++) {
        const row = document.createElement("tr");
        row.ind = i;
        const cell1 = document.createElement("td");
        cell1.innerHTML = myList[i];
        row.appendChild(cell1);
        const cell2 = document.createElement("td");
        const span1 = document.createElement("span");
        span1.innerText = "Delete";
        span1.addEventListener("click", function () {
            //let temp = this.closest("tr").ind;
            let itemOut = myList.splice(i, 1);
            build();
        })
        cell2.appendChild(span1);
        const span2 = document.createElement("span");
        span2.innerText = "Edit";
        span2.addEventListener("click", function(){
            row.style.backgroundColor = "Yellow";
            let tempEle = row.firstElementChild;
            const newInput = document.createElement("input");
            newInput.value = tempEle.innerText;
            tempEle.innerHTML = "";
            tempEle.appendChild(newInput);
            newInput.focus();
            newInput.addEventListener("blur", function() {
                tempEle.innerHTML = newInput.value;
                row.style.backgroundColor = "White";
                myList[i] = newInput.value;
            })

        })
        cell2.appendChild(span2);
        row.appendChild(cell2)
        tbl.appendChild(row);
    }
    output.appendChild(tbl);
}