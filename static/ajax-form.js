const form = document.querySelector("form__v1")

form.addEventListener("submit", handleSubmit)

    async function handleSubmit(event) {
        event.preventDefault()

        const form = new FormData(this)
        const response = await fetch(this.action, {
            method: this.method,
            body: form,
            headers: {
                'Accept': 'application/json'
            }
        })
        if (response.ok) {
            this.reset()
            alert("Gracias por contactarnos, te escribiremos pronto.")
        }
    }