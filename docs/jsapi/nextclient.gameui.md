# `nextclient.gameUi`

Предоставляет интерфейс к взаимодействию с главным меню игры

## `shown`

Возвращает, отображается ли главное меню игрока прямо сейчас

```ts title="Сигнатура"
nextclient.gameUi.shown: boolean
```

## Событие `show`

Вызывается при открытии главного меню

```ts title="Сигнатура"
nextclient.gameUi.addEventListener('show', function() {})
```

## Событие `hide`

Вызывается при закрытии главного меню

```ts title="Сигнатура"
nextclient.gameUi.addEventListener('hide', function() {})
```

# [**Приватные методы**](/docs/category/приватные-методы)

## `optionsDialog.open`

Метод, открывающий меню настроек VGUI с возможностью указать вкладку

```ts title="Сигнатура"
nextclient.gameUi.optionsDialog.open(tabName: 'multiplayer' | 'keyboard' | 'mouse' | 'audio' | 'video' | 'voice' | 'miscellaneous')
```
