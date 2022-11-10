import { Tex } from "../components/tex";

export default function Home() {
	return (
		<div>
			<h1>csmParse</h1>
			<p>
				csmParse is a small math and CS expression parser written in
				TypeScript.
			</p>
			<Tex
				exp={`int_{0}^{9} frac{sin(dfrac{x^3}{pi})+dfrac{x^3-x^2}{alpha}}{x^2}~~"dx"`}
			/>
			<p>csmParse parses expressions through a three-stage process:</p>
			<ol>
				<li>
					<b>Scanning.</b> A scanner loops over the string, pushing opcodes
					to its output stack. At this stage, the scanner also keeps track
					of bracket counts. Mismatched brackets or unrecognized characters
					will throw errors. Once the scanner has finished, it returns the
					stack of opcodes to the tokenizer.
				</li>
				<li>
					<b>Tokenizing.</b> A tokenizer receives the opcode array, and
					depending on whether the expression is to be evaluated or parsed
					as LaTeX, iterates over the array, generating tokens. Different
					tokens are generated for certain LaTeX expressions. Once the
					tokenizer finishes, it returns an array of tokens to the parser.
				</li>
				<li>
					<b>Parsing.</b> At this point, the expression is ready to be
					parsed. If the expression is to be evaluated, the parser uses a
					simple implementation of the Shunting yard algorithm and an
					output queue. If the expression is to be parsed as LaTeX, the
					tokens' values are concatenated into a single string.
				</li>
			</ol>
			<p>
				Note that csmParse is just a parser. The actual rendering is left
				to the user. The renderings on this page are done with React, but
				renderings can be done natively through the DOM and a LaTeX render
				(e.g., KaTeX or MathJax).
			</p>
			<ul>
				<li>
					<a href={`parsing`}>Parsing Expressions</a>
				</li>
				<li>
					<a href={`evaluating`}>Evaluating Expressions</a>
				</li>
			</ul>
			<p>A <a href={"https://clc-i29ya9onp-ketiboldiais.vercel.app/"} target="_blank">demo calculator can be found here</a>.</p>
		</div>
	);
}
