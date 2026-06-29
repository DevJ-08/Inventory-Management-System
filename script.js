let inventory = JSON.parse(localStorage.getItem("inventory")) || [];

function updateInventory(){

    let table = document.getElementById("inventoryTable");
    table.innerHTML = "";

    inventory.forEach((item,index)=>{

        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>
                <button onclick="deleteProduct(${index})">
                    Delete
                </button>
            </td>
        `;

        table.appendChild(row);
    });

    document.getElementById("count").textContent = inventory.length;

    localStorage.setItem("inventory", JSON.stringify(inventory));
}

function addProduct(){

    let name = document.getElementById("productName").value;
    let quantity = document.getElementById("productQty").value;

    if(name === "" || quantity === ""){
        alert("Please fill all fields");
        return;
    }

    inventory.push({
        name:name,
        quantity:quantity
    });

    document.getElementById("productName").value="";
    document.getElementById("productQty").value="";

    updateInventory();
}

function deleteProduct(index){

    inventory.splice(index,1);

    updateInventory();
}

updateInventory();