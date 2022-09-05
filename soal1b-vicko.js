//Reverse Words
function reverseWords(kata){
    var kalimat = kata.split(" "); 
    //console.log(kalimat)// dipisahkan dengan spsai [ 'Saya', 'Belajar', 'Javascript' ]
    kalimat.reverse();
    //console.log(kalimat)//di reverse [ 'Javascript', 'Belajar', 'Saya' ]
    kalimat = kalimat.join(" "); //digabungkan kembali
    return kalimat;
  };

  console.log(reverseWords("Saya Belajar Javascript"));