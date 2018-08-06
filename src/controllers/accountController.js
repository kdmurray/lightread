var crypto = require('crypto');

var generateRandomString = function(length) {
    return crypto.randomBytes(length)
        .toString('hex')
        .slice(0,length);
}

var hashPassword = function(password, salt) {
    digest = 'sha512';
    keylen = 128;
    iterations = 100000;

    return crypto.pbkdf2Sync(password, salt, iterations, keylen, digest).toString('hex');
}

var testRun = function() {
    salt = generateRandomString(128);
    pw = generateRandomString(24);
    hash = hashPassword(pw, salt);

    console.log(`Salt: ${salt}`);
    console.log(`Password: ${pw}`);
    console.log(`Hash: ${hash}`);
}

testRun();