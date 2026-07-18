# Privacy

CovePilot is designed as a local-first macOS app. The compact island, Cove Studio, timer, audio output switching, Codex lifecycle state and custom Covi storage run locally on your Mac.

## Local data

CovePilot stores settings and local state in the app's macOS preferences domain and in Application Support. This can include Cove Studio settings, custom Covi definitions, weather cache data and local app state.

Custom Covi definitions are stored separately from Cove Studio settings. Imported `.coviskin` files are validated on-device and are not uploaded by CovePilot.

## Network use

CovePilot has no product analytics, telemetry service or account system in `0.9.0-beta.2`.

CovePilot may contact:

- Open-Meteo for weather and geocoding after location permission or manual city selection.
- MusicBrainz and Cover Art Archive only if you explicitly enable online artwork loading.

Weather requests can include the selected or approximate weather location. Online artwork lookup can send track title, artist and album metadata to the external services above.

## Apple Music and audio outputs

Apple Music integration uses public Apple Events after you connect it from the Music tab. Audio output switching uses public CoreAudio APIs. CovePilot does not persist or log device UIDs, serial numbers or MAC addresses.

## Website

This public website is static. It does not use analytics, cookies, forms or third-party scripts. GitHub Pages and GitHub Releases are hosted by GitHub and are governed by GitHub's Privacy Statement.

## Delete local data

Quit CovePilot, then remove CovePilot's Application Support folder and macOS preferences for the app. This removes local settings, custom Covi definitions and local cache data.
