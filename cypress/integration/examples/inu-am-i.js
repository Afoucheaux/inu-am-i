context('inu-am-i', () => {

  it('Should have a start screen with a default state that if the start link that gets you to the game board', () => {
    cy.seedAndVisitDefault()
    .get('[data-cy=header-box]').should('exist')
    .get('[data-cy=landing-link]').should('exist')
    .get('[data-cy=amie-log]').should('exist')
    .get('[data-cy=site-name]').should('exist')
    .get('[data-cy=tag-line]').should('exist')
    .get('[data-cy=form-page]').should('exist')
    .get('[data-cy=set-name]').should('exist')
    .get('[data-cy=set-num]').should('exist')
    .get('[data-cy=start-button]').click()
    .get('[data-cy=header-box]').should('exist')
    .get('[data-cy=page-styling]').should('exist')
    .get('[data-cy=directions]').should('exist')
    .get('[data-cy=inst]').should('exist')
    .get('[data-cy=get-results]').should('exist')
    .get('[data-cy=game-board]').should('exist')
    .get("[data-cy=card]").should("be.visible").should("have.length", 15)
  })

  it('Should have a start screen that you can input a name and number into then the start link that gets you to the game board with', () => {
    cy.seedAndVisitInput()
    .get('[data-cy=set-name]').clear()
    .get('[data-cy=set-name]').type('Amie').should('have.value', 'Amie')
    .get('[data-cy=set-num]').type('1').clear()
    .get('[data-cy=set-num]').type('1').should('have.value', '1')
    .get('[data-cy=start-button]').click()
    .get('[data-cy=header-box]').should('exist')
    .get('[data-cy=page-styling]').should('exist')
    .get('[data-cy=directions]').should('exist')
    .get('[data-cy=inst]').should('exist')
    .get('[data-cy=get-results]').should('exist')
    .get('[data-cy=game-board]').should('exist')
    .get('[data-cy=card]').should('be.visible').should('have.length', 3)
  })

  it('Should be able to toggle cards on and off and sumit a complete game going to the user screen', () => {
    cy.seedAndVisitInput()
    .get('[data-cy=set-num]').type('1').clear()
    .get('[data-cy=set-num]').type('1').should('have.value', '1')
    .get('[data-cy=start-button]').click()
    .get('[data-cy=card]').first().click()
    .get('[data-cy=card]').first().should('have.class', 'grey-out')

  })

})

  // cy.get("[data-cy=poster]").should("be.visible").should("have.length", 2)
