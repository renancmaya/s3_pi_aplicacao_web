class TableView {

    constructor () {
        this.onDelete = null;
        this.onEdit = null;
        this.onDuplicate = null;
    }

    manageTableClicks (event) {

        if (event.target.classList.contains("table__action--delete")) {
            const id = event.target.dataset.id
            if (this.onDelete) {
                this.onDelete(id)
            }

        } else if (event.target.classList.contains("table__action--edit")) {
            const id = event.target.dataset.id
            if (this.onEdit) {
                this.onUpdate(id)
            }

        } else if (event.target.classList.contains("table__action--duplicate")) {
            const id = event.target.dataset.id
            if (this.onDuplicate) {
                this.onDuplicate(id)
            }
        }
    }

    render (data) {

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
            actionsCell.classList.add("table__cell", "table__actions")

            const deleteBtn = document.createElement("button")
            deleteBtn.classList.add("table__action", "table__action--delete")
            deleteBtn.dataset.id = item.id
            deleteBtn.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path></svg>`

            const editBtn = document.createElement("button")
            editBtn.classList.add("table__action", "table__action--edit")
            editBtn.dataset.id = item.id
            editBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 18.89H6.41421L15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89ZM21 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L9.24264 18.89H21V20.89ZM15.7279 6.74785L17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785Z"></path></svg>`

            const duplicateBtn = document.createElement("button")
            duplicateBtn.classList.add("table__action", "table__action--duplicate")
            duplicateBtn.dataset.id = item.id
            duplicateBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>`
            
            actionsCell.append(editBtn, duplicateBtn, deleteBtn)
            newRow.append(idCell, descriptionCell, typeCell, categoryCell, dueDateCell, valueCell, actionsCell)
            tableBody.append(newRow)

        }

    }

}