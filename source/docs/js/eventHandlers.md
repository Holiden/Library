# Обработчики событий

## Содержание

1. [onclick](#onclick)
2. [onsubmit](#onsubmit)

[К разделам JS](https://github.com/Holiden/Library/blob/master/sections/js/README.md)

[На главную](https://github.com/Holiden/Library/blob/master/README.md)

## onclick

Свойство `onclick` означает «по клику»:

```js
let button = document.querySelector('button');

button.onclick = function() {
  console.log('Кнопка нажата!');
};
```

При каждом клике по кнопке в консоли будет появляться новое сообщение `Кнопка нажата!`.

[К содержанию](#содержание)

## onsubmit

За обработку отправки формы отвечает свойство `onsubmit`:

```js
let form = document.querySelector('form');

form.onsubmit = function() {
  console.log('Форма отправлена!');
};
```

После отправки формы в консоли появится сообщение `Форма отправлена!`.

[К содержанию](#содержание)
