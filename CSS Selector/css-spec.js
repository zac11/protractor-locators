
describe('this is the describe block for checking the ', function() {
    beforeEach(function(){
		browser.get("http://www.thetestroom.com/jswebapp/index.html");
		browser.driver.wait(function(){
		return browser.driver.isElementPresent(by.css('.ng-scope'));
		},10000);
	});

    
    it('it would be finding elements using the CSS selectors', function() {

        expect($('.left').isDisplayed()).toBe(true);
        
    });
        
    
});
    