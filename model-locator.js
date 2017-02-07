
describe('adopt a zoo in the animal', function() {

    beforeEach(function(){
        browser.get("http://www.thetestroom.com/jswebapp/");
        browser.driver.wait(function(){
            return browser.driver.isElementPresent(by.css('.ng-scope'));
        },5000);
    });
    
    it('should be able to enter the name', function() {
        element(by.model("person.name")).sendKeys("I want to adopt this puppy");
        element(by.binding("person.name")).getText().then(function(text){
            console.log(text);
        });
    });
        
});
    