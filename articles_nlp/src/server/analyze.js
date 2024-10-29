const axios = require("axios");

analyze = async (key, url) => {
    const host = "https://api.meaningcloud.com/sentiment-2.1";

    analysis = await axios.get(`${host}?key=${key}&url=${url}&lang=en`)
        .then(function (res) {
            const { code } = res.data.status;

            if (code == 100) { return handleError(code, "Please enter a valid URL"); }
            else if (code == 212) { return handleError(code, res.data.status.msg); }

            return successResponse(code, res.data);
        });

    return analysis;
};

const handleError = (code, msg) => {
    const error = {
        code: code,
        msg: msg
    };

    return error;
};

const successResponse = (code, data) => {
    const { score_tag, agreement, subjectivity, confidence, irony } = data;
    let sample = {
        score_tag: score_tag,
        agreement: agreement,
        subjectivity: subjectivity,
        confidence: confidence,
        irony: irony
    };

    return { sample, status: code };
};

module.exports = { analyze };
