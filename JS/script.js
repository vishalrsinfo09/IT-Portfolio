
function data() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;

    if (name === "" || email === "" || phone === "" || address === "") {
        alert("All fields are mandatory!");
        return false;
    } else if (phone.length !== 10 || isNaN(phone)) {
        alert("Phone number should be exactly 10 digits and numeric!");
        return false;
    } else {
        alert("Form submitted successfully!");
        return true;
    }
}
 AOS.init();
