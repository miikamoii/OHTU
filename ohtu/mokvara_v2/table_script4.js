//muokkausfunktio taulukkoon
function edit_row(num)
{
 document.getElementById("edit_button"+num).style.display="none";
 document.getElementById("save_button"+num).style.display="block";
	
 var asiakasid=document.getElementById("asid_rivi"+num);
 var asiakasnimi=document.getElementById("asnim_rivi"+num);
 var puhelinnumero=document.getElementById("puh_rivi"+num);
 var sähköposti=document.getElementById("säh_rivi"+num);
 var lähiosoite=document.getElementById("läh_rivi"+num);
 var postinumero=document.getElementById("post_rivi"+num);
 var kaupunki=document.getElementById("kaup_rivi"+num);
	
 var asiakasid_data=asiakasid.innerHTML;
 var asiakasnimi_data=asiakasnimi.innerHTML;
 var puhelinnumero_data=puhelinnumero.innerHTML;
 var sähköposti_data=sähköposti.innerHTML;
 var lähiosoite_data=lähiosoite.innerHTML;
 var postinumero_data=postinumero.innerHTML;
 var kaupunki_data=kaupunki.innerHTML;
	
 asiakasid.innerHTML="<input type='text' id='asid_text"+num+"' value='"+asiakasid_data+"'>";
 asiakasnimi.innerHTML="<input type='text' id='asnim_text"+num+"' value='"+asiakasnimi_data+"'>";
 puhelinnumero.innerHTML="<input type='text' id='puh_text"+num+"' value='"+puhelinnumero_data+"'>";
 sähköposti.innerHTML="<input type='text' id='säh_text"+num+"' value='"+sähköposti_data+"'>";
 lähiosoite.innerHTML="<input type='text' id='läh_text"+num+"' value='"+lähiosoite_data+"'>";
 postinumero.innerHTML="<input type='text' id='post_text"+num+"' value='"+postinumero_data+"'>";
 kaupunki.innerHTML="<input type='text' id='kaup_text"+num+"' value='"+kaupunki_data+"'>";
}

//tallennusfunktio taulukkoon
function save_row(num)
{
 var asid_val=document.getElementById("asid_text"+num).value;
 var asnim_val=document.getElementById("asnim_text"+num).value;
 var puh_val=document.getElementById("puh_text"+num).value;
 var säh_val=document.getElementById("säh_text"+num).value;
 var läh_val=document.getElementById("läh_text"+num).value;
 var post_val=document.getElementById("post_text"+num).value;
 var kaup_val=document.getElementById("kaup_text"+num).value;

 document.getElementById("asid_rivi"+num).innerHTML=asid_val;
 document.getElementById("asnim_rivi"+num).innerHTML=asnim_val;
 document.getElementById("puh_rivi"+num).innerHTML=puh_val;
 document.getElementById("säh_rivi"+num).innerHTML=säh_val;
 document.getElementById("läh_rivi"+num).innerHTML=läh_val;
 document.getElementById("post_rivi"+num).innerHTML=post_val;
 document.getElementById("kaup_rivi"+num).innerHTML=kaup_val;

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
 var uusi_asid=document.getElementById("uusi_asid").value;
 var uusi_asnim=document.getElementById("uusi_asnim").value;
 var uusi_puh=document.getElementById("uusi_puh").value;
 var uusi_säh=document.getElementById("uusi_säh").value;
 var uusi_läh=document.getElementById("uusi_läh").value;
 var uusi_post=document.getElementById("uusi_post").value;
 var uusi_kaup=document.getElementById("uusi_kaup").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var rivi = table.insertRow(table_len).outerHTML="<tr id='rivi"+table_len+"'><td id='asid_rivi"+table_len+"'>"+uusi_asid+"</td><td id='asnim_rivi"+table_len+"'>"+uusi_asnim+"</td><td id='puh_rivi"+table_len+"'>"+uusi_puh+"</td><td id='säh_rivi"+table_len+"'>"+uusi_säh+"</td><td id='läh_rivi"+table_len+"'>"+uusi_läh+"</td><td id='post_rivi"+table_len+"'>"+uusi_post+"</td><td id='kaup_rivi"+table_len+"'>"+uusi_kaup+"</td><td><input type='button' id='edit_button"+table_len+"' value='Muokkaa' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Tallenna' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Poista' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("uusi_asid").value="";
 document.getElementById("uusi_asnim").value="";
 document.getElementById("uusi_puh").value="";
 document.getElementById("uusi_säh").value="";
 document.getElementById("uusi_läh").value="";
 document.getElementById("uusi_post").value="";
 document.getElementById("uusi_kaup").value="";
}