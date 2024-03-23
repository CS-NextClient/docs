---
sidebar_position: 5
---

# HUD спрайты

Позволяет выводить на экране игроков с NextClient спрайты в произвольной позиции, временем
и эффектами подобно hud-сообщениям из обычного goldsource.

# Функции

## `ncl_send_hud_sprite`

Выводит HUD спрайт на экран игрока с указаной позицией, эффектами и маштабированием.

```c title="Сигнатура"
/**
 * @param id             Индекс игрока, которому выводить HUD спрайт
 * @param channel        Используемый канал HUD-спрайтов (значение от 0 до 31)
 * @param sprite_path    Путь в файловой системе до спрайта
 * @param sprite_color   R, G, B оттенки цвета спрайта (каждое значение от 0 до 255)
 * @param alpha          Степень прозрачности спрайта (значение от 0 до 255)
 * @param frame          Начальный кадр анимации (-1 для зацикливания)
 * @param framerate      Частота кадров (1.0 для обычной скорости)
 * @param in_time        Время, необходимое для полного появления (fade-in)
 * @param hold_time      Время, в течение которого спрайт остается на экране
 * @param out_time       Время, необходимое спрайту для полного исчезновения (fade-out)
 * @param x              Горизонтальная позиция (от 0.0 до 1.0 или -1.0 для центрирования)
 * @param y              Вертикальная позиция (от 0.0 до 1.0 или -1.0 для центрирования)
 * @param sprite_rect    Координаты левого, верхнего, правого и нижнего пикселей прямоугольника спрайта
 * @param scale_x        Горизонтальный маштаб (от 0.0; 1.0 для обычного маштаба)
 * @param scale_y        Вертикальный маштаб (от 0.0; 1.0 для обычного маштаба)
 * @param rendermode     Член перечисления kRender* из amxconst.inc
 *
 * @return               1 при успехе, иначе 0
 * @error                Возникнет ошибка, если были переданы некорретные параметры
 */
native ncl_send_hud_sprite(
    id,
    channel,
    const sprite_path[],
    sprite_color[3] = { 255, 255, 255 },
    alpha = 255,
    frame = -1,
    Float:framerate = 1.0,
    Float:in_time = 0.0,
    Float:hold_time = 3.0,
    Float:out_time = 1.0,
    Float:x = -1.0,
    Float:y = -1.0,
    sprite_rect[4] = { 0, 0, 0, 0 },
    Float:scale_x = 1.0,
    Float:scale_y = 1.0,
    rendermode = kRenderTransAdd
);
```

## `ncl_send_hud_sprite_full_screen`

Работает так же как и `ncl_send_hud_sprite`, но автоматически маштабирует спрайт
на весь экран игрока.

```c title="Сигнатура"
/**
 * @param id             Индекс игрока
 * @param channel        Используемый канал HUD-спрайтов (значение от 0 до 31)
 * @param sprite_path    Путь в файловой системе до спрайта
 * @param sprite_color   R, G, B оттенки цвета спрайта (каждое значение от 0 до 255)
 * @param alpha          Степень прозрачности спрайта (значение от 0 до 255)
 * @param frame          Начальный кадр анимации (-1 для зацикливания)
 * @param framerate      Частота кадров (1.0 для обычной скорости)
 * @param in_time        Время, необходимое для полного появления (fade-in)
 * @param hold_time      Время, в течение которого спрайт остается на экране
 * @param out_time       Время, необходимое спрайту для полного исчезновения (fade-out)
 * @param rendermode     Член перечисления kRender* из amxconst.inc
 *
 * @return               1 при успехе, иначе 0
 * @error                Возникнет ошибка, если были переданы некорретные параметры
 */
native ncl_send_hud_sprite_full_screen(
    id,
    channel,
    const sprite_path[],
    sprite_color[3] = { 255, 255, 255 },
    alpha = 255,
    frame = -1,
    Float:framerate = 1.0,
    Float:in_time = 0.0,
    Float:hold_time = 3.0,
    Float:out_time = 1.0,
    rendermode = kRenderTransAdd
);
```

## `ncl_clear_hud_sprite`

Очищает канал HUD спрайтов. Это приведет к удалению активного HUD-спрайта по указанном канале.

```c title="Сигнатура"
/**
 * @param id		Индекс игрока, которому нужно очистить канал HUD спрайтов
 * @param channel	Channel to use on the client (from 0 to 32)
 *
 * @return		1 при успехе, иначе 0
 * @error		Возникнет ошибка, если были переданы некорретные параметры
 */
native ncl_clear_hud_sprite(id, channel);
```