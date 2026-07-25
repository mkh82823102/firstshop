var userNumber = prompt("لطفا یک عدد از یک تا ده وارد کنید ")
var num = Number(userNumber)
switch (num) {
    case 0 :
        alert("مقدار وارد شده برابر با صفر است ")
        break;
    case 2 : 
    case 4 : 
    case 6 : 
    case 8 :
    case 10 : 
    alert("مقدار وارد شده یک عدد زوج است ")
    break
    case 1 : 
    case 3 : 
    case 5 : 
    case 7 :
    case 9 :
        alert("مقدار وارد شده یک عدد فرد است ")
        break
    default:alert("عدد وارد شده صحیح نمی باشد")
        break;
}