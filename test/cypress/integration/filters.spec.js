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

  it('Glasses filter', () => {
    cy.get('@testData').then((testData) => {
      cy.get(':nth-child(2) > .select').select(testData.glass);
      cy.contains('.order_container', 'Order by name');
    });
  });

  it('Ingredients filter', () => {
    cy.get('@testData').then((testData) => {
      cy.get(':nth-child(3) > .select').select(testData.ingredient);
      cy.contains('.order_container', 'Order by name');
    });
  });

  it('Type filter', () => {
    cy.get('@testData').then((testData) => {
      cy.get(':nth-child(4) > .select').select(testData.type);
      cy.contains('.order_container', 'Order by name');
    });
  });

});
