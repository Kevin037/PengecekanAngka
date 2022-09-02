function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(cityName).style.display = "block";  
  }

function cekangka7(){
  var input = document.getElementById("angka7").value;
  var masuk;
  var element =[];
  for (let i = 1; i <= input; i++) {
    if (i % 7 == 0) {
      if (i == input) {
        masuk = "sukses"; 
      } else {
        masuk = "bestada"; 
      }
    }else{
      if (i == input) {
        masuk = "sukses"; 
      } else {
        masuk = i ;
      }
    }
    element.push(masuk);
  }
  
  document.getElementById("hasil").innerHTML = element;
  document.getElementById("input_7").innerHTML = "<b>Input : "+input+"</b><br>";
  document.getElementById("angka7").value ="";
  document.getElementById("modal_angka7").style.display="block";
}

function nilaisama(){
  var array = [3,7,1,2,6,7,8,9,12,5,3,12];
  var arr_nilai_sama = [];
  var index1;
  var n;

  for (let a = 0; a < array.length; a++) {
    index1 = array[a];  
    n = 0; 
    for (let b = 0; b < array.length; b++) {
      if (index1 == array[b]) {
        n+=1;
      }
    }
    if (n > 1) {
      var ket_nilai_sama ="";
      var temp_array = [];
      ket_nilai_sama = "Angka "+index1+" = ada "+n;

      if (arr_nilai_sama.length == 0) {
        arr_nilai_sama.push(ket_nilai_sama);
      }
      else{
        n_sama =0;
        var string1 = "masih test";
        var string2 = "masih test";
        for (let cek = 0; cek < arr_nilai_sama.length; cek++) {
          if (ket_nilai_sama == arr_nilai_sama[cek]) {
            n_sama+=2;
          }
        }
        if (n_sama == 0) {
          arr_nilai_sama.push(ket_nilai_sama);
        }
      }
    }  
  }

  let text ="";
  arr_nilai_sama.forEach(element => {
    text += element+"<br>";
  });

  document.getElementById("hasil_nilai_sama").innerHTML = text;
  document.getElementById("modal_nilai_sama").style.display = "block";
}

function urutan(){
  var array = [3,7,1,2,6,7,8,9,12,5,3,12];
  var arr_urut = [];
  var temp;
  for (let a = 0; a < array.length; a++) {

    for (let b = 0; b < array.length; b++) {
      if (array[a] < array[b]) {
        if (a < b) {
          temp = array[a];
          array[a] = array[b];
          array[b] = temp;
        }
      }
    }
  }
  document.getElementById("hasil_urutan").innerHTML = array;
  document.getElementById("modal_urutan").style.display = "block";
}