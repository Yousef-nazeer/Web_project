function Function(elmnt,clr) {
    elmnt.style.color = clr;}
    
    function change(){
        var image = document.getElementById('skill');
        image.src="https://i.ytimg.com/vi/C2edn7EpCHc/maxresdefault.jpg"
    }
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }