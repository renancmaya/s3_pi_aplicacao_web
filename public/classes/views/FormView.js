export default class FormView {
    constructor () {
        this.form = document.getElementById('form');
        this.idField = document.getElementById('id');
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
        this.clearBtn.addEventListener('click', (event) => this.clear(event))
    }

    loadCategories (categories) {
        for (const category of categories) {
            const newOption = document.createElement('option')
            newOption.value = category.slug
            newOption.innerHTML = category.name
            this.categoryField.append(newOption)
        }
    }

    submit (event) {
        event.preventDefault()

        const itemData = {
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
        this.idField.value = item.id;
        this.descriptionField.value = item.description;
        this.typeField.value = item.type;
        this.categoryField.value = item.category;
        this.dueDateField.value = item.dueDate;
        this.valueField.value = item.value;
        this.clearBtn.classList.add('show')
        this.submitBtn.innerHTML = 'Atualizar registro'
    }

    clear () {
        this.form.reset() 
        this.clearBtn.classList.remove("show")
        this.idField.removeAttribute("value")
        this.submitBtn.innerHTML = "Adicionar registro"
        console.log("executou o reset em FormView")
    }

}