

function verifierNumeroDeTelephone(numero){
   caracteres = ['0','1','2','3','4','5','6','7','8','9'];
    if(numero.length - 1 == 9){

        for(i = 0; i < numero.length; i++)
            if(!caracteres.includes(numero[i]))
                return false;
               
        return true;
    }

    return false;
};

num = "4502521964"
console.log(verifierNumeroDeTelephone(num))
console.log(num.length)

function verifierEntier(entier){

    if(entier.includes(',') || entier.includes('.'))
        return false;
    else
        return !isNaN(entier);   

}

console.log(verifierEntier(num))

function verifierCodePostal(codePostal){

    chiffres = ['0','1','2','3','4','5','6','7','8','9'];
    lettres = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    if(codePostal.length == 6){

        estLettre = true;

        for(i = 0; i < codePostal.length; i++){
         
            if(estLettre)
              if(!lettres.includes(codePostal[i].toLowerCase()))
                    return false;
            
            if(!estLettre)
                if(!chiffres.includes(codePostal[i]))
                    return false;
          
            if(i == codePostal.length - 1)
                 return true;

             estLettre = !estLettre;

        }
    }
    return false;
}

codePostal = "j2s7p9"
console.log("Code postal")
console.log(codePostal.length)
console.log(verifierCodePostal(codePostal))