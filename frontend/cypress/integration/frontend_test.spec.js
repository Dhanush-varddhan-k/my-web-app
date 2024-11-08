describe('Frontend Load Test', () => {
    it('Visits the frontend and checks for header text', () => {
      // Visit the frontend URL
      cy.visit('http://localhost:3000');
  
      // Check if the header text appears
      cy.contains('Frontend Connected to Backend');
    });
  });
  