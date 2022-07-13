import { getSaludo, getUser } from './functions'

describe('test demo', ()=> {
    test('test 1 - numero igual', ()=>{
        expect(1===1).toBe(true)
    });

    test('test 2 - mensaje igual', ()=>{
        /* Arrange / inicio */
        const message1 = "hola";

        //Act / acciones
        const message2 = message1.trim();

        //Assert/observar el comportamiento esperado
        expect(message1).toBe(message2)
    });

    test('test 3 - get saludo', ()=>{
        const nombre = 'Beto';
        const message = getSaludo(nombre);

        expect(message).toBe(`hola ${nombre}`)

    });

    test('test 4 getUser', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'Agosto1986'
        }
        const user = getUser();

        expect(testUser).toEqual(user)
    })
});