# Frettler website

Static HTML, CSS and images for frettler.app.

## Adding a release

1. Add a new `<article class="card release">` at the top of `changelog.html`,
   above the previous release. Give it a stable ID such as `release-1-5-0`.
2. Move the “Latest release” badge to the new entry. A release date can be
   added beside the version with `<time datetime="2026-10-09">9 October 2026</time>`.
3. Replace the latest-release card at the foot of the right column in
   `index.html` with a short summary and a link to the new version anchor.
4. Update the changelog description's latest version and add the release
   notes to the Changelog section of `llms-full.txt`, newest first.
5. Update the affected pages' `<lastmod>` dates in `sitemap.xml`.

For screenshots, reuse the `release-gallery` figure layout in the first
entry. Store images in `images/`, use descriptive alt text and a caption,
set their original width and height, and link to the image for a full-size
view. Entries and the homepage summary work without JavaScript.

Preview locally with `python3 -m http.server 8765`, then open
`http://localhost:8765/` and `http://localhost:8765/changelog.html`.
