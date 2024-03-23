---
sidebar_position: 12
---


# `ncl_is_using_nextclient`

Возвращает статус использования NextClient у игрока.

```c title="Сигнатура"
/**
 * @param id    Индекс игрока
 *
 * @return      Член перечисления eNclUsing
 */
native eNclUsing:ncl_is_using_nextclient(id);
```

Возможные значения, которые вернет функция:

```c 
enum eNclUsing {
    NCL_NOT_USING,		// Игрок не использует NextClient
    NCL_DECLARE_USING,		// У игрока есть _ncl тег в setinfo, вероятно старая версия
    NCL_USING_VERIFICATED	// Модуль подтвердил что игрок использует NextClient
}
```

:::danger 
`NCL_DECLARE_USING` возвращается при определении у игрока в `setinfo` поле `_ncl`, которое
обычно устанавливают старые версии NextClient, но это не может быть гаранитей того, что игрок
на самом деле использует NextClient.

Предоставлять привилегии игрокам за то что они играют с NextClient можно только если игрок
успешно пройдет верификацию, которую запустит модуль при его подключении к серверу. 
После этого функция вернет `NCL_USING_VERIFICATED` для такого игрока.

Подробнее об том как это сделать в [**этом гайде**](./guides/grant_privileges)
:::