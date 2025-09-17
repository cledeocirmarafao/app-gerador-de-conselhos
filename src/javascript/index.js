const botao = document.getElementById('button')
const conselhoId = document.getElementById('conselho-id')
const conselhoText = document.getElementById('conselho')

botao.addEventListener('click', () => {
    pegarConselho()
})

async function pegarConselho() {
    try {
        
        const resposta = await fetch(`https://api.adviceslip.com/advice`)
        const json = await resposta.json()
        const id = json.slip.id
        const conselhoRetornado = json.slip.advice

        conselhoId.innerText = id
        conselhoText.innerText = conselhoRetornado

    } catch (error) {
        console.log('erro ao buscar o conselho');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    pegarConselho()
})