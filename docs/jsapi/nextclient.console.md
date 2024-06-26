# `nextclient.console`

Предоставляет интерфейс к взаимодействию с консолью интерфейса игры

## Событие `message`

Вызывается при появлении нового сообщения в консоль. При появлении в консоли
цветного сообщения, отраженного из чата игры, событие не вызывается

Аргументы коллбека:
* `detail.message` — сообщение, которое отобразилось в консоли. Не каждое сообщение
может содержать перенос строки

[**Приватные методы**](/docs/category/приватные-методы):
* `event.preventDefault()` — при вызове блокирует вывод сообщения в консоль

```ts title="Сигнатура"
nextclient.console.addEventListener(
	'message', 
	function(event: { detail: { message: string } }) {}
)
```