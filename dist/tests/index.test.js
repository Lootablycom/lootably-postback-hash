"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
// Entry file we're testing
const index_1 = __importDefault(require("../index"));
describe('generateSHA256PostbackHash function', () => {
    test('Returns the correct hash', () => {
        const data = {
            userID: 'some userID',
            ip: 'some ip',
            revenue: '0.01',
            currencyReward: '1',
            postbackSecret: 'j28eh8ahjsd2hjq8ashd829qyha8sdh2qha8sdhy',
        };
        // Create the expected hash
        const expectedHash = crypto_1.default.createHash('sha256').update(`${data.userID}${data.ip}${data.revenue}${data.currencyReward}${data.postbackSecret}`).digest('hex');
        // Generate a has with the index function
        const generatedHash = index_1.default.generateSHA256PostbackHash(data);
        expect(typeof generatedHash).toBe('string');
        expect(generatedHash).toBe(expectedHash);
    });
});
