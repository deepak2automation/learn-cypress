import demowebshop_homepage from "../page-objects/home-page";
import demowebshop_registerpage from "../page-objects/registration-page";

describe("Test Suite to verify New User is Registered Successfully in Demo Web Shop. ", () => {

    beforeEach(() => {
        //Use the cy.fixture() method to pull data from fixture file.
        cy.fixture('data').then(function (testdata) {
            cy.log("Fixture File loaded successfully.")
            this.testdata = testdata
        })
        cy.session("data", () => {
            cy.visit('')
        })

        // disable Cypress's default behavior of logging all XMLHttpRequests and fetches
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
    })

    it("Test 1: Field level validations on the Register page.", function () {

        demowebshop_homepage.headerLinks.contains("Register").click()

        //User gets navigated to Register page.
        cy.location('pathname').should('eq', '/register')

        //Field level validations when mandatory input fields are not entered
        //and user clicks on "Register" button.
        demowebshop_registerpage.registerButton.click()
        demowebshop_registerpage.firstname.invoke("attr", "data-val-required")
            .should("eq", "First name is required.")
        demowebshop_registerpage.lastname.invoke("attr", "data-val-required")
            .should("eq", "Last name is required.")
        demowebshop_registerpage.email.invoke("attr", "data-val-required")
            .should("eq", "Email is required.")
        demowebshop_registerpage.email.invoke("attr", "data-val-email")
            .should("eq", "Wrong email")
        demowebshop_registerpage.password.invoke("attr", "data-val-required")
            .should("eq", "Password is required.")
        demowebshop_registerpage.password.invoke("attr", "data-val-length")
            .should("eq", "The password should have at least 6 characters.")
        demowebshop_registerpage.confirmPassword.invoke("attr", "data-val-required")
            .should("eq", "Password is required.")


        //Fill Personal Details section and click on "Register".
        demowebshop_registerpage.selectGender(this.testdata.gender[0]).click()
        demowebshop_registerpage.firstname.type(this.testdata.newUserRegistration.Firstname)
        demowebshop_registerpage.lastname.type(this.testdata.newUserRegistration.Lastname)
        demowebshop_registerpage.email.type(this.testdata.newUserRegistration.Email)
        demowebshop_registerpage.password.type(this.testdata.newUserRegistration.Password, { log: false })
        demowebshop_registerpage.confirmPassword.type(this.testdata.newUserRegistration.ConfirmPassword, { log: false })
        demowebshop_registerpage.registerButton.click()

        demowebshop_registerpage.registerUserErrorMsg.should("exist")

    })

    it("Test 2: Verify existing user should NOT be allowed to Register again.", function () {


        //Fill Personal Details section and click on "Register".
        demowebshop_registerpage.selectGender(this.testdata.gender[0]).click()
        demowebshop_registerpage.firstname.type(this.testdata.newUserRegistration.Firstname)
        demowebshop_registerpage.lastname.type(this.testdata.newUserRegistration.Lastname)
        demowebshop_registerpage.email.type(this.testdata.newUserRegistration.Email)
        demowebshop_registerpage.password.type(this.testdata.newUserRegistration.Password, { log: false })
        demowebshop_registerpage.confirmPassword.type(this.testdata.newUserRegistration.ConfirmPassword, { log: false })
        demowebshop_registerpage.registerButton.click()

        //Verify Error Message displayed "The specified email already exists".
        demowebshop_registerpage.registerUserErrorMsg.should("exist")

    })


    it("Test 2: Verify New User with unique email ID should be allowed to Register.", function () {


        //Fill Personal Details section with unique email ID and click on "Register".
        demowebshop_registerpage.selectGender(this.testdata.gender[0]).click()
        demowebshop_registerpage.firstname.type(this.testdata.newUserRegistration.Firstname)
        demowebshop_registerpage.lastname.type(this.testdata.newUserRegistration.Lastname)
        demowebshop_registerpage.email.type(this.testdata.newUserRegistration.Email)

        const randomEmail = cy.generateRandomEmail()
        demowebshop_registerpage.password.type(this.testdata.newUserRegistration.Password, { log: false })
        demowebshop_registerpage.confirmPassword.type(this.testdata.newUserRegistration.ConfirmPassword, { log: false })
        demowebshop_registerpage.registerButton.click()

        //Verify Error Message displayed "The specified email already exists".
        demowebshop_registerpage.registerUserErrorMsg.should("exist")

    })

})