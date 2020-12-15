describe('Home and cocktail filters test', () => {

  beforeEach(() => {
    cy.fixture('testData.json').as('testData');
  });

  it('Load the home page', () => {
    cy.visit('/');
    cy.contains('.filters__title', 'Find your cocktail by some of this parameters');
  });

  it('Categories filter', () => {
    cy.get('@testData').then((testData) => {
      cy.get(':nth-child(1) > .select').select(testData.category);
      cy.contains('.order_container', 'Order by name');
    });
  });

  it('Order the list descending', () => {
    cy.get('@testData').then((testData) => {
      cy.wait(2000);
      cy.get('.order_container > :nth-child(2)').click();
      cy.wait(1000);
      cy.contains(':nth-child(1) > .link > :nth-child(2)', testData.orderVerificator);
    });

  });

});
