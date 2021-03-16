"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
exports.default = {
    generateSHA256PostbackHash,
};
/**
 * Given a userID, ip, revenue, currencyReward, and postback secret, generate
 * the correct SHA256 postback verification hash and return it.
 */
function generateSHA256PostbackHash({ userID, ip, revenue, currencyReward, postbackSecret, debug, }) {
    // Put all the variables together
    const preHashString = `${userID}${ip}${revenue}${currencyReward}${postbackSecret}`;
    if (debug)
        console.log(`lootably-postback-hash: Pre hash string: ${preHashString}`);
    // Generate a sha256 hash of the preHashString using the crypto module
    const generatedHash = crypto_1.default.createHash('sha256').update(preHashString).digest('hex');
    if (debug)
        console.log(`lootably-postback-hash: Generated hash: ${generatedHash}`);
    return generatedHash;
}
