Cypress.Commands.add('seedAndVisitDefault', () => {
  cy.intercept('https://pure-hollows-05817.herokuapp.com/http://shibe.online/api/shibes?count=5&urls=true&httpsUrls=true', {fixture:'shibas.js'})
  cy.intercept('https://pure-hollows-05817.herokuapp.com/http://shibe.online/api/cats?count=10&urls=true&httpsUrls=true', {fixture:'cats.js'})
  cy.visit('http://localhost:3000')
})

Cypress.Commands.add('seedAndVisitInput', () => {
  cy.intercept('https://pure-hollows-05817.herokuapp.com/http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true', {fixture:'shibasInput.js'})
  cy.intercept('https://pure-hollows-05817.herokuapp.com/http://shibe.online/api/cats?count=2&urls=true&httpsUrls=true', {fixture:'catsInput.js'})
  cy.visit('http://localhost:3000')
})
