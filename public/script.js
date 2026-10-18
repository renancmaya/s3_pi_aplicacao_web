function startLocalStorage (data) {
    localStorage.setItem("financialRecords", JSON.stringify(data))
}

function getItems (key) {
    return JSON.parse(localStorage.getItem(key))
}

function drawTable (data) {

    const tableBody = document.getElementById("table-body")
    tableBody.innerHTML = ""
    
    for (const item of data) {
        const newRow = document.createElement("tr")
        newRow.classList.add("table__row")
        newRow.id = item.id
        newRow.setAttribute('data-type', item.type)

        const idCell = document.createElement("td")
        idCell.classList.add("table__cell")
        idCell.textContent = item.id
        
        const descriptionCell = document.createElement("td")
        descriptionCell.classList.add("table__cell")
        descriptionCell.textContent = item.description
        
        const typeCell = document.createElement("td")
        typeCell.classList.add("table__cell")
        typeCell.textContent = item.type
        
        const categoryCell = document.createElement("td")
        categoryCell.classList.add("table__cell")
        categoryCell.textContent = item.category
        
        const dueDateCell = document.createElement("td")
        dueDateCell.classList.add("table__cell")
        dueDateCell.textContent = item.dueDate
        
        const valueCell = document.createElement("td")
        valueCell.classList.add("table__cell")
        valueCell.textContent = parseFloat(item.value)

        const actionsCell = document.createElement("td")
        valueCell.classList.add("table__actions")

        const deleteBtn = document.createElement("button")
        deleteBtn.classList.add("table__delete")
        deleteBtn.innerHTML= "Deletar"

        const editBtn = document.createElement("button")
        editBtn.classList.add("table__edit")
        editBtn.innerHTML = "Editar"
        
        actionsCell.append(deleteBtn, editBtn)
        newRow.append(idCell, descriptionCell, typeCell, categoryCell, dueDateCell, valueCell, actionsCell)
        tableBody.append(newRow)
    }
        
}

function configureForm () {
    const form = document.getElementById("form")
    form.addEventListener("submit", addItem)
}

function addItem (event) {
    event.preventDefault()
    const items = getItems("financialRecords")

    const id = items.length > 0 ? items[items.length - 1].id + 1 : 1

    const item = {
        id: id,
        description: document.getElementById("description").value,
        type: document.getElementById("type").value,
        category: document.getElementById("category").value,
        dueDate: document.getElementById("due-date").value,
        value: document.getElementById("value").value,
    }

    items.push(item)
    localStorage.setItem("financialRecords", JSON.stringify(items))
    drawTable(getItems("financialRecords"))

}

startLocalStorage(mockData)
drawTable(getItems("financialRecords"))
configureForm()

/* 
  {
    id: 1,
    description: "salário mensal",
    type: "entrada",
    category: "fixas",
    dueDate: "2026-10-05",
    value: 5800.00
  }
*/