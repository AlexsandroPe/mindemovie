import { formatDate } from "../utils/format_date";

describe("formatDate", () => {
    it("extract year from date string", () => { 
        const date = formatDate("2024-01-12");
        expect(date).toBe("2024")
    });

    it.each([
        null,
        undefined
    ])("returns '--' when date is invalid (%p)", (test) => {
        const res = formatDate(test);
        expect(res).toBe('--');
    });
})
