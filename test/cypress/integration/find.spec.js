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

  it('Find a cocktail in the list', () => {
    cy.get('@testData').then((testData) => {
      cy.wait(2000);
      cy.get('.search').type(testData.findCocktail);
      cy.wait(1000);
      cy.contains('.link > :nth-child(2)', 'Alice in Wonderland');
    });

  });

});
