# lootably-postback-hash
When implementing Lootably postbacks, you can use a hash variable to ensure the postback is actually being sent by Lootably. Instructions for this can be found on your placement's "Edit" page on the [Lootably Dashboard](https://dashboard.lootably.com/). Alternatively, you can use this module to do all the hashing for you. 

## Installation
```npm i lootably-postback-hash```

## Importing in your project
```js
const { default: lootablyPostbackHash } = require('lootably-postback-hash');
```

## Usage
Pass `userID`, `ip`, `revenue`, `currencyReward`, and `postbackSecret` as strings into the `generateSHA256PostbackHash` function. The returned string is the hash generated.
```js
const generatedHash = lootablyPostbackHash.generateSHA256PostbackHash({
  userID: 'some userID',
  ip: '1.1.1.',
  revenue: '0.01',
  currencyReward: '1',
  // Find your postback secret on your placement's "Edit" page: https://dashboard.lootably.com/placements
  postbackSecret: 'j28eh8ahjsd2hjq8ashd829qyha8sdh2qha8sdhy',
  // OPTIONAL - NOTE: This will log your postbackSecret. Use with caution!
  debug: true,
});

console.log(generatedHash);
```

## Typescript support
Type declaration files are bundled with the node module, so you do not need to install types separately. 

## Questions
Feel free to open an issue or email business@lootably.com. Our team would be happy to help with any issues you may come across!
