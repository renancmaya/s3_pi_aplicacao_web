// 1. a classe é um molde de dados (características) ou um gerente operacional (ferramentas)?
// 2. qual configuração fixa precisa ser lida repetidamente por várias funções?
// 3. qual dado precisa sobreviver na memória entre o fim de uma ação e o início de outra?

class Ledger {

    key;
    data = [];

    constructor () {
        this.key = "financialRecords";
    }

    startLocalStorage (data) {
    
        if (!localStorage.getItem(this.key)) {

            localStorage.setItem(this.key, JSON.stringify(data))

        }
    }
    
    getItems (key) {
        return JSON.parse(localStorage.getItem(key))
    }

    addItem (event) {

        event.preventDefault()
        const items = getItems(this.key)

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

    updateItem (event) {

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


    deleteItem (id) {

        const items = getItems("financialRecords")
        const deletedItem = items.filter(item => item.id == id)
        const updatedItems = items.filter(item => item.id != id)
        localStorage.setItem("financialRecords", JSON.stringify(updatedItems))
        drawTable(getItems("financialRecords"))

    }

    duplicateItem (id) {

        const items = getItems("financialRecords")
        const index = items.findIndex(item => item.id == id)

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


}