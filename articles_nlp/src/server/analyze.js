import fetch from 'node-fetch';

export default async (api_key, url) => {
    const host = 'https://api.meaningcloud.com';
    const parameters = `sentiment-2.1?key=${api_key}&url=${url}&model=general&lang=en`;

    try {
        const res = await fetch(`${host}/${parameters}`);
        const data = await res.json();

        return data;
    }
    catch (error) {
        return error;
    }
};
