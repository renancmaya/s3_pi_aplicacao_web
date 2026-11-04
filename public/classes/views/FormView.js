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

        this.onAdd = null;
        this.onUpdate = null;
        this.onLoadUpdate = null;
    }

    // Continuar daqui
    bindEvents () {
        const form = document.getElementById("form");
        /*const idField = document.getElementById("id");

        if (idField.value == "") {
            form.removeEventListener("submit", onUpdate);
            form.addEventListener("submit", onAdd);
        } else {
            form.removeEventListener("submit", onAdd);
            form.addEventListener("submit", onUpdate)    ;      
        }*/

        const clearBtn = document.getElementById("clear");
        clearBtn.addEventListener("click", reset);
    }

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

    reset () {        
        form.reset()
        clearBtn.classList.remove("show")
        idField.removeAttribute("value")
        submit.innerHTML = "Adicionar registro"
        bindEvents()

    }

}