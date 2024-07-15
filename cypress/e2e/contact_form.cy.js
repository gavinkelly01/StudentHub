describe('Contact Form API', () => {
  it('should submit the contact form successfully via API', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/submit_contact.php',
      form: true,
      body: {
        firstname: 'John',
        lastname: 'Doe',
        email: 'john.doe@example.com',
        subject: 'Test subject',
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.contain('Contact form submitted successfully!');
    });
  });
});
