import { funcion1 } from './one';
import { funcion2 } from './two';


const funcion3 = function (var1,var2) {

    let retorno1 = funcion1(var1);
    let retorno2 = funcion2(var2);

    var objetoFinal = new Object();
    objetoFinal.status = "OK";
    objetoFinal.one = retorno1;
    objetoFinal.two = retorno2;

    console.log(objetoFinal);    
};

export { funcion3 };