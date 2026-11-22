export default class ToolbarView {
    constructor() {
        this.toolbar = document.getElementById('toolbar');
        this.addIncomeBtn = document.getElementById('add-income');
        this.addExpenseBtn = document.getElementById('add-expense');
        this.showFiltersBtn = document.getElementById('filter-show');
        this.toolbar.addEventListener('click', (event) => this.manageToolbarClicks(event));
        this.onLoadFormAdd = null;
        this.onToggleFilters = null;
    }

    manageToolbarClicks (event) {
        if (event.target.id === this.addIncomeBtn.id || event.target.id === this.addExpenseBtn.id) {
            if (this.onLoadFormAdd) {
                this.onLoadFormAdd(event.target.dataset.type);
            }
        } else if (event.target.id === this.showFiltersBtn.id) {
            if (this.onToggleFilters) {
                this.onToggleFilters();
            }
        }
    }

    showFiltersCount (number) {
        let filterCounter = document.getElementById('filter-counter');

        if (number > 0) {
            if (!filterCounter) {
                filterCounter = document.createElement('span');
                filterCounter.id = 'filter-counter';
                this.showFiltersBtn.append(filterCounter);
                this.showFiltersBtn.dataset.active = 'true';
            }
            
            filterCounter.textContent = `(${number})`;
        } else {
            filterCounter?.remove();
            this.showFiltersBtn.dataset.active = 'false';
        }
    }

    toggleShowFilterBtn (state) {
        this.showFiltersBtn.dataset.show = state
    }
}