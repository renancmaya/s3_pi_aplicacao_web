export default class FilterView {
    constructor () {
        this.filterForm = document.getElementById('filter-form')
        this.searchByDescription = document.getElementById('filter-description')
        this.filterByType = document.getElementById('filter-type')
        this.filterByCategory = document.getElementById('filter-category')
        this.filterByDueDateMin = document.getElementById('filter-due-date-min')
        this.filterByDueDateMax = document.getElementById('filter-due-date-max')
        this.filterByValueMin = document.getElementById('filter-value-min')
        this.filterByValueMax = document.getElementById('filter-value-max')
        this.submitFilterBtn = document.getElementById('submit-filter-btn')
        
        this.onFilter = null
        this.filterForm.addEventListener('submit', (event) => this.assembleFilters(event))
    }

    assembleFilters (event) {
        event.preventDefault()
        console.log("Botão de filtros clicado")
        const filters = {
            searchByDescription: this.searchByDescription.value,
            filterByType: this.filterByType.value,
            filterByCategory: this.filterByCategory.value,
            filterByDueDateMin: this.filterByDueDateMin.value,
            filterByDueDateMax: this.filterByValueMax.value,
            filterByValueMin: this.filterByValueMin.value,
            filterByValueMax: this.filterByValueMax.value,
        }
        
        if (this.onFilter) {
            this.onFilter(filters)
            console.log("Carregou filtros")
            console.log(filters)
        }
    }
}