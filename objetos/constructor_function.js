// function Carro(marcaAtribuido, precoAtribuido) {
//     this.marca = marcaAtribuido;
//     this.preco = precoAtribuido;
// }

// const honda = new Carro('Honda', 3000);
// const fiat = new Carro('Fiat', 4000);

// function Carro2(marca, precoInicial) {
//     const taxa = 1.2;
//     const precoFinal = precoInicial * taxa;
//     this.marca = marca;
//     this.preco = precoFinal;
//     console.log(this);
// }

// const mazda = new Carro2('Mazda', 5000);

// const Dom = {
//     seletor: 'li',
//     element() {
//          return elementoSelecionado = document.querySelector(this.seletor);
//     },
//     ativar() {
//         this.element().classList.add('ativar');
//     }
// }

function Dom(seletor) {
    this.element = function() {
         return elementoSelecionado = document.querySelector(seletor);
    }

    this.ativar = function(classe) {
        this.element().classList.add(classe);
    }
}

const li = new Dom('li');
const ul = new Dom('ul');

const lastLi = new Dom('li:last-child');
lastLi.ativar('asdsadsa');
