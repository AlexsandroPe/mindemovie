

export function formatTime(minutes) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;

    return `${h}:${m}`;
}

