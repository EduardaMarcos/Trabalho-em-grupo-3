import url from "../../url";

async function cadastro() {
    const load = document.getElementById('logoLoad')
    load.style.display = 'flex'
    
    let novoUsuario = document.getElementById('inputnome').value
    let novaSenha = document.getElementById('inputsenha').value
    let farmacia = document.getElementById('inputnomefarmacia').value
    let email = document.getElementById('inputemail').value
    let cep = document.getElementById('cep').value
    let bairro = document.getElementById('inputbairro').value
    let rua = document.getElementById('rua').value
    let numero = document.getElementById('inputnumero').value
    let estado = document.getElementById('UF').value
    let cidade = document.getElementById('cidade').value

    axios.get(url + 'usuario')
    .then(resposta => {
        if (resposta.data.map((data) => data.login).indexOf(novoUsuario) == -1) {
            axios.post(url + 'usuario', 
            {
                id: '',
                login: novoUsuario,
                senha: novaSenha,
                farmacia: farmacia,
                email: email,
                cep: cep,
                bairro: bairro,
                rua: rua,
                numero: numero,
                estado: estado,
                cidade: cidade
            })
            .then(resposta => console.log('usuario criado com sucesso'))
            .catch(erro => alert('aconteceu algum erro'))

            axios.post(url + 'dados', 
            {
                id: '',
                produtos: [

                ]
              })
            .then(resposta => {
                document.getElementById('corpo2').style.display = 'none',
                document.getElementById('corpo1').style.display = 'flex'
            })
            .catch(erro => alert('aconteceu algum erro'))
        } else {
            document.querySelector('.avisoValidacao').style.display = 'flex'
            document.getElementById('validacao').textContent = 'Este usuário já existe!'
        }

        load.style.display = 'none'
    })
    .catch(erro => alert('aconteceu algum erro'))
}

export default cadastro