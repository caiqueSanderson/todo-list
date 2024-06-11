const dateNow = new Date();
let day = dateNow.getDate();
let month = dateNow.getMonth() + 1; // Meses começam do 0
let year = dateNow.getFullYear();
// Adiciona um zero à esquerda se o dia ou o mês tiver apenas um dígito

if (day < 10) {
    day = '0' + day;
}else if (month < 10) {
    month = '0' + month;
}
dateFormatted = day + '/' + month + '/' + year;
alert(dateFormatted)

document.getElementById('time').innerText = dateFormatted;
