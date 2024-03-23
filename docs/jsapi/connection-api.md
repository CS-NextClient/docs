# Connection API
Интерфейс, предоставляющий обрабатывать событие подключения/отключения
игрока от сервера и получать информацию о сервере, к которому подключен
игрок

## Событие `connect`
Вызывается при начале подключения к серверу

Аргументы коллбека:
* `detail.address` — адрес сервера, к которому происходит подключение

```ts title="Сигнатура"
nextclient.addEventListener(
	'connect', 
	function(event: { detail: { address: string } }) {}
);
```

## Событие `putinserver`
Вызывается при входе на сервер (после загрузки уровня)

Аргументы коллбека:
* `detail.address` — адрес сервера, на который зашел игрок

```ts title="Сигнатура"
nextclient.addEventListener(
	'putinserver', 
	function(event: { detail: { address: string } }) {}
);
```

## Событие `disconnect`
Вызывается после отключения от сервера

Аргументы коллбека:
* `detail.address` — адрес сервера, от которого отключился игрок

```ts title="Сигнатура"
nextclient.addEventListener(
	'disconnect', 
	function(event: { detail: { address: string } }) {}
);
```

## `connectedHost`
Возвращает объект, описывающий сервер, к которому подключился игрок,
либо `null`, если игрок не подключен к серверу

Описание возвращаемого объекта:
* `address` — адрес сервера, к которому подключился игрок
* `state` — состояние подключения к серверу. `loading`, если происходит
загрузка уровня и `joined`, если игрок вошел в игру
* `players.name` — никнейм игрока
* `players.steamId` — steamid игрока в формате SteamId64. В случае установленного 
мульти-протокола `Reunion` на сервере, пиратские игроки будут получать разный steamid
каждое подключение к серверу. Это связано давним багом в этом модуле
* `players.isInSteamMode` — находится ли игрок в стим режиме. Этот параметр вычисляется
из его steamid и им легко могут манипулировать разные эмуляторы, но чаще всего этот 
параметр соответствует истине.
* `players.isLocalPlayer` — является ли игрок локальным, т.е тем, с клиента которого
происходит доступ к этому объекту

```ts
interface ConnectedHost {
	address: string,
	state: 'loading' | 'joined',
	players: Array<{
		name: string,
		steamId: number,
		isInSteamMode: boolean,
		isLocalPlayer: boolean
	}>
}
```

```ts title="Сигнатура"
nextclient.connectedHost: ConnectedHost | null;
```