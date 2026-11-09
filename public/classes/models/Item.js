export default class Item {
    constructor(itemData) {
        this.id = itemData.id
        this.status = itemData.status
        this.description = itemData.description
        this.type = itemData.type
        this.category = itemData.category
        this.dueDate = itemData.dueDate
        this.value = this.formatValue (itemData.value)
    }

    formatValue (value) {
        if ((this.type === 'entrada' && value < 0 ) || (this.type === 'saida' && value > 0)) {
            return value * -1
        }

        return value
    }
}