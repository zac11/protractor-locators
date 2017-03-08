
describe('Adopt an animal on the zoo test site ', function() {
    beforeEach(function(){
		browser.get("http://www.thetestroom.com/jswebapp/index.html");
		browser.driver.wait(function(){
		return browser.driver.isElementPresent(by.css('.ng-scope'));
		},10000);
	});

    
    it('it would be finding elements model locator', function() {

       element(by.model("person.name")).sendKeys("Please subscribe to this channel for more videos");
       element(by.binding("person.name")).getText().then(function(text){

            console.log(text);
       });
        
    });
        
    
});
    