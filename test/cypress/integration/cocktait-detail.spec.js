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

  it('Get cocktail detail', () => {
    cy.get('@testData').then((testData) => {
      cy.wait(2000);
      cy.get('#\\31 5300 > .container_list_item > .link > :nth-child(2)').click();
      cy.contains(':nth-child(2) > span', testData.detailVerificator);
    });
  });

});
