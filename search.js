function processHTML(html) {
    html = html.replace(/<head[\s\S]*?>[\s\S]*?<\/head>/gi, '');
    html = html.replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '');
    html = html.replace(/<a\s+[^>]*>([\s\S]*?)<\/a>/gi,
        (_, text) => text.replace(/<[^>]*>/g, '').trim()
    );
    html = html.replace(/<(p|h[1-6]|label)[^>]*>([\s\S]*?)<\/\1>/gi,
        (_, tag, content) => content.replace(/<[^>]*>/g, '').trim() + "\n"
    );
    html = html.replace(/<[^>]*>/g, '');
    return html.replace(/\n{2,}/g, '\n').trim();
}

moudle.exports = { processHTML };
