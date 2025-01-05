function getFormvalue(event) {
    //Write your code here
event.preventDefault();

    // Get the values of the first and last name from the form
    const firstName = document.forms['form1']['fname'].value;
    const lastName = document.forms['form1']['lname'].value;

    // Alert the full name by concatenating the first and last names
    alert(firstName + " " + lastName);
}
