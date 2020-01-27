describe("Test test", () => {
  it("First test", () => {
    expect(true).to.equal(true);
  });
});

describe("Second Test", () => {
  it("Visit the app", () => {
    cy.visit("/public/index.html");
  });
});
