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
        this.submitFilterBtn = document.getElementById('filter-submit-btn')
        this.clearFilterBtn = document.getElementById('filter-clear-btn')
        
        this.onFilter = null
        this.filterForm.addEventListener('submit', (event) => this.assembleFilters(event))
        this.clearFilterBtn.addEventListener('click', (event) => this.clearFilters(event))
    }

    loadCategories (categories) {
        for (const category of categories) {
            const newOption = document.createElement('option')
            newOption.value = category.name.toLowerCase().replaceAll(' ', '-')
            newOption.innerHTML = category.name
            this.filterByCategory.append(newOption)
        }
    }

    assembleFilters (event) {
        event.preventDefault()
        const filters = {
            description: this.searchByDescription.value,
            type: this.filterByType.value,
            category: this.filterByCategory.value,
            dueDateMin: this.filterByDueDateMin.value,
            dueDateMax: this.filterByDueDateMax.value,
            valueMin: parseFloat(this.filterByValueMin.value),
            valueMax: parseFloat(this.filterByValueMax.value),
        }
        
        if (this.onFilter) {
            this.onFilter(filters)
        }

        if (Object.values(filters).some(value => Boolean(value))) {
            this.clearFilterBtn.classList.add('show')
        }

        console.log(filters)

    }

    clearFilters () {
        this.clearFilterBtn.classList.remove('show')
        this.filterForm.reset()
    }
}