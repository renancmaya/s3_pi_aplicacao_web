// 1. a classe é um molde de dados (características) ou um gerente operacional (ferramentas)?
// 2. qual configuração fixa precisa ser lida repetidamente por várias funções?
// 3. qual dado precisa sobreviver na memória entre o fim de uma ação e o início de outra?

class Ledger {

    constructor () {
        this.key = "financialRecords";
        this.items = !localStorage.getItem(this.key) ? getAll(this.key) : localStorage.setItem(this.key, JSON.stringify([]))
    }
    
    getAll (key) {
        return JSON.parse(localStorage.getItem(key))
    }

    add (event) {

        event.preventDefault()
        const items = getAll(this.key)

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
        localStorage.setItem(this.key, JSON.stringify(items))
        //drawTable(getAll(this.key))
        //clearForm()
        //configureForm()

    }

    update (event) {
        event.preventDefault()
        const items = getAll(this.key)

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
        
        localStorage.setItem(this.key, JSON.stringify(newItems));
        //drawTable(getAll(this.key))
        //clearForm()
        //configureForm()

    }


    delete (id) {
        this.items = this.items.filter(item => item.id != id);
        localStorage.setItem(this.key, JSON.stringify(this.items));
    }

    duplicate (id) {
        const index = this.items.findIndex(item => item.id == id);
        const referenceItem = this.items[index];
        const newId = this.items[this.items.length - 1].id + 1
        const newItem = new Item({
            ...referenceItem,
            id: newId
        })

        this.items.push(newItem)
        localStorage.setItem(this.key, JSON.stringify(this.items))
    }


}