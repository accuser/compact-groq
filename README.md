# compact-groq

Remove redundant whitespace from a groq template literal.

## Installation

Install as a development dependency using your favourite package manager:

```bash
npm install -D @accuser/compact-groq

pnpm add -D @accuser/compact-groq

yarn add -D @accuser/compact-groq
```

## Usage

Import `groq` from `@accuser/compact-groq` instead of `groq`.

Before:

```js
import groq from "groq";

const getPost = async (slug, sanity) => {
  const query = groq`
		*[_type == "post" && !(_id in path("draft.**")) && slug.current == $slug][0] {
			...,
			"slug": slug.current
		}
	`;
  const queryParams = { slug };

  return sanity.fetch(query, queryParams);
};
```

After:

```js
import groq from "@accuser/compact-groq";

const getPost = async (slug, sanity) => {
  const query = groq`
		*[_type == "post" && !(_id in path("draft.**")) && slug.current == $slug][0] {
			...,
			"slug": slug.current
		}
	`;
  const queryParams = { slug };

  return sanity.fetch(query, queryParams);
};
```

## Example

```js
import groq from "groq";

const query = groq`
	*[_type == "post" && !(_id in path("draft.**")) && slug.current == $slug][0] {
		...,
		"slug": slug.current
	}
`; // '\n\t*[_type == "post" && !(_id in path("draft.**")) && slug.current == $slug][0] {\n\t\t...,\n\t\t"slug": slug.current\n\t}\n'
```

```js
import groq from "@accuser/compact-groq";

const query = groq`
	*[_type == "post" && !(_id in path("draft.**")) && slug.current == $slug][0] {
		...,
		"slug": slug.current
	}
`; // '*[_type == "post" && !(_id in path("draft.**")) && slug.current == $slug][0] { ..., "slug": slug.current }'
```
