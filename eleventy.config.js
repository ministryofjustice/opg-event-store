import markdownit from './src/_includes/util/markdown-it.js'
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default async function(eleventyConfig) {
	// Configure Eleventy
    eleventyConfig.addPassthroughCopy({ 'src/_includes/css': 'assets' })
    eleventyConfig.addPassthroughCopy({ 'src/_includes/assets': 'assets' })
    eleventyConfig.addPassthroughCopy({ 'src/_includes/scripts': 'assets' });

    eleventyConfig.addPlugin(syntaxHighlight);

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