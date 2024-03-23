---
sidebar_position: 13
---

# `ncl_get_nextclient_version`

Возвращает версию NextClient игрока в нотации, соответствующей SemVer. Эта функция
работает только для NextClient `v2.1.8 и выше`, так как более ранние версии не попадают
под версионирование.

```c title="Сигнатура"
/**
 * @param id        Индекс игра
 * @param major     Мажорная версия
 * @param minor     Минорная версия
 * @param patch     Патч версия
 *
 * @return          true если игрок использует NextClient v2.1.8 и выше, иначе false
 */
native bool:ncl_get_nextclient_version(id, &major = 0, &minor = 0, &patch = 0);
```