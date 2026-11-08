export default class SortService {
    constructor () {

    }

    sort (items, sort) {
        console.log(items)
        console.log(sort)

        if (!sort || !sort.column || !sort.order) {
            return [...items]
        }

        const direction = sort.order === 'asc' ? 1 : -1;
        
        return items.sort((a, b) => {
            const valueA = a[sort.column]
            const valueB = b[sort.column]
            if (typeof valueA === 'string' && typeof valueB === 'string') {
                return valueA.localeCompare(valueB) * direction
            }

            return (valueA - valueB) * direction
        })        
    }
}