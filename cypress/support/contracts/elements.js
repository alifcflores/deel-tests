export const contractTypes = {
    fixed: '[href="/create/fixed"]'
}

export const general = {
    commonSelector: '[class="deel-ui__select__input"]',
    contractName: '[class="deel-ui__input-component__input"]',
    taxResidence: '1',
    state: '2',
    seniorityLevel: '3',
    jobTitle: '[name="jobTitle"]',
    jobTitleOption: '.suggestions-option',
    scopeOfWork: '.scopes-dropdown-toggle',
    scopeOfWorkOptions: '.scopes-container',
    startDate: {
        input: '.deel-ui__calendar-input-container__input_content_value',
        calendar: {
            container: '.react-calendar__viewContainer',
            viewDays: '.react-calendar__month-view__days' 
        }
    }
}

export const payment = {
    currency: '.deel-ui__select__input',
    currencyOpened: '.deel-ui__select__menu',
    paymentRate: '.deel-ui__input-component__input',
    paymentFrequency: '.deel-ui__select__input',
    paymentFrequencyOpened: '.deel-ui__select__menu'
}

export const benefitsExtras = {
    specialClause: '[data-qa="add-a-special-clause"]',
    specialClauseText: '.textarea',
    btnNext: '[data-qa="next"]'
}

export const compliance = {
    brnCreateContract: '[data-qa="create-contract"]'
}
