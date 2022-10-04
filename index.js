import groq from "groq";

/**
 * Remove redundant whitespace from a groq template literal.
 *
 * @returns groq template literal.
 */
const compact_groq = (literals, ...placeholders) =>
  groq(literals, placeholders)
    .replaceAll(/\s{2,}(?=(?:[^"]*"[^"]*")*[^"]*$)/g, " ")
    .replaceAll(/\s](?=(?:[^"]*"[^"]*")*[^"]*$)/g, "]")
    .replaceAll(/\[\s(?=(?:[^"]*"[^"]*")*[^"]*$)/g, "[")
    .trim();

export default compact_groq;
