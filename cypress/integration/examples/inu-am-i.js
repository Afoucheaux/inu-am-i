context('inu-am-i', () => {

  it('Should have a loading message.', () => {
    cy.visit('http://localhost:3000')
    .get('[data-cy=start-button]').click()
    .get('[data-cy=loading]').contains('Loading....')
  })

  it('Should have a default error page for bad url paths that links you back to the start screen', () => {
    cy.visit('http://localhost:3000/bad')
    .get('[data-cy=header-box]').should('exist')
    .get('[data-cy=error-layout]').should('exist')
    .get('[data-cy=how]').contains('Opp How did we end up here')
    .get('[data-cy=head-back]').click()
    .get('[data-cy=form-page]').should('exist')
  })

  it("Should display an error message for a 500 server status", () => {
    cy.intercept(
      {
        method: "GET",
        url: 'https://pure-hollows-05817.herokuapp.com/http://shibe.online/api/shibes?count=5&urls=true&httpsUrls=true'
      },{
        statusCode: 500,
        message: "Something went wrong"
      }
    )
    cy.intercept(
      {
        method: "GET",
        url: 'https://pure-hollows-05817.herokuapp.com/http://shibe.online/api/cats?count=10&urls=true&httpsUrls=true'
      },{
        statusCode: 500,
        message: "Something went wrong"
      }
    )
    cy.visit('http://localhost:3000')
    .get('[data-cy=start-button]').click()
    .get('[data-cy=error-message]').contains('There was an issue, please refreash and try again.')
  })

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
    .get('[data-cy=set-name]').clear()
    .get('[data-cy=set-name]').type('Amie').should('have.value', 'Amie')
    .get('[data-cy=set-num]').clear()
    .get('[data-cy=set-num]').type('1').should('have.value', '1')
    .get('[data-cy=start-button]').click()
    .get('.grey-out').should('not.exist')
    .get('[data-cy=card]').first().click()
    .get('.grey-out').should('exist')
    .get('[data-cy=card]').first().click()
    .get('.grey-out').should('not.exist')
    .get('[data-cy=card]').should('have.length', 3)
    .get('[data-cy=inst]').contains('Amie click on all the images of Shibas and then submit to see how you did!')
    .get('[data-cy=get-results]').contains('submit').click()
  })

  it('Should be able to submit a game to view current and past round info.', () => {
    cy.seedAndVisitInput()
    cy.getToPlayerView()
    .get('[data-cy=header-box]').should('exist')
    .get('[data-cy=button-box]').should('exist')
    .get('[data-cy=quick]').contains('Quick Game')
    .get('[data-cy=left]').should('exist')
    .get('[data-cy=opps]').contains('Opps!')
    .get('[data-cy=answer-card]').should('have.length', '3')
    .get('[data-cy=right]').should('exist')
    .get('[data-cy=player-rounds]').contains("Amie's Page")
    .get('[data-cy=score-card]').should('have.length', '1').contains('Round: 1')
    .get('[data-cy=click-to-view]').contains("Click to view round")
  })

  it('Should be able to start a new defalt round from player view, then save and view multiple differnt rounds on the player view', () => {
    cy.seedAndVisitInput()
    cy.getToPlayerView()
    .get('[data-cy=answer-card]').should('have.length', '3')
    .get('[data-cy=quick]').click()
    .get('[data-cy=card]').should('have.length', '15')
    .get('[data-cy=get-results]').click()
    .get('[data-cy=score-card]').should('have.length', '2')
    .get('[data-cy=score-card]').first().click()
    .get('[data-cy=answer-card]').should('have.length', '3')
  })

  it('Should be able to start fresh from any screen', () => {
    cy.seedAndVisitInput()
    cy.getToPlayerView()
    .get('[data-cy=start-fresh]').click()
    .get('[data-cy=start-button]').click()
    .get('[data-cy=start-fresh]').click()
  })

})
  // .get('[data-cy=got]').contains('Got 67% Right!')
  // .get('[data-cy=answer-card]').should('have.length', '15')
