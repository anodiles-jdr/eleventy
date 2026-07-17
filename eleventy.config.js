export default function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    pathPrefix: "/eleventy/",   // 👈 AJOUT
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
}