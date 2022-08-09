declare class PARSER {
    private tokenLength;
    private queue;
    private stack;
    private tokens;
    private tokenizer;
    out: string;
    previous: any;
    constructor();
    private parse;
    latexify(source: string): string;
    evalLatex(source: string): string;
    eval(source: string): string;
    printStack(): void;
    printTokens(): void;
    printOutputQueue(): void;
}
declare const Csm: PARSER;

declare enum TokenType {
    OP1 = "unary",
    OPL1 = "unaryLogic",
    OP2 = "binary",
    OPL2 = "binaryLogic",
    OP3 = "ternary",
    LPAREN = "paren1",
    RPAREN = "paren2",
    LBRACK = "bracket1",
    RBRACK = "bracket2",
    LBRACE = "brace1",
    RBRACE = "brace2",
    VAR = "variableName",
    SET = "setName",
    FUN = "functionCall",
    FDC = "functionDeclare",
    STRUCT = "structure",
    EOL = "endOfLine",
    PUN = "punctuation",
    COMMA = "comma",
    NUMBER = "number",
    STRING = "string"
}
declare enum Token {
    LPAREN = "(",
    RPAREN = ")",
    LBRACE = "{",
    RBRACE = "}",
    LBRACK = "[",
    RBRACK = "]",
    DOT = ".",
    COMMA = ",",
    BANG = "!",
    SEMICOLON = ";",
    COLON = ":",
    VBAR = "|",
    EQUAL = "equal",
    PLUS = "add",
    MINUS = "minus",
    NEG = "neg",
    STAR = "mul",
    CARET = "pow",
    SLASH = "div",
    MOD = "mod",
    GREATER = "gt",
    LESS = "lt",
    TILDE = "tilde",
    AMPERSAND = "amp",
    DQUOTE = "dquote",
    DOLLAR = "dollar",
    AT = "at",
    HASH = "hash",
    BANG_EQUAL = "neq",
    EQUAL_EQUAL = "eq",
    GREATER_EQUAL = "geq",
    LESS_EQUAL = "leq",
    AND = "and",
    NAND = "nand",
    OR = "or",
    NOT = "not",
    NOR = "nor",
    XOR = "xor",
    XNOR = "xnor",
    IFF = "iff",
    IN = "in",
    WHERE = "where",
    N = "N",
    Z = "Z",
    R = "R",
    SET = "set",
    ARRAY = "array",
    MATRIX = "matrix",
    EOF = "eof",
    NULL = "null",
    TRUE = "true",
    FALSE = "false",
    ERROR = "error"
}
declare type TokenObj = {
    token: Token | string | number;
    type?: TokenType;
    args?: any;
    body?: any;
};

declare type Scan = {
    tokens: TokenObj[];
    containsArrays: boolean;
    containsSets: boolean;
};
declare class SCANNER {
    private current_lexeme;
    private cursor;
    private tokens;
    private length;
    parens: number[];
    brackets: number[];
    braces: number[];
    scanningLatex: boolean;
    constructor();
    scan(source: string, latex: boolean): Scan;
    private string;
    private number;
    private match;
    private advance;
    private isDigit;
    private func;
    private name;
    private isAlpha;
    private skipwhitespace;
    private peek;
    private peekBack;
    private peekNext;
    private makeToken;
    private EOF;
}

declare class TOKENIZER {
    scanner: SCANNER;
    leftBracketCount: number;
    rightBracketCount: number;
    scan: Scan;
    tokenList: TokenObj[];
    tokenLength: number;
    asLatex: boolean;
    init(source: string, latex: boolean): void;
    tokenize(): TokenObj[];
    private clean;
    private tokenizeArrays;
    private makeToken;
    private latexify;
}

export { Csm, PARSER, SCANNER, Scan, TOKENIZER, Token, TokenObj, TokenType };
