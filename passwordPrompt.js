function getPassword () {
    let password = prompt("Enter your password: ");
    let myPassword = ("ispscmain@bscs2a");
    do {
        alert("Incorrect, try again.");
        password = prompt("Enter your password: ");
} while (password != myPassword);
if (password == myPassword) {
    alert("Access granted!");
}
}
 