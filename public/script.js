function startLocalStorage (data) {
    
    if (!localStorage.getItem("financialRecords")) {

        localStorage.setItem("financialRecords", JSON.stringify(data))

    }
}

function configureForm () {

    const form = document.getElementById("form")
    const idField = document.getElementById("id")

    if (idField.value == "") {
        console.log("Entrou no modo ADD")
        form.removeEventListener("submit", updateItem)
        form.addEventListener("submit", addItem)
    } else {
        console.log("Entrou no modo EDIT")
        form.removeEventListener("submit", addItem)
        form.addEventListener("submit", updateItem)
    }

    const clearBtn = document.getElementById("clear")
    clearBtn.addEventListener("click", clearForm)
    
}

function clearForm() {

    const form = document.getElementById("form")
    const clearBtn = document.getElementById("clear")
    const idField = document.getElementById("id")
    const submit = document.getElementById("submit")
    
    form.reset()
    clearBtn.classList.remove("show")
    idField.removeAttribute("value")
    submit.innerHTML = "Adicionar registro"
    configureForm()

}

function drawTable (data) {

    const tableBody = document.getElementById("table-body")
    tableBody.innerHTML = ""
    tableBody.addEventListener("click", manageTableClicks)
    
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
        deleteBtn.dataset.id = item.id
        deleteBtn.innerHTML= "Deletar"

        const editBtn = document.createElement("button")
        editBtn.classList.add("table__edit")
        editBtn.dataset.id = item.id
        editBtn.innerHTML = "Editar"

        const duplicateBtn = document.createElement("button")
        duplicateBtn.classList.add("table__duplicate")
        duplicateBtn.dataset.id = item.id
        duplicateBtn.innerHTML = "Duplicar"
        
        actionsCell.append(deleteBtn, editBtn, duplicateBtn)
        newRow.append(idCell, descriptionCell, typeCell, categoryCell, dueDateCell, valueCell, actionsCell)
        tableBody.append(newRow)
    }
        
}

function addItem (event) {

    console.log("Adicionou")

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
    clearForm()
    configureForm()

}

function updateItem (event) {

    console.log("Atualizou")

    event.preventDefault()
    const items = getItems("financialRecords")

    const item = {
        id: document.getElementById("id").value,
        description: document.getElementById("description").value,
        type: document.getElementById("type").value,
        category: document.getElementById("category").value,
        dueDate: document.getElementById("due-date").value,
        value: document.getElementById("value").value,
    }

    const newItems = items.map(mapItem => {

        if (mapItem.id == item.id) {
            return item
        }

        return mapItem
    })
    
    localStorage.setItem("financialRecords", JSON.stringify(newItems))
    drawTable(getItems("financialRecords"))
    clearForm()
    configureForm()

}

function getItems (key) {
    return JSON.parse(localStorage.getItem(key))
}

function manageTableClicks (event) {

    if (event.target.classList.contains("table__delete")) {
        const id = event.target.dataset.id
        deleteItem(id)
    } else if (event.target.classList.contains("table__edit")) {
        const id = event.target.dataset.id
        loadItemForEdit(id)
    } else if (event.target.classList.contains("table__duplicate")) {
        const id = event.target.dataset.id
        duplicateItem(id)
    }
}

function deleteItem (id) {

    const items = getItems("financialRecords")
    const deletedItem = items.filter(item => item.id == id)
    const updatedItems = items.filter(item => item.id != id)
    localStorage.setItem("financialRecords", JSON.stringify(updatedItems))
    drawTable(getItems("financialRecords"))

}

function loadItemForEdit (id) {

    const items = getItems("financialRecords")
    const index = items.findIndex(item => item.id == id)

    const form = document.getElementById("form")
    const idField = document.getElementById("id")
    const descriptionField = document.getElementById("description")
    const typeField = document.getElementById("type")
    const categoryField = document.getElementById("category")
    const dueDateField = document.getElementById("due-date")
    const valueField = document.getElementById("value")
    const submit = document.getElementById("submit")
    const clearBtn = document.getElementById("clear")

    idField.value = items[index].id
    descriptionField.value = items[index].description
    typeField.value = items[index].type
    categoryField.value = items[index].category
    dueDateField.value = items[index].dueDate
    valueField.value = items[index].value
    submit.innerHTML = "Atualizar registro"
    clearBtn.classList.add("show")
    configureForm(

    )
}

function duplicateItem (id) {

    console.log("Duplicação iniciada")

    const items = getItems("financialRecords")
    const index = items.findIndex(item => item.id == id)
    /*const id = items[items.length - 1].id + 1*/

    const copy = {
        id: items[items.length - 1].id + 1,
        description: items[index].description,
        type: items[index].type,
        category: items[index].category,
        dueDate: items[index].dueDate,
        value: items[index].value
    }

    items.push(copy)
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