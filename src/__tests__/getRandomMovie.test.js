import { getRandomMovie } from "../services/tmdb_services";
import api from "../services/api";
jest.mock("../services/api"); 

describe("Random component", () => {
    it("Should return a movie", async  () => {
        const resp = {
            data: {
                results: [
                    {id: 1, title: "super-hero"},
                    {id: 2, title: "batman"},
                ]
            }
        }

        jest.spyOn(Math, "random").mockReturnValue(0);
        
        api.get.mockResolvedValue(resp);
        
        const result = await getRandomMovie()

        expect(api.get).toHaveBeenCalled();
        expect(result).toEqual({id: 1, title: "super-hero"})
    });

    it("Should throw error", async () => {
        api.get.mockRejectedValue(new Error);
        await expect(getRandomMovie()).rejects.toThrow();
    })
});