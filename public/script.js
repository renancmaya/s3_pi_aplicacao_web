function buildTable (data) {

    const tableBody = document.getElementById("table-body")
    
    for (const item of data) {
        const newRow = document.createElement("tr")
        newRow.classList.add("table__row")
        newRow.id = item.id

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
        valueCell.textContent = item.value

        newRow.append(idCell, descriptionCell, typeCell, categoryCell, dueDateCell, valueCell)
        tableBody.append(newRow)
    }
        
}

buildTable(mockData)

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