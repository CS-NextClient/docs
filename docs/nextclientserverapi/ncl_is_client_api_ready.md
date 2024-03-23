---
sidebar_position: 11
---

# `ncl_is_client_api_ready`

Функция, проверяющая готов ли клиент взаимодействовать с серверным API. Возвращает `true`
после того как был вызван форвард **[ncl_client_api_ready](/docs/nextclientserverapi/ncl_is_client_api_ready)**
по отношению к этому игроку.

```c title="Сигнатура"
/**
 * Проверяет, готов ли игрок с Next Client взаимодействовать с Server API.
 *
 * @param id    Индекс игрока
 *
 * @return      true если готов, иначе false
 */
native bool:ncl_is_client_api_ready(id);
```