import crypto from 'crypto';

// Entry file we're testing
import index from '../index';

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
    const expectedHash = crypto.createHash('sha256').update(`${data.userID}${data.ip}${data.revenue}${data.currencyReward}${data.postbackSecret}`).digest('hex');

    // Generate a has with the index function
    const generatedHash = index.generateSHA256PostbackHash(data);

    expect(typeof generatedHash).toBe('string');
    expect(generatedHash).toBe(expectedHash);
  });
}); 