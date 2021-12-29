import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

Cypress.Cookies.defaults({
    preserve: 'PHPSESSID',
});
