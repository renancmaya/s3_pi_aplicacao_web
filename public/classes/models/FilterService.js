export default class FilterService {
    constructor() {
        
    }

    filterItems (items, filters) {
        let filteredItems = items
        const descriptionValue = filters.searchByDescription.value
        const typeValue = filters.filterByType.value
        const categoryValue = filters.filterByCategory.value
        const dueDateMinValue = filters.filterByDueDateMin.value
        const dueDateMaxValue = filters.filterByDueDateMax.value
        const valueMinValue = filters.filterByValueMin.value
        const valueMaxValue = filters.filterByValueMax.value
        filteredItems = descriptionValue ? filteredItems.filter(item => item.description.includes(descriptionValue)) : filteredItems
        filteredItems = typeValue ? typeValue : filteredItems
        filteredItems = categoryValue ? categoryValue : filteredItems
        filteredItems = dueDateMinValue ? dueDateMinValue : filteredItems
        filteredItems = dueDateMaxValue ? dueDateMaxValue : filteredItems
        filteredItems = valueMinValue ? valueMinValue : filteredItems
        filteredItems = valueMaxValue ? valueMaxValue : filteredItems
        return filteredItems
    }
}