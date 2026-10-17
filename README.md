# Blacksmith Legends website

The public website for Blacksmith Legends, served by GitHub Pages at
**https://cemtechuk.github.io/blacksmith-legends/**.

This repo is public. It holds **only the website** — never put any of the game's code, art
sources or notes here. The game's own repo stays private.

## What's here

| File | Page |
|---|---|
| `index.html` | Home: what the game is |
| `faq.html` | Frequently asked questions |
| `changelog.html` | What's changed, newest first: each release, then the fork's history, then Jake's |
| `credits.html` | Jake Lee's Pixel Blacksmith, what's changed, and everyone else's credits |
| `privacy.html` | Privacy policy (the Play Store listing links to this — keep the file name) |
| `style.css` | The look of every page: colours, fonts, the menu, FAQ boxes |
| `logo.png`, `banner.jpg`, `icon.png` | Pictures (`icon.png` is the browser-tab icon) |

Links people can be sent to:

- Home: `https://cemtechuk.github.io/blacksmith-legends/`
- FAQ: `https://cemtechuk.github.io/blacksmith-legends/faq.html`
- A single FAQ section can't be linked yet; ask for anchors if you want that.

## Changing a page

**On github.com (no tools needed):** open the file in the repo, click the pencil icon, edit,
then *Commit changes*. The live site updates in about a minute.

**On your computer:** edit the file in `~/Desktop/Android/blacksmith-legends-site`, check it by
opening it in a browser (`xdg-open faq.html`), then:

```sh
git add -A
git commit -m "Say what you changed"
git push
```

## Adding an FAQ question

In `faq.html`, copy one whole `<details>` block and change the words:

```html
<details>
  <summary>The question goes here?</summary>
  <p>The answer goes here.</p>
</details>
```

Put it inside the `<section>` it belongs to. A new topic is a new `<section>` with an
`<h2>` heading at the top, like the ones already there.

## Adding a release to the changelog

In `changelog.html`, copy the `1.0.0` `<section>` block, paste it **above** it, and change the
heading and the bullet points:

```html
<section>
  <h2>1.1.0 · November 2026</h2>
  <ul>
    <li>What changed, in a player's words.</li>
  </ul>
</section>
```

Keep it in the player's words: what they'll notice, not how it was built.

## Adding a new page

1. Copy an existing page, e.g. `faq.html` → `news.html`.
2. Change its `<title>` and `<meta name="description">` near the top.
3. Replace everything between `</nav>` and `</main>` with the new content.
4. **Add the page to the menu on every page.** Each file has the same `<nav>` block near the
   top; add a line to all of them:

   ```html
   <a href="news.html">News</a>
   ```

   On the new page itself, mark its own link as the current one, so it shows in gold:

   ```html
   <a href="news.html" aria-current="page">News</a>
   ```
5. Commit and push. The page is live at `https://cemtechuk.github.io/blacksmith-legends/news.html`.

## Handy pieces

```html
<h2>A heading</h2>
<p>A paragraph.</p>
<ul>
  <li>A bullet point</li>
</ul>
<a href="https://example.com">A link</a>
<a href="mailto:blacksmithlegendssupport@gmail.com">An email link</a>
<img src="picture.png" alt="What the picture shows" style="max-width:100%">
<section> ... </section>   <!-- one of the dark boxes -->
```

A picture is just a file in this folder: copy it in, then point `src` at its name. Keep pictures
small (under 1 MB) so the site stays fast on phones.

## Rules worth keeping

- **Never rename or delete `privacy.html`** — the Play Store listing points at that address.
- **If the game starts collecting or sending anything new**, update the privacy policy and its
  "Effective" date before that version ships.
- Keep Jake Lee's credit on `credits.html`. The game is built on his MIT-licensed Pixel
  Blacksmith, and the credit is both thanks and part of honouring that licence.
