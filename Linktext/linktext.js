
describe('checking an element using the linktext', function() {

    beforeEach(function(){
        browser.get("https://angularjs.org/");
        browser.driver.wait(function(){
            return browser.driver.isElementPresent(by.css('.ng-scope'));
        },5000);

    });
    
    it('should test angular links using linktext', function() {

        var elem=elememt(by.linkText("Try the New Angular"));
        expect(el.getAttribute("href")).toBe("http://angular.io");
    });
        
});
    