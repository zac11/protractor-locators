#Locators

 One of the main aims of the E2E testing is to find the element/elements that you want to interact with and perform some kind of action over those locators. These may be an input box, a radiobutton, a dropdown etc. 

 In order to get these elements and interact with them, Selenium uses the concept of Locator methods. Locators are methods that are used for finding elements using the power of the web browser itself. We can use various locating mechanism that use the power of HTML, CSS, XML etc. to find an element on a page and help us interact with that element via our scripts.

You can find an element using

  * it's class-name
  * it's ID
  * it's Name in the HTML
  * it's HTML tag
  * it's XML path
  
  
#Locators in Protractor
  
  Protractor allows us to use the various locating mechanism defined by Selenium. So the locating mechanism that Selenium givesus, which are disucssed here, are all valid in Protractor code- using the .js format that we use for Protractor.
  
  Apart from the default locating mechanisms that we have, the following are the locating mechanism that Protractor provides us on top of Selenium, which are specific only to applications developed using Angular. These are 
  
  * By Binding
  * By Model
  * By Exactbinding
  * By ButtonText
  * By PartialButtonText
  * By Repeater
  * By ExactRepeater
  * By cssContainingText
  * By Options
  * By deepCss
  * By add Locator
  

#Structure
