import TeX from "@matejmazur/react-katex";
import { Csm } from "../parser/index";

export function Res({ exp }) {
	const str = Csm.evalLatex(exp);
	console.log(str)
	return <TeX math={str} block={true} />;
}
