// Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.
const result = 5 + 5 + "5";
console.log(result);

// Створіть змінну email з вашою електронною адресою. Напишіть скрипт, який перевіряє чи містить змінна email символ @ і рахує загальну кількість символів. Результат виведіть в консоль.
const email = "mukolafok@icloud.com";
const fill = email.includes("@");
const full = `${fill} ${email.length}`;
console.log(full);




// Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.
const name = "My";
const nam = "name";
const nume = "is"
const fullName = `${name} ${nam} ${nume} Victor`
console.log(fullName);

// Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень»
const userName = "Софія"
const payment = 300;
const alert = `Дякуємо, ${userName} ! До сплати ${payment} гривень`
console.log(alert);

