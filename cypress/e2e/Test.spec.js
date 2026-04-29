describe('ATE Phase-End Project - Cypress E2E', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Scenario 1 - Forms Test', () => {

    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();

    cy.get('ngx-form-layouts', { timeout: 10000 }).should('exist');

    cy.contains('nb-card', 'Horizontal form')
      .should('exist')
      .within(() => {

        cy.get('input[placeholder="Email"]').first().type('test@gmail.com');
        cy.get('input[placeholder="Password"]').first().type('123456');

        cy.get('input[type="checkbox"]').first().check({ force: true });

        cy.contains('button', 'Sign in').click({ force: true });

      });

    cy.contains('Sign in').should('exist');
  });

  it('Scenario 2 - Radio Buttons', () => {

    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();

    cy.get('ngx-form-layouts', { timeout: 10000 }).should('exist');

    cy.contains('nb-card', 'Using the Grid')
      .should('exist')
      .within(() => {

        cy.get('input[type="radio"]').eq(0).check({ force: true });
        cy.get('input[type="radio"]').eq(1).check({ force: true });

        cy.get('input[type="radio"]').eq(0).should('not.be.checked');
        cy.get('input[type="radio"]').eq(2).should('be.disabled');

      });
  });

  it('Scenario 3 - Toastr and Checkboxes', () => {

    cy.contains('Modal & Overlays').click();
    cy.contains('Toastr').click();

    cy.get('ngx-toastr', { timeout: 10000 }).should('exist');

    cy.contains('button', 'Show toast').click();
    cy.get('nb-toast').should('exist');

    cy.get('input[type="checkbox"]').eq(0).check({ force: true });
    cy.get('input[type="checkbox"]').eq(1).check({ force: true });
    cy.get('input[type="checkbox"]').eq(2).check({ force: true });

    cy.get('input[type="checkbox"]').eq(1).click({ force: true });
  });

});