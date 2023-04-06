partie1

EXERCICE1


var value=1;
if(typeof value=='number'){
    console.log("la valeur est un nombre ")
    
}

else {
    console.log("la valeur est une chaine de caractre")
}

value=parseint(value);
switch(value){
   case 0:{
       console.log("la valeur est egal a 0");
       break;
    }   
    case 1:{
       console.log("la valeur est superieur a 0");
       break;
    }
    case 2:{
        console.log("la valeur est superieure a 0")
        console.log("la valeur est superieure a 1")
        break;    
    }
     
    default:{

    }
}



EXERCICE2


    var misterynumber=4;
    var mynumber=2;
    if(misterynumber==mynumber){
    console.log("congratulations");
    }else if(misterynumber>mynumber){
   console.log("+");
    }else{
  console.log("-");
    }


 EXERCICE3

    var a="1";
    var b="2";
    var c=a+b;

    console.log(typeof(a));
    console.log(typeof(b));
    console.log(typeof(c));

    a=parseint(a);
    b=parseint(b);
    c=a+b

    console.log(typeof(a));
    console.log( typeof(b));
    console.log(typeof (c));

    EXERCICE4

    function somme(...args){
    var sum=0;
    for (var i=0; i<args.length;i++)
    {
        sum=sum+args[i];
    }
    return sum;
    }


    EXERCICE7

    function calculesalaire(salairebrut,genre,charge){
        var salaire;
        var bonus=150;
        salaire=salairebrut-(12*salairebrut)/100;
        if(genre=='femme'){
            salaire=salaire-(salairebrut*16)/100;

        }else if(genre=='homme'&& charge==3){
            salaire=salaire-(salairebrut*17)/100;
        }else if(genre=='homme'&& charge==4){
            salaire=salaire-(salaire*16)/100;
        }else{
         salaire=salaire-(salairebrut*18)/100;
        }
        return salaire+bonus;
    }


    EXERCICE

    function counttrue(tab){
        var compteur=0;
        for(i=0;i<tab.length;i++){
            if(tab[i]==true){
             compteur+=1;
            }
        }
     return compteur;
    }


    EXERCICE

   function filter(tab){
        var tabnumber=[];
        for(i=0;i<tab.length; i++){
            if(typeof tab[i]=='number'){
                tabnumber.push(tab[i]);
            }
            
        }
     return tabnumber; 
    }    
    
    

    partie2



    EXERCICE1

    function counttrue(array){
        var compteur=0;
        for(i=0; i<array.length;i++){
            if(array[i]==true){
                compteur+1;
             }
        }
     return (compteur);
    }
    
    
    EXERCICE2


    function filterArray(tab){
        var Newtab=[];
        for(i=0; i<tab.length;i++){
         if(typeof tab[i]=='number'){
            Newtab.push(tab[i]);
         }
        }
        return(Newtab);
    }



    EXERCICE3


        function getAbsSum(...args){
            var sum;
            var resu;
            for(i=0;i<args.length;i++){
                if(sum>0){
                    sum=sum+args[i];
                }else{
                    resu=(-1)*sum
                    sum=resu+args[i];
                }
            }
            return(sum);  
        }

        console.log(getAbsSum());


        EXERCICE6


        var num1=4;
        var num2=4;
        function sameNum (num1,num2){
    
                if(num1==num2){
                    console.log("true")
                }else{
                    console.log("false")
                }

            return(sameNum);  
    
        }
        console.log(sameNum());


        EXERCICE4


        function objectToArray(Newtab){
            const city={
                name:'koumassi',
                population:433139,
                area:182,
            }

            const props=Object.keys(city).flat();
            props==Object.values(city).flat();
            console.log(props);

            return(newtab);

        
        }

        console.log(objectToArray());






 










   
   





