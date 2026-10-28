class AppController {

    constructor (table, database) {
        this.table
        this.database
        this.table.onDelete = (id) => this.handleDelete(id)
        this.table.onEdit = (id) => this.handleEdit(id)
        this.table.onDuplicate = (id) => this.handleSubmit(id)
    }

    handleDelete (id) {
        this.database.delete(id)
    }

    handleSubmit () {

    }

    handleEdit () {

    }

}