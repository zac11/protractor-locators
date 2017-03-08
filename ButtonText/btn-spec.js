
describe('Adopt an animal on the zoo test site ', function() {
    beforeEach(function(){
		browser.get("http://www.thetestroom.com/jswebapp/index.html");
		browser.driver.wait(function(){
		return browser.driver.isElementPresent(by.css('.ng-scope'));
		},10000);
	});

    
    it('it would be finding elements using button text locator', function() {

       element(by.model("person.name")).sendKeys("This is a button test");
       element(by.binding("person.name")).getText().then(function(text){

            console.log(text);
       });
       element(by.buttonText("CONTINUE")).click();
        
    });
        
    
});
    