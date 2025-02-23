document.addEventListener('DOMContentLoaded', () => { const unlockButtons = document.querySelectorAll('.unlock-button'); const bookButtons = document.querySelectorAll('.book-button');

unlockButtons.forEach(button => {
    button.addEventListener('click', () => {
        const phoneNumber = prompt('Enter your mobile number for STK push payment:');
        if (phoneNumber) {
            alert(`STK push request sent to ${phoneNumber}`);
            // Simulate unlocking content
            const contentId = button.getAttribute('data-content');
            const content = document.getElementById(contentId);
            if (content) content.style.display = 'block';
            button.style.display = 'none';
        }
    });
});

bookButtons.forEach(button => {
    button.addEventListener('click', () => {
        const phoneNumber = prompt('Enter your mobile number for STK push payment:');
        if (phoneNumber) {
            alert(`STK push request sent to ${phoneNumber}`);
        }
    });
});

});

                      
