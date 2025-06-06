import MarkdownIt from 'markdown-it'
import anchor from 'markdown-it-anchor'
import govuk from 'markdown-it-govuk'
import abbr from  'markdown-it-abbr'
import highlight from 'markdown-it-govuk/highlight'
/* borrowed from https://github.com/x-govuk/govuk-eleventy-plugin but modified to use imports license below 

The MIT License

Copyright (c) 2022 X-GOVUK
Copyright (c) 2019 Paul Robert Lloyd
Copyright (c) 2014 Crown Copyright (Government Digital Service)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

/**
 * Configure markdown-it
 *
 * @see {@link https://markdown-it.github.io/markdown-it/}
 * @param {object} [options] - Plugin options
 * @returns {Function} markdown-it instance
 */
export default (options = {}) => {
  const opts = {
    breaks: true,
    highlight: highlight,
    html: true,
    linkify: false,
    typographer: true
  }

  const md = new MarkdownIt(opts)
    .use(govuk, {
      headingsStartWith: 'xl',
      calvert: true
    })
    .use(abbr)
    .use(anchor, {
      permalink: options.headingPermalinks
        ? anchor.permalink.headerLink({
            class: 'app-link--heading',
            safariReaderFix: true
          })
        : false
    })
    /* .use(require('markdown-it-deflist'))
    .use(require('./markdown-it/deflist.js'))
    .use(require('markdown-it-footnote'))
    .use(require('./markdown-it/footnote.js'))
    .use(require('markdown-it-ins'))
    .use(require('markdown-it-image-figures'), {
      figcaption: true
    })
    .use(require('markdown-it-mark'))
    .use(require('markdown-it-sub'))
    .use(require('markdown-it-sup'))
    .use(require('./markdown-it/table.js'))
    .use(require('markdown-it-table-of-contents'), {
      includeLevel: [2, 3]
    })
    .use(require('./markdown-it/table-of-contents.js')) */

  return md
}