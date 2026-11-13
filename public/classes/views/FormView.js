export default class FormView {
    constructor () {
        this.formModal = document.getElementById('form-modal');
        this.closeBtn = document.getElementById('close-form')
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
        this.clearBtn = document.getElementById('clear');

        this.onSave = null;
        this.onUpdate = null;

        this.form.addEventListener('submit', (event) => this.submit(event))
        //this.clearBtn.addEventListener('click', (event) => this.clear(event))
        this.clearBtn.addEventListener('click', (event) => this.close(event))
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

    setupOptions({statuses, types, categories}) {
        this.populateSelect(this.typeField, types)
        this.populateSelect(this.categoryField, categories)
        this.populateSelect(this.statusField, statuses)
    }

    submit (event) {
        event.preventDefault()

        const itemData = {
            status: this.statusField.value,
            id: parseFloat(this.idField.value),
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

    // refatorar para receber objeto Item
    loadUpdate (item) {
        this.formModal.classList.add('show')
        this.idField.value = item.id;
        this.statusField.value = item.status;
        this.descriptionField.value = item.description;
        this.typeField.value = item.type;
        this.categoryField.value = item.category;
        this.dueDateField.value = item.dueDate;
        this.valueField.value = item.value;
        /*this.clearBtn.classList.add('show')*/
        this.submitBtn.innerHTML = 'Atualizar registro'
    }

    /*clear () {
        this.form.reset() 
        this.clearBtn.classList.remove("show")
        this.idField.removeAttribute("value")
        this.submitBtn.innerHTML = "Adicionar registro"
        console.log("executou o reset em FormView")
    }*/

    close () {
        this.form.reset() 
        this.formModal.classList.remove("show")
        this.idField.removeAttribute("value")
        this.submitBtn.innerHTML = "Adicionar registro"
    }

    loadForm (type, term) {
        this.formModal.classList.add('show')
        this.typeField.value = type
        this.formHeading.textContent = `Adicionar ${term}`
    }

}