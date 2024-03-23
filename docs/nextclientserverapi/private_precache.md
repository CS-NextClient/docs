---
sidebar_position: 4
---

# Приватный прекеш

Приватный прекеш позволяет предзагружать ресурсы для игроков с NextClient отдельно
от обычных клиентов, позволяя:
* переопределять модели, звуки и спрайты по-умолчанию;
* обновлять уже загруженные модели и звуки на клиенте, если они были обновлены на сервере;
* делать прекеш спрайтов и hud.txt только на стороне клиента.

:::warning Только на стадии прекеша
Функции ниже можно вызывать только на стадии прекеша сервера, т.е только в `plugin_precache()`
:::

# Функции

## `ncl_precache_model`

Делает прекеш модели `filepath` из файловой системы сервера для использования обычными клиентами и
для игроков с NextClient заменяет эту модель на модель `ncl_filepath` из файловой системы. Заменяющая
модель будет загружена в изолированную папку сервера на NextClient, что позволит бесконфликтно заменять
одну и ту же модель на клиенте по-умолчанию с разных серверов.

```c title="Сигнатура"
/**
 * @param filepath		Путь до модели, которая загрузится для обычных клиентов как обычная модель
 * @param ncl_filepath		Путь до модели, которая заменит модель filepath только для игроков с NextClient
 *				и будет загружена в изолированную папку сервера на клиенте  по пути filepath
 *
 * @return			Индекс прекеша (modelindex) модели filepath
 * @error			Возникнет ошибка, если функция будет вызвана за пределами форварда plugin_precache()
 */
native ncl_precache_model(const filepath[], const ncl_filepath[]);
```

## `ncl_precache_sound`

Работает точно так же как и `ncl_precache_model`, но только для звуков.

```c title="Сигнатура"
/**
 * @param filepath		Путь до зука, который загрузится для обычных клиентов как обычный звук
 * @param ncl_filepath		Путь до звука, который заменит звук filepath только для игроков с NextClient
 *				и будет загружен в изолированную папку сервера на клиенте по пути filepath
 *
 * @return			Индекс прекеша (modelindex) модели filepath
 * @error			Возникнет ошибка, если функция будет вызвана за пределами форварда plugin_precache()
 */
native ncl_precache_sound(const filepath[], const ncl_filepath[]);
```

## `ncl_precache_client_only`

Делает прекеш любых спрайтов и файла `hud.txt` только на клиенте. Работает точно так же как и `ncl_precache_model`
или `ncl_precache_sound`, но не делает прекеш на сервере, а только для игроков с NextClient.

```c title="Сигнатура"
/**
 * @param filepath       Saving path on client (regarding the mod directory)
 * @param ncl_filepath   Downloading path on server (regarding the mod directory)
 *
 * @noreturn
 * @error                If called outside of the plugin_precache() forward, an error is thrown.
 */
native ncl_precache_client_only(const filepath[], const ncl_filepath[]);
```