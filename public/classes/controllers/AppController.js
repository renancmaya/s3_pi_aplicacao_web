import { categoryList } from "../../mockData.js";

export default class AppController {

    constructor (repository, form, table, filterForm, filterService) {
        this.repository = repository;
        this.form = form;
        this.table = table;
        this.filterForm = filterForm;
        this.filterService = filterService;

        this.table.onLoadUpdate = (id) => this.handleLoadUpdate(id)
        this.form.onSave = (item) => this.handleSave(item) 
        this.form.onUpdate = (id) => this.handleUpdate(id)
        this.table.onDelete = (id) => this.handleDelete(id)
        this.table.onDuplicate = (id) => this.handleDuplicate(id)
        this.filterForm.onFilter = (filters) => this.handleFilters(filters)
    }

    init () {
        const categories = categoryList
        this.form.loadCategories(categories)
        this.filterForm.loadCategories(categories)
        const items = this.repository.getAll()
        this.table.render(items)
    }

    handleLoadUpdate (id) {
        const item = this.repository.getById(id)
        this.form.loadUpdate(item)
    }

    handleSave (item) {
        if (item.id) {
            this.repository.update(item)
        } else {
            this.repository.add(item)
        }
        const items = this.repository.getAll()
        this.table.render(items)
    }

    handleDelete (id) {
        this.repository.delete(id)
        const items = this.repository.getAll()
        this.table.render(items)
    }

    handleDuplicate (id) {
        this.repository.duplicate(id)
        const items = this.repository.getAll()
        this.table.render(items)
    }

    handleFilters (filters) {
        const items = this.repository.getAll();
        const filteredItems = this.filterService.filterItems(items, filters)
        this.table.render(filteredItems)
    }

}