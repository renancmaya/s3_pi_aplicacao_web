import { categoryList } from '../../mockData.js'

export default class CategoryRepository {
    constructor() {
        this.key = 'categories'
        this.mockCategories = categoryList

        if (!localStorage.getItem(this.key)) {
            localStorage.setItem(this.key, JSON.stringify(this.mockCategories))
        }
    }

    getAll () {
        const categories = localStorage.getItem(this.key)
        return JSON.parse(categories)
    }

    getById (id) {
        
    }

    getByType (type) {
        const categories = this.getAll()
        return categories.filter((cat) => cat.type === type)
    }

    Add (object) {

    }
}