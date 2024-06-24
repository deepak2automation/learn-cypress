const demowebshop_homepage = {

    get headerLogo() {

        return cy.get('div[class="header-logo"]').children("a").find('img[alt="Tricentis Demo Web Shop"]')
    },
    get headerLinks() {

        return cy.get('div[class="header-links"]').children('ul').children("li").find("a")
    },
    get searchBox() {

        return cy.get('div[class="search-box"]').find('input[id="small-searchterms"]')
    },
    get searchButton() {

        return cy.get('div[class="search-box"]').find('input[class="button-1 search-box-button"]')
    },
    get categoriesList() {

        return cy.get('div[class="listbox"]').children('ul').children("li").find("a")
    },
    get categoriesTopMenu() {

        return cy.get('div[class="header-menu"]').children('ul').children("li").find("a")
    },


};

export default demowebshop_homepage;