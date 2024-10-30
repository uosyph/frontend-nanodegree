export function isValidURI(uri) {
    // Regular expression to validate URI format
    const uriPattern = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-._~:\/?#[\]@!$&'()*+,;=]*)?$/;
    return uriPattern.test(uri);
}
