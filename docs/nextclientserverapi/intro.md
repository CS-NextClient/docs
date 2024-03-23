---
sidebar_position: 0
---

# Обзор

[NextClientServerApi](https://github.com/CS-NextClient/NextClientServerApi) — это модуль для AmxModX, добавляющий поддержку возможностей NextClient
со стороны сервера для языка Pawn и средство верификации клиента.

## Требования для работы модуля
* ReHLDS `v3.10.0.761` и выше
* AmxModX `1.8.0` и выше
* Для Linux: GLIBC `2.19` и выше

## Установка

Для установки модуля на сервер необходимо:
1. Скачать один из релизов модуля на [github](https://github.com/CS-NextClient/NextClientServerApi/releases)
2. Переместить файлы из папки `addons` в архиве в директорию `addons` сервера
3. Если на сервер не будет установлено плагинов, которые будут использовать Server API, то подключить
модуль явно, добавив строку `nextclientapi` в файл `addons/amxmodx/configs/modules.ini`:

```js
;;;
; To enable a module, remove the semi-colon (;) in front of its name.
; If it's not here, simply add it its name, one per line.
; You don't need to write the _amxx part or the file extension.
;;;

mysql
sqlite
reapi

;fun
;engine
;fakemeta
;geoip
;sockets
;regex
;nvault
;hamsandwich

// highlight-next-line-add
nextclientapi
```