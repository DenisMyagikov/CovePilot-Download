# Security

Supported preview version: `0.9.0-beta.2`.

## Reporting vulnerabilities

Please do not post exploit details, secrets or proof-of-concept payloads in public issues. If GitHub Private Vulnerability Reporting is available on this repository, use it. Otherwise open a minimal public issue requesting a private contact path.

Include the CovePilot version, macOS version and a concise reproduction outline. Do not include private Codex task text, Music metadata, device identifiers, coordinates or custom skin files unless explicitly requested through a private channel.

## Release integrity

Verify the SHA-256 checksum before installing:

```text
6715b40ba6dce8738aad527781fbc9c86bb85d74a46f017be3c0c81a6f2f9d40
```

`0.9.0-beta.2` is ad-hoc signed and not notarized. macOS will block first launch until you manually approve the app in System Settings. This is expected for this public technical preview.

## `.coviskin` files

`.coviskin` files are ZIP archives with a versioned manifest and preview image. CovePilot rejects unexpected entries, path traversal, absolute paths, duplicate entries, unsupported entry types, malformed manifests, unsafe visual token values, encrypted entries and remote URLs.

`.coviskin` files cannot contain scripts, Swift code, plugins or remote executable content.
