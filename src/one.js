
const funcion1 = function (array) {
    let resultado = [];
    array.forEach(element => {
        if (!isNaN(element)) {
            resultado.push(element * 4);
        }
    });
    resultado = resultado.filter(function (elementos) {
        if (elementos > 8) {
            return elementos;
        }
    });
    return resultado;
};



export { funcion1 };