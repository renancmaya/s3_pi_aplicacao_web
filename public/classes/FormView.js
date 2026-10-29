class FormView {

    constructor () {
        this.onAdd = null
        this.onUpdate = null
    }

    // Continuar daqui
    bindEvents () {
        const form = document.getElementById("form")
        const idField = document.getElementById("id")

        if (idField.value == "") {
            form.removeEventListener("submit", onUpdate)
            form.addEventListener("submit", onAdd)
        } else {
            form.removeEventListener("submit", onAdd)
            form.addEventListener("submit", onUpdate)          
        }

        const clearBtn = document.getElementById("clear")
        clearBtn.addEventListener("click", reset)  
    }

    reset() {

        const form = document.getElementById("form")
        const clearBtn = document.getElementById("clear")
        const idField = document.getElementById("id")
        const submit = document.getElementById("submit")
        
        form.reset()
        clearBtn.classList.remove("show")
        idField.removeAttribute("value")
        submit.innerHTML = "Adicionar registro"
        bindEvents()

    }

}