//muokkausfunktio taulukkoon
function edit_row(num)
{
 document.getElementById("edit_button"+num).style.display="none";
 document.getElementById("save_button"+num).style.display="block";
	
 var mökki=document.getElementById("mök_rivi"+num);
 var asiakasnimi=document.getElementById("asnim_rivi"+num);
 var asiakasid=document.getElementById("asid_rivi"+num);
 var paikkakunta=document.getElementById("paikkakunta_rivi"+num);
 var varaus=document.getElementById("varat_rivi"+num);
	
 var mökki_data=mökki.innerHTML;
 var asiakasnimi_data=asiakasnimi.innerHTML;
 var asiakasid_data=asiakasid.innerHTML;
 var paikkakunta_data=paikkakunta.innerHTML;
 var varaus_data=varaus.innerHTML;
	
 mökki.innerHTML="<input type='text' id='mök_text"+num+"' value='"+mökki_data+"'>";
 asiakasnimi.innerHTML="<input type='text' id='asnim_text"+num+"' value='"+asiakasnimi_data+"'>";
 asiakasid.innerHTML="<input type='text' id='asid_text"+num+"' value='"+asiakasid_data+"'>";
 paikkakunta.innerHTML="<input type='text' id='paikkakunta_text"+num+"' value='"+paikkakunta_data+"'>";
 varaus.innerHTML="<input type='text' id='varat_text"+num+"' value='"+varaus_data+"'>";
}

//tallennusfunktio taulukkoon
function save_row(num)
{
 var mök_val=document.getElementById("mök_text"+num).value;
 var asnim_val=document.getElementById("asnim_text"+num).value;
 var asid_val=document.getElementById("asid_text"+num).value;
 var paikkakunta_val=document.getElementById("paikkakunta_text"+num).value;
 var varat_val=document.getElementById("varat_text"+num).value;

 document.getElementById("mök_rivi"+num).innerHTML=mök_val;
 document.getElementById("asnim_rivi"+num).innerHTML=asnim_val;
 document.getElementById("asid_rivi"+num).innerHTML=asid_val;
 document.getElementById("paikkakunta_rivi"+num).innerHTML=paikkakunta_val;
 document.getElementById("varat_rivi"+num).innerHTML=varat_val;

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
 var uusi_mök=document.getElementById("uusi_mök").value;
 var uusi_asnim=document.getElementById("uusi_asnim").value;
 var uusi_asid=document.getElementById("uusi_asid").value;
 var uusi_paikkakunta=document.getElementById("uusi_paikkakunta").value;
 var uusi_varat=document.getElementById("uusi_varat").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var rivi = table.insertRow(table_len).outerHTML="<tr id='rivi"+table_len+"'><td id='mök_rivi"+table_len+"'>"+uusi_mök+"</td><td id='asnim_rivi"+table_len+"'>"+uusi_asnim+"</td><td id='asid_rivi"+table_len+"'>"+uusi_asid+"</td><td id='paikkakunta_rivi"+table_len+"'>"+uusi_paikkakunta+"</td><td id='varat_rivi"+table_len+"'>"+uusi_varat+"</td><td><input type='button' id='edit_button"+table_len+"' value='Muokkaa' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Tallenna' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Poista' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("uusi_mök").value="";
 document.getElementById("uusi_asnim").value="";
 document.getElementById("uusi_asid").value="";
 document.getElementById("uusi_paikkakunta").value="";
 document.getElementById("uusi_varat").value="";
}