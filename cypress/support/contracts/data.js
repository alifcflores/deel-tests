const moment = require('moment');

export const general = {
    contractName: 'Automated Tests',
    taxResidence: {UnitedStates: 'United States'},
    state:{colorado: 'Colorado'},
    jobTitle: {backEndDeveloper: 'Back-end Developer'},
    seniorityLevel: 'LEAD',
    scopeOfWork: '',
    date: moment().subtract('1', 'days').format('DD')
}

export const payment = {
    currency: {GBP: 'GBP - British Pound'},
    paymentRate: '1000',
    paymentFrequency: {weekly: 'Weekly'}
}

export const benefitsExtras = {
    specialClauseText: 'In places of business where the Employer is unable to work during regular hours and must work at the convenience of the owner, special shifts are permitted.'
}