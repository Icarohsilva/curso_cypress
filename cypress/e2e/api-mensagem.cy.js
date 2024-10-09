describe('Api Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NTgyZjUyZS02MjU5LTQ2NzEtOWQzMC04YThhMGUyMmY4NGQiLCJhZG9wdGVyTmFtZSI6IsONY2FybyBTaWx2YSIsImlhdCI6MTcyODUxMTk4MSwiZXhwIjoxNzI4NzcxMTgxfQ.u3eJ6TVvN9mXTIWCNiZXhvQt6ZooUEMJjuS6EXSaGwc`

 it('Mensagens da API', () => {
        cy.request({
         method: 'GET' ,
         url: 'https://adopet-api-i8qu.onrender.com/mensagem/8582f52e-6259-4671-9d30-8a8a0e22f84d',
         headers: { authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
    })
    
 })
})