//muokkausfunktio taulukkoon
function edit_row(num)
{
 document.getElementById("edit_button"+num).style.display="none";
 document.getElementById("save_button"+num).style.display="block";
	
 var koodi=document.getElementById("kood_rivi"+num);
 var palvelu=document.getElementById("pal_rivi"+num);
 var paikkakunta=document.getElementById("paik_rivi"+num);

	
 var koodi_data=koodi.innerHTML;
 var palvelu_data=palvelu.innerHTML;
 var paikkakunta_data=paikkakunta.innerHTML;

	
 koodi.innerHTML="<input type='text' id='kood_text"+num+"' value='"+koodi_data+"'>";
 palvelu.innerHTML="<input type='text' id='pal_text"+num+"' value='"+palvelu_data+"'>";
 paikkakunta.innerHTML="<input type='text' id='paik_text"+num+"' value='"+paikkakunta_data+"'>";

}

//tallennusfunktio taulukkoon
function save_row(num)
{
 var kood_val=document.getElementById("kood_text"+num).value;
 var pal_val=document.getElementById("pal_text"+num).value;
 var paik_val=document.getElementById("paik_text"+num).value;


 document.getElementById("kood_rivi"+num).innerHTML=kood_val;
 document.getElementById("pal_rivi"+num).innerHTML=pal_val;
 document.getElementById("paik_rivi"+num).innerHTML=paik_val;


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
 var uusi_kood=document.getElementById("uusi_kood").value;
 var uusi_pal=document.getElementById("uusi_pal").value;
 var uusi_paik=document.getElementById("uusi_paik").value;

	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var rivi = table.insertRow(table_len).outerHTML="<tr id='rivi"+table_len+"'><td id='kood_rivi"+table_len+"'>"+uusi_kood+"</td><td id='pal_rivi"+table_len+"'>"+uusi_pal+"</td><td id='paik_rivi"+table_len+"'>"+uusi_paik+"</td><td><input type='button' id='edit_button"+table_len+"' value='Muokkaa' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Tallenna' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Poista' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("uusi_kood").value="";
 document.getElementById("uusi_pal").value="";
 document.getElementById("uusi_paik").value="";

}