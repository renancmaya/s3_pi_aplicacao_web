export default class Mapper {
    constructor () {
        
    }
     
       mapCategories (items, categories) {
           for (const item of items) {
               const categoryName = categories.find(category => item.category == category.id).name
               item.category = categoryName
            }
        console.log(items)
        return items
    }
}