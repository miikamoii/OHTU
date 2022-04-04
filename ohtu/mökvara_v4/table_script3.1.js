//muokkausfunktio taulukkoon
function edit_row(num)
{
 document.getElementById("edit_button"+num).style.display="none";
 document.getElementById("save_button"+num).style.display="block";
	
 var varausID=document.getElementById("varaus_rivi"+num);    //varausID
 var asiakasid=document.getElementById("asid_rivi"+num);
 var toimipisteid=document.getElementById("toimid_rivi"+num);     //table_script2.1.js toimipisteID= var paikkakunta=document.getElementById("paik_rivi"+num);
 //var paikkakunta=document.getElementById("paikkakunta_rivi"+num);
 var varauspvm=document.getElementById("varapvm_rivi"+num);     //varauksen teko pvm
 var vahvistuspvm=document.getElementById("vahvpvm_rivi"+num);        //vahvistus pvm
 var varausalku=document.getElementById("varalku_rivi"+num);   //varauksen alkupvm
 var varausloppu=document.getElementById("varloppu_rivi"+num);   //varauksen loppupvm

	
 var varausID_data=varausID.innerHTML;
 var asiakasid_data=asiakasid.innerHTML;
 var toimipisteid_data=toimipisteid.innerHTML;
 var varauspvm_data=varauspvm.innerHTML;
 var vahvistuspvm_data=vahvistuspvm.innerHTML;
 var varausalku_data=varausalku.innerHTML;
 var varausloppu_data=varausloppu.innerHTML;
 
	
 varausID.innerHTML="<input type='text' id='varaus_text"+num+"' value='"+varausID_data+"'>";
 asiakasid.innerHTML="<input type='text' id='asid_text"+num+"' value='"+asiakasid_data+"'>";
 toimipisteid.innerHTML="<input type='text' id='toimid_text"+num+"' value='"+toimipisteid_data+"'>";
 varauspvm.innerHTML="<input type='text' id='varapvm_text"+num+"' value='"+varauspvm_data+"'>";
 vahvistuspvm.innerHTML="<input type='text' id='vahvpvm_text"+num+"' value='"+vahvistuspvm_data+"'>";
 varausalku.innerHTML="<input type='text' id='varalku_text"+num+"' value='"+varausalku_data+"'>";
 varausloppu.innerHTML="<input type='text' id='varloppu_text"+num+"' value='"+varausloppu_data+"'>";
}

//tallennusfunktio taulukkoon
function save_row(num)
{
 var varaus_val=document.getElementById("varaus_text"+num).value;
 var toimid_val=document.getElementById("toimid_text"+num).value;
 var asid_val=document.getElementById("asid_text"+num).value;
 var varapvm_val=document.getElementById("varapvm_text"+num).value;
 var vahvpvm_val=document.getElementById("vahvpvm_text"+num).value;
 var varalku_val=document.getElementById("varalku_text"+num).value;
 var varloppu_val=document.getElementById("varloppu_text"+num).value;
 


 document.getElementById("varaus_rivi"+num).innerHTML=varaus_val;
 document.getElementById("toimid_rivi"+num).innerHTML=toimid_val;
 document.getElementById("asid_rivi"+num).innerHTML=asid_val;
 document.getElementById("varapvm_rivi"+num).innerHTML=varapvm_val;
 document.getElementById("vahvpvm_rivi"+num).innerHTML=vahvpvm_val;
 document.getElementById("varalku_rivi"+num).innerHTML=varalku_val;
 document.getElementById("varloppu_rivi"+num).innerHTML=varloppu_val;

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
 var uusi_varaus=document.getElementById("uusi_varaus").value;
 var uusi_toimid=document.getElementById("uusi_toimid").value;
 var uusi_asid=document.getElementById("uusi_asid").value;
 var uusi_varapvm=document.getElementById("uusi_varapvm").value;
 var uusi_vahvpvm=document.getElementById("uusi_vahvpvm").value;
 var uusi_varalku=document.getElementById("uusi_varalku").value;
 var uusi_varloppu=document.getElementById("uusi_varloppu").value;

	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var rivi = table.insertRow(table_len).outerHTML="<tr id='rivi"+table_len+"'><td id='varaus_rivi"
 +table_len+"'>"+uusi_varaus+"</td><td id='toimid_rivi"+table_len+"'>"+uusi_toimid
 +"</td><td id='asid_rivi"+table_len+"'>"+uusi_asid+"</td><td id='varapvm_rivi"
 +table_len+"'>"+uusi_varapvm+"</td><td id='vahvpvm_rivi"+table_len+"'>"+uusi_vahvpvm
 +"</td> <td id='varalku_rivi"+table_len+"'>"+uusi_varalku
 +"</td> <td id='varloppu_rivi"+table_len+"'>"+uusi_varloppu
 +"</td> <td><input type='button' id='edit_button"+table_len+"' value='Muokkaa' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Tallenna' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Poista' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("uusi_varaus").value="";
 document.getElementById("uusi_toimid").value="";
 document.getElementById("uusi_asid").value="";
 document.getElementById("uusi_varapvm").value="";
 document.getElementById("uusi_vahvpvm").value="";
 document.getElementById("uusi_varalku").value="";
 document.getElementById("uusi_varloppu").value="";
}