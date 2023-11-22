
let alunos = []

let input = document.getElementById('input1')
let register = document.getElementById('register')
let search = document.getElementById('search')
let resultado = document.getElementById('res')


register.addEventListener('click', function () {
    if (input.value !== '') {
        alunos.push(input.value)

        input.value = ''
        resultado.classList.remove('hidden')
        resultado.innerHTML = 'O aluno foi registrado com sucesso'
        setTimeout(function () {
            resultado.classList.add('hidden');
        }, 3000);
    } else if (input.value === '') {
        resultado.classList.remove('hidden')
        resultado.innerHTML = 'Preencha o campo de aluno'
        setTimeout(function () {
            resultado.classList.add('hidden');
        }, 3000);
    } else {
        resultado.classList.remove('hidden')
        resultado.innerHTML = 'Aluno não encontrado'
    }

})

search.addEventListener('click', function () {
    const alunoBuscado = input.value.trim()
    if (input.value !== '') {
        if (alunos.includes(alunoBuscado)) {
            resultado.classList.remove('hidden')
            resultado.innerHTML = 'Aluno ja cadastrado'
        } else {
            resultado.classList.remove('hidden')
            resultado.innerHTML = 'Aluno não cadastrado'
        }
    } else {
        resultado.classList.remove('hidden')
        resultado.innerHTML = 'Preencha o campo de aluno'
    }
    setTimeout(() => {
        resultado.classList.add('hidden')
    }, 3000);
})