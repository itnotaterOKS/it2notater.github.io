var bodyEl = document.querySelector("body");

var menyEl = document.createElement("div");
menyEl.className="col-12 row meny";

// kap 2 - 4
var kap2El = document.createElement("div");
kap2El.className ="dropbtn2 col-15";
kap2El.innerHTML = "kapittel 2 - 4";
var lenke2El = document.createElement("a");
lenke2El.href="../kap2_4/index.html";
lenke2El.appendChild(kap2El);
menyEl.appendChild(lenke2El);

// kap 7 - 10
var kap7El = document.createElement("div");
kap7El.className ="dropbtn7 col-15";
kap7El.innerHTML = "kapittel 7 - 10";
var lenke7El = document.createElement("a");
lenke7El.href="../kap7_10/index.html";
lenke7El.appendChild(kap7El);
menyEl.appendChild(lenke7El);

// kap 11-12
var kap11El = document.createElement("div");
kap11El.className ="dropbtn11 col-15";
kap11El.innerHTML = "kapittel 11 - 12";
var lenke11El = document.createElement("a");
lenke11El.href="../kap11_12/index.html";
lenke11El.appendChild(kap11El);
menyEl.appendChild(lenke11El);

// kap 14 - 19
var kap14El = document.createElement("div");
kap14El.className ="dropbtn14 col-15";
kap14El.innerHTML = "kapittel 14 - 19";
var lenke14El = document.createElement("a");
lenke14El.href="../kap14_19/index.html";
lenke14El.appendChild(kap14El);
menyEl.appendChild(lenke14El);

// kap 20 - 22
var kap20El = document.createElement("div");
kap20El.className="dropdown20 col-15"
var dropdown20El = document.createElement("div");
dropdown20El.className="dropbtn20";
dropdown20El.innerHTML="kapittel 20 - 22";
var dropdown20HoverEl = document.createElement("div");
dropdown20HoverEl.className="dropdown-content20";
/* legg til alle med løkke*/
var array20 = ["pre_kap20", "arvOppgaveBiler", "setOppgaveKalender", "kap_20_1_2", "kap_20_2_3", "post_kap20", "intro_animasjonJS", "kap_21_1", "kap_21_2", "kap_21_3", "rep_canvas", "omPong", "pong", "oppgaver", "losningsforslag"];
for(var i = 0; i < array20.length; i++){
  var lenke20El = document.createElement("a");
  lenke20El.href=array20[i]+".html";
  lenke20El.innerHTML=array20[i];
  dropdown20HoverEl.appendChild(lenke20El);
}
dropdown20El.appendChild(dropdown20HoverEl);
kap20El.appendChild(dropdown20El);
menyEl.appendChild(kap20El);

// eksamen
var eksamenEl = document.createElement("div");
eksamenEl.className ="dropbtnE col-15";
eksamenEl.innerHTML = "eksamen";
var lenkeEEl = document.createElement("a");
lenkeEEl.href="../eksamen/index.html";
lenkeEEl.appendChild(eksamenEl);
menyEl.appendChild(lenkeEEl);

// nyttig
var nyttigEl = document.createElement("div");
nyttigEl.className ="dropbtnN col-15";
nyttigEl.innerHTML = "nyttig tillegsstoff";
var lenkeNEl = document.createElement("a");
lenkeNEl.href="../nyttig/index.html";
lenkeNEl.appendChild(nyttigEl);
menyEl.appendChild(lenkeNEl);

bodyEl.appendChild(menyEl);
