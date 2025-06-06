import fs from 'fs';
import markdownit from './src/_includes/util/markdown-it.js'
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { HtmlBasePlugin } from "@11ty/eleventy";


export default async function(eleventyConfig) {
	// Configure Eleventy
    eleventyConfig.addPassthroughCopy({ 'src/_includes/css': 'assets' })
    eleventyConfig.addPassthroughCopy({ 'src/_includes/assets': 'assets' })
    eleventyConfig.addPassthroughCopy({ 'src/_includes/scripts': 'assets' });
    eleventyConfig.addPassthroughCopy({ 'node_modules/govuk-frontend/dist/govuk/assets': 'assets' });

    eleventyConfig.addPlugin(syntaxHighlight);

    //Pull in path prefix if building for GH Pages
    let path = process.env.BASE_PATH || "/";

    console.log('basepath set to '+path)
    //TODO remove when moved to org url
    eleventyConfig.addPlugin(HtmlBasePlugin, {
      baseHref: path
    });

    //switch to GDS markdown by default
    eleventyConfig.setLibrary("md", markdownit());

    //filter for cases not covered by above
    eleventyConfig.addFilter("markdownit", function(value) { return markdownit().render(value || '') });

    eleventyConfig.addFilter("listExampleFiles", function (partialPath) {
      let slash = partialPath.lastIndexOf("/");

      const fullPath = "./src/" + partialPath.substring(0, slash) + "/examples";
      if (!fs.existsSync(fullPath)) {
        return [];
      }

      return fs.readdirSync(fullPath).filter(x => x.endsWith('.json'));
    });

    eleventyConfig.addFilter("exampleFile", function(value, filename='example.json') {
      let slash= value.lastIndexOf('/')
      return '../../' + value.substring(0, slash) + '/examples/' + filename
    });

    eleventyConfig.addFilter("schemaFile", function(value) {
      let slash= value.lastIndexOf('/')
      return '../../' + value.substring(0, slash) + '/schema.json'
    });

    eleventyConfig.addFilter("owners", function (arr=[], match="") {
      return arr?.filter(item => item.data.owners.includes(match))
    });

    eleventyConfig.addFilter("producers", function (arr=[], match="") {
      return arr?.filter(item => item.data.producers.includes(match))
    });

    eleventyConfig.addFilter("consumers", function (arr=[], match="") {
      return arr?.filter(item => item.data.consumers.includes(match))
    });

     eleventyConfig.addFilter("domain", function (arr=[], match="") {
      return arr?.filter(item => item.data.domain.includes(match))
    });

    return {
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        passthroughFileCopy: true,
        dir: {
          // The folder where all your content will live:
          input: 'src',
          output: 'out',
          data: '_data'
        }
      }

};
