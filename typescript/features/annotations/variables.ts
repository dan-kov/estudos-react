let apples: number = 5;

apples=10;

let vazio: void = void;

let nothing: undefined = undefined;


const logNumber: (i: number) => void = (i:number) => {
    console.log(i);
}

//quando usar anotations
// 1) Função que retorna o tipo 'any'
const json = '{"x":10, "y":20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x:10, y:20};