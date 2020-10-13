const markdownIt = require('markdown-it')
const pluginTOC = require('eleventy-plugin-toc')
const markdownItAnchor = require('markdown-it-anchor')

let mdOptions = {
    html: true,
    breaks: true,
    linkify: true
};

const mdAnchorOpts = {
    permalink: true,
    permalinkClass: 'anchor-link',
    permalinkSymbol: '#',
    level: [1, 2, 3, 4]
  }

module.exports = eleventyConfig => {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.setLibrary("md", markdownIt(mdOptions)
        .use(markdownItAnchor, mdAnchorOpts));
    eleventyConfig.addPlugin(pluginTOC)
    
};