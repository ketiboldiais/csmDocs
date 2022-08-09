import TeX from "@matejmazur/react-katex";
import { Csm } from "../parser/index";

export function Tex({ exp }) {
	const str = Csm.latexify(exp);
	return <TeX math={str} block={true} />;
}
