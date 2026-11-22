let password = "gih_20";
let password1;
password1 = window.prompt(":أدخل كلمة المرور");
if (password1 == password)
{
    alert("welcome");
    let country;
    country = window.prompt("ادخل اسم احد الدول التالية لتعرف عاصمتها (اليمن,مصر,العراق,الأردن,السودان,سوريا,فلسطين)");
    
    switch(country)
    {
        case "اليمن": 
            document.writeln("عاصمة دولة اليمن هي صنعاء ");
            alert("عاصمة دولة اليمن هي صنعاء ");
            break;
        case "مصر": 
            document.writeln(" عاصمة دولة مصر هي القاهرة");
            alert(" عاصمة دولة مصر هي القاهرة");
            break;
        case "العراق": 
            document.writeln("عاصمة دولة العراق هي بغداد");
            alert("عاصمة دولة العراق هي بغداد");
            break;
        case "الأردن": 
            document.writeln("عاصمة دولة الأردن هي عمان ");
            alert("عاصمة دولة الأردن هي عمان ");
            break;
        case "السودان": 
            document.writeln("عاصمة دولة السودان هي الخرطوم ");
            alert("عاصمة دولة السودان هي الخرطوم ");
            break;
        case "سوريا": 
            document.writeln(" عاصمة دولة سوريا هي دمشق");
            alert(" عاصمة دولة سوريا هي دمشق");
            break;
        case "فلسطين": 
            document.writeln("عاصمة دولة فلسطين هي القدس");
            alert("عاصمة دولة فلسطين هي القدس");
            break;
        default: 
            document.writeln(" الدولة التي أدخلتها ليست من ضمن الخيارات المتاحة ");
            (" الدولة التي أدخلتها ليست من ضمن الخيارات المتاحة ");
    }
    document.write("<br>");
}
else
{
    alert("كلمة المرور غير صحيحة");
}

document.write("الاعداد الزوجية من 1 الى 10 : ");

for(var i=1; i<=10; i++)
{
    if(i%2==0){
    document.write(i+" ");
}

}
document.write("<br>");

let fact = 1;

let num = prompt(" أدخل رقم لمعرفة المضروب ");
for (let i=1; i<=num; i++)
{
    fact *= i;
}

alert("مضروب العدد " + num + " هو :" + fact);

document.write("ترتيب الاعداد تنازليا من 10 الى 1 :");

var i = 10;
while(i>0)
{
    document.write(i + " ");
    i--;
}
document.write("<br>");


i = 1;
do {
    document.write("welcome" + "\t");
    i++;
} while(i<=0);//هنا سيتم طباعة الجملة مرة واحدة فقط لعدم تحقق الشرط
document.write("<br>");