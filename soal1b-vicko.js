//Reverse Words
function reverseWords(kata){
    var kalimat = kata.split(" "); 
    //console.log(kalimat)// dijadikan array
    kalimat.reverse();
    //console.log(kalimat)//di reverse
    kalimat = kalimat.join(" "); //digabungkan kembali
    return kalimat;
  };

  console.log(reverseWords("Saya Belajar Javascript"));