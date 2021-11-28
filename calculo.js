window.onload=function(){
    pantalla=document.getElementById("visor");
}

//variables 
//num ingresado
n="0";

//num inicial que queda en espera
ni=0;

//bandera 1 para escribir en el visor --- 2 para continuar agregando cifras
bandera=1;

//bandera que marca si se ingreso una coma 0:no hay coma --- 1:hay coma
coma=0;

//bandera que marca si hay una operacion pendiente que espera el igual
operacion="no";


//visualizar nro con coma
function numero(nn){
    if(n=="0" || bandera==1){
        pantalla.innerHTML=nn;
        n=nn;
        if(nn=="."){
            pantalla.innerHTML="0.";
            n=nn;
            coma=1;
        }
    }else{
        if(nn=="." && coma==0){
            pantalla.innerHTML+=nn;
            n+=nn;
            coma=1;
        }else if(nn=="." && coma==1){}
        else{
            pantalla.innerHTML+=nn;
            n+=nn;
        }
    }
    bandera=0;
}

function operador(o){
    //guarda el numero ingresado
    ni=n;
    //guarda la operacion
    operacion=o;
    //levantamos la bandera que ha sido ingresado un operador
    bandera=1;
}

//igual resuelve la operacion
function igual(){
    if(operacion=="no"){
        pantalla.innerHTML=n;
    }else{
        cadena=ni+operacion+n;
        solucion=eval(cadena);
        pantalla.innerHTML=solucion;
        n=solucion;
        operacion="no";
        bandera=1;
    }

}

function raiz(){
    n=Math.sqrt(n);
    pantalla.innerHTML=n;
    operacion="no";
    bandera=1;
}

function porcentaje(){
    n=n/100;
    pantalla.innerHTML=n;
    igual();
    operacion="no";
    bandera=1;
}

function opuesto(){
    inverso=Number(n);
    inverso=-inverso;
    n=String(inverso);
    pantalla.innerHTML=n;
}

function invert(){
    invertido=Number(n);
    invertido=(1/n);
    n=String(invertido);
    pantalla.innerHTML=n;
    bandera=1;
}

//funciones de borrado
function retroceso(){
    cifras=n.length;
    borrado=n.substr(cifras-1, cifras);
    n=n.substr(0, cifras-1)
    if(n==""){
        n="0";
    }if(borrado=="."){
        coma=0;
    }pantalla.innerHTML=n;
}

function borradoParcial(){
    pantalla.innerHTML=0;
    n=0;
    coma=0;
}

function borradoTotal(){
    pantalla.innerHTML=0;
    n=0;
    coma=0;
    ni=0;
    operacion="no";
}