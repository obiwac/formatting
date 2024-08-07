// Usually, you'd want to include this in your package.json file instead of having it in a separate prettier.config.js file.

/* @type (import("prettier").Config) */
const config = {
	printWidth: 120,
	useTabs: true,
	semi: false,
	singleQuote: false,
	quoteProps: "as-needed",
	jsxSingleQuote: false,
	trailingComma: "all",
	bracketSpacing: false,
	bracketSameLine: false,
	arrowParens: "avoid",
	proseWrap: "never",
	endOfLine: "lf",
}
