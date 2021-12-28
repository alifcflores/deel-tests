///<reference types="cypress"/>

import contract from '../support/contracts/commands';

describe('Create Contracts', ()=>{

    before(()=>{
        cy.login();
    });

    beforeEach(()=>{
        contract.navigateToPage();
    });

    it('Fixed Rate', ()=>{
        contract.selectFixedRate();
        contract.general(); 
        contract.payment();   
        contract.defineDates();
        contract.BenefitsAndExtras();  
        contract.compliance();
    });

    afterEach(()=>{
        contract.validateIsCreated();   
    });
});