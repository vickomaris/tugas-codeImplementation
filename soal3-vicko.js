function deretAngka(angka) {
  if (typeof angka == "number") {
    const rubahAngka = angka.toString(); //rubah ke string
    // merubah inputan string pada parameter kedalam array dengan method split
    const arrayAngka = rubahAngka.split("0"); //  "595656" "159466" "56"
    // melakukan split array
    for (let i = 0; i < arrayAngka.length; i++) {
      arrayAngka[i] = arrayAngka[i].split("");
    }//console.log(arrayAngka);  [ '5', '9', '5', '6', '5', '6' ],
                              // [ '1', '5', '9', '4', '6', '6' ],
                              // [ '5', '6' ]
     // melakukan sort dan join
    for (let i = 0; i < arrayAngka.length; i++) {
      arrayAngka[i] = arrayAngka[i].sort().join("");
    } //console.log(arrayAngka); //[ '555669', '145669', '56' ] 
    //melakukan join
    const hasilSort = arrayAngka.join("");
    console.log(hasilSort);
  }else{
    console.log("inputan bukan number")
  }
}
deretAngka(5956560159466056);