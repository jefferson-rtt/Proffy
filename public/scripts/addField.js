// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener("click", cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegar o campo. Que campo??
    const fields = newFieldContainer.querySelectorAll("input")


    //limpar cada campo. pega o campo do momento  limpa
    fields.forEach(function(field) {
        field.value = ""
    })

    // Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
} 