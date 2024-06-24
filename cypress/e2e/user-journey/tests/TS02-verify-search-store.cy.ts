import demowebshop_homepage from "../page-objects/home-page";
import demowebshop_searchpage from "../page-objects/search-page";

describe("Test Suite to verify Search Functionality in Demo Web Shop Home Page. ", () => {

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

    it("Test 1: Verify any user can search product on Demo Web Shop Home Page using Search store.", function () {

        demowebshop_homepage.searchBox.type(this.testdata.searchProduct[0])
        demowebshop_homepage.searchButton.click()

        //User gets navigated to Search result page.
        cy.location('pathname').should('eq', '/search')

    })

    it("Test 2: Verify Advanced search Functionality", function () {

        //User gets navigated to Search result page.
        cy.location('pathname').should('eq', '/search')
        demowebshop_searchpage.advancedSearch_checkbox.check()
        demowebshop_searchpage.advancedSearch_category.select(this.testdata.advancedSearchCategory[2])
        demowebshop_searchpage.advancedSearch_manufacturer.select(this.testdata.advancedSearchManufacturer[1])
        demowebshop_searchpage.advancedSearch_searchSubcategories_checkbox.check()
        demowebshop_searchpage.advancedSearch_searchInProductDescription_checkbox.check()
        demowebshop_searchpage.advancedSearch_searchKeyword.type(this.testdata.searchProduct[1])
        demowebshop_searchpage.advancedSearch_searchButton.click()

        //Validate No products found message.
        demowebshop_searchpage.advancedSearch_searchResultMessage.should("exist").invoke('text')
            .then((text) => {
                expect(text.trim().replace(/[\n\t]/g, '')).to.eq("No products were found that matched your criteria.")
            })

    })

})