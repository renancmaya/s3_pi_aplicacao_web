class FormView {

    constructor () {

    }

    configureForm () {

        const form = document.getElementById("form")
        const idField = document.getElementById("id")

        if (idField.value == "") {

            form.removeEventListener("submit", updateItem)
            form.addEventListener("submit", addItem)

        } else {

            form.removeEventListener("submit", addItem)
            form.addEventListener("submit", updateItem)
            
        }

        const clearBtn = document.getElementById("clear")
        clearBtn.addEventListener("click", clearForm)
        
    }

    clearForm() {

        const form = document.getElementById("form")
        const clearBtn = document.getElementById("clear")
        const idField = document.getElementById("id")
        const submit = document.getElementById("submit")
        
        form.reset()
        clearBtn.classList.remove("show")
        idField.removeAttribute("value")
        submit.innerHTML = "Adicionar registro"
        configureForm()

    }

}