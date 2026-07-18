# CovePilot

[Русский](README.ru.md) · [Install](INSTALL.md) · [Privacy](PRIVACY.md) · [Security](SECURITY.md)

![CovePilot compact island](docs/assets/images/compact-island.png)

CovePilot is an independent local-first macOS technical preview built around a compact notch-aware island and Covi, a small companion that reflects useful local context without taking over the menu bar.

## Public Technical Preview

- Version: `0.9.0-beta.2`
- Build: `9002`
- Architecture: Apple silicon `arm64`
- Minimum macOS: `14.0`
- Signing: ad-hoc
- Notarization: not submitted
- Expected Gatekeeper result: rejected until manually approved

Download: [CovePilot-0.9.0-beta.2-macOS-arm64.dmg](https://github.com/DenisMyagikov/CovePilot-Download/releases/download/v0.9.0-beta.2/CovePilot-0.9.0-beta.2-macOS-arm64.dmg)

SHA-256:

```text
6715b40ba6dce8738aad527781fbc9c86bb85d74a46f017be3c0c81a6f2f9d40
```

## What is included

- A compact notch-aware island for MacBook displays, with a standard fallback on non-notch screens.
- Covi, a readable companion with production skins, accessories and activity reactions.
- Activity-aware compact presentation for Codex work, timers, Apple Music playback, weather, time-of-day and audio output context.
- Cove Studio for language, sound, Covi skins, accessories, ambient behavior and local Covi Workshop settings.
- Local `.coviskin` import/export with strict validation. Files cannot include scripts, Swift code, plugins or remote URLs.
- Apple Music controls through public Apple Events after explicit user connection.
- Weather through Open-Meteo after location permission or manual city selection.
- Audio output switching through public CoreAudio APIs.
- Russian and English UI.

<img width="517" height="226" alt="image" src="https://github.com/user-attachments/assets/8e0bf4e0-1bb4-4538-8071-56b1dff2d286" />

