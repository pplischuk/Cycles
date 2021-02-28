"use strict";

//1.  Знайдіть суму всіх цифр від 1 до 100.

for(let i = 0; i<100 ; i++){
	for(let j = 0; j <= 100;j++){
		i = i +j;
	}
	console.log(i)
}

//2.  Є масив [1, 2, 3, 4, 5]. З допомогою  цикла for вивести всі елементи на екран.

let arr = [1, 2, 3, 4, 5];
for(let i = 0; i < arr.length; i++){
	console.log(arr[i])
}

//T3. Є масив [-1, 22, 3, 44, 5]. Виведіть максимальне значення

let arr = [-1, 22, 3, 44, 5];
let max = [0];
for(let i = 0; i < arr.length; i++){
	if(arr[i] > max){
		max = arr[i];
	}
}
console.log(max);

//4. Попросити юзера ввести 8 чисел і скільки він ввів додатніх, відємних та нулів. Вивести статистику на екран. Також досмтатньо тільки 1 змінної для отримання даних від юзера. 

let arr = [];

for(let i = 0; i < 8; i++){
	let num = +prompt('Введіть число')
	arr[i] = num;
}

let one = 0;
let two = 0;
let three = 0;
for (let i = 0; i < arr.length; i++){
	if(arr[i] < 0){
		one++
	}else if(arr[i]===0){
		two++
	}else{
		three++
	}
}

alert(`ви ввели ${one} від'ємних чисел, ${two} нулів, ${three} цілих чисел`)

//5. Надрукуйте табличку множення для числа  8 від 1 до 9. 8 х 1 = 8

let num = 8;
for (let i = 1; i <= 9; i++){
	let tab = num * i;
	console.log(`${num} x ${i} = ${tab}`);
}

//6. Є масив з елементами 2, 5, 9, 15, 0, 4. З допомогою цикла for і оператора if вивести на екран цифри, які більше 3-х, але менше 10.

let arr = [2, 5, 9, 15, 0, 4]

for (let i = 0; i < arr.length; i++){
	if(arr[i] > 3 && arr[i] < 10){
		console.log(arr[i]);
	}
}

//7. Створити калькулятор який буде зациклений. Запитати у юзера 2 числа та знак , провести математичну операцію, далі вивести результат і спитатись чи хоче юзер повторити?

let play = true;
do{
	let a = +prompt('Введіть 1 число');
	let b = +prompt('Введіть 2 число');
	let c = prompt('Введіть знак +,-,*,/');
	switch(c){
		case"+":
		alert(a+b);
		break;
		case"-":
		alert(a-b);
		break;
		case"*":
		alert(a*b);
		break;
		case"/":
		alert(a/b);
		break;
	}
	play = confirm('Бажаєте продовжити?');
}while(play);