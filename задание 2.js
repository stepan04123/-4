let name=prompt("Введите имя: "); let surname=prompt("Введите фамилию: ");
let upname=name.toUpperCase(); let upsurname=surname.toUpperCase();
let standartusername=upname.substr(1); let normalsurname=upsurname.substr(1);
standartusername=standartusername.toLowerCase(); normalsurname=normalsurname.toLowerCase();
let n_surname=upsurname[0]; let n_name=upname[0];
let last_name=n_name+standartusername; let last_surname=n_surname+normalsurname;
        if(last_name==name&&last_surname==surname)
            {alert(name+" "+surname+"    "+"Всё правильно, проходим.");}
        else{if(last_name==name&&last_surname!=surname) {alert(name+" "+last_surname+"    "+"Исправлена фамилия");}
    else{if(last_name!=name&&last_surname==surname) {alert(last_name+" "+surname+"    "+"Исправлено имя");}
else{alert(last_name+" "+last_surname+"     "+"Исправлено имя и фамилия");}};}