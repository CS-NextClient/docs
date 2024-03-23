---
sidebar_position: 16
---
#

# `ncl_set_wpn_icon_for_next_deathmsg`

Заменяет иконку оружия убийства для следующего killfeed сообщения в списке убийств
для игрока с NextClient, если у него включен расширенный killfeed, который доступен
с версии NextClient `2.3.0` и включен по-умолчанию.

:::tip Лучшая практика
Вызывайте эту функцию только перед тем, как произойдет событие убийства игрока.
Наиболее подходящим вариантом будет хук виртуальной функции `Ham_Killed` в `pre` режиме
:::

```c title="Сигнатура"
/**
 * @param sprite_path   Путь в файловой системе к спрайту
 * @param frame         Кадр анимации спрайта
 * @param rendermode    Режим рендеринга спрайта
 * @param color         R, G, B оттенки цвета спрайта (каждое значение от 0 до 255)
 * @param alpha         Степень прозрачности спрайта (значение от 0 до 255)
 *
 * @noreturn
 * @error               Возникнет ошибка, если были переданы некорретные параметры
 */
native ncl_set_wpn_icon_for_next_deathmsg(
	const sprite_path[], 
	frame = 0, 
	rendermode = kRenderTransAdd, 
	color[] = { 255, 255, 255 }, 
	alpha = 255, 
	recipient_id = 0
);
```