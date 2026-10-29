class AppController {

    constructor (form, table, database) {
        this.table
        this.database
        this.form.onAdd = (item) => this.handleAdd(item) 
        this.form.onUpdate = (id) => this.handleUpdate(id)
        this.table.onDelete = (id) => this.handleDelete(id)
        this.table.onDuplicate = (id) => this.handleDuplicate(id)
    }

    handleAdd (item) {
        this.database.add
    }

    handleUpdate (item) {
        this.database.onUpdate(id)
    }

    handleDelete (id) {
        this.database.delete(id)
        newArray = this.database.getAll()
        this.table.render(newArray)
    }

    handleDuplicate (id) {
        this.database.duplicate(id)
        newArray = this.database.getAll()
        this.table.render(newArray)
    }

}