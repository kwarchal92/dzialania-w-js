let pierwsza = 0;
let druga = 0;

function main(pierwsza, druga){

    let suma = pierwsza + druga;
    if (suma>=0 ){   
        console.log("Wynik dodawania wynosi:" +' '+  suma);
    }else{
        console.log('Wynik jest nieprawidłowy');
    }
    
    let roznica = pierwsza - druga;
    if (roznica>=0 ){   
        console.log("Wynik odejmowania wynosi:" +' '+  roznica);
    }else{
        console.log('Wynik jest nieprawidłowy');
    }

    let iloczyn = pierwsza * druga;
    if (iloczyn>=0 ){   
        console.log("Wynik mnożenia wynosi:" +' '+  iloczyn);
    }else{
        console.log('Wynik jest nieprawidłowy');
    }

}


console.log(main(7, 4))

