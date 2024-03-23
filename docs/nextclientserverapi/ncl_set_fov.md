---
sidebar_position: 15
---

# `ncl_set_fov`

Позволяет изменить поле зрения игрока с указанием времени интерполяции (сглаживания) изменения поля зрения.

```c title="Сигнатура"
/**
 * @param id    	Индекс игрока
 * @param fov   	Угол поля зрения игрока (FOV)
 * @param time  	Время интерполяции
 *
 * @noreturn
 */
native ncl_setfov(id, fov, Float:time);
```