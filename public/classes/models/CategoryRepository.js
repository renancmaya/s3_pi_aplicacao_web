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

    Add (object) {

    }
}