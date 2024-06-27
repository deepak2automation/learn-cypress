import { data } from "cypress/types/jquery";
import demowebshop_homepage from "../page-objects/home-page";

describe("Test Suite to verify Demo Web Shop Home Page. ", { tags: ['@home-page', '@smoke'] }, () => {

    beforeEach(() => {

        //Cypress.session.clearAllSavedSessions()
        //cy.clearCookies()
        cy.session("data", () => {
            cy.visit('')
        })

        // disable Cypress's default behavior of logging all XMLHttpRequests and fetches
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })


    })

    it("Test 1: Verify Demo Web Shop Header Logo on Home Page.", { tags: '@smoke' }, () => {

        demowebshop_homepage.headerLogo.should("exist")
        cy.get('div[class="header-logo"]').children("a")
            .find('img[alt="Tricentis Demo Web Shop"]').as("DemoWebShopLogo")

        cy.get("@DemoWebShopLogo").click()  //Click on Demo Web Shop Logo to navigate to home page.

    })

    it("Test 2: Verify Links on header section of Demo Web Shop Home Page.", { tags: '@smoke' }, () => {

        //Order in which headers should be displayed
        const headers = ["Register", "Log in", "Shopping cart", "Wishlist"]
        var count = 0
        headers.forEach(function (value) {

            demowebshop_homepage.headerLinks.eq(count).contains(value).should("exist")
            count = count + 1
        })

    })

    it("Test 3: Verify Search Box with Search button on header section of Demo Web Shop Home Page.", { tags: '@smoke' }, () => {

        demowebshop_homepage.searchBox.should("exist")
            .invoke('attr', "value")
            .should("equal", "Search store")

        demowebshop_homepage.searchButton.should("exist")
            .invoke('attr', "value")
            .should("equal", "Search")
    })

    it("Test 4: Verify Product Categories List on Demo Web Shop Home Page under List Box.", { tags: '@smoke' }, () => {

        //Order in which categories list should be displayed.
        const categoriesList = ["Books", "Computers", "Electronics", "Apparel & Shoes",
            "Digital downloads", "Jewelry", "Gift Cards"]
        var count = 0
        categoriesList.forEach(function (value) {

            demowebshop_homepage.categoriesList.eq(count).contains(value).should("exist")
            count = count + 1
        })

    })

    it("Test 5: Verify Product Categories on Demo Web Shop Home Page in Header Top Menu.", { tags: '@smoke' }, () => {

        //Order in which categories list should be displayed.
        const categoriesTopMenu = ["Books", "Computers", "Desktops", "Notebooks", "Accessories",
            "Electronics", "Camera, photo", "Cell phones", "Apparel & Shoes",
            "Digital downloads", "Jewelry", "Gift Cards"]
        var count = 0
        categoriesTopMenu.forEach(function (value) {

            demowebshop_homepage.categoriesTopMenu.eq(count).contains(value).should("exist")
            count = count + 1
        })

    })

})