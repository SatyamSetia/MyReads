/// <reference types="cypress" />

describe("MyReads a11y testing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("sample test checking page header to be MyReads", () => {
    cy.get(".list-books-title").should("contain.text", "MyReads");
  });

  it("lighthouse accessibility report", () => {
    cy.lighthouse({
        // performance: 85,
        accessibility: 93,
        // "best-practices": 85,
        // seo: 85,
        // pwa: 100,
      });
  });
});
