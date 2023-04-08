// const cofee = "кава";
// const tea = "чай";
// const juice = "сік";
let drink = prompt("Який напій ви бажаєте придбати? Чай, кава або сік");
let price;
let message;

switch (drink) {
  case "кава":
    price = 120;
    message = alert (`Ціна вашого напою ${price} гривень`);
    break;
  case "чай":
    price = 100;
    message = alert (`Ціна вашого напою ${price} гривень`);
    break;

  case "сік":
    price = 110;
    message = alert (`Ціна вашого напою ${price} гривень`);
    break;

  default:
    alert('Нажаль такого напою нема у наявності(((');
};

console.log(message);