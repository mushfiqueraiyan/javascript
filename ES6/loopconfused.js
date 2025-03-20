for(let a = 1; a <=3 ; a++){
    for(let b = 1; b <= 3 && b !== a; b++){
        for(let c = 1; c <=3 && c !== a && c !== b; c++){
            console.log(a,b,c);
        }
    }
}