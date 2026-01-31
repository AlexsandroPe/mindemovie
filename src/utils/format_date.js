

export function formatDate(date) {
    if (!date) return "--";
    return date.split('-')[0];
}