export default class AppController {

    constructor (repository, form, table, filterForm, filterService) {
        this.repository = repository;
        this.form = form;
        this.table = table;
        this.filterForm = filterForm;
        this.filterService = filterService;

        this.table.onLoadUpdate = (id) => this.handleLoadUpdate(id)
        this.form.onAdd = (item) => this.handleAdd(item) 
        this.form.onUpdate = (id) => this.handleUpdate(id)
        this.table.onDelete = (id) => this.handleDelete(id)
        this.table.onDuplicate = (id) => this.handleDuplicate(id)
        this.filterForm.onFilter = (filters) => this.handleFilters(filters)
    }

    init () {
        const items = this.repository.getAll()
        this.table.render(items)
        console.log("Iniciou com sucesso")
    }

    handleLoadUpdate (id) {
        const item = this.repository.getById(id)
        this.form.loadUpdate(item)
    }

    handleSave (item) {
        this.database.add
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

    handleFilters (filters) {
        const items = this.repository.getAll();
        const filteredItems = this.filterService.filterItems(items, filters)
        this.table.render(filteredItems)
    }

}