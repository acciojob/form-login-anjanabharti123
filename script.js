function getFormvalue() {
    // Prevent the default form submission
    event.preventDefault();

    // Access the form by name
    const form = document.forms['form1'];

    // Get and trim the values of First Name and Last Name
    const firstName = form['fname'].value.trim();
    const lastName = form['lname'].value.trim();

    // Combine names and show in alert
    alert(firstName + " " + lastName);
}
