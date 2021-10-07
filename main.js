var img = [
    "https://m.media-amazon.com/images/I/515BniafrYL._AC_SY1000_.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnT_WMgXc68c694R8LHxVd_aKiHPFFlyjJ4TvTGXiSQoK2SGmSmqWkOUhdjiGicZGRDgs&usqp=CAU",
    "https://www.kindpng.com/picc/m/715-7152767_png-download-png-download-brother-clipart-transparent-png.png",
    "https://www.pngitem.com/pimgs/m/284-2841358_mother-with-short-brown-hair-clip-art-at.png",
    "https://www.pngitem.com/pimgs/m/331-3319591_sister-clipart-face-brother-clipart-hd-png-download.png"
    
    
  ]
  var i = 0;
  function next() {
    document.getElementById("album").src = img[i];
    i++;
    if (i == 5){
     i=0; 
    }
      
     
    
  }