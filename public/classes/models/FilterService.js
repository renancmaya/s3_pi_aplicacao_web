export default class FilterService {
    constructor() {}

    filterItems (items, filters) {
        let filteredItems = items
        filteredItems = this.searchByDescription(filteredItems, filters.description)
        filteredItems = this.filterByType(filteredItems, filters.type)
        filteredItems = this.filterByCategory(filteredItems, filters.category)
        filteredItems = this.filterByDueDate(filteredItems, filters.dueDateMin, filters.dueDateMax)
        filteredItems = this.filterByValue(filteredItems, filters.valueMin, filters.valueMax)
        return filteredItems
    }

    searchByDescription (items, filter) {
        return filter ? items.filter(item => item.description.includes(filter)) : items
    }
    
    filterByType (items, filter) {
        return filter ? items.filter(item => item.type == filter) : items
    }

    filterByCategory (items, filter) {
        return filter ? items.filter(item => item.category == filter) : items
    }

    filterByDueDate (items, filterMin, filterMax) {
        items = items.filter(item => !filterMin || item.dueDate >= filterMin)
        items = items.filter(item => !filterMax || item.dueDate <= filterMax)
        return items
    }

    filterByValue (items, filterMin, filterMax) {
        items = items.filter(item => !filterMin || item.value >= filterMin)
        items = items.filter(item => !filterMax || item.value <= filterMax)
        return items
    }
}