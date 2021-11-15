const request = require('supertest');
// import server
const server = require('../../app');

describe('API server', () => {
    let api;
    let testFood = {
        id: 1,
        name: "Pasta",
        origin: "Italy",
    };

    beforeAll(() => {
        // start the server and store it in the api variable
        api = server.listen(5000, () =>
            console.log('Test server running on port 5000')
        );
    });

    afterAll((done) => {
        // close the server, then run done
        console.log('Gracefully stopping test server');
        api.close(done);
    });

    it('responds to get / with status 200', (done) => {
        request(api).get('/').expect(200, done);
    });

    it('responds to get /foods with status 200', (done) => {
        request(api).get('/foods').expect(200, done);
    });

    it('responds to post /foods with status 201', (done) => {
        request(api)
            .post('/foods')
            .send(testFood)
            .set('Accept', /application\/json/)
            .expect(201)
            .expect({ ...testFood }, done);
    });

    it('retrieves a food by id', (done) => {
        request(api)
            .get('/foods/2')
            .expect(200)
            .expect({ id: 2, name: 'Ramen', origin: "Japan" }, done)
    });

    it('respondes to update food with response 200', (done) => {
        request(api)
            .put('/foods/2')
            .send(testFood)
            .set('Accept', /application\/json/)
            .expect(200)
            .expect(testFood, done);
    });

    it('response to delete /foods/:id with status 204', async () => {
        await request(api).delete('/foods/1').expect(204);
        const updatedFoods = await request(api).get('/foods');
        expect(updatedFoods.body.length).toBe(3);
    });
});