import { isValidURI } from '../uriValidator';

describe("uriValidator.js", () => {
    test("Validates correct URI format", () => {
        expect(isValidURI("https://example.com")).toBe(true);
        expect(isValidURI("http://example.com")).toBe(true);
        expect(isValidURI("https://www.example.com/path?name=value")).toBe(true);
    });

    test("Rejects incorrect URI format", () => {
        expect(isValidURI("not a uri")).toBe(false);
        expect(isValidURI("ftp://example.com")).toBe(false); // only http and https allowed
        expect(isValidURI("http//example.com")).toBe(false); // missing :
    });
});
