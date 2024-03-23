---
sidebar_position: 3
---

# Эффекты вьюмоделей

Viewmodel FX API позволяет накладывать эффекты рендеринга для моделей игрока от первого лица.

# Функции

## `ncl_viewmodelfx_begin`

Отмечает начало перечисления свойств рендеринга для модели игрока от первого лица.
После вызова этой функции можно вызывать функции `ncl_write_*`.

```c title="Сигнатура"
/**
 * @param id    	Индекс клиента
 *
 * @noreturn
 */
native ncl_viewmodelfx_begin(id);
```

## `ncl_viewmodelfx_end`

Отмечает конец перечисления свойств рендеринга для модели игрока от первого лица.
После вызова этой функции нельзя вызывать её снова или функции `ncl_write_*` 
без предварительного `ncl_viewmodelfx_begin`.

```c title="Сигнатура"
/**
 * @param id		Индекс клиента
 *
 * @noreturn
 */
native ncl_viewmodelfx_end();
```

:::info
Следующие функции можно вызывать в любом порядке и не обязательно вызывать каждую из них
перед тем как закончить перечисление эффектов.
:::

## `ncl_write_rendermode`

Указывает режим рендеринга модели игрока от первого лица.

```c title="Сигнатура"
/**
 * @param rendermode 	Член перечисления kRender* из amxconst.inc
 *
 * @noreturn
 */
native ncl_write_rendermode(rendermode);
```

## `ncl_write_renderfx`

Указывает эффект рендеринга модели игрока от первого лица.

```c title="Сигнатура"
/**
 * @param renderfx 		Член перечисления kRenderFx* из amxconst.inc
 *
 * @noreturn
 */
native ncl_write_renderfx(renderfx);
```

## `ncl_write_renderamt`

Указывает renderamt модели игрока от первого лица.

```c title="Сигнатура"
/**
 * @param renderamt 	Значение от 0 до 255
 *
 * @noreturn
 */
native ncl_write_renderamt(renderamt);
```

## `ncl_write_rendercolor`

Указывает цвет рендеринга модели игрока от первого лица.

```c title="Сигнатура"
/**
 * Writes a render color to a viewmodelfx message.
 *
 * @param r 		Значение оттенка красного от 0 до 255
 * @param g 		Значение оттенка зеленого от 0 до 255
 * @param b 		Значение оттенка синиго от 0 до 255
 *
 * @noreturn
 */
native ncl_write_rendercolor(r, g, b);
```

## `ncl_write_renderbody`

Указывает сабмодели модели игрока от первого лица.

```c title="Сигнатура"
/**
 * @param renderbody	Индекс сабмодели  	
 *
 * @noreturn
 */
native ncl_write_renderbody(renderbody);
```

## `ncl_write_renderskin`

Указывает скин модели игрока от первого лица.

```c title="Сигнатура"
/**
 * @param renderskin    Индекс скина 
 *
 * @noreturn
 */
native ncl_write_renderskin(renderskin);
```