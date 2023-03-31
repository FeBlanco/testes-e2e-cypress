/* eslint-disable cypress/no-unnecessary-waiting */
it("successfully logs in", () => {
  cy.intercept("GET", "**/notes").as("getNotes")

  cy.login(Cypress.env("USER_EMAIL"), Cypress.env("USER_PASSWORD"), {
    cacheSession: false,
  })

  // cy.wait(20000)

  cy.wait("@getNotes")
})
