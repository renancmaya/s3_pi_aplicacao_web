export default class ItemRepository {

    constructor () {
        this.key = "financialRecords";
        if (!localStorage.getItem(this.key)) {
            localStorage.setItem(this.key, JSON.stringify([]))
        }
        this.items = this.getAll()
    }
    
    getAll () {
        return JSON.parse(localStorage.getItem(this.key))
    }

    getByID (id) {
        const items = this.getAll()
        return items.find(item => item.id == id)
    }

    add (item) {
        const items = this.getAll()
        item.id = items.length > 0 ? items[items.length - 1].id + 1 : 1
        items.push(item)
        localStorage.setItem(this.key, JSON.stringify(items))
    }

    update (item) {
        const items = this.getAll()
        const newItems = items.map(mapItem => {

            if (mapItem.id == item.id) {
                return item
            }

            return mapItem
        })
        
        localStorage.setItem(this.key, JSON.stringify(newItems));
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