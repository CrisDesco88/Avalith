import { getGifs } from "../../src/helpers/getGifs";

describe('test en getGif', () => { 

    test('Debe retornar el array de Gifs', async () => { 
        const gifs = await getGifs('Dragon Ball');

        expect(gifs.length).toBeGreaterThan(0);

        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });

     });

 });