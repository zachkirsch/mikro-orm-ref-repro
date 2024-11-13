# MikroORM repro for Ref with branded primary key

To repro:

```
$ npm install
$ npm run migration:check
...
MetadataError: Entity '{ id: `address-${import("/Users/zach/mikro-orm-ref-repro/src/entities/address.entity").UUID}`; } & import("/Users/zach/mikro-orm-ref-repro/node_modules/@mikro-orm/postgresql/index").Reference<Address & object>' was not discovered, please make sure to provide it in 'entities' array when initializing the ORM (used in Person.homeAddress)
    at Function.fromUnknownEntity (/Users/zach/mikro-orm-ref-repro/node_modules/@mikro-orm/core/errors.js:170:16)
    at /Users/zach/mikro-orm-ref-repro/node_modules/@mikro-orm/core/metadata/MetadataValidator.js:86:46
    at Array.forEach (<anonymous>)
    at /Users/zach/mikro-orm-ref-repro/node_modules/@mikro-orm/core/metadata/MetadataValidator.js:84:67
    at Array.forEach (<anonymous>)
    at MetadataValidator.validateDiscovered (/Users/zach/mikro-orm-ref-repro/node_modules/@mikro-orm/core/metadata/MetadataValidator.js:84:20)
    at /Users/zach/mikro-orm-ref-repro/node_modules/@mikro-orm/core/metadata/MetadataDiscovery.js:143:32
    at async MetadataDiscovery.discover (/Users/zach/mikro-orm-ref-repro/node_modules/@mikro-orm/core/metadata/MetadataDiscovery.js:43:9)
    at async MikroORM.discoverEntities (/Users/zach/mikro-orm-ref-repro/node_modules/@mikro-orm/core/MikroORM.js:177:25)
    at async Function.init (/Users/zach/mikro-orm-ref-repro/node_modules/@mikro-orm/core/MikroORM.js:49:9) {
  entity: undefined
```
