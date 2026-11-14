import Item from "../models/Item.js";
import FinancialCalculator from "../models/FinancialCalculator.js";
import { typeList } from "../../mockData.js";
import { statusList } from "../../mockData.js";
import { categoryList } from "../../mockData.js";

export default class AppController {

    constructor (repository, settings, toolbar, form, table, filterForm, filterService, sortService, calculator) {
        // Conexões
        this.repository = repository;
        this.settings = settings;
        this.toolbar = toolbar;
        this.form = form;
        this.table = table;
        this.filterForm = filterForm;
        this.filterService = filterService;
        this.sortService = sortService
        this.calculator = calculator
        this.table.onLoadUpdate = (id) => this.handleLoadUpdate(id)
        this.toolbar.onLoadForm = (type) => this.handleLoadForm(type)
        this.form.onSave = (itemData) => this.handleSave(itemData) 
        this.form.onUpdate = (id) => this.handleUpdate(id)
        this.table.onDelete = (id) => this.handleDelete(id)
        this.table.onDuplicate = (id) => this.handleDuplicate(id)
        this.filterForm.onFilter = (filters) => this.handleFilters(filters)
        this.table.onSort = (column) => this.handleSort(column)
    }

    init () {
        const config = {
            statuses: statusList,
            types: typeList,
            categories: categoryList
        }

        this.form.setupOptions(config)
        this.filterForm.setupOptions(config)
        this.table.setupDictionaries(config)

        const {filters, sort} = this.settings.get();
        this.currentFilters = filters;
        this.currentSort = sort;
        this.filterForm.setState(this.currentFilters)
        this.table.setSortBtn(this.currentSort)
        this.refreshTable()
    }

    handleLoadForm (type) {
        console.log('Chegou no controller como: ' + type)
        const term = this.table.typesDictionary[type]
        this.form.loadForm(type, term)
    }

    handleLoadUpdate (id) {
        const item = this.repository.getById(id)
        this.form.loadUpdate(item)
    }

    handleSave (itemData) {
        const item = new Item(itemData)
        if (item.id) {
            this.repository.update(item)
        } else {
            this.repository.add(item)
        }
        console.log(item)
        this.refreshTable()
        this.form.clear()
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
        this.settings.save(this.currentFilters, this.currentSort)
        this.refreshTable()
    }
    
    handleSort (column) {
        console.log(this.currentSort)
        if (this.currentSort.column === column && this.currentSort.order === 'asc') {
            this.currentSort.order = 'desc'
        } else if (this.currentSort.column === column && this.currentSort.order === 'desc') {
            this.currentSort.column = null
            this.currentSort.order = null
        } else {
            this.currentSort.column = column
            this.currentSort.order = 'asc'
        }
        
        this.settings.save(this.currentFilters, this.currentSort)
        this.table.setSortBtn(this.currentSort)
        this.refreshTable()
    }

    refreshTable() {
        const items = this.repository.getAll();
        const filteredItems = this.filterService.filterItems(items, this.currentFilters)
        const sortedItems = this.sortService.sort(filteredItems, this.currentSort)
        const total = FinancialCalculator.sumAll(filteredItems)
        this.table.displayTotal(total)
        this.table.render(sortedItems)
    }
}