# moboluw4rin.github.io
My Personal Portfolio Website

## Adding a new guide

**1. Create the file**

Make a new file in `resources/` named after the guide, in lowercase with hyphens, e.g. `resources/cv-tips.md`.

**2. Start it with this front matter**

The `---` lines must be the very first thing in the file:

```markdown
---
layout: guide
title: CV Tips for Students
description: One sentence that appears under the title on the Resources page.
permalink: /resources/cv-tips/
---

# CV Tips for Students

*A short subtitle in italics.*

Intro paragraph...

## First section

- A bullet point
- **Bold text** for key terms
```

- `layout: guide` gives it the site header, footer and guide styling.
- `title` is the link text on the Resources page and the browser tab title.
- `description` is the text shown under that link, and it's also used for search and social previews.
- `permalink` sets the URL. Match it to the filename.
- Use `# Heading` once at the top, then `##` for sections and `###` for sub-sections. Tables and `> blockquotes` also have styles ready (the blockquote is the "My take" box).

**3. Preview it locally (optional but recommended)**

```sh
cd /Users/mobolu.olowoyeye/my-website/moboluw4rin.github.io
bundle exec jekyll serve
```

Open http://localhost:4000/resources.html. Your guide should be listed, and the link should open it. Press Ctrl+C to stop the server.

**4. Add it to the sitemap**

`sitemap.xml` is edited by hand. Add this inside `<urlset>`:

```xml
<url>
    <loc>https://moboluolowoyeye.com/resources/cv-tips/</loc>
</url>
```

**5. Commit and push**

```sh
git add resources/cv-tips.md sitemap.xml
git commit -m "feat: add CV tips guide"
git push origin main
```

**6. Check the deploy**

The deploy takes about a minute. You can watch it in the repo's Actions tab, or run `gh run watch`. Then visit `moboluolowoyeye.com/resources/cv-tips/`.

### Things to remember

- The Resources page lists new guides automatically, so you don't edit `resources.html`. Guides appear alphabetically by title.
- A `.md` file with no front matter isn't listed or styled, and Jekyll just copies it as raw text. If a guide is missing from the list, check that the `---` block is at the very top.
- Don't write `{{` or `{%` in a guide, because Jekyll reads them as template code and the build can fail. If you need them, wrap the text in `{% raw %}...{% endraw %}`.
- To hide a half-finished guide, don't push it, or put it on a separate branch. There is no draft mode.
- If a deploy fails, the Actions log names the file and line. Fix it and push again.
