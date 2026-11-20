export default class Item {
    constructor(object) {
        this.id = object.id
        this.status = object.status
        this.description = object.description
        this.type = object.type
        this.category = object.category
        this.dueDate = object.dueDate
        this.value = this.formatValue (object.value)
    }

    formatValue (value) {
        if ((this.type === 'entrada' && value < 0 ) || (this.type === 'saida' && value > 0)) {
            return value * -1
        }

        return value
    }
}