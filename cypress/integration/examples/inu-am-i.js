context('inu-am-i', () => {

  it('Should be able to link from the landing page to the Galleries page.', () => {
    cy.seedAndVisitDefault()
    cy.visit('http://localhost:3000')
    cy.get('[data-cy=start-button]').click()
  })

})
