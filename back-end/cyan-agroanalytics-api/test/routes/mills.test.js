const app = require('../../src/app')

const request = require('supertest')

//Get all mills test
test('Get all mills', () => {
    return request(app).get('/mills')
        .then((res) => {
          expect(res.status).toBe(200)
          expect(res.body.length).toBeGreaterThan(0)
        })
})

//Inserting a new Mill
test('Insert a new Mill', () => {
    return request(app).post('/mills')
        .send({ name: 'UsiTeste', harvests: 123 })
        .then((res) => {
            expect(res.status).toBe(201)
        })
})

//Verifying if is there a name setted
test('Cannot insert a mill without a name', async () => {
    const result =  await request(app).post('/mills')
        .send({ harvests: 123 })
    expect(result.status).toBe(400)
    expect(result.body.error).toBe('Error while inserting a new Mill')
})

//Testing an updated method
test('Update for a mill', () => {
    return request(app).put('/mills/2')
        .send({ name: "UsiNovia" })
        .then(res => {
            expect(res.status).toBe(202)
        })
})

