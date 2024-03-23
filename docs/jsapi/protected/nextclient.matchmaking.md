# `nextclient.matchmaking`

Методы для отправки A2S запросов на игровые сервера с клиента игрока и
для получения и управления листингом избранных серверов и истории

## `getServerInfo`

Позволяет получить информацию об сервере [A2S_INFO](https://developer.valvesoftware.com/wiki/Server_queries#A2S_INFO) 

```ts
interface ServerInfo {
	appId: number,
	gameDir: string,
	gameDesc: string,
	address: string,
	hostname: string,
	map: string,
	playersOnline: number,
	botsOnline: number,
	playersMax: number,
	isPasswordProtected: boolean,
	isVacSecured: boolean,
	unixTimeLastPlayed: number
}
```

```ts title="Сигнатура"
nextclient.matchmaking.getServerInfo(ip: string): Promise<ServerInfo>
```

## `getPlayersInfo`

Позволяет получить список игроков онлайн [A2S_PLAYER](https://developer.valvesoftware.com/wiki/Server_queries#A2S_PLAYER)


```ts
interface ServerPlayer {
	name: string,
	score: number,
	timePlayedSeconds: number
}
```

```ts title="Сигнатура"
nextclient.matchmaking.getPlayersInfo(ip: string): Promise<ServerPlayer[]>
```

## `getRules`

Позволяет получить список кваров и их значений [A2S_RULES](https://developer.valvesoftware.com/wiki/Server_queries#A2S_RULES)

```ts
interface ServerRule {
	rule: string,
	value: string
}
```

```ts title="Сигнатура"
nextclient.matchmaking.getRules(ip: string): Promise<ServerRule[]>
```

## `addFavoriteServer`

Добавляет сервер в избранное сервербраузера игрока

```ts title="Сигнатура"
nextclient.matchmaking.addFavoriteServer(ip: string): void
```

## `removeFavoriteServer`

Удаляет сервер из избранного сервербраузера игрока

```ts title="Сигнатура"
nextclient.matchmaking.removeFavoriteServer(ip: string): void
```

## `getFavoriteServers`

Получает список избранных серверов из сервербраузера игрока

```ts
interface Server {
	address: string,
	info: ServerInfo | null
}
```

```ts title="Сигнатура"
nextclient.matchmaking.getFavoriteServers(): Promise<Server[]>
```

## `getHistoryServers`

Получает список серверов в истории из сервербраузера игрока

```ts title="Сигнатура"
nextclient.matchmaking.getHistoryServers(): Promise<Server[]>
```
