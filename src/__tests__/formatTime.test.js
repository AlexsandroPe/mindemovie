import { formatTime } from "../utils/format_time";

describe("formatTime", () => {

    it.each([
        null, 
        undefined,
        0
    ])("returns '--' when time is invalid (%p)", (time) => {
        const timeFormatted = formatTime(time);
        expect(timeFormatted).toBe("--");
    });


    it("should return hour only", () => {
        const h = formatTime(120);
        expect(h).toBe("2h");
    });
    
    it("should return minutes only", () => {
        const m = formatTime(53);
        expect(m).toBe("53m")
    });

    it("should return hours and minutes", () => {
        const fullTime = formatTime(139);
        expect(fullTime).toBe("2h 19m");
    });
});