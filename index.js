function password(str) {

    if (!str || str.length < 8) return false;
    
      const hasUppercase = /[A-Z]/.test(str);
      const hasLowercase = /[a-z]/.test(str);
      const hasNumber = /[0-9]/.test(str);
      const hasSpecialChar = /[!@#$%^&*()|[;,.?":_=+-{}<>']/.test(str);
      
      return hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
      }




      
const { assert }
=
require('chai');
describe("Tests", () => {
it("test", () => {
assert.strictEqual (password("Abcd1234"), true);
assert.strictEqual(password("Abcd123"), false);
assert.strictEqual(password("abcd1234"), false);
assert.strictEqual(password ("AbcdefghijklmnopQRs Tuvwxyz1234567890"), true);
assert.strictEqual(password("ABCD1234"), false);
assert.strictEqual(password("Ab1!@#$%^&* ( )-_+={}[]|\;;?/>.<,"), true); assert.strictEqual(password("! @#$%^&* ( )-_+={}[]|\;;?/>.<,"), false);
});
});