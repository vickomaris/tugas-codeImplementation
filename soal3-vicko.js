function deretAngka(angka) {
  if (typeof angka == "number") {
    const rubahAngka = angka.toString(); //rubah ke string
    // merubah inputan string pada parameter kedalam array dengan method split
    const arrayAngka = rubahAngka.split("0"); //  "595656" "159466" "56"
    // melakukan split array
    for (let i = 0; i < arrayAngka.length; i++) {
      arrayAngka[i] = arrayAngka[i].split("");
    }
     // melakukan sort dan join
    for (let i = 0; i < arrayAngka.length; i++) {
      arrayAngka[i] = arrayAngka[i].sort().join("");
    }
    //melakukan join
    const hasilSort = arrayAngka.join("");
    console.log(hasilSort);
  }
}
deretAngka(5956560159466056);