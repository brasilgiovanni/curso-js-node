// Typescript
// tudo que for digitar de comando do ts, no console digitar antes 'npx'
//npm install -g typescript (para instalar na pasta, aqui foi instalado direto na pasta 'Typescript')

// para ver a versão no console digitar:  'npx tsc -v'

// npx tsc --init (cria uma nova tsconfig.json)

// Plugin: Code Runner
//npm i -g ts-node
// ctrl + alt + n

// Testando o ctrl + n para rodar

const pedido = (pedido: string) => {
    return `Deu bom no meu pedido tipo string: ${pedido}`;
};

console.log(pedido("Ola Mundo!")); // veja que agora ele eh um JS tipado, voce indica que tipo de valor vai usar

// foi utilizado o ctrl + n para rodar e funcionou!

// Observação: utilizar apenas um tsconfig.json por PROJETO