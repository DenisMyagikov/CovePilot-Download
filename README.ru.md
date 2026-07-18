# CovePilot

[English](README.md) · [Установка](INSTALL.ru.md) · [Приватность](PRIVACY.md) · [Безопасность](SECURITY.md)

![Компактный остров CovePilot](docs/assets/images/compact-island.png)

CovePilot — приложение для macOS с компактным островом вокруг выреза экрана и маленьким спутником по имени Кови. Он показывает текущую активность и полезный контекст, не перегружая строку меню.


## Public Technical Preview

- Версия: `0.9.0-beta.2`
- Build: `9002`
- Архитектура: Apple silicon `arm64`
- Минимальная macOS: `14.0`
- Подпись: ad-hoc
- Нотаризация: не отправлялась
- Ожидаемое поведение Gatekeeper: блокировка до ручного подтверждения

Скачать: [CovePilot-0.9.0-beta.2-macOS-arm64.dmg](https://github.com/DenisMyagikov/CovePilot-Download/releases/download/v0.9.0-beta.2/CovePilot-0.9.0-beta.2-macOS-arm64.dmg)

SHA-256:

```text
6715b40ba6dce8738aad527781fbc9c86bb85d74a46f017be3c0c81a6f2f9d40
```

## Что входит

- Компактный notch-aware island для MacBook и стандартный fallback для экранов без чёлки.
- Кови с production-скинами, аксессуарами и реакциями на активность.
- Компактное отображение Codex work, таймера, Apple Music, погоды, времени суток и аудиовыхода.
- Cove Studio для языка, звуков, скинов Кови, аксессуаров, ambient-поведения и локальной Мастерской Кови.
- Локальный импорт/экспорт `.coviskin` со строгой проверкой. Файлы не могут содержать scripts, Swift-код, plugins или remote URLs.
- Управление Apple Music через публичные Apple Events после явного подключения пользователем.
- Погода через Open-Meteo после разрешения геолокации или ручного выбора города.
- Переключение аудиовыхода через публичные CoreAudio API.
- Интерфейс на русском и английском.

