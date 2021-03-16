import crypto from 'crypto';

export default {
  generateSHA256PostbackHash,
}

/**
 * Given a userID, ip, revenue, currencyReward, and postback secret, generate
 * the correct SHA256 postback verification hash and return it.
 */
function generateSHA256PostbackHash(
  {
    userID,
    ip,
    revenue,
    currencyReward,
    postbackSecret,
    debug,
  } : {
    userID: string,
    ip: string,
    revenue: string,
    currencyReward: string,
    postbackSecret: string,
    debug?: true,
  },
): string {
  // Put all the variables together
  const preHashString = `${userID}${ip}${revenue}${currencyReward}${postbackSecret}`;

  if(debug) console.log(`lootably-postback-hash: Pre hash string: ${preHashString}`);

  // Generate a sha256 hash of the preHashString using the crypto module
  const generatedHash = crypto.createHash('sha256').update(preHashString).digest('hex');

  if(debug) console.log(`lootably-postback-hash: Generated hash: ${generatedHash}`);

  return generatedHash;
}