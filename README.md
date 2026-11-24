# Bhashitha Kotramada Aiyappa — personal website

A static one-page site (plain HTML, CSS and a little JavaScript, no build step).

```
index.html        page content
css/style.css     all styling
js/main.js        small extras: active nav link, scroll fade-in, Esc closes the graphs
images/           photos and thesis graphs
```

## Publish on GitHub Pages

1. Create a new repository on GitHub. Name it `<your-username>.github.io` if you want the site at `https://<your-username>.github.io`; any other name puts it at `https://<your-username>.github.io/<repo-name>/`.
2. Upload everything in this folder (keep the `css`, `js` and `images` folders as they are): **Add file → Upload files**, drag the files in, then **Commit changes**.
3. Go to **Settings → Pages**. Under *Build and deployment*, set **Source** to *Deploy from a branch*, choose the `main` branch and the `/ (root)` folder, then **Save**.
4. After a minute or two the site's address appears at the top of the Pages settings.

## Editing

- Text: edit `index.html`.
- Colours and fonts: change the variables at the top of `css/style.css` (`--paper`, `--ink`, `--amber`, …).
- Images: replace a file in `images/` with one of the same name, or update the `src` in `index.html`.
