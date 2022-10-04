import { describe, expect, it } from "vitest";
import groq from "../index.js";

describe("compactGroq", () => {
  it("removes whitespace form `groq` template literal", () => {
    const g = groq`
    *[_type == "post" && !(_id in path("draft.**")) && slug.current == $slug][0] {
      ...,
      "slug": slug.current
    }
  `;

    expect(g).toBe(
      '*[_type == "post" && !(_id in path("draft.**")) && slug.current == $slug][0] { ..., "slug": slug.current }'
    );
  });

  it("preserves whitespace in quoted strings", () => {
    const g = groq`
    *[_type == "post"
      && title == "  An interesting title  "
    ][0]
  `;

    expect(g).toBe(
      '*[_type == "post" && title == "  An interesting title  "][0]'
    );
  });

  it("removes whitespace after a `[]`", () => {
    const g = groq`*[  _type == "post"]`;

    expect(g).toBe('*[_type == "post"]');
  });

  it("removes whitespace before a `]`", () => {
    const g = groq`*[_type == "post"  ]`;

    expect(g).toBe('*[_type == "post"]');
  });

  it("trims whitespace at the begining and end of a `groq` template literal", () => {
    const g = groq`  *[_type == "post"]  `;

    expect(g).toBe('*[_type == "post"]');
  });
});
