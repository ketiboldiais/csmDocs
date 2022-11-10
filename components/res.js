import TeX from "@matejmazur/react-katex";
import { Csm } from "../parser/index";

export function Res({ exp }) {
	const str = Csm.evalLatex(exp);
	return <TeX math={str} block={true} />;
}
