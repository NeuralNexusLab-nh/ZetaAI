function search(html) {
    html = html.replace(/<a\s+[^>]*href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gi, (_, href, text) => {
        return `[${text.replace(/<[^>]*>/g, '')}](${href})`;
    });
    html = html.replace(/<(p|h[1-6]|label)[^>]*>(.*?)<\/\1>/gis, (_, tag, content) => {
        return content.replace(/<[^>]*>/g, '').trim() + "\n";
    });
    html = html.replace(/<[^>]*>/g, '');
    return html.replace(/\n{2,}/g, "\n").trim();
}
