const withMdx = require("@next/mdx")({
	extension: /\.mdx?$/,
});

// const nextConfig = {
// 	reactStrictMode: true,
// 	swcMinify: true,
// };

module.exports = withMdx({
	pageExtensions: ["js", "jsx", "mdx"],
});
