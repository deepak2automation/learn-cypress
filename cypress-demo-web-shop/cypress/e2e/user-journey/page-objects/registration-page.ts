const demowebshop_registerpage = {

    selectGender(genderType: string) {

        return cy.contains(genderType)

    },
    get firstname() {

        return cy.get('#FirstName')

    },
    get lastname() {

        return cy.get('#LastName')

    },
    get email() {

        return cy.get('#Email')

    },
    get password() {

        return cy.get('#Password')

    },
    get confirmPassword() {

        return cy.get('#ConfirmPassword')

    },
    get registerButton() {

        return cy.get('#register-button')

    },
    get registerUserErrorMsg() {

        return cy.get('div[class="validation-summary-errors"]').find('li').contains("The specified email already exists")

    },



}

export default demowebshop_registerpage;