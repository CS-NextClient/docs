---
sidebar_position: 14
---

# `ncl_get_supported_features`

Возвращает поддерживаемые возможности NextClient игрока в зависимости от
его версии.

```c title="Сигнатура"
/**
 * Проверяет какие возможности поддерживает NextClient игрока
 *
 * @param id        Индекс игрока
 *
 * @return          Член перечисления eFeaturesFlags
 */
native eFeaturesFlags:ncl_get_supported_features(id);
```

Список возможностей, которые можно проверить этой функцией:

```c
enum eFeaturesFlags (<<= 1) {
    NCL_FEATURE_CVARS_SANDBOX = 1, 		// песочница кваров
    NCL_FEATURE_VIEWMODEL_FX,			// эффекты для viewmodel
    NCL_FEATURE_PRIVATE_PRECACHE,		// приватный прекеш
    NCL_FEATURE_VERIFICATION,			// верификация клиента
    NCL_FEATURE_HUD_SPRITE,			// HUD спрайты
    NCL_FEATURE_HUD_SPRITE_RENDERMODE,		// Режимы рендеринга HUD спрайтов
    NCL_FEATURE_DEATHMSG_WPN_ICON		// Отображение иконок в киллфиде
}
```