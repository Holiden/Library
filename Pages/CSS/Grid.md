# Grid

## Содержание:

1. [Основы грид](#основы-грид)
2. [Расположение грид-элементов](#расположение-грид-элементов)

[К разделам CSS](https://github.com/Holiden/Library/blob/master/Pages/CSS/README.md)
[На главную](https://github.com/Holiden/Library/blob/master/README.md)

## Основы грид

Чтобы сделать блок грид-контейнером, нужно задать ему соответствующее значение свойства `display`:

```css
.container {
  display: grid;
}
```

[К содержанию](#содержание)

## Расположение грид-элементов

В гриде элементы располагаются по двумерной сетке. То есть грид состоит из рядов и столбцов, располагающихся между линий, которые нумеруются по порядку.

![Схема двумерной сетки](https://github.com/Holiden/Library/blob/master/Assets/2.png)

Чтобы расположить элемент по сетке внутри грида, нужно задать ему координаты по столбцам и по рядам: с какой линии столбцов и рядов грид-ячейка будет начинаться, на какой линии столбцов и рядов будет заканчиваться.

```css
.element {
  grid-row-start: 3;
  grid-row-end: 4;
  grid-column-start: 4;
  grid-column-end: 5;
}
```

Координаты можно отсчитывать не только от начала, но и от конца грида. При этом к индексу линии, от которой ведётся отсчёт, добавляет знак «минус».

```css
.element {
  grid-row-start: -3;
  grid-row-end: -2;
  grid-column-start: -2;
  grid-column-end: -1;
}
```

Существует также сокращённый синтаксис для этих свойств. Свойство `grid-row` — это сокращение для задания пары свойств: `grid-row-start / grid-row-end`. Аналогично, свойство `grid-column` объединяет в себе сразу два свойства: `grid-column-start / grid-column-end`.

```css
.element {
  grid-row: 1 / -2;
  grid-column: 1 / 3;
}
```

Если в свойстве `grid-row` или `grid-column` не задать второй параметр, то значение останется валидным, но применится только первый параметр.

Грид-элементы могут наслаиваться друг на друга, при этом они начинают себя вести как будто абсолютно спозиционированные, при этом на них так же действует свойство `z-index`. Чем больше значение `z-index`, тем выше грид-элемент в «стопке».

[К содержанию](#содержание)