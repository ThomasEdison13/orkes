export function truncateText(text, maxWords) {
    const words = text.split(' ');

    if (words.length <= maxWords) {
        return text;
    }

    const truncatedText = words.slice(0, maxWords).join(' ');
    return truncatedText + '...';
}