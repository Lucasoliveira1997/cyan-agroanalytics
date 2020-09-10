//Teste de Integração

const request = require('supertest')

const app = require('../src/app')

test('Responder na raiz', () => {
    return request(app).get('/')
        .then(res => {
            expect(res.status).toBe(404)
        })
})