---
order: 1
label: Основы
---

## Содержание

[Вернуться на главную](/README.md) | [JS](./README.md)

1. [Подключение](#подключение)
2. [Комментарии](#комментарии)
3. [Консоль](#консоль)
4. [Переменная](#переменная)
5. [Конкатенация](#конкатенация)

## Подключение

Код на языке JavaScript называют скриптом. Его сохраняют в отдельный файл с расширением `js`, а чтобы запустить, подключают этот файл на страницу. В HTML для добавления JavaScript есть специальный тег:

```html
<script src="адрес_файла"></script>
```

Подключают скрипт обычно в самом конце страницы, перед закрывающим тегом `</body>`.

Программа на JavaScript — это последовательность инструкций, то есть указаний браузеру выполнить какие-то действия. Инструкции выполняются последовательно, сверху вниз.

Чтобы сказать JavaScript, что инструкция закончена, нужно поставить точку с запятой или перейти на новую строку.

JavaScript не меняет исходный файл с разметкой, но, выполняя инструкции, меняет страницу прямо в браузере пользователя.

[К содержанию](#содержание)

## Комментарии

Комментарий — это текст, поясняющий код. Он не выводится в браузер и никак не влияет на работу программы. Инструкции внутри комментария не выполняются, поэтому комментарии часто используют, если нужно временно отключить часть кода.

В JavaScript есть два вида комментариев:

```js
// Однострочные комментарии.
  
/*
И многострочные.
Они могут отключить сразу несколько строк кода.
*/
```

[К содержанию](#содержание)

## Консоль

Консоль — инструмент разработчика, который помогает тестировать код. Если во время выполнения скрипта возникнет ошибка, в консоли появится сообщение о ней. А ещё в консоль можно выводить текстовые подсказки. Чтобы вывести сообщение в консоль, нужно использовать `console.log`:

```js
console.log('Привет от JavaScript!');
// Выведет: Привет от JavaScript!

console.log(document.querySelector('.page'));
// Выведет в консоль найденный элемент
```

[К содержанию](#содержание)

## Переменная

Переменная — способ сохранить данные, дав им понятное название. Имя переменной должно описывать то, что в ней хранится.

Переменную можно создать, или **объявить**, с помощью ключевого слова `let`. За ним следует имя переменной. После объявления в переменную нужно записать, или **присвоить**, какое-то значение:

```js
let header = document.querySelector('header');
```

[К содержанию](#содержание)

## Конкатенация

Операция, когда мы «склеиваем» несколько значений, называется **конкатенацией** и в JavaScript выполняется с помощью знака плюс.

```js
let name = 'Александр';

paragraph.textContent = 'Пирвет, ' + name + '. Хорошего дня!';
console.log(paragraph.textContent);
// Выведет: Пирвет, Александр. Хорошего дня!
```

[К содержанию](#содержание)