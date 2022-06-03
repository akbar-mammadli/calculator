let inp = document.querySelector('input');

let reqemIcaze = true;
let emeliyyatIcaze = false;
let sifirIcaze = true;
let noqteIcaze = false;

function reqem(a){
    yoxlama();
    if( reqemIcaze ){
        inp.value+=a;
    }
}

function emeliyyat(a)
{
    yoxlama();
    if( emeliyyatIcaze ){
        inp.value+=a;
    }
}

function sifir() {
    yoxlama();
    if( sifirIcaze )
    {
        inp.value += 0;
    }
}

function noqte() {
    yoxlama();
    if( noqteIcaze )
    {
        inp.value += '.';
    }
}

function yoxlama()
{
    let value = inp.value;
    let sonsimvol = value[value.length - 1 ];
    let emeliyyatList = '/*-+';
    let reqemler = '123456789';
    if( value == '')
    {
        noqteIcaze = false;
        sifirIcaze = true;
        emeliyyatIcaze = false;
        reqemIcaze = true;
    }
   
    if( sonsimvol == '.' )
    {
        noqteIcaze = false;
        emeliyyatIcaze = false;
        reqemIcaze = true;
        sifirIcaze = true;
    }else if( emeliyyatList.indexOf(sonsimvol) > -1 )
    {
        noqteIcaze = false;
        emeliyyatIcaze = false;
        reqemIcaze = true;
        sifirIcaze = true;
    }else if( sonsimvol == '0' ){

         if( value == '0' ){
             sifirIcaze = false;
             reqemIcaze = false;
         }else{
             sifirIcaze = true;
             reqemIcaze = true;
         }

         emeliyyatIcaze = true;
         noqteIcaze = true;

    }else if( reqemler.indexOf(sonsimvol) > -1 ){
        emeliyyatIcaze = true;
        noqteIcaze = false;
        sifirIcaze = true;
        reqemIcaze = true;
    }




}














function beraber() {
    let a = inp.value;
    let netice = eval(a);
    inp.value = netice;
}

function faiz() {
    inp.value += "%";
}
function AC()
{
        inp.value = '';
        r  = true;
}
