
describe('adopt a zoo in the animal', function() {

    beforeEach(function(){
        browser.get("http://www.thetestroom.com/jswebapp/")

    });
    
    it('should be able to enter the name', function() {
        element(by.model("person.name")).sendKeys("I want to adopt this puppy");
        expect(element(by.binding("person.name")).getText()).toEqual("I want to adopt this puppy");   
    });
        
});
    