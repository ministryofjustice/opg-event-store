import markdownit from './src/_includes/util/markdown-it.js'
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";


export default async function(eleventyConfig) {
	// Configure Eleventy
    eleventyConfig.addPassthroughCopy({ 'src/_includes/css': 'assets' })
    eleventyConfig.addPassthroughCopy({ 'src/_includes/assets': 'assets' })
    eleventyConfig.addPassthroughCopy({ 'src/_includes/scripts': 'assets' });

    eleventyConfig.addPlugin(syntaxHighlight);

    //Pull in path prefix if building for GH Pages
    //TODO remove when moved to org url
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin, {
      base: process.env.BASE_PATH || eleventyConfig.pathPrefix
    });

    //switch to GDS markdown by default
    eleventyConfig.setLibrary("md", markdownit());

    //filter for cases not covered by above 
    eleventyConfig.addFilter("markdownit", function(value) { return markdownit().render(value || '') });
    

    eleventyConfig.addFilter("exampleFile", function(value) { 
      let slash= value.lastIndexOf('/')
      return '../../' + value.substring(0, slash) + '/examples/example.json'
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