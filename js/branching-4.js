let weekDay = prompt("Який день тижня сьогодні?");
let message;

switch (weekDay) {
  case "понеділок":
  case "вівторок":
  case "середа":
  case "четвер":
  case "пʼятниця":
    message = alert("сьогодні робочий день");
    break;
  case "субота":
  case "неділя":
    message = alert("сьогодні вихідний");
    break;
  default:
    message = alert("перевірте ваш запит");
};

console.log(message);