Cypress.Commands.add('seedAndVisitDefault', () => {
  cy.intercept('https://pure-hollows-05817.herokuapp.com/http://shibe.online/api/shibes?count=5&urls=true&httpsUrls=true', {fixture:'shibas.js'})
  cy.intercept('https://pure-hollows-05817.herokuapp.com/http://shibe.online/api/cats?count=10&urls=true&httpsUrls=true', {fixture:'cats.js'})
})
