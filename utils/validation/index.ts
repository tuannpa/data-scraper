const validateUrl = (url?: string) => {
    if (!url) {
        return false;
    }

    try {
        const parsedUrl = new URL(url);
        return parsedUrl.hostname.endsWith('wikipedia.org');
    } catch (e) {
        return false;
    }
}

export {
    validateUrl
};