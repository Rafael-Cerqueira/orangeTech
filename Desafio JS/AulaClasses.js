class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade, anoNascimento){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2022 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} e nasci no ano ${this.anoNascimento}`);
    }
}

function compararPessoas(p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    }else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const Rafael= new Pessoa('Rafael', 25, 1997);
const Jessica = new Pessoa('Jessica', 25, 1998);

compararPessoas(Rafael, Jessica);

// console.log(Rafael);
// Rafael.descrever();
// console.log(Jessica);
// Jessica.descrever();