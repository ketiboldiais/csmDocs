class StdLib {
  static InvalidBinaryOp(op) {
    throw new Error(
      `${op} is a binary operand. Expected two operands, but only gone one.`
    );
  }
  static DivideByZero() {
    throw new Error(`Dividing by zero prohibited.`);
  }
  static isNumber(n) {
    return typeof (n === "number") && !isNaN(n);
  }
  static number(n) {
    return this.isNumber(n) ? n : this.NotNumber();
  }
  static isInt(n) {
    return StdLib.isNumber(n) && (n | 0) === n;
  }
  static isArray(n) {
    return Array.isArray(n);
  }
  static emptyArrayError(op) {
    throw new Error(
      `${op ? op : "This operand"} requires a non-empty array.`
    );
  }
  static prohibitedOperand(op, operand) {
    throw new Error(
      `${operand ? operand : "This operand is"} prohibited on ${op ? op : "this operation."} Register a custom function.`
    );
  }
  static NotNumber(op) {
    throw new Error(
      `${op ? op : "This operation"} is only defined on numbers.`
    );
  }
  static NotInteger(op) {
    throw new Error(
      `${op ? op : "This operation"} is only defined on integers.`
    );
  }
  static NotString(op) {
    throw new Error(
      `${op ? op : "This operation"} is only defined on strings.`
    );
  }
  static NotBool(op) {
    throw new Error(
      `${op ? op : "This operation"} is only defined on booleans.`
    );
  }
  static NotArray(op) {
    throw new Error(
      `${op ? op : "This operation"} is only defined on arrays.`
    );
  }
  static NotNumberArray(op) {
    throw new Error(
      `${op ? op : "This operation"} is only defined on arrays of numbers.`
    );
  }
  static NotMatrix(op) {
    throw new Error(
      `Invalid operand: ${op ? op : "This operation"} is only defined on matrices (nested arrays).`
    );
  }
}

class IntOp2 {
  static mod(a, b) {
    if (StdLib.isInt(a) && StdLib.isInt(b)) {
      if (b === 0) {
        return StdLib.prohibitedOperand("mod", "0");
      }
      return a % b;
    } else {
      return StdLib.NotNumber("mod");
    }
  }
}

class Maths {
}
Maths.e = Math.E;
Maths.ln2 = Math.LN2;
Maths.ln10 = Math.LN10;
Maths.log2e = Math.LOG2E;
Maths.pi = Math.PI;
Maths.sqrthalf = Math.SQRT1_2;
Maths.sqrt2 = Math.SQRT2;
Maths.sqrt = (a) => {
  if (StdLib.isNumber(a)) {
    if (a < 0) {
      let r = Math.abs(a);
      let out = Math.sqrt(r);
      return `${out}i`;
    } else {
      return Math.sqrt(a);
    }
  } else {
    return StdLib.NotNumber("square root");
  }
};

class NumCmp {
  static eq(a, b) {
    return StdLib.isNumber(a) && StdLib.isNumber(b) ? a === b : StdLib.NotNumber();
  }
  static neq(a, b) {
    return StdLib.isNumber(a) && StdLib.isNumber(b) ? a !== b : StdLib.NotNumber();
  }
  static gt(a, b) {
    return StdLib.isNumber(a) && StdLib.isNumber(b) ? a > b : StdLib.NotNumber();
  }
  static lt(a, b) {
    return StdLib.isNumber(a) && StdLib.isNumber(b) ? a < b : StdLib.NotNumber();
  }
  static geq(a, b) {
    return StdLib.isNumber(a) && StdLib.isNumber(b) ? a >= b : StdLib.NotNumber();
  }
  static leq(a, b) {
    return StdLib.isNumber(a) && StdLib.isNumber(b) ? a <= b : StdLib.NotNumber();
  }
}

class NumOp2 {
  static add(a, b) {
    return StdLib.isNumber(a) && StdLib.isNumber(b) ? a + b : StdLib.NotNumber();
  }
  static sub(a, b) {
    return StdLib.isNumber(a) && StdLib.isNumber(b) ? a - b : StdLib.NotNumber();
  }
  static mul(a, b) {
    return StdLib.isNumber(a) && StdLib.isNumber(b) ? a * b : StdLib.NotNumber();
  }
  static abs(n) {
    return StdLib.isNumber(n) ? Math.abs(n) : StdLib.NotNumber();
  }
  static div(a, b) {
    return StdLib.isNumber(a) && StdLib.isNumber(b) ? b !== 0 ? a / b : "Undefined" : StdLib.NotNumber();
  }
  static divides(a, b) {
    return this.div(a, b) === 0;
  }
  static pow(a, b) {
    return StdLib.isNumber(a) && StdLib.isNumber(b) ? a ** b : StdLib.NotNumber();
  }
}

class Trig {
  static cos(n) {
    return StdLib.isNumber(n) ? Math.cos(n) : StdLib.NotNumber();
  }
  static sin(n) {
    return StdLib.isNumber(n) ? Math.sin(n) : StdLib.NotNumber();
  }
  static tan(n) {
    return StdLib.isNumber(n) ? Math.tan(n) : StdLib.NotNumber();
  }
  static acos(n) {
    return StdLib.isNumber(n) ? Math.acos(n) : StdLib.NotNumber();
  }
  static acosh(n) {
    return StdLib.isNumber(n) ? Math.acosh(n) : StdLib.NotNumber();
  }
  static asinh(n) {
    return StdLib.isNumber(n) ? Math.asinh(n) : StdLib.NotNumber();
  }
  static asin(n) {
    return StdLib.isNumber(n) ? Math.asin(n) : StdLib.NotNumber();
  }
  static atan(n) {
    return StdLib.isNumber(n) ? Math.atan(n) : StdLib.NotNumber();
  }
  static atanh(n) {
    return StdLib.isNumber(n) ? Math.atanh(n) : StdLib.NotNumber();
  }
  static atan2(a, b) {
    return StdLib.isNumber(a) && StdLib.isNumber(b) ? Math.atan2(a, b) : StdLib.NotNumber();
  }
  static cosh(n) {
    return StdLib.isNumber(n) ? Math.cosh(n) : StdLib.NotNumber();
  }
}

class VectorOp1 {
  static max(array) {
    return StdLib.isArray(array) ? ((array2) => {
      const arrayLength = array2.length;
      if (arrayLength === 0) {
        return StdLib.emptyArrayError("max");
      } else {
        let max = Number.MIN_SAFE_INTEGER;
        for (let i = 0; i < array2.length; i++) {
          if (StdLib.isNumber(array2[i])) {
            max = array2[i] > max ? array2[i] : max;
          } else {
            return StdLib.NotNumber("max");
          }
        }
        return max;
      }
    })(array) : StdLib.NotArray();
  }
  static min(array) {
    return StdLib.isArray(array) ? ((array2) => {
      const arrayLength = array2.length;
      if (arrayLength === 0) {
        return StdLib.emptyArrayError("min");
      } else {
        let min = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < array2.length; i++) {
          if (StdLib.isNumber(array2[i])) {
            min = array2[i] < min ? array2[i] : min;
          } else {
            return StdLib.NotNumber("max");
          }
        }
        return min;
      }
    })(array) : StdLib.NotArray();
  }
}

function vectorAdd(a, b) {
  const aLength = a.length;
  const bLength = b.length;
  let out = a;
  if (aLength !== bLength) {
    throw new RangeError(
      "One vector operand is longer than the other. Vector addition is only defined on vectors of the same length."
    );
  }
  for (let i = 0; i < aLength; i++) {
    out[i] += b[i];
  }
  return out;
}
function matrixAdd(a, b) {
  const aRowCount = a.length;
  const bRowCount = b.length;
  let out = [];
  for (let i = 0; i < aRowCount; i++) {
    let row = [];
    for (let j = 0; j < bRowCount; j++) {
      let x = a[i][j];
      let y = b[i][j];
      if (x && y) {
        let sum = x + y;
        row.push(sum);
      } else {
        throw new Error("Invalid matrix operands.");
      }
    }
    out.push(row);
  }
  return out;
}
function generateTruthValues(vars) {
  const varCount = vars.length;
  let rows = 1 << varCount;
  let results = [];
  for (let i = 0; i < rows; i++) {
    results.push({});
    for (let j = 0; j < varCount; j++) {
      if ((1 << j & i) > 0) {
        results[i][vars[j]] = true;
      } else {
        results[i][vars[j]] = false;
      }
    }
  }
  return results;
}
const lib = {
  cos: (n) => Trig.cos(n),
  sin: (n) => Trig.sin(n),
  tan: (n) => Trig.tan(n),
  acos: (n) => Trig.acos(n),
  acosh: (n) => Trig.acosh(n),
  asinh: (n) => Trig.asinh(n),
  asin: (n) => Trig.asin(n),
  atan: (n) => Trig.atan(n),
  atan2: (n, m) => Trig.atan2(n, m),
  cosh: (n) => Trig.cosh(n),
  add: (a, b) => NumOp2.add(a, b),
  minus: (a, b) => NumOp2.sub(a, b),
  mul: (a, b) => NumOp2.mul(a, b),
  abs: (a) => NumOp2.abs(a),
  div: (a, b) => NumOp2.div(a, b),
  divides: (a, b) => NumOp2.div(a, b),
  pow: (a, b) => NumOp2.pow(a, b),
  sqrt: (a) => Maths.sqrt(a),
  eq: (a, b) => NumCmp.eq(a, b),
  neq: (a, b) => NumCmp.neq(a, b),
  lt: (a, b) => NumCmp.lt(a, b),
  geq: (a, b) => NumCmp.eq(a, b),
  leq: (a, b) => NumCmp.leq(a, b),
  mod: (a, b) => IntOp2.mod(a, b),
  gt: (a, b) => NumCmp.gt(a, b),
  max: (arr) => VectorOp1.max(arr),
  min: (arr) => VectorOp1.min(arr),
  and: (x, y) => x && y,
  or: (x, y) => x || y,
  e: Math.E,
  ln2: Math.LN2,
  ln10: Math.LN10,
  log2e: Math.LOG2E,
  pi: Math.PI,
  sqrt1_2: Math.SQRT1_2,
  sqrt2: Math.SQRT2,
  matrixOperations: {
    add: (a, b) => {
      return a[0].constructor === Array && b[0].constructor === Array ? matrixAdd(a, b) : vectorAdd(a, b);
    }
  },
  generateTruthVars: (vars) => generateTruthValues(vars)
};

const latexBindings = {
  equal: "=",
  add: "+",
  minus: "-",
  neg: "-",
  div: "/",
  mul: "\\cdot",
  pow: "^",
  ast: "*",
  mod: "\\%",
  gt: "\\gt",
  lt: "\\lt",
  neq: "\\ne",
  eq: "\\equiv",
  geq: "\\le",
  leq: "\\leq",
  and: "\\land",
  arcsin: "\\arcsin",
  arccos: "\\arccos",
  arctan: "\\arctan",
  arctg: "\\arctg",
  arcctg: "\\arcctg",
  arg: "\\arg",
  ch: "\\ch",
  cos: "\\cos",
  det: "\\det",
  gcd: "\\gcd",
  inf: "\\inf",
  cosec: "\\cosec",
  cosh: "\\cosh",
  cot: "\\cot",
  cotg: "\\cotg",
  coth: "\\coth",
  csc: "\\csc",
  ctg: "\\ctg",
  cth: "\\cth",
  lim: "\\lim",
  liminf: "\\liminf",
  limsup: "\\limsup",
  max: "\\max",
  deg: "\\deg",
  dim: "\\dim",
  exp: "\\exp",
  hom: "\\hom",
  ker: "\\ker",
  lg: "\\lg",
  ln: "\\ln",
  log: "\\log",
  min: "\\min",
  plim: "\\plim",
  Pr: "\\Pr",
  projlim: "\\projlim",
  sec: "\\sec",
  sin: "\\sin",
  sinh: "\\sinh",
  sh: "\\sh",
  int: "\\int",
  sum: "\\sum",
  tan: "\\tan",
  tanh: "\\tanh",
  sqrt: `\\text{sqrt}`,
  tg: "\\tg",
  th: "\\th",
  P: "\\prod",
  S: "\\sum",
  AA: "\\mathbb{A}",
  BB: "\\mathbb{B}",
  CC: "\\mathbb{C}",
  DD: "\\mathbb{D}",
  EE: "\\mathbb{E}",
  FF: "\\mathbb{F}",
  GG: "\\mathbb{G}",
  HH: "\\mathbb{H}",
  II: "\\mathbb{I}",
  JJ: "\\mathbb{J}",
  KK: "\\mathbb{K}",
  LL: "\\mathbb{L}",
  NN: "\\mathbb{N}",
  MM: "\\mathbb{M}",
  OO: "\\mathbb{O}",
  PP: "\\mathbb{P}",
  QQ: "\\mathbb{Q}",
  RR: "\\mathbb{R}",
  SS: "\\mathbb{S}",
  TT: "\\mathbb{T}",
  UU: "\\mathbb{U}",
  VV: "\\mathbb{V}",
  WW: "\\mathbb{W}",
  XX: "\\mathbb{X}",
  YY: "\\mathbb{Y}",
  ZZ: "\\mathbb{Z}",
  Im: "\\Im",
  text: "\\text",
  aleph: "\\aleph",
  Game: "\\Game",
  approx: "\\approx",
  or: "\\lor",
  not: "\\neg",
  xor: "\\oplus",
  nand: "\\uarr",
  nor: "\\darr",
  xnor: "\\odot",
  iff: "\\iff",
  then: "\\implies",
  all: "\\forall",
  ext: "\\exists",
  langle: "\\langle",
  rangle: "\\rangle",
  frac: "\\frac",
  dfrac: "\\dfrac",
  pm: "\\pm",
  prec: "\\prec",
  preceq: "\\preceq",
  succ: "\\succ",
  succeq: "\\succeq",
  in: "\\in",
  notin: "\\notin",
  therefore: "\\therefore",
  uarr: "\\uparrow",
  darr: "\\downarrow",
  rarr: "\\rightarrow",
  larr: "\\leftarrow",
  harr: "\\leftrightarrow",
  null: "\\varnothing",
  oo: "\\infty",
  sub: "\\subset",
  sup: "\\supset",
  sube: "\\subseteq",
  nsube: "\\nsubseteq",
  Alpha: "\\Alpha",
  alpha: "\\alpha",
  Beta: "\\Beta",
  beta: "\\beta",
  Gamma: "\\Gamma",
  gamma: "\\gamma",
  digamma: "\\digamma",
  vGamma: "\\varGamma",
  Delta: "\\Delta",
  delta: "\\delta",
  vDelta: "\\varDelta",
  Epsilon: "\\Epsilon",
  epsilon: "\\epsilon",
  vepsilon: "\\varepsilon",
  Zeta: "\\Zeta",
  zeta: "\\zeta",
  Eta: "\\Eta",
  eta: "\\eta",
  Theta: "\\Theta",
  theta: "\\theta",
  vTheta: "\\varTheta",
  vtheta: "\\vartheta",
  thetasym: "\\thetasym",
  Iota: "\\Iota",
  iota: "\\iota",
  Kappa: "\\Kappa",
  kappa: "\\Kappa",
  vkappa: "\\varkappa",
  Lambda: "\\Lambda",
  lambda: "\\lambda",
  vLambda: "\\varLambda",
  Mu: "\\Mu",
  mu: "\\mu",
  Nu: "\\Nu",
  nu: "\\nu",
  Xi: "\\Xi",
  xi: "\\xi",
  vXi: "\\varXi",
  Omicron: "\\Omicron",
  omicron: "\\omicron",
  Pi: "\\Pi",
  pi: "\\pi",
  vpi: "\\varpi",
  vPi: "\\varPi",
  Rho: "\\Rho",
  rho: "\\rho",
  vrho: "\\varrho",
  Sigma: "\\Sigma",
  sigma: "\\sigma",
  vsigma: "\\varsigma",
  vSigma: "\\varSigma",
  true: "\\text{true}",
  false: "\\text{false}",
  Tau: "\\Tau",
  tau: "\\tau",
  Upsilon: "\\Upsilon",
  upsilon: "\\upsilon",
  vUpsilon: "\\varUpsilon",
  Phi: "\\Phi",
  phi: "\\phi",
  vPhi: "\\varPhi",
  vphi: "\\varphi",
  Chi: "\\Chi",
  chi: "\\chi",
  Psi: "\\Psi",
  psi: "\\psi",
  vPsi: "\\varPsi",
  Omega: "\\Omega",
  omega: "\\omega",
  vOmega: "\\varOmega"
};

function populateTemplate(strings, ...interps) {
  let string = "";
  for (let i = 0; i < strings.length; i++) {
    string += `${strings[i] || ""}${interps[i] || ""}`;
  }
  return string;
}
function undent(strings, ...interps) {
  let string = populateTemplate(strings, ...interps);
  string = string.replace(/^[\r\n]+/, "").replace(/\s+$/, "");
  const dents = string.match(/^([ \t])*/gm);
  if (!dents || dents.length == 0) {
    return string;
  }
  dents.sort((dent1, dent2) => dent1.length - dent2.length);
  const minDent = dents[0];
  if (!minDent) {
    return string;
  }
  const dedented = string.replace(new RegExp(`^${minDent}`, "gm"), "");
  return dedented;
}
function oneline(strings, ...interps) {
  return populateTemplate(strings, ...interps).replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s+/g, " ");
}
const util = {
  fstring: (str, oneLine = false) => oneLine ? oneline`${str}` : undent`${str}`
};

class node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    const newNode = new node(val);
    if (!this.first) {
      this.first = this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }
  dequeue() {
    if (!this.first)
      return null;
    let temp = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
  peek() {
    return this.first && this.first.val;
  }
  length() {
    return this.size;
  }
  strung() {
    let p = this.first;
    let _string = "[";
    const L = this.length();
    for (let i = 0; i < L; i++) {
      i !== 0 ? _string += "," : "";
      _string += `${p.val}`;
      p = p.next;
    }
    _string += `]`;
    return _string;
  }
  log() {
    const description = `
			struct: queue
			length: ${this.length()}
			methods:
				enqueue(val: any) => this
				dequeue() => this
				peek() => (next val to dequeue)
				length() => (queue's length)
			current:
				${this.strung()}
		`;
    console.log(util.fstring(description));
    return this;
  }
  print() {
    console.log(this.strung());
    return this;
  }
}

var TokenType = /* @__PURE__ */ ((TokenType2) => {
  TokenType2["OP1"] = "unary";
  TokenType2["OPL1"] = "unaryLogic";
  TokenType2["OP2"] = "binary";
  TokenType2["OPL2"] = "binaryLogic";
  TokenType2["OP3"] = "ternary";
  TokenType2["LPAREN"] = "paren1";
  TokenType2["RPAREN"] = "paren2";
  TokenType2["LBRACK"] = "bracket1";
  TokenType2["RBRACK"] = "bracket2";
  TokenType2["LBRACE"] = "brace1";
  TokenType2["RBRACE"] = "brace2";
  TokenType2["VAR"] = "variableName";
  TokenType2["SET"] = "setName";
  TokenType2["FUN"] = "functionCall";
  TokenType2["FDC"] = "functionDeclare";
  TokenType2["STRUCT"] = "structure";
  TokenType2["EOL"] = "endOfLine";
  TokenType2["PUN"] = "punctuation";
  TokenType2["COMMA"] = "comma";
  TokenType2["NUMBER"] = "number";
  TokenType2["STRING"] = "string";
  return TokenType2;
})(TokenType || {});
var Token = /* @__PURE__ */ ((Token2) => {
  Token2["LPAREN"] = "(";
  Token2["RPAREN"] = ")";
  Token2["LBRACE"] = "{";
  Token2["RBRACE"] = "}";
  Token2["LBRACK"] = "[";
  Token2["RBRACK"] = "]";
  Token2["DOT"] = ".";
  Token2["COMMA"] = ",";
  Token2["BANG"] = "!";
  Token2["SEMICOLON"] = ";";
  Token2["COLON"] = ":";
  Token2["VBAR"] = "|";
  Token2["EQUAL"] = "equal";
  Token2["PLUS"] = "add";
  Token2["MINUS"] = "minus";
  Token2["NEG"] = "neg";
  Token2["STAR"] = "mul";
  Token2["CARET"] = "pow";
  Token2["SLASH"] = "div";
  Token2["MOD"] = "mod";
  Token2["GREATER"] = "gt";
  Token2["LESS"] = "lt";
  Token2["TILDE"] = "tilde";
  Token2["AMPERSAND"] = "amp";
  Token2["DQUOTE"] = "dquote";
  Token2["DOLLAR"] = "dollar";
  Token2["AT"] = "at";
  Token2["HASH"] = "hash";
  Token2["BANG_EQUAL"] = "neq";
  Token2["EQUAL_EQUAL"] = "eq";
  Token2["GREATER_EQUAL"] = "geq";
  Token2["LESS_EQUAL"] = "leq";
  Token2["AND"] = "and";
  Token2["NAND"] = "nand";
  Token2["OR"] = "or";
  Token2["NOT"] = "not";
  Token2["NOR"] = "nor";
  Token2["XOR"] = "xor";
  Token2["XNOR"] = "xnor";
  Token2["IFF"] = "iff";
  Token2["IN"] = "in";
  Token2["WHERE"] = "where";
  Token2["N"] = "N";
  Token2["Z"] = "Z";
  Token2["R"] = "R";
  Token2["SET"] = "set";
  Token2["ARRAY"] = "array";
  Token2["MATRIX"] = "matrix";
  Token2["EOF"] = "eof";
  Token2["NULL"] = "null";
  Token2["TRUE"] = "true";
  Token2["FALSE"] = "false";
  Token2["ERROR"] = "error";
  return Token2;
})(Token || {});

const charEncode = {
  " ": -1,
  "\\n": -1,
  "\\t": -1,
  "\\r": -1,
  "!": 33,
  '"': 34,
  "#": 35,
  "$": 36,
  "%": 37,
  "&": 38,
  "'": 39,
  "(": 40,
  ")": 41,
  "*": 42,
  "+": 43,
  ",": 44,
  "-": 45,
  ".": 46,
  "/": 47,
  "0": 48,
  "1": 49,
  "2": 50,
  "3": 51,
  "4": 52,
  "5": 53,
  "6": 54,
  "7": 55,
  "8": 56,
  "9": 57,
  ":": 58,
  ";": 59,
  "<": 60,
  "=": 61,
  ">": 62,
  "?": 63,
  "@": 64,
  "A": 65,
  "B": 66,
  "C": 67,
  "D": 68,
  "E": 69,
  "F": 70,
  "G": 71,
  "H": 72,
  "I": 73,
  "J": 74,
  "K": 75,
  "L": 76,
  "M": 77,
  "N": 78,
  "O": 79,
  "P": 80,
  "Q": 81,
  "R": 82,
  "S": 83,
  "T": 84,
  "U": 85,
  "V": 86,
  "W": 87,
  "X": 88,
  "Y": 89,
  "Z": 90,
  "[": 91,
  "\\": 92,
  "]": 93,
  "^": 94,
  "_": 95,
  "`": 96,
  "a": 97,
  "b": 98,
  "c": 99,
  "d": 100,
  "e": 101,
  "f": 102,
  "g": 103,
  "h": 104,
  "i": 105,
  "j": 106,
  "k": 107,
  "l": 108,
  "m": 109,
  "n": 110,
  "o": 111,
  "p": 112,
  "q": 113,
  "r": 114,
  "s": 115,
  "t": 116,
  "u": 117,
  "v": 118,
  "w": 119,
  "x": 120,
  "y": 121,
  "z": 122,
  "{": 123,
  "|": 124,
  "}": 125,
  "~": 126
};
const encode = (char) => {
  if (char === "") {
    return -1;
  }
  return charEncode[char];
};

class SCANNER {
  constructor() {
    this.current_lexeme;
    this.cursor = 0;
    this.length;
    this.tokens = [];
    this.parens = [0, 0];
    this.brackets = [0, 0];
    this.braces = [0, 0];
    this.scanningLatex;
  }
  scan(source, latex) {
    this.scanningLatex = latex;
    this.current_lexeme = source;
    this.length = source.length;
    let token;
    while (this.cursor < this.length) {
      this.skipwhitespace();
      let char = this.advance();
      if (this.isDigit(char)) {
        token = this.number();
      } else if (this.isAlpha(char)) {
        token = this.name();
      } else {
        switch (char) {
          case '"':
            token = this.string();
            break;
          case "(":
            this.parens[0] += 1;
            token = this.makeToken(Token.LPAREN, TokenType.LPAREN);
            break;
          case "_":
            token = this.makeToken("_", TokenType.PUN);
            break;
          case ")":
            this.parens[1] += 1;
            token = this.makeToken(Token.RPAREN, TokenType.RPAREN);
            break;
          case "{":
            this.braces[0] += 1;
            token = this.makeToken(Token.LBRACE, TokenType.LBRACE);
            break;
          case "}":
            this.braces[1] += 1;
            token = this.makeToken(Token.RBRACE, TokenType.RBRACE);
            break;
          case "[":
            this.brackets[0] += 1;
            token = this.makeToken(Token.LBRACK, TokenType.LBRACK);
            break;
          case "]":
            this.brackets[1] += 1;
            token = this.makeToken(Token.RBRACK, TokenType.RBRACK);
            break;
          case ".":
            token = this.makeToken(Token.DOT, TokenType.PUN);
            break;
          case ",":
            token = this.makeToken(Token.COMMA, TokenType.COMMA);
            break;
          case "|":
            token = this.makeToken(Token.VBAR, TokenType.PUN);
            break;
          case "!":
            token = this.match("=") ? this.makeToken(Token.BANG_EQUAL, TokenType.OP2, 8) : this.makeToken(Token.BANG, TokenType.OP1, 13);
            break;
          case "=":
            token = this.match("=") ? this.makeToken(Token.EQUAL_EQUAL, TokenType.OP2, 8) : this.makeToken(Token.EQUAL, TokenType.OP2, 2);
            break;
          case "<":
            token = this.match("=") ? this.makeToken(Token.LESS_EQUAL, TokenType.OP2, 9) : this.makeToken(Token.LESS, TokenType.OP2, 9);
            break;
          case ">":
            token = this.match("=") ? this.makeToken(Token.GREATER_EQUAL, TokenType.OP2, 9) : this.makeToken(Token.GREATER, TokenType.OP2, 9);
            break;
          case ";":
            token = this.makeToken(Token.SEMICOLON, TokenType.EOL);
            break;
          case "+":
            token = this.makeToken(Token.PLUS, TokenType.OP2, 11);
            break;
          case "%":
            token = this.makeToken(Token.MOD, TokenType.OP2, 12);
            break;
          case "-":
            token = this.makeToken(Token.MINUS, TokenType.OP2, 11);
            break;
          case "*":
            token = this.makeToken(Token.STAR, TokenType.OP2, 12);
            break;
          case "^":
            token = this.makeToken(Token.CARET, TokenType.OP2, 13);
            break;
          case "/":
            token = this.makeToken(Token.SLASH, TokenType.OP2, 12);
            break;
          case "~":
            token = this.makeToken(Token.TILDE, TokenType.OP2, 12);
            break;
          case "&":
            token = this.makeToken(Token.AMPERSAND, TokenType.OP2, 12);
            break;
          case "$":
            token = this.makeToken(Token.DOLLAR, TokenType.OP2, 12);
            break;
          case "@":
            token = this.makeToken(Token.AT, TokenType.OP2, 12);
            break;
          case "#":
            token = this.makeToken(Token.HASH, TokenType.OP2, 12);
            break;
          default:
            continue;
        }
      }
      this.tokens.push(token);
    }
    let Imbalanced;
    ((Imbalanced2) => {
      Imbalanced2[Imbalanced2["parens"] = 0] = "parens";
      Imbalanced2[Imbalanced2["braces"] = 1] = "braces";
      Imbalanced2[Imbalanced2["brackets"] = 2] = "brackets";
      Imbalanced2[Imbalanced2["none"] = 3] = "none";
    })(Imbalanced || (Imbalanced = {}));
    let parensAreZero = this.parens[1] - this.parens[0] === 0;
    let bracketsAreZero = this.brackets[1] - this.brackets[0] === 0;
    let bracesAreZero = this.braces[1] - this.braces[0] === 0;
    let balance = parensAreZero ? bracesAreZero ? bracketsAreZero ? 3 /* none */ : 2 /* brackets */ : 1 /* braces */ : 0 /* parens */;
    switch (balance) {
      case 0 /* parens */:
        throw new Error("Missing parentheses.");
      case 1 /* braces */:
        throw new Error("Missing braces.");
      case 2 /* brackets */:
        throw new Error("Missing brackets.");
      case 3 /* none */:
        break;
      default:
        throw new Error("Something's not right. Problem in switch.");
    }
    let containsArrays = this.brackets[0] > 0;
    let containsSets = this.braces[1] > 0;
    return {
      tokens: this.tokens,
      containsArrays,
      containsSets
    };
  }
  string() {
    let value = "";
    while (this.peek() !== '"' && !this.EOF()) {
      value += this.advance();
    }
    if (this.EOF()) {
      throw new Error("Unterminated string.");
    }
    this.advance();
    return this.makeToken(value, TokenType.STRING);
  }
  number() {
    let value = this.peekBack();
    while (this.peek() && this.isDigit(this.peek())) {
      value += this.advance();
      if (this.peek() == "." && this.isDigit(this.peekNext())) {
        value += this.advance();
        while (this.peek() && this.isDigit(this.peekNext())) {
          value += this.advance();
        }
      }
    }
    return this.makeToken(Number(value), TokenType.NUMBER);
  }
  match(expectedChar) {
    if (this.EOF())
      return false;
    if (this.peek() !== expectedChar)
      return false;
    this.cursor++;
    return true;
  }
  advance() {
    this.cursor++;
    return this.current_lexeme[this.cursor - 1];
  }
  isDigit(char) {
    return encode(char) >= encode("0") && encode(char) <= encode("9");
  }
  func(name) {
    this.advance();
    let parameters = [];
    let type = TokenType.FUN;
    while (this.peek() && this.peek() !== ")") {
      if (this.isAlpha(this.peek())) {
        this.advance();
        parameters.push(this.name());
      } else if (this.isDigit(this.peek())) {
        this.advance();
        parameters.push(this.number());
      } else if (this.peek() === "-" && this.isDigit(this.peekNext())) {
        this.peek();
        this.advance();
        let val = this.number().token;
        parameters.push(this.makeToken(val, TokenType.NUMBER));
      } else {
        this.advance();
      }
    }
    this.advance();
    if (this.peekNext() === "=") {
      type = TokenType.FDC;
      this.cursor += 2;
    }
    return this.makeToken(name, type, parameters);
  }
  name() {
    let value = this.peekBack();
    while (this.peek() && this.isAlpha(this.peek())) {
      value += this.advance();
    }
    if (!this.scanningLatex && this.peek() === "(") {
      return this.func(value);
    }
    switch (value) {
      case "and":
        return this.makeToken(Token.AND, TokenType.OPL2, 4);
      case "nand":
        return this.makeToken(Token.NAND, TokenType.OPL2, 4);
      case "or":
        return this.makeToken(Token.OR, TokenType.OPL2, 3);
      case "not":
        return this.makeToken(Token.NOT, TokenType.OPL1, 14);
      case "nor":
        return this.makeToken(Token.NOR, TokenType.OPL2, 4);
      case "xor":
        return this.makeToken(Token.XOR, TokenType.OPL2, 4);
      case "xnor":
        return this.makeToken(Token.XNOR, TokenType.OPL2, 4);
      case "iff":
        return this.makeToken(Token.IFF, TokenType.OPL2, 4);
      case "in":
        return this.makeToken(Token.IN, TokenType.OPL2, 4);
      default:
        return this.makeToken(value, TokenType.VAR);
    }
  }
  isAlpha(char) {
    const c = encode(char);
    return encode("a") <= c && c <= encode("z") || encode("A") <= c && c <= encode("Z");
  }
  skipwhitespace() {
    if (encode(this.peek()) === -1)
      this.advance();
  }
  peek() {
    return this.current_lexeme[this.cursor];
  }
  peekBack() {
    return this.current_lexeme[this.cursor - 1];
  }
  peekNext() {
    return this.current_lexeme[this.cursor + 1];
  }
  makeToken(token, type, args = null) {
    return args ? { token, type, args } : { token, type };
  }
  EOF() {
    return !(this.cursor < this.length);
  }
}

class TOKENIZER {
  init(source, latex) {
    this.scanner = new SCANNER();
    this.scan = this.scanner.scan(source, latex);
    this.tokenList = this.scan.tokens;
    this.tokenLength = this.tokenList.length;
    this.asLatex = latex;
  }
  tokenize() {
    this.scan.containsArrays && this.tokenizeArrays();
    let tokens = this.asLatex ? this.latexify() : this.clean();
    this.tokenList = tokens;
    return this.tokenList;
  }
  clean() {
    let cleanedTokens = [];
    let n;
    for (n = 0; n < this.tokenList.length; n++) {
      if (n !== 0 && this.tokenList[n].token === Token.LPAREN) {
        if (this.tokenList[n - 1].type === TokenType.NUMBER || this.tokenList[n - 1].type === TokenType.VAR || this.tokenList[n - 1].type === TokenType.VAR || this.tokenList[n - 1].type === TokenType.FUN) {
          let t = this.makeToken(Token.STAR, TokenType.OP2, 12);
          cleanedTokens.push(t);
        }
      }
      if (this.tokenList[n]?.token === Token.MINUS) {
        if (n !== 0 && n < this.tokenList.length && this.tokenList[n + 1].type === TokenType.NUMBER && this.tokenList[n - 1].type !== TokenType.NUMBER && this.tokenList[n - 1].type !== TokenType.VAR && this.tokenList[n - 1].type !== TokenType.FUN) {
          let val = this.tokenList[n + 1].token * -1;
          let t = this.makeToken(val, TokenType.NUMBER);
          cleanedTokens.push(t);
          n += 2;
        } else if (n === 0) {
          let t = this.makeToken(Token.NEG, TokenType.OP1, 15);
          cleanedTokens.push(t);
          n += 1;
        }
      }
      cleanedTokens.push(this.tokenList[n]);
    }
    return cleanedTokens;
  }
  tokenizeArrays() {
    let index = 0;
    const buildList = (tokens) => {
      let arr = [];
      while (index < tokens.length) {
        let c = tokens[index++];
        if (c.token === Token.LBRACK) {
          arr.push(buildList(tokens));
        } else if (c.token === Token.RBRACK) {
          break;
        } else if (c.token === Token.COMMA) ; else if (c.type === TokenType.NUMBER || c.type === TokenType.STRING) {
          arr.push(c.token);
        } else {
          arr.push(c);
        }
      }
      return arr;
    };
    let arraylist = buildList(this.tokenList);
    let newTokens = [];
    let i = 0;
    for (i = 0; i < arraylist.length; i++) {
      if (Array.isArray(arraylist[i])) {
        newTokens.push(
          this.makeToken(Token.ARRAY, TokenType.STRUCT, arraylist[i])
        );
        continue;
      }
      newTokens.push(arraylist[i]);
    }
    this.tokenList = newTokens;
  }
  makeToken(token, type, args = null) {
    return args ? { token, type, args } : { token, type };
  }
  latexify(arr = this.tokenList) {
    let result = arr;
    let i = 0;
    for (i = 0; i < result.length; i++) {
      let token = result[i];
      if (token.token === Token.TILDE) {
        result[i] = this.makeToken("~", TokenType.PUN);
      }
      if (latexBindings[token.token]) {
        result[i] = this.makeToken(
          latexBindings[token.token],
          TokenType.VAR
        );
      }
      if (token.type === TokenType.LPAREN) {
        result[i] = this.makeToken("\\left(", TokenType.PUN);
      }
      if (token.type === TokenType.RPAREN) {
        result[i] = this.makeToken("\\right)", TokenType.PUN);
      }
      if (token.type === TokenType.STRING) {
        result[i] = this.makeToken(
          `\\text{${token.token}}`,
          TokenType.STRING
        );
      }
    }
    return result;
  }
}

class PARSER {
  constructor() {
    this.queue;
    this.stack;
    this.tokenizer = new TOKENIZER();
    this.tokens;
    this.tokenLength = 0;
    this.out;
  }
  parse(source, latex) {
    this.queue = new queue();
    this.tokenizer.init(source, latex);
    this.tokens = this.tokenizer.tokenize();
    this.tokenLength = this.tokens.length;
    this.stack = [];
    const tokenCount = this.tokens.length;
    let i = 0;
    for (i = 0; i < tokenCount; i++) {
      let token = this.tokens[i];
      switch (token.type) {
        case TokenType.STRUCT:
          this.queue.enqueue(token.args);
          break;
        case TokenType.VAR:
          let val = lib[token.token] ? lib[token.token] : token.token;
          this.queue.enqueue(val);
          break;
        case TokenType.NUMBER:
        case TokenType.STRING:
        case TokenType.STRUCT:
          this.queue.enqueue(token);
          break;
        case TokenType.OPL1:
        case TokenType.OP1:
        case TokenType.OP2:
        case TokenType.OPL2:
        case TokenType.OP3: {
          const L = this.stack.length - 1;
          while ((this.stack[L] && this.stack[L].args) >= token.args) {
            this.queue.enqueue(this.stack.pop());
          }
          this.stack.push(token);
          break;
        }
        case TokenType.FUN: {
          let args = [];
          if (lib[token.token]) {
            for (let i2 = 0; i2 < token.args.length; i2++) {
              args.push(token.args[i2].token);
            }
            let result = lib[token.token](args);
            this.queue.enqueue(result);
          }
          break;
        }
        case TokenType.LPAREN: {
          this.stack.push(token);
          break;
        }
        case TokenType.RPAREN: {
          const L = this.stack.length - 1;
          while (this.stack[L] && this.stack[L].type !== TokenType.LPAREN) {
            this.queue.enqueue(this.stack.pop());
          }
          this.stack.pop();
          break;
        }
        case TokenType.LBRACK: {
          this.stack.push(token);
          break;
        }
        case TokenType.RBRACK: {
          const L = this.stack.length - 1;
          while (this.stack[L] && this.stack[L].type !== TokenType.LBRACK) {
            this.queue.enqueue(this.stack.pop());
          }
          this.stack.pop();
          break;
        }
        case TokenType.LBRACE: {
          this.stack.push(token);
          break;
        }
        case TokenType.RBRACE: {
          const L = this.stack.length - 1;
          while (this.stack[L] && this.stack[L]?.type !== TokenType.LBRACE) {
            this.queue.enqueue(this.stack.pop());
          }
          this.stack.pop();
          break;
        }
        case TokenType.EOL: {
          continue;
        }
      }
    }
  }
  latexify(source) {
    this.parse(source, true);
    let latex = "";
    for (let i = 0; i < this.tokenLength; i++) {
      latex += this.tokens[i].token;
    }
    return latex;
  }
  evalLatex(source) {
    let result = this.eval(source);
    let latex = this.latexify(source);
    let out = latex + "=" + result;
    return out;
  }
  eval(source) {
    this.parse(source, false);
    while (this.stack.length > 0) {
      let operator = this.stack.pop();
      this.queue.enqueue(operator);
    }
    let result = [];
    while (this.queue.length() !== 0) {
      let element = this.queue.dequeue();
      switch (element.type) {
        case TokenType.OPL1:
        case TokenType.OPL2: {
          break;
        }
        case TokenType.OP2: {
          let a = result.pop();
          let b = result.pop();
          let c;
          if (Array.isArray(a) && Array.isArray(b)) {
            c = lib.matrixOperations[element.token](a, b);
          } else if (typeof a === "number" && typeof b === "number") {
            c = lib[element.token](b, a);
          } else if (typeof a === "string" && typeof b === "string") {
            c = lib[element.token](b, a);
          } else {
            throw new Error("Invalid operands");
          }
          result.push(c);
          break;
        }
        case TokenType.NUMBER: {
          result.push(element.token);
          break;
        }
        default: {
          result.push(element);
          break;
        }
      }
    }
    this.out = result[0];
    return this.out;
  }
  printStack() {
    console.log(this.stack);
  }
  printTokens() {
    console.log(this.tokens);
  }
  printOutputQueue() {
    this.queue.print();
  }
}
const Csm = new PARSER();

export { Csm, PARSER, SCANNER, TOKENIZER, Token, TokenType };
//# sourceMappingURL=index.mjs.map
