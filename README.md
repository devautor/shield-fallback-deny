### This repo is a reproduction of the [issue #298 reported in the github repo of `graphql-shield`](https://github.com/maticzav/graphql-shield/issues/298), meant to be reviewed by team `shield`, specifically against the request of [maticzav](https://github.com/maticzav)

### Steps to reproduce

- Download this repo, and wipe off my sweats from reproduction (of this issue).

- `Prisma` is set up in the demo cloud, with no secret key. Use it directly.

- Mutation request as described below will give `fallbackError` configured in `permissions.ts`.

- This mutation request against server API will throw the error as reported in the github issue #298:

```
mutation {
  createCustomerCartItem(data: {
    quantity: 6
    productVariant: {
      id: "cjsa10iulzdgg0b9701ls0tmy"
    }
  }) {
    code
    success
    message
    cartItem {
      id
      quantity
      createdAt
    }
  }
}
```

- Error received on `console`:

```
Applying permissions middleware...
Server ready at http://localhost:4000/
Server error {"message":"You are not authorised to access these resources!","locations":[{"line":2,"column":3}],"path":["createCustomerCartItem"],"extensions":{"code":"INTERNAL_SERVER_ERROR","exception":{"stacktrace":["Error: You are not authorised to access these resources!","    at Object.<anonymous> (G:\\git_projs\\bug_repro\\shield-fallback-deny\\src\\auth\\permissions.ts:57:20)","    at Module._compile (module.js:652:30)","    at Module.m._compile (G:\\git_projs\\bug_repro\\shield-fallback-deny\\node_modules\\ts-node\\src\\index.ts:439:23)","    at Module._extensions..js (module.js:663:10)","    at Object.require.extensions.(anonymous function) [as .ts] (G:\\git_projs\\bug_repro\\shield-fallback-deny\\node_modules\\ts-node\\src\\index.ts:442:12)","    at Module.load (module.js:565:32)","    at tryModuleLoad (module.js:505:12)","    at Function.Module._load (module.js:497:3)","    at Module.require (module.js:596:17)","    at require (internal/module.js:11:18)"]}}}
```

- **NOte:** An attempt to do same mutation against `Prisma` API directly is successful, so there is no issue there. Mutation request used against `prisma`:

```
# Write your query or mutation here
mutation {
  createCustomerCartItem(data: {
    quantity: 3
    savedForLater: false
    customer: {
      connect: {
        uid: "djagikuacfgadchasdocihascolikahc"
      }
    }
    productVariant: {
      connect: {
        id: "cjsa10iulzdgg0b9701ls0tmy"
      }
    }
  }) {
    id
    quantity
    createdAt
  }
}
```
