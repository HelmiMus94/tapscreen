let counter = 0;

document.getElementById('tap-area').addEventListener('click', function() {
    counter++;
    document.getElementById('counter').innerText = counter;
});