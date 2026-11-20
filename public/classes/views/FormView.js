export default class FormView {
    constructor () {
        this.formModal = document.getElementById('form-modal');
        this.closeBtn = document.getElementById('close')
        this.form = document.getElementById('form');
        this.formHeading = document.getElementById('form-heading');
        this.idField = document.getElementById('id');
        this.statusField = document.getElementById('status');
        this.descriptionField = document.getElementById('description');
        this.typeField = document.getElementById('type');
        this.categoryField = document.getElementById('category');
        this.dueDateField = document.getElementById('due-date');
        this.valueField = document.getElementById('value');
        this.submitBtn = document.getElementById('submit');

        this.onSave = null;
        this.onUpdate = null;

        this.form.addEventListener('submit', (event) => this.submit(event))
        this.closeBtn.addEventListener('click', (event) => this.close(event))
    }

    populateSelect (element, list) {

        while (element.children.length > 1) {
            element.lastElementChild.remove();
        }
        
        const fragment = document.createDocumentFragment();

        for (const item of list) {
            const option = document.createElement('option')
            option.value = item.slug
            option.textContent = item.name
            fragment.append(option)
        }

        element.append(fragment)
    }

    populateCategories (categories) {
        const fragment = document.createDocumentFragment()

        for (const category of categories) {
            const option = document.createElement('option')
            option.value = category.id
            option.textContent = category.name
            fragment.append(option)
        }

        
        this.categoryField.append(fragment)
    }

    setupOptions({statuses, types, categories}) {
        this.populateSelect(this.typeField, types)
        this.populateSelect(this.statusField, statuses)
        this.populateCategories(categories)
    }

    submit (event) {
        event.preventDefault()

        const itemData = {
            id: parseFloat(this.idField.value),
            status: this.statusField.value,
            description: this.descriptionField.value,
            type: this.typeField.value,
            category: this.categoryField.value,
            dueDate: this.dueDateField.value,
            value: parseFloat(this.valueField.value),
        }

        if (this.onSave) {
            this.onSave(itemData)
        }
    }

    loadFormAdd (type, term) {
        this.formModal.showModal()
        this.typeField.value = type
        this.formHeading.textContent = `Adicionar ${term}`
        this.submitBtn.innerHTML = 'Salvar'
    }
    
    loadFormUpdate (item) {
        this.formModal.showModal()
        this.idField.value = item.id;
        this.statusField.value = item.status;
        this.descriptionField.value = item.description;
        this.typeField.value = item.type;
        this.categoryField.value = item.category;
        this.dueDateField.value = item.dueDate;
        this.valueField.value = item.value;
        this.formHeading.textContent = `Atualizar registro`
        this.submitBtn.innerHTML = 'Salvar'
    }

    clear () {
        this.form.reset() 
        this.idField.removeAttribute("value")
    }
    
    close () {
        this.clear()
        this.formModal.close()
    }
}