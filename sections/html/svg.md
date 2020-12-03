# SVG

[Вернуться на главную](/README.md) | [HTML](./README.md)

## Содержание

1. [Основы](#основы)
2. [Ширина и высота](#ширина-и-высота)
3. [Атрибут viewBox](#атрибут-viewbox)
4. [Атрибут preserveAspectRatio](#атрибут-preserveaspectratio)
   - [Выравнивание в preserveAspectRatio](#выравнивание-в-preserveaspectratio)
   - [preserveAspectRatio и viewBox](#preserveaspectratio-и-viewbox)
   - [Заполнение пространства](#заполнение-пространства)
5. [Основные фигуры](#основные-фигуры)
   - [Прямоугольник](#прямоугольник)
   - [Многоугольник](#многоугольник)
   - [Окружность](#окружность)
   - [Эллипс](#эллипс)
   - [Линии](#линии)
   - [Ломаные линии](#ломаные-линии)
6. [Оформление svg-фигур](#оформление-svg-фигур)
   - [Заливка](#заливка)
   - [Обводки](#обводки)
   - [Концы линий](#концы-линий)
   - [Вид сгибов](#вид-сгибов)
   - [Пунктирные линии](#пунктирные-линии)

## Основы

Svg элемент вставляется с помощью тега `<svg></svg>`, внутри которого уже находится остальное содержимое: фигуры, картинки или текст.

Для значений в пикселях после значения не нужно писать `px`, потому что пиксели — единица измерения, используемая в svg по умолчанию. Проценты рассчитываются относительно размеров всего svg изображения: горизонтальные значения относительно ширины, вертикальные — относительно высоты.

[К содержанию](#содержание)

## Ширина и высота

Содержимое svg отрисовывается на бесконечном холсте, и его размеры не зависят от содержимого. Видимая часть холста соответствует размерам svg элемента, эта область отрисовки называется вьюпорт. При этом можно управлять как размерами svg элемента, так и поведением его содержимого: оно может отображаться целиком, обрезаться или сжиматься не сохраняя пропорции. Поменять ширину и высоту можно с помощью атрибутов `width` и `height`. Задавать размеры можно как атрибутами, так и в CSS.

```html
<svg width="350" height="200">
  …
<svg>
```

```css
svg {
  width: 350px;
  height: 200px;
}
```

[К содержанию](#содержание)

## Атрибут viewBox

Изменение размеров svg элемента не влияет на его содержимое, потому что содержимое отрисовывается на бесконечном холсте, и непонятно какого размера область нужно растягивать или сжимать. Это поведение можно изменить, задав размер области, которая будет тянуться, с помощью атрибута `viewBox`.

```html
<svg viewBox="0 0 350 200" width="350" height="200">
  …
</svg>
```

Первые два числа — координаты `X` и `Y` верхнего левого угла масштабируемой области, два других — её ширина и высота. Значения задаются в пикселях. С вьюбоксом содержимое масштабируется, чтобы поместиться целиком в контейнер, и выравнивается по центру.

Svg без размеров, но с `viewBox`, пытается занять всё доступное пространство. Это означает, что если на странице есть инлайновые иконки, размеры которым задаются в CSS, без CSS могут растянуться на весь экран. Чтобы этого избежать, достаточно всем инлайновым иконкам в атрибутах явно задавать размеры по умолчанию, они потом легко переопределяются в CSS.

[К содержанию](#содержание)

## Атрибут preserveAspectRatio

По умолчанию содержимое svg с `viewBox` масштабируется сохраняя пропорции, и если соотношения сторон вьюпорта и вьюбокса не совпадают, вокруг содержимого появляются поля. С помощью атрибута `preserveAspectRatio` это поведение можно изменять: например, значение `none` указывает, что сохранять пропорции не нужно. В этом случае область, размеры которой заданы вьюбоксом, растягивается на всё доступное пространство вьюпорта.

Svg, заданный в качестве фона, ведёт себя так же, как инлайновый svg, поэтому, чтобы получить резиновый фон нужно использовать svg с `viewBox`, но без размеров: в этом случае изображение подгонится под размер элемента, которому задан фон, и будет тянуться вместе с ним, сохраняя пропорции. Это очень удобно для иконок: задав размеры родительскому элементу, иконка, заданная фоном, сама под него растянется.

[К содержанию](#содержание)

### Выравнивание в preserveAspectRatio

Содержимое SVG можно не только растягивать, но и сдвигать вправо-влево или вверх-вниз. Для этого нужно указать положение содержимого относительно осей `X` и `Y`, например `xMinYMid`.

```html
<svg viewBox="0 0 350 200" preserveAspectRatio="xMinYMid">
  …
</svg>
```

Положение задаётся двумя параметрами: первым всегда указывается положение по `X`, вторым по `Y`. Положение по оси `Y` всегда пишется с большой буквы. Оба параметра обязательны. Значение по умолчанию — `xMidYMid`.

[К содержанию](#содержание)

### preserveAspectRatio и viewBox

Нужно помнить, что `preserveAspectRatio` не работает без `viewBox`. `viewBox` определяет масштабируемую область, а `preserveAspectRatio`  как эта область выравнивается и как заполняет собой вьюпорт. Также `preserveAspectRatio` не работает, если содержимое отрисовывается без полей (то есть соотношения сторон вьюпорта и вьюбокса совпадают), тогда в нём просто нет необходимости.

[К содержанию](#содержание)

### Заполнение пространства

Второй параметр в свойстве `preserveAspectRatio` задаёт поведение содержимого относительно вьюпорта, определяет как именно содержимое заполняет пространство. Заполнение — необязательный параметр, его можно не задавать. Могут быть следующие значения:

1. `meet` — содержимое умещается целиком, оставляя пустые поля (как при `background-size: contain`). Значение по умолчанию.
2. `slice` — содержимое заполняет собой всё пространство, при этом часть содержимого может быть обрезана (похоже на `background-size: cover`). Пропорции сохраняются в обоих случаях.

```html
<svg viewBox="0 0 350 200" preserveAspectRatio="xMinYMin meet">
  …
</svg>
```

[К содержанию](#содержание)

## Основные фигуры

### Прямоугольник

Прямоугольник рисуется с помощью тега `<rect />`.

```html
<rect width="150" height="100"/>
```

Чтобы задать координаты фигуры, используются атрибуты `x` и `y`. Координаты определяют положение верхнего левого угла фигуры.

```html
<rect width="150" height="100" x="20" y="50"/>
```

Скруглением углов прямоугольника управляют атрибуты `rx` и `ry`. Атрибут `rx` задаёт скругление по горизонтали, а `ry` — по вертикали. Если атрибут `ry` не задан, он будет равен `rx`.

```html
<rect width="150" height="100" rx="50" ry="20"/>
```

[К содержанию](#содержание)

### Многоугольник

Многоугольник рисуется с помощью тега `<polygon />`.

```html
<polygon points="5,135 115,5 225,135"/>
```

В атрибуте `points` задаются координаты вершин фигуры. Каждая координата задаётся по `x` и `y`. Координаты в `points` нельзя задавать в процентах.

[К содержанию](#содержание)

### Окружность

Окружность рисуется с помощью тега `<circle />`.

```html
<circle r="50"/>
```

Атрибут `r` — радиус окружности.

Положение окружности в пространстве определяется координатами центра фигуры: атрибут `cx` задаёт положение по горизонтальной оси, `cy` — по вертикальной. По умолчанию координаты центра окружности равны `0, 0`, поэтому она находится в верхнем левом углу.

```html
<circle r="50" cx="50" cy="20"/>
```

[К содержанию](#содержание)

### Эллипс

Эллипс рисуется с помощью тега `<ellipse />`. У него два радиуса. Они задаются атрибутами: по горизонтальной оси — `rx`, и по вертикальной — `ry`.

```html
<ellipse rx="30" ry="40"/>
```

Положение эллипса в пространстве определяется координатами центра фигуры: атрибут `cx` задаёт положение по горизонтальной оси, `cy` — по вертикальной. По умолчанию координаты центра эллипса равны `0, 0`, поэтому он находится в верхнем левом углу.

```html
<ellipse rx="30" ry="40" cx="50" cy="20"/>
```

[К содержанию](#содержание)

### Линии

Линии рисуются с помощью тега `<line />`. Координаты начала линии задаются атрибутами `x1` и `y1`, координаты конца — атрибутами `x2` и `y2`. Координаты можно задавать в процентах.

```html
<line x1="220" y1="10" x2="20" y2="130"/>
```

Так как линия не образует фигуру с внутренним контуром, для отображения ей нужно задать не заливку, а обводку. Обводкой управляют два атрибута: `stroke` и `stroke-width`. Атрибут `stroke` задаёт цвет обводки, `stroke-width` — толщину линии. Можно задать только цвет линии, тогда толщина обводки по умолчанию будет равна одному пикселю.

```html
<line x1="220" y1="10" x2="20" y2="130" stroke="violet" stroke-width="5"/>
```

[К содержанию](#содержание)

### Ломаные линии

Ломаные линии рисуются с помощью тега `<polyline />`. В атрибуте `points` задаются координаты вершин фигуры. Каждая координата задаётся по `x` и `y`. Координаты в `points` нельзя задавать в процентах.

```html
<polyline points="10,135 100,10 55,135 10,10 105,135"/>
```

Разница между `<polygon />` и `<polyline />` заключается в поведении обводки: у `<polygon />` обводка замыкается сама по себе, а у `<polyline />` — остаётся незамкнутой.

[К содержанию](#содержание)

## Оформление svg фигур

### Заливка

Цвет заливки задаётся атрибутом `fill`.

```html
<circle r="50" fill="gold"/>
```

```css
circle {
  fill: gold;
}
```

Если не задана заливка, то, по умолчанию, фигура заполняется чёрным цветом. Чтобы полностью убрать заливку и оставить только контур фигуры применяется атрибут `fill` со значением `none`.

Управлять прозрачностью заливки можно с помощью свойства `fill-opacity`. Прозрачность работает для всех видов заливок, в том числе для градиентов и паттернов. Значение задаётся числом от `0` до `1`.

```html
<rect width="150" height="100" fill="gold" fill-opacity="0.5"/>
```

```css
rect {
  fill: gold;
  fill-opacity: 0.5;
}
```

[К содержанию](#содержание)

### Обводки

Цвет обводки задаётся атрибутом `stroke`. В svg рамка не влияет на положение фигуры в пространстве или на её размеры.

```html
<circle r="50" stroke="orange"/>
```

```css
circle {
  stroke: orange;
}
```

Толщина обводки задаётся свойством `stroke-width`. Если нет атрибута `stroke-width`, то, толщина по умолчанию `1px`. Если обводке задана толщина, но не задан цвет, обводка не отобразится.

```html
<circle r="50" stroke="orange" stroke-width="5"/>
```

```css
circle {
  stroke: orange;
  stroke-width: 5;
}
```

Прозрачность обводки задаётся свойством `stroke-opacity` со значениями от `0` до `1`.

```html
<circle r="60" stroke="orange" stroke-width="5" stroke-opacity="0.5"/>
```

```css
circle {
  stroke: orange;
  stroke-width: 5;
  stroke-opacity: 0.5;
}
```

[К содержанию](#содержание)

### Концы линий

Чтобы указывать, как ведёт себя обводка на концах линий, используется атрибут `stroke-linecap` со следующими значениями:

1. `butt` — с этим значением обводка просто заканчивается на концах линии. Значение по умолчанию.
2. `round` — с этим значением обводка равномерно закругляется вокруг концов линии.
3. `square` — с этим значением вокруг концов линии добавляется дополнительная обводка с прямоугольными краями.

```html
<line x1="220" y1="10" x2="20" y2="130" stroke="orange" stroke-width="5" stroke-linecap="round"/>
```

```css
line {
  stroke: orange;
  stroke-width: 5;
  stroke-linecap: round;
}
```

[К содержанию](#содержание)

### Вид сгибов

Атрибут `stroke-linejoin` позволяет управлять видом обводки на сгибах линий. Возможные значения:

1. `miter` — обводка в месте сгиба линии никак не видоизменяется. Значение по умолчанию.
2. `round` — обводка в месте сгиба линии равномерно закругляется.
3. `bevel` — обводка в месте сгиба линии складывается как лента.

```html
<polyline points="10,135 100,10 55,135 10,10 105,135" stroke="orange" stroke-width="5" stroke-linecap="round"/>
```

```css
polyline {
  stroke: orange;
  stroke-width: 5;
  stroke-linecap: round;
}
```

[К содержанию](#содержание)

### Пунктирные линии

Управлять видом пунктирных линий можно с помощью атрибута `stroke-dasharray`. В качестве значения задаётся длина отрезков и пробелов между ними.

1. Если задать одно число `stroke-dasharray="15"`, то получится пунктирная линия, состоящая из отрезков и пробелов одинаковой длины.

```html
<line x1="220" y1="10" x2="20" y2="130" stroke="orange" stroke-width="5" stroke-dasharray="15"/>
```

```css
line {
  stroke: orange;
  stroke-width: 5;
  stroke-dasharray: 15;
}
```

2. Если задать два числа `stroke-dasharray="50 10"`, первое будет управлять длиной отрезков, второе — длиной пробелов.

```html
<line x1="220" y1="10" x2="20" y2="130" stroke="orange" stroke-width="5" stroke-dasharray="50 10"/>
```

```css
line {
  stroke: orange;
  stroke-width: 5;
  stroke-dasharray: 50 10;
}
```

3. Последовательность можно продолжить `stroke-dasharray="5 10 15 20"`, в этом случае получится пунктирная линия со сложным ритмом.

```html
<line x1="220" y1="10" x2="20" y2="130" stroke="orange" stroke-width="5" stroke-dasharray="5 10 15 20"/>
```

```css
line {
  stroke: orange;
  stroke-width: 5;
  stroke-dasharray: 5 10 15 20;
}
```

Пунктирной обводке с помощью атрибута `stroke-dashoffset` можно задать сдвиг. Пунктиры обводки сдвинуться на заданный отрезок по направлению против часовой стрелки. Значение `stroke-dashoffset` может быть отрицательным, и тогда обводка будет смещаться по часовой стрелке.

```html
<line x1="220" y1="10" x2="20" y2="130" stroke="orange" stroke-width="5" stroke-dasharray="50 10" stroke-dashoffset="15"/>
```

```css
line {
  stroke: orange;
  stroke-width: 5;
  stroke-dasharray: 50 10;
  stroke-dashoffset: 15;
}
```

[К содержанию](#содержание)