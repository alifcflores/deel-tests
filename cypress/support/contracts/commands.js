///<reference types="cypress"/>
const {contractTypes, general, payment, benefitsExtras, compliance} = require('./elements');
const data = require('./data');

class Contracts{

    navigateToPage(){
        cy.visit('/create');
    }

    selectFixedRate(){
        cy.get(contractTypes.fixed).contains('Fixed Rate').click();
    }

    general(){
        cy.get('form').within(()=>{
            cy.get(general.contractName).eq(0).type(data.general.contractName);
            cy.get(general.commonSelector).eq(general.taxResidence).click().type(data.general.taxResidence.UnitedStates).type('{enter}');
            cy.get(general.commonSelector).eq(general.state).click().type(data.general.state.colorado).type('{enter}');
            cy.get(general.jobTitle).type(data.general.jobTitle.backEndDeveloper);
            cy.get(general.jobTitleOption).eq(0).click();
            cy.get(general.commonSelector).eq(general.seniorityLevel).type(data.general.seniorityLevel).type('{enter}');
            cy.get(general.scopeOfWork).click();
            cy.get(general.scopeOfWorkOptions).within(()=>{cy.get('button').eq(3).click()});
            cy.get(general.startDate.input).click();
            cy.get(general.startDate.calendar.container).within(()=>{
                cy.get(general.startDate.calendar.viewDays).contains(data.general.date).click();
            });
        }).submit();
    }

    payment(){
        cy.get('form').within(()=>{
            cy.get(payment.currency).eq(0).click();
            cy.get(payment.currencyOpened).children('div').contains(data.payment.currency.GBP).click();
            cy.get(payment.paymentRate).type(data.payment.paymentRate);
            cy.get(payment.paymentFrequency).eq(1).click();
            cy.get(payment.paymentFrequencyOpened).children('div').contains(data.payment.paymentFrequency.weekly).click();
        }).submit();
    }

    defineDates(){
        cy.get('form').submit();
    }

    BenefitsAndExtras(){
        cy.get(benefitsExtras.specialClause).click();
        cy.get(benefitsExtras.specialClauseText).type(data.benefitsExtras.specialClauseText);
        cy.get(benefitsExtras.btnNext).click();
    }

    compliance(){
        cy.intercept('POST', 'https://api.deel.training/contracts').as('contracts');
        cy.get(compliance.brnCreateContract).click();
        cy.wait('@contracts');
    }

    validateIsCreated(){
        cy.get('body').should('contain', 'WAITING FOR CLIENT SIGN');
    }
}

export default new Contracts();