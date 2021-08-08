# @mongodb-helpers/create-url

---

[![Build Status][travis-img]][travis-url]
[![Coverage Status][coverage-img]][coverage-url]
[![NPM version][npm-badge]][npm-url]
![Code Size][code-size-badge]
[![License][license-badge]][license-url]

<!-- ***************** -->

[travis-img]: https://travis-ci.com/mongodb-helpers/create-url.svg?branch=master
[travis-url]: https://travis-ci.com/mongodb-helpers/create-url
[coverage-img]: https://coveralls.io/repos/github/mongodb-helpers/create-url/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/mongodb-helpers/create-url?branch=master
[npm-badge]: https://img.shields.io/npm/v/@mongodb-helpers/create-url.svg?style=flat
[npm-url]: https://www.npmjs.com/package/@mongodb-helpers/create-url
[license-badge]: https://img.shields.io/badge/license-MIT-green.svg?style=flat
[license-url]: https://github.com/mongodb-helpers/create-url/blob/master/LICENSE
[code-size-badge]: https://img.shields.io/github/languages/code-size/mongodb-helpers/create-url
[pr-welcoming-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat

<!-- ***************** -->

### Simple helper function to generate mongodb url from config object 🎐.

## `Installation`

```bash
# npm
$ npm install @mongodb-helpers/create-url
# yarn
$ yarn add @mongodb-helpers/create-url
```

## `Usage`

This is a practical example of how to use.

```typescript
import { createMongoDbUrl } from "@mongodb-helpers/create-url";

const murl = await createMongoDbUrl({
  username: "imed",
  password: "my-pwd",
  hostname: "my-host.domain.xyz",
  port: 12345,
  database: "my-db",
});

// you can use the url to connect to mongodb through any client.
```

#### License

---

[MIT](LICENSE) &copy; [Imed Jaberi](https://github.com/3imed-jaberi)
