window.addEventListener("load",function() {

    var nbAlarme = 0;
    var nbAlarmeActive = 0;
    var i;
    horloge();
    
    var dival = document.getElementById("mesAlarmes");
    var boutton = document.getElementById("creerAlarme")
    boutton.addEventListener("click",creeAlarme);
    document.getElementById("pause").addEventListener('click',pause)

    var heure = [];
    var min = [];

     
    function horloge() {
      function actualiser() {
        var date = new Date();
        var str = date.getHours();
        str += ':'+(date.getMinutes()<10?'0':'')+date.getMinutes();
        str += ':'+(date.getSeconds()<10?'0':'')+date.getSeconds();
        document.getElementById("horloge").innerHTML = str;
      }
      actualiser();
      setInterval(sonner,1000);
      setInterval(actualiser,1000);
    }

    function creeAlarme() { 

    var div = document.createElement("div");
    var inputCheck = document.createElement("input");
    var inputHeure = document.createElement("input");
    var inputMin = document.createElement("input");
    var inputNom = document.createElement("input");
    var inputSupp = document.createElement("input");
    var select = document.createElement("select");
    div.id = "alarme" + nbAlarme;
    inputCheck.type = "checkbox";
    inputCheck.id = "check" + nbAlarme;
    inputCheck.addEventListener('change',alarmeActive);
    div.appendChild(inputCheck);
    inputHeure.type = "number";
    inputHeure.id = "heure" + nbAlarme;
    inputHeure.class = "num";
    inputHeure.min = "0";
    inputHeure.max = "24";

    div.appendChild(inputHeure); 
    inputMin.type = "number";
    inputMin.id = "min" + nbAlarme;
    inputMin.min = "0";
    inputMin.max = "60";
    div.appendChild(inputMin);
    inputNom.type = "text"
    inputNom.id = "nom" + nbAlarme;
    div.appendChild(inputNom);
    div.appendChild(select);
    inputSupp.type = "submit"
    inputSupp.id = "supp" + nbAlarme;
    inputSupp.value = "-"
    div.appendChild(inputSupp);
    inputSupp.addEventListener("click",supp);

    dival.appendChild(div);
    nbAlarme++;

  }

  function supp(){
    dival.removeChild(this.parentNode);
  }

  function alarmeActive(){
    if (this.checked == true) {
      console.log(this.parentNode.getElementsByTagName('input')[1]);
      this.parentNode.value = nbAlarmeActive;
      heure.push(-1);
      min.push(-1);
      console.log(this.parentNode.value);
      this.parentNode.getElementsByTagName('input')[1].addEventListener('change',setTime)
      this.parentNode.getElementsByTagName('input')[2].addEventListener('change',setTime)
      nbAlarmeActive++;
    }else{
      heure[this.parentNode.value] = -1;
      min[this.parentNode.value] = -1;
    }
  }

  function setTime(){
      console.log("parent nb",this.parentNode.value);
      heure[this.parentNode.value] = this.parentNode.getElementsByTagName('input')[1].value;
      min[this.parentNode.value] = this.parentNode.getElementsByTagName('input')[2].value ;
      console.log(heure,min);
  }

  function sonner(){
    for (var i = 0; i < nbAlarmeActive; i++) {
      str = heure[i]+":"+min[i]+":00";
      if (document.getElementById("horloge").innerHTML == str){
        document.getElementById('son').play();
      }
    }


  }
  function pause(){
    document.getElementById('son').pause();
  }

});




