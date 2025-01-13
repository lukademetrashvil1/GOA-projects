const button1 = document.getElementById('Answer1');
const button2 = document.getElementById('Answer2');
const button3 = document.getElementById('Answer3');
button1.addEventListener('click', function() {
    button1.style.backgroundColor = 'red';
    button1.style.color = 'white';
});
button2.addEventListener('click', function() {
    button2.style.backgroundColor = 'red';
    button2.style.color = 'white';
});
button3.addEventListener('click', function() {
    button3.style.backgroundColor = 'green';
    button3.style.color = 'white';
    const newButton = document.createElement('a');
    newButton.className = 'button';
    newButton.href = 'Page3.html';
    newButton.textContent = 'Next Page';
    newButton.style.position = 'absolute';
    newButton.style.top = '75%'; 
    newButton.style.left = '27%'; 
    document.body.appendChild(newButton);
});