# ItsSploited Hen Exploit Host

A GitHub Pages-ready, dark-purple neon UI for a PS4 firmware 13.52 host project.

## Current state

This package is a **frontend shell**, not an operational exploit host. The firmware-specific exploit engine and payload files have not been bundled or integrated. The launch button is intentionally disabled so the page does not falsely claim to launch GoldHEN.

## Compatibility references

- Candidate host collection: https://github.com/eddieygaming/ps4aio
- GoldHEN project: https://github.com/GoldHEN/GoldHEN

The candidate collection documents a Relapse/Slopkit route for the 13.02–13.52 range. Verify current upstream source, exact release, binaries, licensing and payload compatibility before integration. A matching firmware label alone is not proof that a payload works.

## Publish on GitHub Pages

1. Download and extract this ZIP.
2. Create a new GitHub repository, e.g. `sploitware-ps4-host`.
3. Upload the contents of this folder to the repository root (make sure `index.html` is at the root).
4. Open **Settings → Pages**.
5. Under Build and deployment, choose **Deploy from a branch**, select the default branch and `/ (root)`, then save.
6. Wait for the Pages URL and check the dashboard on desktop and mobile.

## Layout

- `index.html` — dashboard structure
- `assets__css__main.css` — responsive dark-purple neon styling
- `assets__js__app.js` — navigation and local UI status
- `docs__COMPATIBILITY.md` — upstream integration checklist
- `upstream/relapse/` — reserved for reviewed upstream files

## Integration rules

- Preserve upstream licenses, notices, cache manifests and relative asset paths.
- Keep upstream exploit logic separate from the UI redesign.
- GitHub Pages is static hosting; it cannot run server-side processes or a payload receiver.
- Test the page and asset paths before testing any console-side flow.
- Do not use payloads unless their firmware compatibility is documented and verified.


## Upstream Relapse files added

The upstream `relapse/` directory and root `pstation.png` are stored with their original relative paths. The dashboard links to `relapse__version-selector.html`.

This is an integration staging step, not a verification that the exploit/payload successfully runs on a PS4. Review upstream license/attribution and test page paths first. The custom dashboard's GoldHEN launch button remains disabled.
