// script.js
document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;

            if (value === 'AC') {
                display.value = '';
            } else if (value === 'C') {
                display.value = display.value.slice(0, -1);
            } else if (value === '=') {
                try {
                    display.value = eval(display.value.replace('x', '*'));
                } catch {
                    display.value = 'Error';
                }
            } else {
                display.value += value;
            }
        });
    });
});
