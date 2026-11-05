import Item from './Item.js'

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

    getById (id) {
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
        const items = this.getAll()
        const newArray = items.filter(item => item.id != id);
        localStorage.setItem(this.key, JSON.stringify(newArray));
    }

    duplicate (id) {
        const items = this.getAll()
        const index = items.findIndex(item => item.id == id);
        const referenceItem = items[index];
        const newId = items[items.length - 1].id + 1
        const newItem = new Item({...referenceItem, id: newId})

        items.push(newItem)
        localStorage.setItem(this.key, JSON.stringify(items))
    }


}