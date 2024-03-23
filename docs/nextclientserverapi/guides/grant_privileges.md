# NextClient как гарантия

Возможности безопасности NextClient позволяют предоставлять некоторые гарантии
для игрового сервера со стороны игрока, который использует этот клиент.

## Предоставление привилегий

Вероятно, вы захотите распространить NextClient среди игроков своего сервера, чтобы
предоставить им же больше возможностей и более качественный опыт от игры на вашем сервере.
Поэтому, для этого нужно как-то стимулировать игроков закачивать этот клиент и играть с него.
Обычно для этого устраивают кампании по предоставлению привилегий для игроков, которые
играют с NextClient.

Единственным надежным способом определить, играет ли игрок с NextClient, является использование
функции [`ncl_is_using_nextclient`](../ncl_is_using_nextclient) с флагом `NCL_USING_VERIFICATED`:

Пример выдачи VIP флага для игроков с NextClient:
```c title="ncl_grant_vip.sma" showLineNumbers
#include <amxmodx>
#include <next_client_api>

new const VIP_FLAGS[] = "f"; // вип флаги, которые мы предоставляем

public ncl_client_api_ready(id) {
	// Проверяем, что игрок зашел на сервер с верифицированным клиентом
	if(ncl_is_using_nextclient(id) == NCL_USING_VERIFICATED)
		set_user_flags(id, read_flags(VIP_FLAGS));
}
```

## Защита от читов

Более того NextClient можно использовать как гарантию того, что игрок вряд ли играет с читами.
Дело в том что из-за архитектурных особенностей NextClient, *на нем перестают работать около 95% читов*.
В связи эти получается, что шансы того, что игрок на NextClient играет без читов на много выше даже по 
сравнению с игроком, который играет на steam-версии игры.

Этот очень полезный признак можно взять на вооружение для серверов с высоким уровнем читерства: игроки
ничего не потеряют, если перейдут на более современныйи обновляемый клиент игры, а админы приобретут
инструменты анализа игроков на риск использования читов, что приведет к снижению числа ложных банов
добросовестных игроков, так как факт использование NextClient игроком будет весом поводом для администратора, 
чтобы усомниться в нечестности игрока.

Пример плагина на просмотр списка игроков с NextClient:
```c title="ncl_view_players.sma" showLineNumbers
#include <amxmodx>
#include <next_client_api>

public plugin_init() {
	register_clcmd("ncl_players", "clcmd_ncl_players");
	register_clcmd("say /ncl_players", "clcmd_ncl_players");
}

public clcmd_ncl_players(id) {
	new menu = menu_create("\yСписок игроков с NextClient", "menu_handle_ncl_players");

	for(new i = 1, eNclUsing:type, version[3]; i <= MaxClients; i++) {
		if(!is_user_connected(i)) continue;

		type = ncl_is_using_nextclient(i);
		if(type == NCL_NOT_USING) continue;

		ncl_get_nextclient_version(i, version[0], version[1], version[2]);
		menu_additem(menu, fmt("%n \r[\w%d.%d.%d\r] %s", i, version[0], version[1], version[2], type == NCL_USING_VERIFICATED ? "\y[вериф.]" : ""))
	}

	menu_setprop(menu, MPROP_EXITNAME, fmt("%L", id, "EXIT"));
	menu_setprop(menu, MPROP_NEXTNAME, fmt("%L", id, "MORE"));
	menu_setprop(menu, MPROP_BACKNAME, fmt("%L", id, "BACK"));

	if(menu_items(menu)) menu_display(id, menu);
	else {
		client_print(id, print_chat, "*** На сервере нет игроков с NextClient");
		menu_destroy(menu);
	}

	return PLUGIN_HANDLED;
}

public menu_handle_ncl_players(id, menu, item) {
	menu_destroy(menu);
}
```

После этого, используя команду `/ncl_players` в чате или `ncl_players` в консоли откроется меню с игроками,
которые используют NextClient, а на против верифицированных игроков будет указан постфикс `[вериф.]`.
Игрокам с таким постфиксом можно точно верить, что они используют NextClient.