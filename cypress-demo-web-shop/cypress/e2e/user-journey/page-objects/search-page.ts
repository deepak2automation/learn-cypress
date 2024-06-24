
const demowebshop_searchpage = {

    get advancedSearch_checkbox() {

        return cy.get('#As')
    },
    get advancedSearch_category() {

        return cy.get('select[id="Cid"]')
    },
    get advancedSearch_searchSubcategories_checkbox() {

        return cy.get('#Isc')
    },
    get advancedSearch_manufacturer() {

        return cy.get('select[id="Mid"]')
    },
    get advancedSearch_searchKeyword() {

        return cy.get('#Q')
    },
    get advancedSearch_searchInProductDescription_checkbox() {

        return cy.get('#Sid')
    },
    get advancedSearch_searchButton() {

        return cy.get('div[class="buttons"]').children('input[class="button-1 search-button"]')
    },
    get advancedSearch_searchResultMessage() {

        return cy.get('div[class="search-results"]').children('strong[class="result"]')
    },


};

export default demowebshop_searchpage;
