export default class SettingsService {
    constructor () {
        this.filterKey = 'filterSettings'
        this.filtersEmpty = {
            status: null,
            description: null,
            type: null,
            category: null,
            dueDateMin: null,
            dueDateMax: null,
            valueMin: null,
            valueMax: null,
        }
        this.sortKey = 'sortSettings'
        this.sortEmpty = {
            column: null,
            order: null,
        }
        //this.theme = light
    }

    save (filters, sort) {
        localStorage.setItem(this.filterKey, JSON.stringify(filters))
        localStorage.setItem(this.sortKey, JSON.stringify(sort))
    }

    get () {
        if (!localStorage.getItem(this.filterKey)) {
            localStorage.setItem(this.filterKey, JSON.stringify(this.filtersEmpty))
        }
        if (!localStorage.getItem(this.sortKey)) {
            localStorage.setItem(this.sortKey, JSON.stringify(this.sortEmpty))
        }
        const filters = localStorage.getItem(this.filterKey)
        const sort = localStorage.getItem(this.sortKey)
        const filtersJSON = JSON.parse(filters)
        const sortJSON = JSON.parse(sort)
        return {
            filters: filtersJSON,
            sort: sortJSON
        }
    }
}

/*



*/