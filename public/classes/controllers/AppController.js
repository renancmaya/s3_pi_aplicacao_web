import { categoryList } from "../../mockData.js";

export default class AppController {

    constructor (repository, form, table, filterForm, filterService, sortService) {
        // Conexões
        this.repository = repository;
        this.form = form;
        this.table = table;
        this.filterForm = filterForm;
        this.filterService = filterService;
        this.sortService = sortService
        this.table.onLoadUpdate = (id) => this.handleLoadUpdate(id)
        this.form.onSave = (item) => this.handleSave(item) 
        this.form.onUpdate = (id) => this.handleUpdate(id)
        this.table.onDelete = (id) => this.handleDelete(id)
        this.table.onDuplicate = (id) => this.handleDuplicate(id)
        this.filterForm.onFilter = (filters) => this.handleFilters(filters)
        this.table.onSort = (column) => this.handleSort(column)

        // Outros atributos
        this.currentFilters = {
            nulldescription: null,
            type: null,
            category: null,
            dueDateMin: null,
            dueDateMax: null,
            valueMin: null,
            valueMax: null,
        }

        this.currentSort = {
            column: null,
            order: null,
        }
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
        this.refreshTable()
    }

    handleDelete (id) {
        this.repository.delete(id)
        this.refreshTable()
    }

    handleDuplicate (id) {
        this.repository.duplicate(id)
        this.refreshTable()
    }

    handleFilters (filters) {
        this.currentFilters = filters
        this.refreshTable()
    }
    
    handleSort (column) {
        if (this.currentSort.column === column && this.currentSort.order === 'asc') {
            this.currentSort.order = 'desc'
        } else if (this.currentSort.column === column && this.currentSort.order === 'desc') {
            this.currentSort.column = null
            this.currentSort.order = null
        } else {
            this.currentSort.column = column
            this.currentSort.order = 'asc'
        }
        
        this.table.updateSortBtn(this.currentSort.column, this.currentSort.order)
        this.refreshTable()
    }

    refreshTable() {
        const items = this.repository.getAll();
        const filteredItems = this.filterService.filterItems(items, this.currentFilters)
        const sortedItems = this.sortService.sort(filteredItems, this.currentSort)
        this.table.render(sortedItems)
    }
}