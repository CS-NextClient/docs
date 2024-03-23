---
sidebar_position: 2
---

# Песочница кваров

Это API, позволяющее изменять значения кваров игроков с NextClient без [слоухакинга](https://amx-x.ru/viewtopic.php?f=9&t=36459)
с гарантией восстановления прежних значений в соответствии с конфигурацией клиента игрока. Также это позволяет
заблокировать смену кваров на время сессии игры на сервере.

# Функции

## `ncl_sandbox_cvar_begin`

Отмечает начало перечисления кваров. После вызова этой функции можно вызывать функцию `ncl_write_sandbox_cvar`.

```c title="Сигнатура"
/**
 * @param id   		Индекс клиента, которому отсылают значения кваров
 *
 * @noreturn
 */
native ncl_sandbox_cvar_begin(id);
```

## `ncl_sandbox_cvar_end`

Отмечает конец перечисления кваров. После вызова этой функции нельзя вызывать 
её снова или функцию `ncl_write_sandbox_cvar` без предварительного `ncl_sandbox_cvar_begin`.

```c title="Сигнатура"
/**
 * @noreturn
 */
native ncl_sandbox_cvar_end();
```

## `ncl_write_sandbox_cvar`

Определяет значение квара для игрока.

```c title="Сигнатура"
/**
 * @param cvar  	Индекс квара из перечисления eSandboxCvar
 * @param value 	Значение квара
 *
 * @noreturn
 */
native ncl_write_sandbox_cvar(eSandboxCvar:cvar, const value[]);
```

Поддерживаемые квары в песочнице кваров:

```c
enum eSandboxCvar
{
    SC_cl_forwardspeed = 0,
    SC_cl_backspeed,
    SC_cl_sidespeed,
    SC_sensitivity,
    SC_gl_fog,
    SC_cl_minmodels,
    SC_viewmodel_disable_shift,
    SC_viewmodel_offset_x,
    SC_viewmodel_offset_y,
    SC_viewmodel_offset_z,
    SC_cl_bobstyle,
    SC_cl_bobcycle,
    SC_cl_bobup,
    SC_cl_bob,
    SC_cl_bobamt_vert,
    SC_cl_bobamt_lat,
    SC_cl_bob_lower_amt,
    SC_cl_rollangle,
    SC_cl_rollspeed,
    SC_viewmodel_lag_scale,
    SC_viewmodel_lag_speed,
    // начиная с NextClient v2.1.4
    SC_cl_crosshair_type,
    SC_cl_crosshair_size,
    SC_cl_crosshair_color,
    SC_cl_crosshair_translucent,
    // начиная с NextClient v2.1.8
    SC_cl_weather,
    // начиная с NextClient v2.1.10
    SC_cl_min_t,
    SC_cl_min_ct,
    SC_cl_corpsestay,
    SC_r_decals,
    // начиная с NextClient v2.2.0
    SC_cl_yawspeed,
    SC_cl_pitchspeed
}
```