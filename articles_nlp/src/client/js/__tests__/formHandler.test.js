import { isValidURI } from '../uriValidator.js';

describe('formHandler.js', () => {
    beforeEach(() => {
        // Set up a basic DOM structure
        document.body.innerHTML = `
            <form id="article_url_form">
                <input type="text" id="URI" />
                <div id="error" style="display:none;"></div>
                <div id="loader" style="display:none;"></div>
                <div id="results" style="display:none;"></div>
            </form>
        `;

        require('../formHandler.js');
    });

    test('should set onsubmit event handler on form', () => {
        const form = document.getElementById('article_url_form');
        expect(form.onsubmit).toBeTruthy();
    });
});
