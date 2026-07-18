# Установка CovePilot

Скачайте DMG из [последнего prerelease](https://github.com/DenisMyagikov/CovePilot-Download/releases/tag/v0.9.0-beta.2).

## Проверьте download

Ожидаемый файл:

```text
CovePilot-0.9.0-beta.2-macOS-arm64.dmg
```

Ожидаемый SHA-256:

```text
6715b40ba6dce8738aad527781fbc9c86bb85d74a46f017be3c0c81a6f2f9d40
```

Выполните:

```bash
shasum -a 256 CovePilot-0.9.0-beta.2-macOS-arm64.dmg
```

Перед установкой напечатанный hash должен совпасть со значением выше.

## Установка

1. Откройте DMG.
2. Перетащите `CovePilot.app` в Applications.
3. Запустите CovePilot из Applications.
4. Если macOS заблокирует приложение, откройте System Settings → Privacy & Security и нажмите Open Anyway для CovePilot.
5. Подтвердите первый запуск macOS только если вы доверяете этому preview.

Официальное описание Apple: [Open a Mac app from an unidentified developer](https://support.apple.com/en-us/102445).

Не отключайте Gatekeeper и не меняйте системную безопасность глобально.

## Почему появляется предупреждение

`0.9.0-beta.2` подписан ad-hoc и не notarized. macOS может проверить целостность bundle, но не может проверить Developer ID identity для этой сборки. Для public technical preview это ожидаемо.
