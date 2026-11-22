export default class FilterView {
    constructor () {
        this.formSection = document.getElementById('filter-section');
        this.form = document.getElementById('filter-form');
        this.statusInput = document.getElementById('filter-status');
        this.descriptionInput = document.getElementById('filter-description');
        this.typeInput = document.getElementById('filter-type');
        this.categoryInput = document.getElementById('filter-category');
        this.dueDateMinInput = document.getElementById('filter-due-date-min');
        this.dueDateMaxInput = document.getElementById('filter-due-date-max');
        this.valueMinInput = document.getElementById('filter-value-min');
        this.valueMaxInput = document.getElementById('filter-value-max');
        this.submitFilterBtn = document.getElementById('filter-submit-btn');
        this.clearFilterBtn = document.getElementById('filter-clear-btn');
        
        this.onFilter = null;
        this.form.addEventListener('submit', (event) => this.assembleFilters(event));
        this.clearFilterBtn.addEventListener('click', (event) => this.clear(event));
    }

    populateStatus (dict) {
        const fragment = document.createDocumentFragment();
        const placeholder = document.createElement('option');
        placeholder.value = "";
        placeholder.textContent = "Todos";
        fragment.append(placeholder);
        Object.entries(dict).forEach(([slug, name]) => {
            const option = document.createElement('option');
            option.value = slug;
            option.textContent = name;
            fragment.append(option);
        })
        this.statusInput.replaceChildren(fragment);
    }
    
    populateType (dict) {
        const fragment = document.createDocumentFragment();
        const placeholder = document.createElement('option');
        placeholder.value = "";
        placeholder.textContent = "Todos";
        fragment.append(placeholder);
        Object.entries(dict).forEach(([slug, name]) => {
            const option = document.createElement('option');
            option.value = slug;
            option.textContent = name;
            fragment.append(option);
        })
        this.typeInput.replaceChildren(fragment);
    }
    
    populateCategories (list) {
        const fragment = document.createDocumentFragment();
        const placeholder = document.createElement('option');
        placeholder.value = "";
        placeholder.textContent = "Todas";
        fragment.append(placeholder);

        for (const item of list) {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.name;
            fragment.append(option);
        }
        
        this.categoryInput.append(fragment);
    }

    setupOptions(statusList, typeList, categoryList) {
        this.populateStatus(statusList);
        this.populateType(typeList);
        this.populateCategories(categoryList);
    };

    setState (filters, visibility) {
        this.formSection.dataset.visible = visibility;
        this.statusInput.value = filters.status;
        this.descriptionInput.value = filters.description;
        this.typeInput.value = filters.type;
        this.categoryInput.value = filters.category;
        this.dueDateMinInput.value = filters.dueDateMin;
        this.dueDateMaxInput.value = filters.dueDateMax;
        this.valueMinInput.value = filters.valueMin;
        this.valueMaxInput.value = filters.valueMax;
        if (Object.values(filters).some(value => Boolean(value))) {
            this.clearFilterBtn.classList.add('show');
        }
    }

    assembleFilters (event) {
        event.preventDefault();
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
            // DEBUG
            console.log("filters da View")
            console.log(filters)
            //-------
            this.onFilter(filters);
        }

        if (Object.values(filters).some(value => Boolean(value))) {
            this.clearFilterBtn.classList.add('show');
        }
    }

    toggle () {
        if (this.formSection.dataset.visible === 'false') {
            this.formSection.dataset.visible = 'true';
        } else {
            this.formSection.dataset.visible = 'false';
        }
        return this.formSection.dataset.visible;
    }

    clear () {
        this.clearFilterBtn.classList.remove('show');
        this.form.reset();
    }
}