//variáveis dos inputs do html
let nome = document.querySelector('#name')
let height = document.querySelector('#height')
let weight = document.querySelector('#weight')

//botao
let calc = document.querySelector('#calc')

//tag p de resultado
let result = document.querySelector('#result')

let imc
let imcRes

//botao para calcular o imc
calc.addEventListener('click', btnCalc)

//função do imc
function btnCalc(){
    imc = weight.value / (height.value**2)

    //decisão de qual o imc do usuario
    if(imc < 16.9){
        imcRes = 'Muito abaixo do peso'

    } else if (imc > 17 && imc < 24.9) {
        imcRes = 'Abaixo do peso'

    } else if (imc > 18.5 && imc < 24.9){
        imcRes = 'Peso normal'

    } else if (imc > 25 && imc < 29.9){
        imcRes = 'Acima do peso'

    } else if (imc > 30 && imc < 34.9){
        imcRes = 'Obesidade grau 1'

    } else if (imc > 35 && imc < 40){
        imcRes = 'Obesidade grau 2'

    } else if (imc > 40){
        imcRes = 'Obesidade grau 3'
    } 

    //resultado dos dados
    result.innerHTML = `<p>Olá ${nome.value}, seu IMC é: ${imc.toFixed(2)} e você está ${imcRes}</p> <p>*Lembrando que IMC nem sempre significa que você está saudável ou não, é apenas uma base!*</p>`
}


/*
⠀⠀   ⢀⡴⠁⠀ ⣿⡏⠀⠱⣄
⠀⠀⢀⣴⡟⠁⠀⠀⠀⣿⡇⠀⠀⠀⠙⣷⣄
⠀⠀⠙⢿⣷⣄⠀⠀⠀⣿⡇⠀⠀⢀⣴⣿⠋
⠀⠀⠀⠀⠙⢿⣷⣄⠀⢻⡇⢀⣴⣿⠋
⠀⠀⠀⠀⠀⠀⠈⠻⣷⣾⣷⡿⠋
⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣷⣄
⠀⠀⠀⠀⠀⢀⣶⣿⠟⢹⣏⠻⢿⣷⣄
⠀⠀⠀⢀⣼⣿⠟⠁⠀⢸⣿⠀⠈⠙⢿⣷⣄
⠀⠀⣴⣿⡟⠁⠀⠀⠀⢸⣿⠀⠀⠀⠀⣹⣿⡷
⠀⠀⠈⠻⣿⣦⡀⠀⠀⢸⣿⠀⠀⢀⣼⣿⠏
⠀⠀⠀⠀⠈⠻⣿⣦⡀⢸⣿⠀⣴⣿⠟⠁
⠀⠀⠀⠀⠀⠀⠈⠻⣿⣾⣿⣾⡿⠃⠀
⠀⠀ ⠀⠀⠀⠀⠀⠀⠈⠻⡿⠋
"My honored brethen
We come together
To unite as one
Against those that are damned
We show no mercy
For we have none
Our enemies shall fall
As we uprise
To claim our fate
Now and forever
We'll be together
Love and hate"
*/