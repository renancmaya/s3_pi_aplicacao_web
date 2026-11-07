export default class FilterService {
    constructor() {}

    filterItems (items, filters) {
        let filteredItems = items
        const descriptionValue = filters.searchByDescription
        const typeValue = filters.filterByType
        const categoryValue = filters.filterByCategory
        const dueDateMinValue = filters.filterByDueDateMin
        const dueDateMaxValue = filters.filterByDueDateMax
        const valueMinValue = filters.filterByValueMin
        const valueMaxValue = filters.filterByValueMax

        filteredItems = this.searchByDescription(filteredItems, descriptionValue)
        filteredItems = this.filterByType(filteredItems, typeValue)
        filteredItems = this.filterByCategory(filteredItems, categoryValue)
        filteredItems = this.filterByDueDate(filteredItems, dueDateMinValue, dueDateMaxValue)
        filteredItems = this.filterByValue(filteredItems, valueMinValue, valueMaxValue)
        
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