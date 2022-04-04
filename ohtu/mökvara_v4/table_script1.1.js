//muokkausfunktio taulukkoon
function edit_row(num)
{
 document.getElementById("edit_button"+num).style.display="none";
 document.getElementById("save_button"+num).style.display="block";
	
 var postitoimipaikka=document.getElementById("paik_rivi"+num);
 var lahiosoite=document.getElementById("os_rivi"+num);
 var puhelinnumero=document.getElementById("puh_rivi"+num);
 var sähköposti=document.getElementById("säh_rivi"+num);
 //var aukioloajat=document.getElementById("auk_rivi"+num);  tätä ei ole tietokannassa, joten poistin
 var toimipisteID=document.getElementById("ID_rivi"+num);
 var toimipistenimi=document.getElementById("nimi_rivi"+num);
 var postinumero=document.getElementById("pos_rivi"+num);   
 
 var postitoimipaikka_data=postitoimipaikka.innerHTML;                //paikkakunta = postitoimipaikka
 var lahiosoite_data=lahiosoite.innerHTML;                         // lahiosoite = osoite
 var puhelinnumero_data=puhelinnumero.innerHTML;          
 var sähköposti_data=sähköposti.innerHTML;
 //var aukioloajat_data=aukioloajat.innerHTML;
 var toimipisteID_data=toimipisteID.innerHTML;
 var toimipistenimi_data=toimipistenimi.innerHTML;
 var postinumero_data=postinumero.innerHTML;
	
 postitoimipaikka.innerHTML="<input type='text' id='paik_text"+num+"' value='"+postitoimipaikka_data+"'>";
 lahiosoite.innerHTML="<input type='text' id='os_text"+num+"' value='"+lahiosoite_data+"'>";
 puhelinnumero.innerHTML="<input type='text' id='puh_text"+num+"' value='"+puhelinnumero_data+"'>";
 sähköposti.innerHTML="<input type='text' id='säh_text"+num+"' value='"+sähköposti_data+"'>";
 //aukioloajat.innerHTML="<input type='text' id='auk_text"+num+"' value='"+aukioloajat_data+"'>";
 toimipisteID.innerHTML="<input type='text' id='ID_text"+num+"' value='"+toimipisteID_data+"'>";
 toimipistenimi.innerHTML="<input type='text' id='nimi_text"+num+"' value='"+toimipistenimi_data+"'>";
 postinumero.innerHTML="<input type='text' id='pos_text"+num+"' value='"+postinumero_data+"'>";
}

//tallennusfunktio taulukkoon
function save_row(num)
{
 var paik_val=document.getElementById("paik_text"+num).value;
 var os_val=document.getElementById("os_text"+num).value;
 var puh_val=document.getElementById("puh_text"+num).value;
 var säh_val=document.getElementById("säh_text"+num).value;
// var auk_val=document.getElementById("auk_text"+num).value;
 var ID_val=document.getElementById("ID_text"+num).value;
 var nimi_val=document.getElementById("nimi_text"+num).value;
 var pos_val=document.getElementById("pos_text"+num).value;

 document.getElementById("paik_rivi"+num).innerHTML=paik_val;
 document.getElementById("os_rivi"+num).innerHTML=os_val;
 document.getElementById("puh_rivi"+num).innerHTML=puh_val;
 document.getElementById("säh_rivi"+num).innerHTML=säh_val;
// document.getElementById("auk_rivi"+num).innerHTML=auk_val;
 document.getElementById("ID_rivi"+num).innerHTML=ID_val;
 document.getElementById("nimi_rivi"+num).innerHTML=nimi_val;
 document.getElementById("pos_rivi"+num).innerHTML=pos_val;


 document.getElementById("edit_button"+num).style.display="block";
 document.getElementById("save_button"+num).style.display="none";
}

//poistamisfunktio
function delete_row(num)
{
 document.getElementById("rivi"+num+"").outerHTML="";
}

//rivinlisäysfunktio
function add_row()
{
    //aina kun uusi rivi lisätään, funktio "ottaa mallia" aikaisemmasta taulukosta ja tekee uuden rivin joka muuttujasta
 var uusi_paik=document.getElementById("uusi_paik").value;
 var uusi_os=document.getElementById("uusi_os").value;
 var uusi_puh=document.getElementById("uusi_puh").value;
 var uusi_säh=document.getElementById("uusi_säh").value;
 //var uusi_auk=document.getElementById("uusi_auk").value;
 var uusi_ID=document.getElementById("uusi_ID").value;
 var uusi_nimi=document.getElementById("uusi_nimi").value;
 var uusi_pos=document.getElementById("uusi_pos").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var rivi = table.insertRow(table_len).outerHTML=
 "<tr id='rivi"+table_len+"'><td id='paik_rivi"+table_len+"'>"+uusi_paik
 +"</td><td id='os_rivi"+table_len+"'>"+uusi_os+"</td><td id='puh_rivi"+table_len+"'>"+uusi_puh
 +"</td><td id='säh_rivi"+table_len+"'>"+uusi_säh+"</td> <td id='ID_rivi"+table_len+"'>"+uusi_ID
 +"</td><td id='nimi_rivi"+table_len+"'>"+uusi_nimi+"</td><td id='pos_rivi"+table_len+"'>"+uusi_pos
 +"</td><td><input type='button' id='edit_button"+table_len+"' value='Muokkaa' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Tallenna' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Poista' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("uusi_paik").value="";
 document.getElementById("uusi_os").value="";
 document.getElementById("uusi_puh").value="";
 document.getElementById("uusi_säh").value="";
 //document.getElementById("uusi_auk").value="";
 document.getElementById("uusi_ID").value="";
 document.getElementById("uusi_nimi").value="";
 document.getElementById("uusi_pos").value="";
}