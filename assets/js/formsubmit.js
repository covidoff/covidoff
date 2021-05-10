var firebaseConfig = {
    apiKey: "AIzaSyCT5A8OzcobxD_8-gnymi90RA13KRKcaN8",
    authDomain: "covidoff-bc740.firebaseapp.com",
    databaseURL: "https://covidoff-bc740-default-rtdb.firebaseio.com",
    projectId: "covidoff-bc740",
    storageBucket: "covidoff-bc740.appspot.com",
    messagingSenderId: "913996952312",
    appId: "1:913996952312:web:693ac027ccdf559008010d",
    measurementId: "G-ENYT036DR0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}