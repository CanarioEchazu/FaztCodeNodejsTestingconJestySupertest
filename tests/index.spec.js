import app from '../src/app';
import request from 'supertest';

describe('GET /tasks', () => {
    
    test ('Deberia responder con un codigo de estado 200', async () => {
        const response = await request(app).get('/tasks').send()
        expect(response.statusCode).toBe(200);
    });
});

test('deberia responder con un array', async() => {
    const response = await request(app).get('/tasks').send()
    expect(response.body).toBeInstanceOf(Array);
})