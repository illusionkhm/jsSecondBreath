var answer1 = prompt("Ваш бюджет");
var answer2 = prompt("Название вашего магазина");

let mainList = {
    budget: answer1,
    shopName: answer2,
    shopGoods: [],
    employers: {
        employer1: {
            name: "Вася",
            age: 25
        },
        employer2: {
            name: "Петя",
            age: 22
        },
        employer3: {
            name: "Маша",
            age: 19
        }
    },
    open: true
};
var i = 0;
mainList.shopGoods[i] = prompt("Какой тип товаров будем продавать?");
i++;
mainList.shopGoods[i] = prompt("Какой тип товаров будем продавать?");
i++;
mainList.shopGoods[i] = prompt("Какой тип товаров будем продавать?");
i++;
document.write(answer1);