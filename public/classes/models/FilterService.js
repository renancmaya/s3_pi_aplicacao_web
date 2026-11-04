export default class FilterService {
    constructor() {
        
    }

    filterItems (items, filters) {
        let filteredItems
        filteredItems = filters.searchByDescription.value ? filters.searchByDescription.value : filteredItems
        filteredItems = filters.filterByType.value ? filters.filterByType.value : filteredItems
        filteredItems = filters.filterByCategory.value ? filters.filterByCategory.value : filteredItems
        filteredItems = filters.filterByDueDate.value ? filters.filterByDueDate.value : filteredItems
        filteredItems = filters.filterByValue.value ? filters.filterByValue.value : filteredItems
        return filteredItems
    }
}