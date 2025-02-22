import a from "npm:@11ty/eleventy"

export default async function (eleventyConfig) {
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.addPassthroughCopy("src/audio");
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/fonts");
    eleventyConfig.addPassthroughCopy("src/ico");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/scss");
    eleventyConfig.addPassthroughCopy("src/videos");
    eleventyConfig.addPassthroughCopy("src/process.php");
    eleventyConfig.setOutputDirectory("_site");
};