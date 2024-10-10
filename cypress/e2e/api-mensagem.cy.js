describe('Api Adopet', () => {

    it('Mensagens da API', () => {
        cy.request({
         method: 'GET' ,
         url: 'https://adopet-api-i8qu.onrender.com/mensagem/8582f52e-6259-4671-9d30-8a8a0e22f84d',
         headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })


    it('Nome do perfil', () => {
        cy.request({
            method: 'GET' ,
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/0dd7ead6-eb41-45dd-8a75-03b02285bbe7',
            headers: Cypress.env()
        
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('perfil')
        expect(res.body.perfil.nome).to.be.equal('camila')

        })
    })
})
