# escape_html

[![tag](https://img.shields.io/github/tag/ako-deno/escape_html.svg)](https://github.com/ako-deno/escape_html/tags)
![escape_html-ci](https://github.com/ako-deno/escape_html/workflows/escape_html-ci/badge.svg)

Escape string for use in HTML for Deno, compatible with Browser. Based on `https://github.com/component/escape-html`.

## API

```js
import { escapeHtml } from "https://deno.land/x/escape_html/mod.ts";
```

### escapeHtml(string: string): string

Escape special characters in the given string of text, such that it can be
interpolated in HTML content.

This function will escape the following characters: `"`, `'`, `&`, `<`, and
`>`.

**Note** that the escaped value is only suitable for being interpolated into
HTML as the text content of elements in which the tag does not have different
escaping mechanisms (it cannot be placed inside `<style>` or `<script>`, for
example, as those content bodies are not HTML, but CSS and JavaScript,
respectively; these are known as "raw text elements" in the HTML standard).

**Note** when using the escaped value within a tag, it is only suitable as
the value of an attribute, where the value is quoted with either a double
quote character (`"`) or a single quote character (`'`).

## Example

The `escapeHtml` function is designed to accept a string input of text and
return an escaped value to interpolate into HTML.

```js
import { escapeHtml } from "https://deno.land/x/escape_html/mod.ts";

// example values
const desc = "I <b>think</b> this is good.";
const fullName = "John "Johnny" Smith";

// example passing in text into a html attribute
console.dir('<input name="full_name" value="' + escapeHtml(fullName) + '">')
// -> '<input name="full_name" value="John &quot;Johnny&quot; Smith">'

// example passing in text in html body
console.dir('<textarea name="desc">' + escapeHtml(desc) + '</textarea>')
// -> '<textarea name="desc">I &lt;b&gt;think&lt;/b&gt; this is good.</textarea>'
```

# License

[MIT](./LICENSE)
