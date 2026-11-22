export default class SettingsService {
    constructor () {
        // Filter visibility
        this.filtersVisibilityKey = 'filtersVisibility'
        this.filtersVisibilityDefault = 'false'
        // Theme
        this.themeKey = 'theme'
        this.themeDefault = 'light'
        // Filters state
        this.filterKey = 'filterSettings'
        this.filtersDefault = {
            status: null,
            description: null,
            type: null,
            category: null,
            dueDateMin: null,
            dueDateMax: null,
            valueMin: null,
            valueMax: null,
        }
        // Sort state
        this.sortKey = 'sortSettings'
        this.sortDefault = {
            column: null,
            order: null,
        }
    }

    save (filtersVisibility, theme, filters, sort) {
        localStorage.setItem(this.filtersVisibilityKey, filtersVisibility)
        localStorage.setItem(this.themeKey, theme)
        localStorage.setItem(this.filterKey, JSON.stringify(filters))
        localStorage.setItem(this.sortKey, JSON.stringify(sort))
    }

    get () {
        if (!localStorage.getItem(this.filtersVisibilityKey)) {
            localStorage.setItem(this.filtersVisibilityKey, JSON.stringify(this.filtersVisibilityDefault))
        }
        if (!localStorage.getItem(this.themeKey)) {
            localStorage.setItem(this.themeKey, JSON.stringify(this.themeDefault))
        }
        if (!localStorage.getItem(this.filterKey)) {
            localStorage.setItem(this.filterKey, JSON.stringify(this.filtersDefault))
        }
        if (!localStorage.getItem(this.sortKey)) {
            localStorage.setItem(this.sortKey, JSON.stringify(this.sortDefault))
        }
        const filtersVisibility = localStorage.getItem(this.filtersVisibilityKey)
        const theme = localStorage.getItem(this.themeKey)
        const filters = localStorage.getItem(this.filterKey)
        const sort = localStorage.getItem(this.sortKey)
        return {
            filtersVisibility: filtersVisibility,
            theme: theme,
            filters: JSON.parse(filters),
            sort: JSON.parse(sort)
        }
    }
}

/*



*/