---
order: 3
label: Свойства
---

## Содержание

[Вернуться на главную](/README.md) | [JS](./README.md)

1. [textContent](#textContent)
2. [value](#value)

## textContent

У каждого элемента имеется множество свойств: его размеры, цвет и так далее. Свойство `textContent` хранит в себе текстовое содержимое элемента. Свойствам можно присваивать новые значения:

```js
let paragraph = document.querySelector('p');

paragraph.textContent = 'Hello World!';
```

[К содержанию](#содержание)

## value

У полей ввода есть особое свойство — `value`. Оно хранит данные, введённые в поле. Их можно вывести их прямо на страницу:

```js
let input = document.querySelector('input');

paragraph.textContent = input.value;
```

[К содержанию](#содержание)
