let month = Number(prompt("Який номер поточного місяця?"));
let message;

switch (month) {
  case 12:
  case 1:
  case '2':
    message = alert("Це зимній місяць");
    break;

  case 3:
  case 4:
  case 5:
    message = alert("Це весняний місяць");
    break;

  case 6:
  case 7:
  case 8:
    message = alert("Це літній місяць");
    break;

  case 9:
  case 10:
  case 11:
    message = alert("Це осінній місяць");
    break;

  default:
    message = alert("Такої пори року не знайдено");
}

console.log(message);