//muokkausfunktio taulukkoon
function edit_row(num)
{
 document.getElementById("edit_button"+num).style.display="none";
 document.getElementById("save_button"+num).style.display="block";
	
 var palveluid=document.getElementById("palid_rivi"+num);
 var toimipisteid=document.getElementById("toimid_rivi"+num);
 var palvelunnimi=document.getElementById("palnim_rivi"+num);
 var palveluntyyppi=document.getElementById("paltyyp_rivi"+num);
 var kuvaus=document.getElementById("kuv_rivi"+num);
 var hinta=document.getElementById("hin_rivi"+num);
 var arvonlisävero=document.getElementById("alv_rivi"+num);
	
 var palveluid_data=palveluid.innerHTML;
 var toimipisteid_data=toimipisteid.innerHTML;
 var palvelunnimi_data=palvelunnimi.innerHTML;
 var palveluntyyppi_data=palveluntyyppi.innerHTML;
 var kuvaus_data=kuvaus.innerHTML;
 var hinta_data=hinta.innerHTML;
 var arvonlisävero_data=arvonlisävero.innerHTML;
	
 palveluid.innerHTML="<input type='text' id='palid_text"+num+"' value='"+palveluid_data+"'>";
 toimipisteid.innerHTML="<input type='text' id='toimid_text"+num+"' value='"+toimipisteid_data+"'>";
 palvelunnimi.innerHTML="<input type='text' id='palnim_text"+num+"' value='"+palvelunnimi_data+"'>";
 palveluntyyppi.innerHTML="<input type='text' id='paltyyp_text"+num+"' value='"+palveluntyyppi_data+"'>";
 kuvaus.innerHTML="<input type='text' id='kuv_text"+num+"' value='"+kuvaus_data+"'>";
 hinta.innerHTML="<input type='text' id='hin_text"+num+"' value='"+hinta_data+"'>";
 arvonlisävero.innerHTML="<input type='text' id='alv_text"+num+"' value='"+arvonlisävero_data+"'>";
}

//tallennusfunktio taulukkoon
function save_row(num)
{
 var palid_val=document.getElementById("palid_text"+num).value;
 var toimid_val=document.getElementById("toimid_text"+num).value;
 var palnim_val=document.getElementById("palnim_text"+num).value;
 var paltyyp_val=document.getElementById("paltyyp_text"+num).value;
 var kuv_val=document.getElementById("kuv_text"+num).value;
 var hin_val=document.getElementById("hin_text"+num).value;
 var alv_val=document.getElementById("alv_text"+num).value;

 document.getElementById("palid_rivi"+num).innerHTML=palid_val;
 document.getElementById("toimid_rivi"+num).innerHTML=toimid_val;
 document.getElementById("palnim_rivi"+num).innerHTML=palnim_val;
 document.getElementById("paltyyp_rivi"+num).innerHTML=paltyyp_val;
 document.getElementById("kuv_rivi"+num).innerHTML=kuv_val;
 document.getElementById("hin_rivi"+num).innerHTML=hin_val;
 document.getElementById("alv_rivi"+num).innerHTML=alv_val;

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
 var uusi_palid=document.getElementById("uusi_palid").value;
 var uusi_toimid=document.getElementById("uusi_toimid").value;
 var uusi_palnim=document.getElementById("uusi_palnim").value;
 var uusi_paltyyp=document.getElementById("uusi_paltyyp").value;
 var uusi_kuv=document.getElementById("uusi_kuv").value;
 var uusi_hin=document.getElementById("uusi_hin").value;
 var uusi_alv=document.getElementById("uusi_alv").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var rivi = table.insertRow(table_len).outerHTML="<tr id='rivi"+table_len+"'><td id='palid_rivi"+table_len+"'>"+uusi_palid+"</td><td id='toimid_rivi"+table_len+"'>"+uusi_toimid+"</td><td id='palnim_rivi"+table_len+"'>"+uusi_palnim+"</td> <td id='paltyyp_rivi"+table_len+"'>"+uusi_paltyyp+"</td><td id='kuv_rivi"+table_len+"'>"+uusi_kuv+"</td><td id='hin_rivi"+table_len+"'>"+uusi_hin+"</td><td id='alv_rivi"+table_len+"'>"+uusi_alv+"</td><td><input type='button' id='edit_button"+table_len+"' value='Muokkaa' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Tallenna' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Poista' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("uusi_palid").value="";
 document.getElementById("uusi_toimid").value="";
 document.getElementById("uusi_palnim").value="";
 document.getElementById("uusi_paltyyp").value="";
 document.getElementById("uusi_kuv").value="";
 document.getElementById("uusi_hin").value="";
 document.getElementById("uusi_alv").value="";
}