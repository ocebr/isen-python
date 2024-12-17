describe('Create and connect to an account', () => {
    it('Visits the Oc commerce site', () => {
      cy.visit('/home')
  
      // User is able to create an account an to be redirect to login pages
  
      cy.contains('SIGNUP').click()
      cy.url().should('include', '/user/signup')
      // cy.contains('fname')
      cy.get('[id^=fname]').type('fakeuser')
      cy.get('[id^=lname]').type('toto')
      cy.get('[id^=username]').type('fakeuser')
      cy.get('[id^=email]').type('fake@email.com')
      cy.get('[id^=pass]').type('1hstesh<23456789')
      cy.get('[id^=re_pass]').type('1hstesh<23456789')
      cy.get('form').contains('Register').click()
      cy.url().should('include', '/user/login')
  
      // User is able to connect with the previously created account
      cy.get('[id^=your_name]').type('fakeuser')
      cy.get('[id^=your_pass]').type('1hstesh<23456789')
      cy.get('form').contains('Log in').click()
      cy.url().should('include', '/home')
      cy.contains('FAVOURITE')
    })
  })
  
  describe('Put item in favourite', () => {
    it('Connect to OC commerce and put in favourite', () => {
      cy.visit('home/')
  
      // Connect with the account and go to favourite, it should be empty
      cy.contains('LOGIN').click()
      cy.url().should('include', '/user/login')
      cy.get('[id^=your_name]').type('fakeuser')
      cy.get('[id^=your_pass]').type('1hstesh<23456789')
      cy.get('form').contains('Log in').click()
      cy.url().should('include', '/home')
      cy.contains('FAVOURITE').click()
      cy.contains('No Product in your favourite list. Please add')
  
      // Adding favourite
      cy.contains('add').click()
      cy.get('[id=favBtn1]').click()
      cy.contains('FAVOURITE').click()
      cy.contains('Coca cola')
      // cy.get('[id=favBtn1]').click()
      // cy.contains('No Product in your favourite list. Please add')

  
    })
  })