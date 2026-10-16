# Firmware 13.52 integration checklist

## Candidate references

- Host collection: https://github.com/eddieygaming/ps4aio
- GoldHEN: https://github.com/GoldHEN/GoldHEN

Review the current upstream repository and identify the documented route for PS4 firmware 13.52. Do not infer support solely from a directory name or a UI selector.

## Before adding upstream assets

- [ ] Confirm the exact 13.52 entry point and expected browser/runtime.
- [ ] Verify the GoldHEN build/version and its documented firmware support.
- [ ] Review the licenses for source, binary and bundled payloads independently.
- [ ] Preserve upstream notices and required attribution.
- [ ] Preserve required relative paths and cache manifest structure.
- [ ] Confirm all referenced assets are served by GitHub Pages.
- [ ] Update any cache manifest if files change.
- [ ] Test static asset loading and navigation before console-side testing.
- [ ] Keep the launch button disabled until the real flow is integrated and validated.
- [ ] Report real errors; never show a success state from a frontend-only mock.

## GitHub Pages limitation

GitHub Pages only serves static files. It cannot run a custom backend or payload receiver. Any feature that requires a listening service needs a separate server, with its own setup and network-security review.
