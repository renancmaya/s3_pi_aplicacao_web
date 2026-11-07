export default class FilterService {
    constructor() {
        
    }

    filterItems (items, filters) {
        let filteredItems = items
        const descriptionValue = filters.searchByDescription
        const typeValue = filters.filterByType
        const CategoryValue = filters.filterByCategory
        const dueDateMinValue = filters.filterByDueDateMin
        const dueDateMaxValue = filters.filterByDueDateMax
        const valueMinValue = filters.filterByValueMin
        const valueMaxValue = filters.filterByValueMax
        filteredItems = descriptionValue ? filteredItems.filter(item => item.description.includes(descriptionValue)) : filteredItems
        filteredItems = typeValue ? filteredItems.filter(item => item.type == typeValue) : filteredItems
        filteredItems = CategoryValue ? filteredItems.filter(item => item.category == CategoryValue) : filteredItems
        filteredItems = dueDateMinValue && dueDateMaxValue ? filteredItems.filter(item => item.dueDate >= dueDateMinValue && item.dueDate <= dueDateMaxValue) : filteredItems
        filteredItems = valueMinValue ? valueMinValue : filteredItems
        filteredItems = valueMaxValue ? valueMaxValue : filteredItems
        
        // debug
        console.log(filteredItems)
        console.log(dueDateMaxValue)
        console.log(items[0].dueDate)
        console.log(dueDateMaxValue > items[0].dueDate)
        return filteredItems
    }
}