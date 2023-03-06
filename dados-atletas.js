class Atleta {
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    calculaCategoria(){
        if(this.idade >= 9 && this.idade <= 11){
            return "Infantil";
        }
        if(this.idade >= 12 && this.idade <= 13){
            return "Juvenil";
        }
        if(this.idade >= 14 && this.idade <= 15){
            return "Intermediário";
        }
        if(this.idade >= 16 && this.idade <= 30){
            return "Adulto";
        }
        else {
            return "Sem categoria";
        }
    } // calcula a categoria do atleta

    calculaIMC(){
        return this.peso/(this.altura*this.altura);
    } // calcula o IMC do atleta

    calculaMediaValida(){
      this.notas = this.notas.sort(function(a, b){return b - a});
  
      let notasValidas = this.notas.slice(1,4);
  
      let soma = 0;
     
      notasValidas.forEach(function(nota){
        soma = soma + nota;
      })
      return soma/notasValidas.length
    } // calcula a média de notas válidas do atleta

    obtemNomeAtleta(){
        return `Nome: ${this.nome}`;
    } // retorna o nome do atleta

    obtemIdadeAtleta(){
        return `Idade: ${this.idade}`;
    } // retorna a idade do atleta

    obtemPesoAtleta(){
        return `Peso: ${this.peso}`;
    } // retorna o peso do atleta

    obtemAlturaAtleta(){
        return `Altura: ${this.altura}`;
    } // retorna a altura do atleta

    obtemNotasAtleta(){
        return `Notas: ${this.notas}`
    }
    obtemCategoria(){
        return `Categoria: ${this.calculaCategoria()}`;
    } // retorna a categoria do atleta

    obtemIMC(){
        return `IMC: ${this.calculaIMC()}`;
    } // retorna o IMC do atleta

    obtemMediaValida(){
        return `Média Válida: ${this.calculaMediaValida()}`;
    } // retorna a média das notas válidas do atleta
}

// exemplo de uso

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(atleta.obtemNomeAtleta());
console.log(atleta.obtemIdadeAtleta());
console.log(atleta.obtemPesoAtleta());
console.log(atleta.obtemAlturaAtleta());
console.log(atleta.obtemNotasAtleta());
console.log(atleta.obtemCategoria());
console.log(atleta.obtemIMC());
console.log(atleta.obtemMediaValida());