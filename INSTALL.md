# Install CovePilot

Download the DMG from the [latest prerelease](https://github.com/DenisMyagikov/CovePilot-Download/releases/tag/v0.9.0-beta.2).

## Verify the download

Expected file:

```text
CovePilot-0.9.0-beta.2-macOS-arm64.dmg
```

Expected SHA-256:

```text
6715b40ba6dce8738aad527781fbc9c86bb85d74a46f017be3c0c81a6f2f9d40
```

Run:

```bash
shasum -a 256 CovePilot-0.9.0-beta.2-macOS-arm64.dmg
```

The printed hash must match the value above before you install.

## Install

1. Open the DMG.
2. Drag `CovePilot.app` to Applications.
3. Launch CovePilot from Applications.
4. If macOS blocks the app, open System Settings → Privacy & Security and choose Open Anyway for CovePilot.
5. Confirm the macOS first-launch prompt only if you trust this preview.

Apple explains this approval path here: [Open a Mac app from an unidentified developer](https://support.apple.com/en-us/102445).

Do not disable Gatekeeper and do not apply global security changes.

## Why the warning appears

`0.9.0-beta.2` is ad-hoc signed and not notarized. macOS can verify bundle integrity, but it cannot verify a Developer ID identity for this build. This is expected for the public technical preview.
