import Item from "../models/Item.js";
import FinancialCalculator from "../models/FinancialCalculator.js";
import { typeList } from "../../mockData.js";
import { statusList } from "../../mockData.js";

export default class AppController {

    constructor (itemRepository, categoryRepository, mapper, settings, toolbar, form, table, filterForm, filterService, sortService, calculator) {
        // Definições
        this.itemRepository = itemRepository;
        this.categoryRepository = categoryRepository;
        this.mapper = mapper;
        this.settings = settings;
        this.toolbar = toolbar;
        this.form = form;
        this.table = table;
        this.filterForm = filterForm;
        this.filterService = filterService;
        this.sortService = sortService
        this.calculator = calculator
        // Conexões
        this.table.onLoadFormUpdate = (id) => this.handleLoadFormUpdate(id)
        this.toolbar.onLoadFormAdd = (type) => this.handleLoadFormAdd(type)
        this.form.onSave = (itemData) => this.handleSave(itemData) 
        this.form.onUpdate = (id) => this.handleUpdate(id)
        this.table.onDelete = (id) => this.handleDelete(id)
        this.table.onDuplicate = (id) => this.handleDuplicate(id)
        this.filterForm.onFilter = (filters) => this.handleFilters(filters)
        this.table.onSort = (column) => this.handleSort(column)
        // Outros atributos
        this.statusList = statusList
        this.typeList = typeList
        this.categoryList
    }

    init () {
        this.categoryList = this.categoryRepository.getAll()
        //
        
        this.form.populateStatus(this.statusList)
        this.filterForm.setupOptions(this.statusList, this.typeList, this.categoryList)
        this.table.setupDictionaries(this.statusList, this.typeList, this.categoryList)
        
        const {filters, sort} = this.settings.get();
        this.currentFilters = filters;
        this.currentSort = sort;
        this.filterForm.setState(this.currentFilters)
        this.table.setSortBtn(this.currentSort)
        this.refreshTable()        
    }

    handleLoadFormAdd (type) {
        const term = this.table.typesDictionary[type]
        const categories = this.categoryRepository.getByType(type)
        this.form.loadFormAdd(type, term, categories)
    }
    
    handleLoadFormUpdate (id) {
        const item = this.itemRepository.getById(id)
        const categories = this.categoryRepository.getByType(item.type)
        this.form.loadFormUpdate(item, categories)
    }

    handleSave (itemData) {
        const item = new Item(itemData)
        if (item.id) {
            this.itemRepository.update(item)
        } else {
            this.itemRepository.add(item)
        }
        this.refreshTable()
        this.form.close()
    }

    handleDelete (id) {
        this.itemRepository.delete(id)
        this.refreshTable()
    }

    handleDuplicate (id) {
        this.itemRepository.duplicate(id)
        this.refreshTable()
    }

    handleFilters (filters) {
        this.currentFilters = filters
        this.settings.save(this.currentFilters, this.currentSort)
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
        
        this.settings.save(this.currentFilters, this.currentSort)
        this.table.setSortBtn(this.currentSort)
        this.refreshTable()
    }

    refreshTable() {
        const items = this.itemRepository.getAll();
        const categories = this.categoryRepository.getAll();
        const mappedItems = this.mapper.mapCategories(items, categories)
        const filteredItems = this.filterService.filterItems(mappedItems, this.currentFilters)
        const sortedItems = this.sortService.sort(filteredItems, this.currentSort)
        const total = FinancialCalculator.sumAll(filteredItems)
        this.table.displayTotal(total)
        this.table.render(sortedItems)
    }
}