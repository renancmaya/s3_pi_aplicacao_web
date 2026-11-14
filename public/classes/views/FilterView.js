export default class FilterView {
    constructor () {
        this.form = document.getElementById('filter-form')
        this.statusInput = document.getElementById('filter-status')
        this.descriptionInput = document.getElementById('filter-description')
        this.typeInput = document.getElementById('filter-type')
        this.categoryInput = document.getElementById('filter-category')
        this.dueDateMinInput = document.getElementById('filter-due-date-min')
        this.dueDateMaxInput = document.getElementById('filter-due-date-max')
        this.valueMinInput = document.getElementById('filter-value-min')
        this.valueMaxInput = document.getElementById('filter-value-max')
        this.submitFilterBtn = document.getElementById('filter-submit-btn')
        this.clearFilterBtn = document.getElementById('filter-clear-btn')
        
        this.onFilter = null
        this.form.addEventListener('submit', (event) => this.assembleFilters(event))
        this.clearFilterBtn.addEventListener('click', (event) => this.clearFilters(event))
    }

    populateSelect (element, list) {

        while (element.children.length > 1) {
            element.lastElementChild.remove();
        }
        
        const fragment = document.createDocumentFragment();

        for (const item of list) {
            const option = document.createElement('option')
            option.value = item.slug
            option.textContent = item.name
            fragment.append(option)
        }

        element.append(fragment)
    }

    setupOptions({statuses, types, categories}) {
        this.populateSelect(this.statusInput, statuses)
        this.populateSelect(this.typeInput, types)
        this.populateSelect(this.categoryInput, categories)
    }

    setState (filters) {
        this.statusInput.value = filters.status
        this.descriptionInput.value = filters.description
        this.typeInput.value = filters.type
        this.categoryInput.value = filters.category
        this.dueDateMinInput.value = filters.dueDateMin
        this.dueDateMaxInput.value = filters.dueDateMax
        this.valueMinInput.value = filters.valueMin
        this.valueMaxInput.value = filters.valueMax
        if (Object.values(filters).some(value => Boolean(value))) {
            this.clearFilterBtn.classList.add('show')
        }
    }

    assembleFilters (event) {
        event.preventDefault()
        const filters = {
            status: this.statusInput.value,
            description: this.descriptionInput.value,
            type: this.typeInput.value,
            category: this.categoryInput.value,
            dueDateMin: this.dueDateMinInput.value,
            dueDateMax: this.dueDateMaxInput.value,
            valueMin: parseFloat(this.valueMinInput.value),
            valueMax: parseFloat(this.valueMaxInput.value),
        }
        
        if (this.onFilter) {
            this.onFilter(filters)
        }

        if (Object.values(filters).some(value => Boolean(value))) {
            this.clearFilterBtn.classList.add('show')
        }
    }

    clearFilters () {
        this.clearFilterBtn.classList.remove('show')
        this.form.reset()
    }
}