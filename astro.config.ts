import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "unocss/astro";
import vue from "@astrojs/vue";
import rehypeMermaid from "rehype-mermaid";

export default defineConfig({
	site: "https://hulxv.vercel.app/",
	server: {
		port: 1977,
	},
	integrations: [
		mdx(),
		sitemap(),
		UnoCSS({
			injectReset: true,
		}),
		vue(),
	],
	markdown: {
		shikiConfig: {
			themes: {
				light: "github-light-default",
				dark: "github-dark-default",
			},
			wrap: true,
		},
		syntaxHighlight: {
			type: "shiki",
			excludeLangs: ["mermaid", "math"],
		},
		rehypePlugins: [[rehypeMermaid, { strategy: "img-svg", colorScheme: "forest" }]],
	},
});
