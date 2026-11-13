export default class ToolbarView {
    constructor() {
        this.toolbar = document.getElementById('toolbar')
        this.addIncomeBtn = document.getElementById('add-income')
        this.addExpenseBtn = document.getElementById('add-expense')

        this.toolbar.addEventListener('click', (event) => this.manageToolbarClicks(event))

        this.onLoadForm = null
    }

    manageToolbarClicks (event) {
        if (event.target.id === this.addIncomeBtn.id || event.target.id === this.addExpenseBtn.id) {
            if (this.onLoadForm) {
                this.onLoadForm(event.target.dataset.type)
            }
        }
    }
}