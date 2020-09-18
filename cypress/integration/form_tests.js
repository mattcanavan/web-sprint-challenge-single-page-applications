describe('Pizza app', () => {
    beforeEach(() => {
        // arbitrary code you want running
        // before each test
        cy.visit('http://localhost:3000/pizza')
    })

    
    it('can select pizza size', () => {
        cy.get('[name=pizzaSize]').select('Small')
        cy.get('[name=sauce]').first().check()
        cy.get('[type="checkbox"]').check()
        
        cy.get('input[name=specialInstructions]')
            .should('have.value', '')
            .type('Please drop it on the floor.')
            .should('have.value', 'Please drop it on the floor.')

        cy.get('input[name=fname]')
            .should("have.value", "")
            .type("Andre 3000")
            .should('have.value', 'Andre 3000')

        cy.get('.submitOrder').click()
    })
 
})