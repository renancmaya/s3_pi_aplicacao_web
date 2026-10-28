class AppController {

    constructor (table, database) {
        this.table
        this.database
        this.table.onDelete = (id) => this.handleDelete(id)
    }

    handleDelete (id) {
        this.database.delete(id)
    }

    handleSubmit () {

    }

    handleEdit () {

    }

}