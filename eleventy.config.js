export default function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addCollection("témoignages", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/témoignages/*.md");
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
}