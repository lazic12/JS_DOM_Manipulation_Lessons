// "use strict";
// let par1 = document.querySelector('#elem1');
// let par2 = document.querySelector('#elem2');
// let par3 = document.querySelector('#elem3')

// Дан следующий HTML:

// <div id="block">
// 	<p>1</p>
// 	<p>2</p>
// </div>
// Получите ссылку на первый абзац из дива с id, равным block.

// let link = document.querySelector('#block p')


// Дан следующий HTML:

// <div class="block">
// 	<p>1</p>
// 	<p>2</p>
// </div>
// Получите ссылку на первый абзац из дива с классом block.

// let link = document.querySelector('.block p')


// Дан следующий HTML:

// <p class="www">text</p>
// <p class="www">text</p>
// Получите ссылку на первый абзац с классом www.

// let link = document.querySelector('.www')


// Привязывание обработчиков событий к элементам

// Даны 3 кнопки:

// <input id="button1" type="submit">
// <input id="button2" type="submit">
// <input id="button3" type="submit">
// Сделайте так, чтобы по клику на первую кнопку на экран выводилось число 1, по клику на вторую - число 2, а по клику на третью - число 3.

// let button1 = document.querySelector('#button1'),
//     button2 = document.querySelector('#button2'),
//     button3 = document.querySelector('#button3');

// button1.addEventListener('click', function () {
//     alert('1')
// });
// button2.addEventListener('click', function () {
//     alert('2');
// });
// button3.addEventListener('click', function () {
//     alert('3');
// });

// Другие типы событий в JavaScript

// Дана кнопка. По двойному клику по ней выведите на экран какое-нибудь сообщение.

// let button1 = document.querySelector('.button1');
// button1.addEventListener('dblclick', function () {
//     alert('some message for double clicker');
// })

// Дана кнопка. По наведению на нее выведите на экран какое-нибудь сообщение.

// let button1 = document.querySelector('.button1');
// button1.addEventListener('mouseover', function () {
//     alert('hello there thank you for hovering');
// });

// Дана кнопка. По уходу курсора с нее выведите на экран какое-нибудь сообщение.

// let button1 = document.querySelector('#button1');
// button1.addEventListener('mouseout', function () {
//     alert('Hey, where are you going?');
// })

// несколько событий на элементе

// Дана кнопка. По клику на нее выведите число 1, а по двойному клику - число 2.

// let button1 = document.querySelector('.button1');
// button1.addEventListener('click', function () {
//     alert('1'); //По клику на нее выведите число 1
// });
// button1.addEventListener('dblclick', function () {
//     alert('2'); //по двойному клику - число 2
// });


// Именованные обработчики событий

// Дан следующий HTML код:

// <input id="button1" type="submit" value="button1">
// <input id="button2" type="submit" value="button2">
// Даны следующие функции:

// function func1() {
// 	alert(1);
// }

// function func2() {
// 	alert(2);
// }
// Сделайте так, чтобы по клику на первую кнопку выполнилась функция func1, а по клику на вторую - функция func2.



// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// button1.addEventListener('click', func1);
// button2.addEventListener('click', func2);

// function func1() {
//     alert(1);
// }

// function func2() {
//     alert(2);
// }


// Привязывание одного обработчика ко многим элементам


// Даны 5 абзацев:

// <p id="elem1">text</p>
// <p id="elem2">text</p>
// <p id="elem3">text</p>
// <p id="elem4">text</p>
// <p id="elem5">text</p>
// Дана следующая функция:

// function func() {
// 	alert('message');
// }
// Привяжите эту функцию ко всем 5-ти абзацам.

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let elem4 = document.querySelector('#elem4');
// let elem5 = document.querySelector('#elem5');

// elem1.addEventListener('click', func);
// elem2.addEventListener('click', func);
// elem3.addEventListener('click', func);
// elem4.addEventListener('click', func);
// elem5.addEventListener('click', func);

// function func() {
//     alert('message');
// }

// Несколько обработчиков одного события

// Дан абзац:

// <p id="elem">text</p>
// Даны следующие функции:

// function func1() {
// 	alert('1');
// }

// function func2() {
// 	alert('2');
// }

// function func3() {
// 	alert('3');
// }

// Привяжите все эти функции к нашему абзацу.

// function func1() {
//     alert('1');
// }

// function func2() {
//     alert('2');
// }

// function func3() {
//     alert('3');
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', func1);
// elem.addEventListener('click', func2);
// elem.addEventListener('click', func3);

// Анонимные обработчики

// Дана кнопка. Привяжите к ней три анонимных обработчика двойного клика по ней. Пусть первый обработчик выводит число 1, второй обработчик - число 2, а третий - число 3.

// let button1 = document.querySelector('.button1');

// button1.addEventListener('dblclick', function () {
//     alert('1');
// });
// button1.addEventListener('dblclick', function () {
//     alert('2');
// });
// button1.addEventListener('dblclick', function () {
//     alert('3');
// });


// Работа с текстом тега

// Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка. По нажатию на кнопку выведите на экран сумму хранящихся чисел.

// let elem1 = document.querySelector('.par1');
// let elem2 = document.querySelector('.par2');
// let button = document.querySelector('.button');

// button.addEventListener('click', function () {
//     alert(Number(elem1.innerHTML) + Number(elem2.innerHTML));
// })

// Даны два абзаца и две кнопки. Пусть нажатие на первую кнопку выводит текст первого абзаца, а нажатие на вторую кнопку - текст второго абзаца.

// let par1 = document.querySelector('.par1');
// let par2 = document.querySelector('.par2');
// let button1 = document.querySelector('.button1');
// let button2 = document.querySelector('.button2');

// button1.addEventListener('click', function () {
//     alert(par1.innerHTML);
// });
// button2.addEventListener('click', function () {
//     alert(par2.innerHTML);
// });


// Запись

// Дан абзац и две кнопки. По нажатию на первую кнопку запишите в абзац слово 'привет', а по нажатию на вторую кнопку - слово 'пока'.

// let par1 = document.querySelector('.par1');
// let button1 = document.querySelector('.button1');
// let button2 = document.querySelector('.button2');

// button1.addEventListener('click', function () {
//     par1.innerHTML = '<p>Hi</p>';
// });
// button2.addEventListener('click', function () {
//     par1.innerHTML = '<p>Bye</p>';
// });

// Даны 3 абзаца с текстом. По нажатию на первый абзац запишите в его текст число 1, по нажатию на второй абзац запишите в его текст число 2, а по нажатию на третий - запишите в его текст число 3.

// let elem1 = document.querySelector('.elem1'),
//     elem2 = document.querySelector('.elem2'),
//     elem3 = document.querySelector('.elem3');

// elem1.addEventListener('click', function () {
//     elem1.innerHTML = '1';
// });
// elem2.addEventListener('click', function () {
//     elem2.innerHTML = '2';
// });
// elem3.addEventListener('click', function () {
//     elem3.innerHTML = '3';
// });

//  Дан абзац и кнопка. В абзаце записано какое-то число. По нажатию на кнопку возведите значение абзаца в квадрат и запишите его обратно.

// let elem = document.querySelector('.elem');
// let button = document.querySelector('.button');

// function func() {

//     elem.innerHTML = Math.pow(Number(elem.innerHTML), 2);
// }

// button.addEventListener('click', func);

// Дан абзац с числом и кнопка. По нажатию на кнопку прибавьте к значению абзаца единицу и запишите полученное число обратно.

// let elem = document.querySelector('.elem');
// let button = document.querySelector('.button');

// function func() {
//     elem.innerHTML = Number(elem.innerHTML) + 1;
// }

// button.addEventListener('click', func);

// Дан абзац с текстом и кнопка. По нажатию на кнопку запишите в конец текста абзаца восклицательный знак.

// let elem = document.querySelector('.elem');
// let button = document.querySelector('.button');

// function func() {
//     elem.innerHTML = elem.innerHTML + '!';
// }

// button.addEventListener('click', func);

// Модифицируйте предыдущую задачу так, чтобы восклицательный знак записывался не в конец текста, а в начало.

// let elem = document.querySelector('.elem');
// let button = document.querySelector('.button');

// function func() {
//     elem.innerHTML = '!' + elem.innerHTML;
// }

// button.addEventListener('click', func);

// Запись тегов

// Дан абзац и кнопка. По нажатию на кнопку запишите в абзац текст '<i>hello</i>'.

// let elem = document.querySelector('.elem');
// let button = document.querySelector('.button');

// function func() {
//     elem.innerHTML = '<i>Hello</i>';
// }

// button.addEventListener('click', func);

// Дан абзац с текстом и кнопка. По нажатию на кнопку прочитайте текст абзаца, оберните этот текст в теги <b> и запишите новый текст обратно в абзац.

// let elem = document.querySelector('.elem');
// let button = document.querySelector('.button');

// function func() {
//     elem.innerHTML = '<b>' + elem.innerHTML + '</b>';
// }

// button.addEventListener('click', func)

// Работа с атрибутами тегов через свойства элементов

// Дан следующий инпут:

// <input id="elem" type="email">
// Дана также кнопка. По нажатию на кнопку выведите на экран содержимое атрибута type указанного выше инпута.

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');

// button.addEventListener('click', function () {
//     alert(elem.type)
// });


// Дан следующий инпут:

// <input id="elem" type="email">
// Дана также кнопка. По нажатию на кнопку выведите запишите в атрибут type значение submit.

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');

// button.addEventListener('click', function () {
//     elem.type = 'submit';
// });

// Пусть у вас есть ссылка в виде тега a, кнопка и абзац. По нажатию на кнопку выведите в абзац содержимое атрибута href ссылки.

// let link = document.querySelector('.link'),
//     button = document.querySelector('.button'),
//     paragraph = document.querySelector('.paragraph');

// button.addEventListener('click', function () {
//     paragraph.innerHTML = link.href;
// });

// Пусть у вас есть ссылка и кнопка. По нажатию на кнопку добавьте в конец текста ссылки содержимое ее атрибута href в круглых скобках.

// let link = document.querySelector('.link'),
//     button = document.querySelector('.button');

// button.addEventListener('click', function () {
//     link.innerHTML = link.innerHTML + ' ' + link.href;
// });

// Пусть у вас есть картинка. Разместите ее на странице в помощью тега img. Пусть даны также кнопка и абзац. Сделайте так, чтобы по клику на кнопку в абзац записался путь к картинки из ее атрибута src.

// let img = document.querySelector('.picture'),
//     button = document.querySelector('.button'),
//     paragraph = document.querySelector('.paragraph');

// button.addEventListener('click', function () {
//     paragraph.innerHTML = img.src;
// });

// Дана картинка в теге img и кнопка. По нажатию на кнопку в атрибут width запишите значение 300.

// let img = document.querySelector('.img'),
//     button = document.querySelector('.button');

// button.addEventListener('click', function () {
//     img.width = '300';
// });

// Дана картинка в теге img и кнопка. Пусть в атрибуте width задана некоторая ширина. Сделайте кнопку, по нажатию на которую ширина картинки будет увеличиваться в 2 раза.

// let img = document.querySelector('.picture'),
//     button = document.querySelector('.button');

// button.addEventListener('click', function () {
//     img.width = img.width * 2;
// });

// Пусть у вас есть две картинки. Сделайте на странице тег img и две кнопки. По нажатию на первую кнопку запишите в атрибут src путь к первой картинке, а по нажатию на вторую - путь ко второй картинке.

// let img = document.querySelector('.picture'),
//     button1 = document.querySelector('.button1'),
//     button2 = document.querySelector('.button2');

// button1.addEventListener('click', function () {
//     img.src = '/img/photo.jpg';
// });
// button2.addEventListener('click', function () {
//     img.src = '/img/photo-1.jpg';
// });


// Работа с текстовыми полями

// Дан инпут:

// <input id="elem" value="text">
// Сделайте кнопку, нажатие на которую будет выводить текущий текст инпута.

// После захода на страницу нажмите на кнопку, чтобы увидеть текущий текст инпута, затем поредактируйте текст в инпуте и еще раз нажмите на кнопку. Убедитесь в том, что выведется новый текст инпута.

// let elem = document.querySelector('#elem'),
//     button = document.querySelector('#button');

// button.addEventListener('click', function () {
//     alert(elem.value);
// });

// Дан инпут и кнопка. По нажатию на кнопку запишите в инпут какой-нибудь текст.

// let elem = document.querySelector('.elem'),
//     button = document.querySelector('.button');

// button.addEventListener('click', function () {
//     elem.value = 'Here\'s some text'
// })

// Дан инпут, абзац и кнопка. По нажатию на кнопку запишите в абзац текст из инпута.

// let elem = document.querySelector('.elem'),
//     text = document.querySelector('.text'),
//     button = document.querySelector('.button');

// button.addEventListener('click', function () {
//     text.innerHTML = elem.value;
// });

// Даны два инпута и кнопка. В первый инпут пользователем вводится число. По нажатию на кнопку запишите во второй инпут квадрат введенного числа.

// let text1 = document.querySelector('.text1'),
//     text2 = document.querySelector('.text2'),
//     button = document.querySelector('.button');

// button.addEventListener('click', function () {
//     text2.value = Number(text1.value) ** 2;
// });

// Даны два инпута и кнопка. По нажатию на кнопку запишите в первый инпут значение второго инпута, а во второй инпут - значение первого. Ваш код должен работать универсально, для любых значений инпутов.

// let elem1 = document.querySelector('.text1'),
//     elem2 = document.querySelector('.text2'),
//     elem3 = document.querySelector('.text3')
// button = document.querySelector('.button');

// button.addEventListener('click', function () {
//     elem3.value = elem2.value;
//     elem2.value = elem1.value;
//     elem1.value = elem3.value
// })

// Даны 5 инпутов, абзац и кнопка. В инпут вводятся числа. По нажатию на кнопку запишите среднее арифметическое введенных чисел в абзац.

// let elem1 = document.querySelector('.elem1'),
//     elem2 = document.querySelector('.elem2'),
//     elem3 = document.querySelector('.elem3'),
//     elem4 = document.querySelector('.elem4'),
//     elem5 = document.querySelector('.elem5'),
//     text = document.querySelector('.text'),
//     button = document.querySelector('.button');

// button.addEventListener('click', function () {
//     text.innerHTML = (Number(elem1.value) + Number(elem2.value) + Number(elem3.value) + Number(elem4.value) + Number(elem5.value)) / 5;
// });


// Фокус текстовых полей

// Дан инпут. По получению фокуса запишите в него число 1, а по потери фокуса - число 2.

// let elem = document.querySelector('.text');

// elem.addEventListener('focus', function () {
//     elem.value = '1';
// });

// elem.addEventListener('blur', function () {
//     elem.value = '2';
// });

// Дан инпут. Пусть в него вводится число. По потери фокуса выведите на экран квадрат этого числа.

// elem = document.querySelector('.text');

// elem.addEventListener('blur', function () {
//     elem.value = elem.value ** 2;
// });

// Дан инпут, в котором изначально есть какой-то текст. По получению фокуса инпутом очистите содержимое этого инпута.

// let elem = document.querySelector('.text');

// elem.addEventListener('focus', function () {
//     elem.value = '';
// });


// Исключения при работе с атрибутами

// Дан див:

// <div id="elem" class="content no-gap"></div>
// Дана также кнопка. По нажатию на кнопку прочитайте и выведите на экран значение атрибута class нашего дива.

// let elem = document.querySelector('#elem');

// console.log(elem.className);

// Дан див:

// <div id="elem"></div>
// Дана также кнопка. По нажатию на кнопку запишите в атрибут class нашего дива какой-нибудь класс.

// let elem = document.querySelector('#elem');

// elem.className = 'someClass';
// console.log(elem.className);

// Дан див с несколькими CSS классами, записанными через пробел:

// <div id="elem" class="aaa bbb ccc"></div>
// Дана также кнопка. По нажатию на кнопку получите массив CSS классов нашего дива.

// let elem = document.querySelector('#elem'),
//     button = document.querySelector('.button'),
//     str = '',
//     arr = [];

// button.addEventListener('click', function () {
//     str = elem.className;
//     arr = str.split(' ');
//     console.log(arr)
// });


// Цепочки методов и свойств


// Дан следующий код:

// <img id="image" src="avatar.png">
// let image = document.querySelector('#image');
// console.log(image.src);
// Переделайте приведенный выше код так, чтобы вместо введения переменной image использовалась цепочка.

// console.log(document.querySelector('#image').src);

// Преимущества и недостатки цепочек

// Дан следующий код:

// <img id="image" src="avatar.png" width="300" height="500">
// console.log(document.querySelector('#image').src);
// console.log(document.querySelector('#image').width);
// console.log(document.querySelector('#image').height);
// Укажите на недостатки данного кода. Исправьте их.

// let elem = document.querySelector('#image');

// console.log(elem.src, elem.width, elem.height);

// код сложнее и больше нашрузка на браузер


// Объект this

// Дан инпут. По получению фокуса этим инпутом запишите в него число 1, а по потери фокуса - число 2. Для обращения у инпуту внутри функции-обработчика используйте объект this.

// let elem = document.querySelector('.text');

// elem.addEventListener('focus', function () {
//     this.value = 1;
// });
// elem.addEventListener('blur', function () {
//     this.value = 2;
// });

// Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу.

// let button = document.querySelector('.button');

// button.addEventListener('click', function () {
//     this.value = Number(this.value) + 1;
// });

// Особое преимущество this

// Даны 5 абзацев с какими-то текстами. По клику на любой абзац запишите в конец его текста восклицательный знак.

// let elem1 = document.querySelector('.text1'),
//     elem2 = document.querySelector('.text2'),
//     elem3 = document.querySelector('.text3'),
//     elem4 = document.querySelector('.text4'),
//     elem5 = document.querySelector('.text5');

// function func() {
//     this.innerHTML = this.innerHTML + '!';
// }

// elem1.addEventListener('click', func);
// elem2.addEventListener('click', func);
// elem3.addEventListener('click', func);
// elem4.addEventListener('click', func);
// elem5.addEventListener('click', func);

// Даны 3 инпута, в которых записаны какие-то числа. По потери фокуса в любом из инпутов возведите стоящее в нем число в квадрат.

// let elem1 = document.querySelector('.text1'),
//     elem2 = document.querySelector('.text2'),
//     elem3 = document.querySelector('.text3');

// function func() {
//     this.value = Number(this.value) ** 2;
// }

// elem1.addEventListener('blur', func);
// elem2.addEventListener('blur', func);
// elem3.addEventListener('blur', func);


// Получение группы элементов

// Даны абзацы и кнопка. По нажатию на кнопку найдите все абзацы, переберите из циклом и установите текст каждого абзаца в значение text.

// let pis = document.querySelectorAll('.text');
// let button = document.querySelector('.button');

// button.addEventListener('click', function () {
//     for (let elem of pis) {
//         elem.innerHTML = 'text';
//     }
// });

// Даны абзацы с текстом и кнопка. По нажатию на кнопку запишите в конец текста каждого абзаца его порядковый номер.

// let elems = document.querySelectorAll('.text'),
//     button = document.querySelector('.button');

// button.addEventListener('click', function () {
//     let i = 1;
//     for (let elem of elems) {
//         elem.innerHTML = elem.innerHTML + ' ' + i;
//         i++;
//     }
// });

// Даны инпуты с числами, абзац и кнопка. По нажатию на кнопку найдите сумму чисел из инпутов и запишите эту сумму в текст абзаца.

// let elems = document.querySelectorAll('.text'),
//     button = document.querySelector('.button'),
//     par = document.querySelector('.par');

// button.addEventListener('click', function () {
//     let sum = 0;
//     for (let elem of elems) {
//         sum += Number(elem.value);
//     }
//     par.innerHTML = sum;
// });


// Добавление обработчиков событий в цикле

// Дана следующая функция:

// function func() {
// 	this.value = Number(this.value) + 1;
// }
// Даны также инпуты. Сделайте так, чтобы по потери фокуса в любом из наших инпутов выполнялась приведенная выше функция.

// let inputs = document.querySelectorAll('input');

// function func() {
//     this.value = Number(this.value) + 1;
// }

// for (let elem of inputs) {
//     elem.addEventListener('blur', func);
// }

// Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его число в нем возводилось в квадрат.

// let elems = document.querySelectorAll('p');

// function func() {
//     this.innerHTML = Number(this.innerHTML) ** 2;
// }

// for (let elem of elems) {
//     elem.addEventListener('click', func);
// }


// Дан следующий код:

// <div>1</div>
// <div>2</div>
// <div>3</div>
// <div>4</div>
// <div>5</div>
// let divs = document.querySelectorAll('div');

// for (let div of divs) {
// 	div.addEventListener('click', func);
// }

// function func() {
// 	this.innerHTML++;
// }
// Сделайте функцию-обработчик анонимной.

// let divs = document.querySelectorAll('div');

// for (let div of divs) {
//     div.addEventListener('click', function () {
//         this.innerHTML++;
//     });
// }


// Отвязывание событий через removeEventListener

// Дана ссылка. По нажатию на эту ссылку добавьте в конец ее текста содержимое ее атрибута href в круглых скобках. Сделайте так, чтобы это добавление происходило лишь по первому нажатию.

// let link = document.querySelector('a');

// link.addEventListener('click', func);

// function func() {
//     this.innerHTML = this.innerHTML + this.href;
//     this.removeEventListener('click', func);
// }

// Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу. После того, как значение кнопки достигнет 10 - отвяжите обработчик события, чтобы кнопка больше не реагировала на нажатие.

// let button = document.querySelector('.button');

// function func() {
//     if (this.value < 10) {
//         this.value++;
//     } else {
//         this.removeEventListener('click', func);
//     }
// }

// button.addEventListener('click', func);


// Отвязывание обработчиков событий в цикле

// Даны абзацы. По нажатию на любой из абзацев добавьте ему в конец восклицательный знак. Сделайте так, чтобы это добавление происходило лишь по первому нажатию.

// let elems = document.querySelectorAll('p');

// function func() {
//     this.innerHTML = this.innerHTML + '!';
//     this.removeEventListener('click', func);
// }

// for (let elem of elems) {
//     elem.addEventListener('click', func);
// }


// Работа с атрибутами через методы

// Метод getAttribute

// Дан элемент:

// <input id="elem" value="text">
// Получите значение его атрибута value.

// let elem = document.querySelector('#elem');

// result = elem.getAttribute('value');

// console.log(result)

// Дан элемент:

// <input id="elem" class="www zzz">
// Получите значение его атрибута class.

// let elem = document.querySelector('#elem');

// result = elem.getAttribute('class');
// console.log(result);


// Метод setAttribute

// Дан элемент:

// <input id="elem">
// Установите его атрибут value в значение 'text'.

// let elem = document.querySelector('#elem');
// result = elem.setAttribute('value', 'text');

// Дан элемент:

// <input id="elem">
// Установите ему атрибут class в значение 'valid'.

// let elem = document.querySelector('#elem');

// elem.setAttribute('class', 'valid');

// let result = elem.getAttribute('class');
// console.log(result);


// Метод removeAttribute

// Дан элемент:

// <input id="elem" value="text">
// Удалите у него атрибут value.

// let elem = document.querySelector('#elem');
// elem.removeAttribute('value');


// Метод hasAttribute

// Дан элемент:

// <input id="elem" value="text">
// Проверьте наличие у него атрибута value.

// let elem = document.querySelector('#elem');
// console.log(elem.hasAttribute('value'));


// Разница между способами получения атрибутов

// Дан инпут с каким-то начальным значением. Дана также кнопка. По нажатию на кнопку определите, было ли изменено пользователем начальное значение инпута.

// let text = document.querySelector('.text'),
//     button = document.querySelector('.button');

// // text.value = 'new'

// let value = text.getAttribute('value');



// function func() {
//     if (text.value == value) {
//         console.log('Значение аттрибута не поменялось');
//     } else {
//         console.log('Значение аттрибута поменялось');
//     }
// }

// button.addEventListener('click', func);

// Изменение атрибута

// Дан инпут с каким-то начальным значением. Пусть пользователь меняет это значение. Сделайте рядом с инпутом кнопку, по нажатию на которую value инпута вернется в изначальное значение.

// let elem = document.querySelector('.text'),
//     button = document.querySelector('.button');

// button.addEventListener('click', function () {
//     elem.value = 'Some text';
// });


// Манипулирование CSS классами в

//  Массив классов 

// Свойство classList 

// Дан элемент:

// <p id="elem" class="www ggg zzz"></p>
// Узнайте количество его классов.

// let elem = document.querySelector('#elem'),
//     result = elem.classList;

// console.log(result.length);

// Дан элемент:

// <p id="elem" class="www ggg zzz"></p>
// Переберите в цикле его классы.

// let elem = document.querySelector('#elem'),
//     result = elem.classList;

// for (let item of result) {
//     console.log(item);
// }

// Метод add объекта classList 

// Дан элемент:

// <p id="elem" class="www ggg zzz"></p>
// Добавьте ему класс xxx.

// let elem = document.querySelector('#elem');
// elem.classList.add('xxx');

// console.log(elem.classList);

//  Удаление классов

// Метод remove объекта classList

// Дан элемент:

// <p id="elem" class="www ggg zzz"></p>
// Удалите у него класс www и класс zzz.

// let elem = document.querySelector('#elem');
// elem.classList.remove('zzz', 'www');

// console.log(elem.classList)

// Проверка классов

// Метод contains объекта classList

// Дан элемент:

// <p id="elem" class="www ggg zzz"></p>
// Проверьте наличие у него класса ggg.

// let elem = document.querySelector('#elem'),
//     result = elem.classList.contains('ggg');

// console.log(result);


// Чередование классов.Метод toggle объекта classList

// Дан элемент. Добавьте ему класс www, если его нет и удалите - если есть.

// let elem = document.querySelector('#elem');
// elem.classList.toggle('www');

// let result = elem.classList

// console.log(result.length);


// Стилизация элементов через атрибут style

// Дан див и кнопка. По клику на кнопку добавьте диву ширину, высоту и границу.

// let elem = document.querySelector('.test'),
//     button = document.querySelector('.button');

// button.addEventListener('click', function () {
//     elem.style.width = '100px';
//     elem.style.height = '100px';
//     elem.style.border = 'solid 2px'
// });


// Свойства с дефисом

// Дан див с текстом и кнопка. По клику на кнопку установите диву размер шрифта в 20px, а также верхнюю границу и фон.
// let elem = document.querySelector('.elem'),
//     button = document.querySelector('.button');

// button.addEventListener('click', function () {
//     elem.style.fontSize = '20px';
//     elem.style.borderTop = 'solid 2px';
//     elem.style.backgroundColor = 'yellow';
// });

// Исключение

// Дан список ul и кнопка. По клику на кнопку добавьте тегам li свойство float в значении left.

// let elems = document.querySelector('.list'),
//     button = document.querySelector('.button');

// button.addEventListener('click', function () {
//     elems.style.cssFloat = 'right';
// });


// Стилизация с помощью CSS классов

// Дан абзац. Даны кнопки 'перечеркнуть', 'сделать жирным', 'сделать красным'. Пусть по нажатию на каждую кнопку заданное действие происходит с абзацем (становится красным, например).

// let elem = document.querySelector('.text'),
//     button1 = document.querySelector('#button1'),
//     button2 = document.querySelector('#button2'),
//     button3 = document.querySelector('#button3');

// button1.addEventListener('click', function () {
//     elem.classList.add('crossed');
// });

// button2.addEventListener('click', function () {
//     elem.classList.add('make-bold');
// });
// button3.addEventListener('click', function () {
//     elem.classList.add('colored');
// });

// Дополнительное преимущество

// Модифицируйте предыдущую задачу так, чтобы повторное нажатие на кнопку отменяло действие этой кнопки.

// let elem = document.querySelector('.text'),
//     button1 = document.querySelector('#button1'),
//     button2 = document.querySelector('#button2'),
//     button3 = document.querySelector('#button3');

// button1.addEventListener('click', function () {
//     elem.classList.toggle('crossed');
// });

// button2.addEventListener('click', function () {
//     elem.classList.toggle('make-bold');
// });
// button3.addEventListener('click', function () {
//     elem.classList.toggle('colored');
// });


// Отработка изученного материала на работу с DOM

// Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.

// let elem = document.querySelector('.elem'),
//     par = document.querySelector('.parag');

// elem.addEventListener('blur', function () {
//     par.innerHTML = par.innerHTML + ' ' + elem.value;
// });

// Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.

// let elem1 = document.querySelector('#el1'),
//     elem2 = document.querySelector('#el2'),
//     elem3 = document.querySelector('#el3'),
//     parag = document.querySelector('.parag'),
//     button = document.querySelector('.button');

// button.addEventListener('click', function () {
//     parag.innerHTML = Number(elem1.value) + Number(elem2.value) + Number(elem3.value);
// });

// Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.

// let elem = document.querySelector('.elem');

// elem.addEventListener('blur', function () {
//     let str = String(this.value);
//     let arr = str.split('');
//     let sum = 0;
//     for (let elem of arr) {
//         sum += Number(elem);
//     }

//     console.log(sum);
// });

// Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).

// let elem = document.querySelector('.elem');

// elem.addEventListener('blur', function () {
//     let str = String(this.value);
//     let arr = str.split(',');
//     let sum = 0,
//         result = 0;
//     for (let elem of arr) {
//         sum += Number(elem);
//     }
//     result = sum / arr.length;
//     console.log(result);
// });

// Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.

// let first = document.querySelector('#first'),
//     second = document.querySelector('#second'),
//     third = document.querySelector('#third'),
//     fourth = document.querySelector('#fourth')

// first.addEventListener('blur', function () {
//     let str = String(first.value);
//     let arr = str.split(' ');
//     second.value = arr[0];
//     third.value = arr[1];
//     fourth.value = arr[2]
// })

// Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте).

// let elem = document.querySelector('.text');

// elem.addEventListener('blur', function () {
//     let string = String(elem.value);
//     let arr = string.split(' ');
//     elem.value = ucFirst(arr[0]) + ' ' + ucFirst(arr[1]) + ' ' + ucFirst(arr[2]);

// });

// function ucFirst(str) {
//     let newStr = str[0].toUpperCase() + str.slice(1);
//     return newStr;
// }

// Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.

// let elem = document.querySelector('.text');

// elem.addEventListener('blur', function () {
//     let string = String(elem.value);
//     let arr = string.split(' ');
//     console.log(arr.length);
// })

// Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.

// let elem = document.querySelector('.text');

// elem.addEventListener('blur', function () {
//     let str = String(elem.value);
//     elem.value = str.split('.').join('-');
// })

// Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).

// let elem = document.querySelector('.text'),
//     button = document.querySelector('.button');

// button.addEventListener('click', function () {
//     let str = String(elem.value);
//     if (str == str.split('').reverse().join('')) {
//         console.log('слово палиндром');
//     } else {
//         console.log('слово не является палиндромом')
//     }
// });

// Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.

// let elem = document.querySelector('.elem');

// elem.addEventListener('blur', function () {
//     let str = String(elem.value);
//     let arr = str.split('');
//     if (arr.indexOf('3') != -1) {
//         console.log('3 есть');
//     } else {
//         console.log(' 3 нет');
//     }
// });

// Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.

// let elems = document.querySelectorAll('.text'),
//     button = document.querySelector('.button');

// button.addEventListener('click', function () {
//     let i = 1;
//     for (let elem of elems) {
//         elem.innerHTML = elem.innerHTML + ' ' + i;
//         i++;
//     }
// });

// Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.

// let elems = document.querySelectorAll('.link'),
//     button = document.querySelector('.button');

// button.addEventListener('click', func);

// function func() {
//     for (let elem of elems) {
//         elem.innerHTML = elem.innerHTML + '(' + elem.href + ')';
//         this.removeEventListener('click', func)
//     }
// }

// Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).

// let elems = document.querySelectorAll('.link'),
//     button = document.querySelector('.button');

// button.addEventListener('click', func);

// function func() {
//     for (let elem of elems) {
//         let string = elem.href;
//         if (string.startsWith('http://')) {
//             elem.innerHTML = elem.innerHTML + ' &#8594';
//         }
//         this.removeEventListener('click', func);
//     }
// }

// Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.

// let elems = document.querySelectorAll('.text');



// for (let elem of elems) {
//     elem.addEventListener('click', function func() {
//         elem.innerHTML = Math.pow(Number(elem.innerHTML), 2);
//         this.removeEventListener('click', func)
//     });
// }


// Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.

// let elem = document.querySelector('.text');

// elem.addEventListener('blur', function () {
//     let str = elem.value;
//     arr = str.split('.').reverse();
//     let [year, month, d] = arr;
//     let date = new Date(Number(year), Number(month) - 1, Number(d));
//     let day = date.getDay();
//     let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
//     elem.value = days[day];
// })

// Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля.

// let elem = document.querySelector('.text'),
//     button1 = document.querySelector('.button1'),
//     button2 = document.querySelector('.button2');

// button2.addEventListener('click', function () {
//     elem.value = Number(elem.value) + 1;
//     if (elem.value <= 0) {
//         elem.value = 1;
//     }
// });

// button1.addEventListener('click', function () {
//     elem.value = Number(elem.value) - 1;
//     if (elem.value <= 0) {
//         elem.value = 1;
//     }
// });

// Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.

// my variant
// elem = document.querySelector('.elem');
// texts = document.querySelectorAll('.text');

// for (let text of texts) {
//     text.addEventListener('click', function () {
//         elem.value = Number(elem.value) + 1;
//     })
// }

//2nd variant
// let elems = document.querySelectorAll('.text');
// let sum = document.querySelector('#sum');
// let i = 0;
// for (let elem of elems) {
//     elem.addEventListener('click', function () {
//         i++;
//         sum.value = i;
//     });

// }

// В инпут через запятую вводятся страны. По нажатию на кнопку сделайте так, чтобы эти страны записались в ul под инпутом (каждая страна отдельный li).

// let country = document.querySelector('#country');
// let button = document.querySelector('#button');
// let count = document.querySelector('#count');

// button.addEventListener('click', function func() {
//     let str = String(country.value);
//     let arr = str.split(',');
//     for (let i = 0; i < arr.length; i++) {
//         count.innerHTML += '<li>' + arr[i] + '</li>';
//     }
// });

// В инпут вводится страна и нажимается Enter. По нажатию на Enter сделайте так, чтобы введенные страны записывались в абзац под инпутом через запятую. То есть по каждому нажатию Enter в абзац будут добавляться все новые и новые страны.

// let country = document.querySelector('input');
// let text = document.querySelector('p');
// let result = '';
// country.addEventListener('keypress', function (e) {
//     if (e.keyCode === 13) {
//         let str = this.value + ', ';

//         result += str;
//         text.innerHTML = result;

//         this.value = ''; // обнудение инпута
//     }
// });

// На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов. И добавьте троеточие в конец обрезанного текста

// let elems = document.querySelectorAll('div'),
//     button = document.querySelector('.button')

// let str = '';

// button.addEventListener('click', func);

// function func() {
//     for (let i = 0; i < elems.length; i++) {
//         str = elems[i].innerHTML.slice(0, 10) + ' ...';
//         elems[i].innerHTML = str;
//     }
// }

// Дан массив с числами. Выведите каждый элемент этого массива в своем инпуте. Сделайте так, чтобы под всеми инпутами вывелась сумма элементов нашего массива.

// let arr = [1, 3, 5, 6, 7, 10, 25];

// let sum = 0;
// for (let elem of arr) {
//     document.write('<input type ="text" class = "inp">' + '<br>');
//     sum += elem;
// }
// document.write('<p class = "result">' + '<br>');
// let result = document.querySelector('.result'),
//     inputs = document.querySelectorAll('.inp');

// let i = 0;
// for (let inp of inputs) {
//     inp.value = arr[i];
//     i++
// }
// result.innerHTML = sum;

// Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем лежит число от 1 до 100. Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный.

// let inputNumber = document.querySelector('.number');

// inputNumber.addEventListener('blur', function () {
//     if (inputNumber.value > 1 && inputNumber.value < 101) {
//         inputNumber.style.color = 'green';
//     } else {
//         inputNumber.style.color = 'red';
//     }
// });

// Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.


// let elem = document.querySelector('.text');
// let button = document.querySelector('.submit');
// let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// button.addEventListener('click', function () {
//     elem.value = getSimvol();
// });

// // Случайные 8 символов
// function getSimvol() {
//     let num = '';
//     for (let i = 0; i < 8; i++) {
//         let rnd = getRandomInt(0, 61);
//         num += characters[rnd];
//     }
//     return num;
// }
// // Случайное число
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. По нажатию на кнопку перемешайте введенные символы случайным образом и запишите ее обратно в инпут.

// let elem = document.querySelector('.text'),
//     button = document.querySelector('.submit');

// button.addEventListener('click', function () {
//     let res = elem.value;
//     elem.value = getShuffle(res);
// });

// function getShuffle(str) {
//     let a = str.split(""),
//         n = a.length;

//     for (let i = n - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         let tmp = a[i];
//         a[i] = a[j];
//         a[j] = tmp;
//     }
//     return a.join("");
// }

// Дана ссылка. Дан чекбокс. По нажатию на ссылку меняйте состояние чекбокса с отмеченного на неотмеченное и наоборот.

// let link = document.querySelector('.link'),
//     elemToCheck = document.querySelector('.box');

// link.addEventListener('click', function () {
//     if (elemToCheck.hasAttribute('checked')) {
//         elemToCheck.removeAttribute('checked');
//     } else {
//         elemToCheck.setAttribute('checked', 1);
//     }
// })

// Дан инпут. В него вводится температура в градусах Фарингейта. Сделайте так, чтобы автоматически по мере ввода в абзац под инпутом эта температура выводилась в градусах Цельсия.

// let elem = document.querySelector('#elem');
// let res = document.querySelector('#res');

// elem.addEventListener('keyup', function () {
//     let num = Number(elem.value);
//     let fix = (num - 32) * 5 / 9;
//     res.innerHTML = fix.toFixed(1);
// });

// Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал этого числа.

// let elem = document.querySelector('.text'),
//     button = document.querySelector('.button'),
//     result = document.querySelector('.result');

// button.addEventListener('click', function () {
//     let fact = 1;
//     let num = Number(elem.value);
//     for (let i = 1; i <= num; i++) {
//         fact *= i;
//     }
//     result.innerHTML = fact
// })


// Нахождение элементов по родственным связям
// Потомки элементов

// firstElementChild lastElementChild children

// Дан элемент #elem:

// <ul id="elem">
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Найдите первого потомка этого элемента и сделайте его текст красного цвета.

// let elem = document.querySelector('#elem');

// elem.firstElementChild.setAttribute('style', 'color: red');

// Дан элемент #elem:

// <ul id="elem">
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Найдите последнего потомка этого элемента и сделайте его текст красного цвета.

// let elem = document.querySelector('#elem');

// elem.lastElementChild.setAttribute('style', 'color: red');

// Дан элемент #elem:

// <ul id="elem">
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Найдите всех потомков этого элемента и добавьте им в конец текст '!'.

// let parent = document.querySelector('#elem');
// let elems = parent.children;

// for (let elem of elems) {
//     elem.innerHTML += '!';
// }


// Родители элементов

// parentElement

// Дан элемент #elem:

// <div>
// 	<ul>
// 		<li>text</li>
// 		<li>text</li>
// 		<li id="elem">text</li>
// 		<li>text</li>
// 		<li>text</li>
// 	</ul>
// </div>
// Найдите его родителя и задайте ему красную границу.

// let elem = document.querySelector('#elem');

// let parentEl = elem.parentElement;

// parentEl.setAttribute('style', 'border: solid red')

// Поиск всех родителей
// closest

// Дан элемент:

// <header>
// 	<div>
// 		<p>
// 			<span id="elem"></span>
// 		</p>
// 	</div>
// </header>
// Найдите ближайшего родителя этого элемента, являющегося тегом div.

// let elem = document.querySelector('#elem');

// let parent = elem.closest('div')

// Дан элемент:

// <header>
// 	<div class="www">
// 		<p class="www">
// 			<span id="elem"></span>
// 		</p>
// 	</div>
// </header>
// Найдите ближайшего родителя этого элемента, являющегося элементом с классом www.

// let elem = document.querySelector('#elem');
// let parent = elem.closest('.www');
// console.log(parent.id);

// Поиск соседей
// previousElementSibling nextElementSibling

// Дан элемент #elem:

// <ul>
// 	<li>text</li>
// 	<li>text</li>
// 	<li id="elem">text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Найдите его соседа сверху и добавьте ему в конец текст '!'.

// let elem = document.querySelector('#elem');
// elem.previousElementSibling.innerHTML += '!';

// Найдите его соседа снизу и добавьте ему в конец текст '!'.

// let elem = document.querySelector('#elem');
// elem.nextElementSibling.innerHTML += '!';

// Дан элемент #elem:

// <ul>
// 	<li>text</li>
// 	<li>text</li>
// 	<li id="elem">text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'.

// let elem = document.querySelector('#elem').nextElementSibling;
// let nextNext = elem.nextElementSibling;
// nextNext.innerHTML += '!';

// Дан элемент #elem:

// <ul>
// 	<li>text1</li>
// 	<li>text2</li>
// 	<li id="elem">text3</li>
// 	<li>text4</li>
// 	<li>text5</li>
// </ul>
// Поменяйте местами текст его соседа сверху и текст его соседа снизу.

// let elem = document.querySelector('#elem');
// let prevElem = elem.previousElementSibling;
// let nextElem = elem.nextElementSibling;

// let ins = nextElem.innerHTML;
// nextElem.innerHTML = prevElem.innerHTML;
// prevElem.innerHTML = ins;


//  Другие полезные методы для поиска элементов 
// getElementById 

// Дан элемент #elem:

// <div id="elem"></div>
// Получите этот элемент с помощью метода getElementById и установите ему какой-нибудь текст.

// let elem = document.getElementById('elem');

// elem.innerHTML += 'some text'


// Получение по имени тега
// getElementsByTagName

// Дан список:

// <ul>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Получите все теги li по имени тега и сделайте их текст красного цвета.

// let elems = document.getElementsByTagName('li');

// for (let elem of elems) {
//     elem.setAttribute('style', 'color: red')
// }

// Получение по имени класса
// getElementsByClassName

// Даны элементы:

// <p class="www">elem 1</p>
// <p class="www">elem 2</p>
// <p class="www">elem 3</p>
// Получите эти элементы по имени класса и сделайте их текст красного цвета.

// let elems = document.getElementsByClassName('www');
// for (let elem of elems) {
//     elem.setAttribute('style', 'color:red')
// }


// Поиск элементов внутри другого элемента

// Дан элемент #parent:

// <div id="parent">
// 	<p class="www">text</p>
// 	<p class="www">text</p>
// 	<p class="www">text</p>
// 	<p class="ggg">text</p>
// 	<p class="ggg">text</p>
// 	<p class="ggg">text</p>
// </div>
// let parent = document.querySelector('#parent');
// Найдите внутри родителя элементы с классом www и запишите их в переменную elems1. Затем найдите внутри родителя элементы с классом ggg и запишите их в переменную elems2.


// let parent = document.querySelector('#parent');

// let elems1 = document.querySelectorAll('.www');
// let elems2 = document.querySelectorAll('.ggg');


// Работа с текстареа в JavaScript
// Дан текстареа и абзац. По потери фокуса в текстареа запишите его текст в абзац.

// let elem = document.getElementById('elem'),
//     par = document.querySelector('.text');

// elem.addEventListener('blur', function () {
//     par.innerHTML = elem.value;
// });


// Атрибут disabled в JavaScript

// Дан инпут и кнопка. По нажатию на кнопку заблокируйте инпут.

// let elem = document.querySelector('.elem'),
//     button = document.querySelector('.button');

// button.addEventListener('click', function () {
//     elem.disabled = true;
// });

// Дан инпут и две кнопки. Пусть нажатие на первую кнопку блокирует инпут, а нажатие на вторую - отблокирует.

// let elem = document.querySelector('.text'),
//     blockBtn = document.querySelector('.block'),
//     unblockBtn = document.querySelector('.unblock');

// blockBtn.addEventListener('click', function () {
//     elem.disabled = true;
// });
// unblockBtn.addEventListener('click', function () {
//     elem.disabled = false;
// });

// Дан инпут и кнопка. По нажатию на кнопку узнайте, заблокирован инпут или нет.

// let elem = document.querySelector('#text'),
//     button = document.querySelector('.button'),
//     elem2 = document.querySelector('p');

// button.addEventListener('click', function () {
//     if (elem.disabled = true) {
//         elem2.innerHTML = 'Disabled';
//     } else {
//         elem2.innerHTML = 'Enabled';
//     }
// });


// Работа с чекбоксами в JavaScript

// let elem = document.querySelector('.elem'),
//     button1 = document.querySelector('.button1'),
//     button2 = document.querySelector('.button2');

// button1.addEventListener('click', function () {
//     elem.checked = true;
// });

// button2.addEventListener('click', function () {
//     elem.checked = false;
// });

// Дан чекбокс, кнопка и абзац. По нажатию на кнопку, если чекбокс отмечен, выведите в абзац слово 'привет', а если чекбокс не отмечен, то слово 'пока'.

// let elem = document.querySelector('.elem'),
//     button = document.querySelector('.button'),
//     text = document.querySelector('.text');

// button.addEventListener('click', function () {
//     if (elem.checked) {
//         text.innerHTML = "Hello";
//     } else {
//         text.innerHTML = "Bye";
//     }
// });

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');

// button.addEventListener('click', function () {
//     if (elem.disabled) {
//         elem.disabled = false;
//     } else {
//         elem.disabled = true;
//     }
// });


// Чередование атрибутов без значений

// Дан чекбокс и кнопка. Сделайте так, чтобы каждый клик по кнопке приводил к смене состояния чекбокса.

// let elem = document.querySelector('#checkbox'),
//     button = document.querySelector('.button');

// button.addEventListener('click', function () {
//     elem.checked = !elem.checked;
// });


// Работа с радиокнопками в JavaScript

// Даны 3 радиокнопки, абзац и кнопка. По клику на кнопку выведите в абзац value отмеченной радиокнопки.

// let radios = document.querySelectorAll('input[type = radio]'),
//     text = document.querySelector('.text'),
//     button = document.querySelector('.button');

// button.addEventListener('click', function () {
//     for (let radio of radios) {
//         if (radio.checked) {
//             text.innerHTML = radio.value;
//         }
//     }
// });


// Событие change в JavaScript

// Дан инпут и абзац. По изменению инпута выведите его текст в абзац.

// let elem = document.querySelector('.text'),
//     result = document.querySelector('.result');

// elem.addEventListener('change', function () {
//     result.innerHTML = elem.value;
// });

// Дан чекбокс. По изменению чебокса выведите на экран его новое состояние.

// let elem = document.querySelector('input');

// elem.addEventListener('change', function () {
//     console.log(elem.checked);
// });

// Дан инпут. По его изменению проверьте, количество символов в нем меньше 5-ти или нет. Если меньше - покрасьте границу инпута в зеленый цвет, а если больше - в красный.

// let elem = document.querySelector('.text');

// elem.addEventListener('change', function () {
//     let count = (elem.value).length;
//     if (count < 5) {
//         elem.style.cssText = 'border: 2px solid red;';
//     } else {
//         elem.style.cssText = 'border: 2px solid green;';
//     }
// });


// Событие input в JavaScript

// Дан инпут. Пусть в него вводится текст. Как только длина текста достигнет 5-ти, выведите на экран сообщение об этом.

// let elem = document.querySelector('.text');

// elem.addEventListener('input', function () {
//     let count = (elem.value).length;
//     if (count >= 5) {
//         console.log('Value more than 5');
//     }
// });

// Дан инпут. Пусть в него разрешено ввести 5 символов. Дан также абзац. По мере ввода символов в инпут пишите, сколько еще символов можно ввести. Когда количество символов превысит 5-ти, то в абзац выводите то, на сколько символов превышена длина текста.

// let elem = document.querySelector('.elem'),
//     text = document.querySelector('.text');

// elem.addEventListener('input', function () {
//     let count = (elem.value).length;
//     if (count > 5) {
//         text.innerHTML = "Превышено на: " + (count - 5) + ' symbols';
//     } else {
//         text.innerHTML = "Еще можно ввести: " + (5 - count) + ' symbols';
//     }
// });


// Методы focus и blur в JavaScript

// Даны два инпута. Сделайте так, чтобы после ввода двух символов фокус ввода переходил ко второму инпуту, а после ввода двух символов в этот инпут - фокус из него убирался.

// let elem1 = document.querySelector('.elem1'),
//     elem2 = document.querySelector('.elem2');

// elem1.addEventListener('input', function () {
//     let count = (elem1.value).length;
//     if (count === 2) {
//         elem2.focus();
//     }
// });

// elem2.addEventListener('input', function () {
//     let count = (elem2.value).length;
//     if (count === 2) {
//         elem2.blur();
//     }
// });


// Работа с выпадающими списками

// Дан селект, абзац и кнопка. По клику на кнопку выведите текст выбранного пункта списка в абзац.

// let elem = document.querySelector('#select'),
//     text = document.querySelector('.text'),
//     button = document.querySelector('.button');

// button.addEventListener('click', function () {
//     text.innerHTML = elem.value;
// });

// Сделайте выпадающий список годов от 2020 до 2030. При выборе какого-нибудь пункта списка выведите сообщение о том, високосный этот год или нет.

// let elem = document.querySelector('#select');

// elem.addEventListener('change', function () {
//     if (elem.value % 4 == 0) {
//         console.log('Год високосный');
//     } else {
//         console.log('Год не високосный');
//     }
// });


// Атрибут value
// Сделайте выпадающий список с названиями дней недели. В качестве атрибутов value пунктов списка добавьте номера дней недели от 1 до 7. По изменению списка выведите на экран сообщение о том, выбран выходной день или рабочий.

// let elem = document.querySelector('#select');

// elem.addEventListener('change', function () {
//     if (this.value == 6 || this.value == 7) {
//         console.log('Weekend');
//     } else {
//         console.log("Working day");
//     }
// });


// Изменение выбранного пункта списка на JavaScript

// Сделайте выпадающий список с названиями месяцев. Сделайте так, чтобы по JavaScript по умолчанию выбирал в этом списке текущий месяц.

// let elem = document.querySelector('#select');

// elem.addEventListener('click', function () {
//     select.value = (new Date).getMonth() + 1;
// })


// Номер выбранного пункта выпадающего списка

// Дан инпут и селект. В инпут вводится какое-то число. По потери фокуса сделайте выделенным пункт списка, номер которого равен значению из инпута.

// let elem = document.querySelector('.elem'),
//     select = document.querySelector('#select');

// elem.addEventListener('blur', function () {
//     select.selectedIndex = this.value - 1;
// });

// Сделайте выпадающий список с названиями дней недели. Сделайте так, чтобы по JavaScript по умолчанию выбирал в этом списке текущий день.

// let elem = document.querySelector('#elem');

// let date = new Date();
// let result = date.getDay();

// elem.selectedIndex = result - 1;


// Получение пунктов выпадающего списка

// Переберите все пункты списка циклом и в конец текста каждого пункта добавьте значение его атрибута value.

// let elem = document.querySelector('#select');

// for (let option of elem) {
//     option.innerHTML += option.value;
// }
// console.log(elem[0]);


// Работа с пунктами выпадающего списка на JavaScript

// Переберите пункты списка циклом и для выбранного пункта в конец текста добавьте восклицательный знак, а для невыбранных пунктов - вопросительный.

// let select = document.querySelector('#select');

// for (let option of select) {
//     if (option.selected) {
//         option.text += '!';
//     } else {
//         option.text += '?';
//     }
// }

// Выбор пункта списка

// Дан выпадающий список и кнопка. По клику на кнопку сделайте отмеченным последний пункт списка.

// let select = document.querySelector('#select'),
//     button = document.querySelector('.button');

// button.addEventListener('click', function () {
//     let option = select[2];
//     option.selected = true;
// });

// Получение выбранного оптиона

// Дан селект и кнопка. По нажатию на кнопку выведите на экран текст отмеченного пункта списка.

// let select = document.querySelector('#select'),
//     button = document.querySelector('.button');

// button.addEventListener('click', function () {
//     console.log(select[select.selectedIndex].innerHTML);
// })

// Дан селект и кнопка. По нажатию на кнопку добавьте в конец текста выбранного пункта восклицательный знак.

// let select = document.querySelector('#select'),
//     button = document.querySelector('.button');

// button.addEventListener('click', func);

// function func() {
//     select[select.selectedIndex].innerHTML += '!';
//     button.removeEventListener('click', func);
// }


// Пользовательские атрибуты в JavaScript

// Дан следующий код:

// <div id="elem" data-text="str">text</div>
// Сделайте так, чтобы по клику на див в конец его текста добавилось содержимое его атрибута data-text.

// let elem = document.getElementById('elem');

// elem.addEventListener('click', function () {
//     this.innerHTML += this.dataset.text;
// });

// Даны дивы, содержащие в атрибуте data-num свой порядковый номер:

// <div data-num="1">text</div>
// <div data-num="2">text</div>
// <div data-num="3">text</div>
// <div data-num="4">text</div>
// <div data-num="5">text</div>
// Сделайте так, чтобы по клику на любой из дивов ему в конец записывался его порядковый номер.

// let elems = document.querySelectorAll('div');

// for (let elem of elems) {
//     elem.addEventListener('click', function () {
//         this.innerHTML += this.dataset.num;
//     });
// }

// Дана кнопка. Сделайте так, чтобы эта кнопка считала количество кликов по ней, записывая их в какой-нибудь пользовательский атрибут. Пусть по двойному клику на эту кнопку на экран выводится, сколько кликов по этой кнопке было сделано.

// let button = document.querySelector('.button');

// button.addEventListener('click', function () {
//     this.dataset.num++;
// });
// button.addEventListener('dblclick', function () {
//     console.log(this.dataset.num);
// });


// Дан инпут:

// <input id="elem" data-length="5">
// В этом инпуте в атрибуте data-length содержится количество символов, которое нужно ввести в инпут. Сделайте так, чтобы по потери фокуса, если количество введенных символов не совпадает с заданным, выводилось сообщение об этом. VAZHNO

// let elem = document.querySelector('#elem');
// let res = document.querySelector('#res');

// elem.addEventListener('blur', function () {
//     let str = String(elem.value);
//     if (Number(str.length) == Number(elem.dataset.length)) {
//         res.innerHTML = '';
//     } else {
//         res.innerHTML += 'There should be 5 characters';
//     }

// });


// Дан инпут:

/* <input id="elem" data-min="5" data-max="10">
В этом инпуте атрибуты data-min и data-max содержат диапазон. Сделайте так, чтобы по потери фокуса, если количество введенных символов не попадает в этот диапазон, выводилось сообщение об этом. VAZHNO*/

// let elem = document.querySelector('#elem'),
//     res = document.querySelector('#res');

// elem.addEventListener('blur', function () {
//     let str = String(this.value);
//     if (Number(str.length) >= Number(this.dataset.min) && Number(str.length) <= Number(this.dataset.max)) {
//         res.innerHTML = '';
//     } else {
//         res.innerHTML += 'must be between 5 and 10 characters';
//     }
// });


// Пользовательские атрибуты с дефисами в JavaScript

// Дан следующий код:

// <div id="elem" data-product-price="1000" data-product-amount="5">
// 	товар яблоки
// </div>
// Сделайте так, чтобы по клику на див в конец его текста добавлялась стоимость покупки, равная цене, умноженной на количество.

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', func);

// function func() {
//     this.innerHTML += ' ' + this.dataset.productPrice * this.dataset.productAmount;
//     this.removeEventListener('click', func);
// }


// Обращение через методы к data атрибутам

// Даны абзацы. Переберите их циклом и каждому абзацу в атрибут data-num запишите порядковый номер этого абзаца. Используйте метод setAttribute.

// let elems = document.querySelectorAll('p');
// let i = 1;
// for (let elem of elems) {

//     elem.setAttribute('data-num', i++);
// }

// let ert = document.querySelector('#ert'),
//     der = document.querySelector('#der');
// console.log(ert.getAttribute('data-num'));
// console.log(der.getAttribute('data-num'));


// Основы работы с объектом Event

// Самостоятельно проделайте описанные манипуляции и выведите объект с событием в консоль. Изучите структуру этого объекта.

// let elem = document.querySelector('.button');

// elem.addEventListener('click', function (event) {
//     console.log(event);
// });


// Координаты события
// event.clientY, event.pageX, event.pageY.
// Сделайте так, чтобы при движении мышки по странице, отображались координаты курсора, подобно тому, как это сделано в следующем образце:

// let elem = document.querySelector('#elem');

// elem.addEventListener('mousemove', function (event) {
//     this.innerHTML = event.clientX + ':' + event.clientY;
// })


// Тип события в объекте Event

// В следующем коде в двум событиям привязан один и тот же обработчик:

// <button id="elem">text</button>
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', func);
// elem.addEventListener('dblclick', func);

// function func() {

// }
// Допишите код функции func так, чтобы при клике на элемент этот элемент красился в зеленый цвет, а при двойном клике - в красный.

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', func);
// elem.addEventListener('dblclick', func);

// function func(event) {
//     if (event.type == 'click') {
//         this.style.backgroundColor = 'green';
//     } else if (event.type == 'dblclick') {
//         this.style.backgroundColor = 'red';
//     }
// }


// Элемент события в объекте Event

// Пусть у вас есть список ul с тегами li:

// ul {
// 	padding: 30px;
// 	border: 1px solid red;
// }
// li {
// 	list-style-type: none;
// 	margin-bottom: 20px;
// 	border: 1px dashed black;
// }
// <ul id="elem">
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>

// Привяжите к тегу ul обработчик клика. В этом обработчике проверяйте с помощью свойства tagName, по какому тегу был клик. Если клик был по тегу li - добавьте в конец текста этого тега восклицательный знак. А если клик был по тегу ul - добавьте ему в конец еще один пункт списка. Vazhno

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', func);

// function func(event) {
//     let str = event.target;
//     if (str.tagName.toLowerCase() == 'li') {
//         str.innerHTML += '!'
//     } else if (str.tagName.toLowerCase() == 'ul') {
//         str.innerHTML += '<li>text</li>';
//     }
// }


// Получение нажатых клавиш

// Дан абзац и инпут. В него вводится текст и нажимается клавиша Enter. Сделайте так, чтобы по нажатию Enter введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось. Vazhno

// let elem = document.querySelector('.elem'),
//     text = document.querySelector('.text');

// elem.addEventListener('keydown', function (event) {
//     if (event.code == 'Enter') {
//         text.innerHTML = this.value;
//         this.value = '';
//     }
// });


// Отслеживание клавиш-модификаторов. Ctrl, SHift, Alt

// Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Alt.

// let elem = document.querySelector('.elem');

// elem.addEventListener('click', function (event) {
//     if (event.altKey) {
//         this.style.backgroundColor = 'red';
//     }
// });


// Пусть у вас есть список ul с тегами li:

// <ul id="elem">
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Сделайте так, чтобы по клику на любую li, в конец ее текста добавлялось число 1, если нажата клавиша Ctrl, и число 2, если нажата клавиша Shift.

// let elem = document.getElementById('elem');

// elem.addEventListener('click', function (event) {
//     let str = event.target;
//     if (str.tagName.toLowerCase() == 'li' && event.ctrlKey) {
//         str.innerHTML += ' 1';
//     }
//     if (str.tagName.toLowerCase() == 'li' && event.shiftKey) {
//         str.innerHTML += ' 2';
//     }
// });

// 2Variant

// let elems = document.querySelectorAll('#elem li');

// for (let elem of elems) {
//     elem.addEventListener('click', function (event) {

//         if (event.ctrlKey) {
//             elem.innerHTML += " 1";
//         } else if (event.shiftKey) {
//             elem.innerHTML += " 2";
//         }

//     });

// }


// Отмена действия по умолчанию

// Даны ссылки. Сделайте так, чтобы по клику на ссылку ей в конец записывался ее href, а перехода по ссылке не происходило.

// let elems = document.querySelectorAll('#link');


// for (let elem of elems) {
//     elem.addEventListener('click', func);

//     function func(event) {
//         event.preventDefault();
//         this.innerHTML += ' ' + this.href;
//     }
// }

// Даны два инпута, абзац и ссылка. Пусть в инпуты вводятся числа. Сделайте так, чтобы по клику на ссылку в абзац записалась сумма введенных чисел.

// let elem1 = document.querySelector('.elem1'),
//     elem2 = document.querySelector('.elem2'),
//     text = document.querySelector('.text'),
//     link = document.querySelector('.link');

// link.addEventListener('click', function (event) {
//     event.preventDefault(); // отменяем переход
//     text.innerHTML = Number(elem1.value) + Number(elem2.value);
//     elem1.value = '';
//     elem2.value = '';
// });


// Основы работы с контекстом Потеря контекста

// "use strict";
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);

// function parent() {
//     console.log(this); // выведет ссылку на наш инпут <input id="elem" value="text">

//     function child() {
//         console.log(this); // выведет undefined
//     }
//     child();
// }


// Решение проблемы с контекстом. Через переменные


// Пусть дан такой код:

// <input id="elem" value="3">
// "use strict";

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);

// function func() {
// 	alert( square() );

// 	function square() {
// 		return this.value * this.value;
// 	}
// }
// Автор кода хотел, чтобы по потери фокуса на экран вывелся квадрат числа из value инпута. Однако, почему-то при потери фокуса в консоль выдается ошибка.

// Исправьте ошибку автора кода. Напишите текст, в котором вы дадите объяснение автору кода, почему возникла его ошибка.


// "use strict";

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);

// function func() {
//     let str = this.value;
//     alert(square());

//     function square() {
//         return str * str;
//     }
// }


// Второе решение проблемы.Использование параметра

// Возьмите код из предыдущей задачи и исправьте проблему кода с помощью изученного второго способа.

// "use strict";

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);

// function func() {
//     alert(square(this));

//     function square(param) {
//         return param.value * param.value;
//     }
// }


// Третье решение проблемы. Стрелочные функции

// Возьмите код из предыдущей задачи и исправьте проблему кода с помощью изученного третьего способа.

// "use strict";

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);

// function func() {


//     let square = () => {
//         return this.value * this.value;
//     };
//     alert(square());
// }


// Привязывание контекста через метод call


// Дана функция:

// function func() {
// 	console.log(this.value);
// }
// Даны три инпута:

// <input id="elem1" value="text1">
// <input id="elem2" value="text2">
// <input id="elem3" value="text3">
// С помощью метода call и функции func выведите на экран value каждого из инпутов.

// function func() {
//     console.log(this.value);
// }

// let elem1 = document.querySelector('#elem1'),
//     elem2 = document.querySelector('#elem2'),
//     elem3 = document.querySelector('#elem3');

// func.call(elem1);
// func.call(elem2);
// func.call(elem3);

// Метод call с параметрами

// Пусть дан следующий код:

// <input id="elem" value="привет">
// let elem = document.querySelector('#elem');

// function func(surname, name) {
// 	console.log(this.value + ', ' + surname + ' ' + name);
// }

// func(); // тут должно вывести 'привет, Иванов Иван'
// Добавьте в последнюю строчку метод call так, чтобы на экран вывелось 'привет, Иванов Иван'. Слово 'привет' должно взяться из value инпута, а 'Иванов' и 'Иван' должны быть параметрами функциями.

// let elem = document.querySelector('#elem');

// function func(surname, name) {
//     console.log(this.value + ', ' + surname + ' ' + name);
// }

// func.call(elem, 'Ivanov', 'Ivan');


// Привязывание контекста через метод apply


// Пусть дан следующий код:

// <input id="elem" value="привет">
// let elem = document.querySelector('#elem');

// function func(surname, name) {
// 	console.log(this.value + ', ' + surname + ' ' + name);
// }

// func(); // тут должно вывести 'привет, Иванов Иван'
// Добавьте в последнюю строчку метод apply так, чтобы на экран вывелось 'привет, Иванов Иван'. Слово 'привет' должно взяться из value инпута, а 'Иванов' и 'Иван' должны быть параметрами функциями.

// let elem = document.querySelector('#elem');

// function func(surname, name) {
//     console.log(this.value + ', ' + surname + ' ' + name);
// }

// func.apply(elem, ['Ivanov', 'Ivan']);


// Привязывание контекста через метод bind


// Пусть дан следующий код:

// <input id="elem" value="привет">
// let elem = document.getElementById('elem');

// function func(surname, name) {
// 	console.log(this.value + ', ' + surname + ' ' + name);
// }

// // Тут напишите конструкцию с bind()

// func('Иванов', 'Иван'); // тут должно вывести 'привет, Иванов Иван'
// func('Петров', 'Петр'); // тут должно вывести 'привет, Петров Петр'
// Напишите в указанном месте конструкцию с методом bind так, чтобы this внутри функции func всегда указывал на инпут из переменной elem.

// let elem = document.getElementById('elem');

// function func(surname, name) {
//     console.log(this.value + ', ' + surname + ' ' + name);
// }

// let newFunc = func.bind(elem);
// newFunc('Ivanov', 'Ivan');
// newFunc('Petrov', 'Petya');
// //2 nd variant
// var func = func.bind(elem);
// func('Ivanka', 'Trump')


// Основы работы с функцией setInterval

// Запустите таймер, который каждые 3 секунды будет что-нибудь выводить в консоль.

// function func() {
//     console.log('smth');
// }
// setInterval(func, 3000);

////2nd variand
// setInterval(function () {
//     console.log('hello world')
// }, 3000);

// Счетчик через функцию setInterval

// Пусть дана переменная, в которой изначально хранится число 100. Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль.

// let num = 100;

// setInterval(function () {
//     console.log(--num);
// }, 1000);

// setInterval(() => console.log(num--), 1000);


// Остановка таймера

// Пусть дана переменная, в которой изначально хранится число 10. Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.

// let i = 10;

// let timerId = setInterval(function () {
//     console.log(i--);
//     if (i == 0) {
//         clearInterval(timerId);
//     }
// }, 1000);


// Кнопка для запуска таймера

// Сделайте кнопку, по нажатию на которую в консоль будет выводится обратный отсчет, начиная с 100.

// let elem = document.querySelector('.button');

// elem.addEventListener('click', function () {
//     let i = 100;
//     setInterval(function () {
//         console.log(--i);
//     }, 1000);
// });

// Многократное нажатие на кнопку

// Возьмите ваше решение предыдущей задачи. Проверьте, что многократное нажатие на кнопку приводит к ускорению отсчета. Исправьте эту проблему.

// let start = document.querySelector('.button');

// start.addEventListener('click', function func() {
//     let i = 100;
//     setInterval(function () {
//         console.log(i--);
//     }, 1000);
//     start.removeEventListener('click', func)
// });


// Кнопки для запуска и остановки таймера


// Пусть дана переменная, в которой изначально хранится число 100. Даны также две кнопки. По нажатию на первую кнопку запустите таймер, который каждую секунду будет уменьшать значение переменной на 1 и выводить новое значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.

// По нажатию на вторую кнопку остановите таймер. Также остановите таймер, если вторая кнопка не была нажата, но значение переменной достигло нуля.

// let num = 10,
//     timerId;

// let start = document.querySelector('.start'),
//     stop = document.querySelector('.finish');

// start.addEventListener('click', function () {
//     timerId = setInterval(function () {
//         console.log(--num);
//         if (num <= 0) {
//             clearInterval(timerId);
//         }
//     }, 1000);
// });

// stop.addEventListener('click', function () {
//     clearInterval(timerId);
// });

// Приведенный мною в теоретической части код не учитывает то, что на кнопку старт можно сделать несколько нажатий. Для исправления этой проблемы можно по нажатию на кнопку старт отвязывать событие от этой кнопки, а по нажатию на кнопку стоп - привязывать обратно. Исправьте проблему.

// let num = 10,
//     timerId;

// let start = document.querySelector('.start'),
//     stop = document.querySelector('.finish');

// start.addEventListener('click', func);

// function func() {
//     timerId = setInterval(function () {
//         console.log(--num);
//         if (num <= 0) {
//             clearInterval(timerId);
//         }
//     }, 1000);
//     this.removeEventListener('click', func);
// }


// stop.addEventListener('click', function () {
//     clearInterval(timerId);
//     start.addEventListener('click', func)
// });


// по нажатию на кнопку запускает таймер, выводящий в консоль текущий момент времени
// let timerId;
// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');

// start.addEventListener('click', function () {
//     timerId = setInterval(function () {
//         let date = new Date;
//         console.log(date.getMinutes() + ':' + date.getSeconds());
//     }, 1000);
// });

// stop.addEventListener('click', function () {
//     clearInterval(timerId);
// });


// Практика на таймеры и работу с DOM

// Пусть в инпуте в атрибуте value изначально записано число 10. Запустите таймер, который каждую секунду будет уменьшать это число на единицу.

// let elem = document.getElementById('elem');

// setInterval(function () {
//     elem.value = Number(elem.value) - 1;
// }, 1000);

// Модифицируйте предыдущую задачу так, чтобы, как только содержимое инпута станет равно нулю, таймер прекратил свою работу.

// let elem = document.getElementById('elem');

// let timerId = setInterval(function () {
//     elem.value = Number(elem.value) - 1;
//     if (Number(elem.value) == 0) {
//         clearInterval(timerId);
//     }
// }, 1000);


// Таймеры и потеря контекста


// Пусть дан такой код:

// <input type="button" id="elem" value="1">
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// 	setInterval(function() {
// 		this.value = Number(elem.value) + 1;
// 	}, 1000);
// });
// Автор кода хотел, чтобы по нажатию на кнопку, значение этой кнопки каждую секунду увеличивалось на 1. Однако, по нажатию на кнопку вообще ничего не происходит.

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function () {
//     let self = this; //Поправим проблему введением self
//     setInterval(function () {
//         self.value = Number(self.value) + 1;
//     }, 1000);
// });

// Другие способы решить проблему

// Исправьте проблему предыдущей задачи через стрелочную функцию

// elem.addEventListener('click', function () {
//     setInterval(() =>
//         this.value = Number(elem.value) + 1,
//         1000);
// });

// Решение проблемы через замыкание

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function () {
//     function func(self) {
//         return function () {
//             console.log(self.value);
//         }
//     }

//     setInterval(func(this), 1000);
// });

// 2nd varian

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function () {
//     setInterval((function (self) {
//         return function () {
//             console.log(self.value);
//         }
//     })(this), 1000);
// });


// Передача контекста параметром функции setInterval

// Пусть дан такой код:

// <input type="button" id="elem" value="10">
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// 	setInterval(function() {
// 		this.value--;
// 	}, 1000);
// });
// Автор кода хотел, чтобы по нажатию на кнопку, значение этой кнопки каждую секунду уменьшалось на 1. Однако, по нажатию на кнопку вообще ничего не происходит.

// Исправьте ошибку автора кода, используя изученный в данном уроке способ.

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function () {
//     setInterval(function (self) {
//         self.value--;
//     }, 1000, this);
// });