// This function will be called when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Find all button elements on the page
    var buttons = document.getElementsByTagName('button');
    
    // Loop through each button
    for (var i = 0; i < buttons.length; i++) {
        // If the button's text content is 'Send'
        if (buttons[i].textContent === 'Send') {
            // Replace it with 'Send it 🤙'
            buttons[i].textContent = 'Send it 🤙';
        }
    }
});