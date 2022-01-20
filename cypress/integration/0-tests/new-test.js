describe("Tests", () => {
  it("clicks the button and check title, table", () => {
    cy.visit("http://localhost:3000/");
    cy.get("button").click({ multiple: true });
    cy.reload();
    cy.get("button").should("be.visible");
    cy.get("h2").contains("Order Book");
    cy.get("thead > tr");
    cy.get("tr > td");
  });
});
