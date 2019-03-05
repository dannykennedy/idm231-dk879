// Remove the star sign and start again from date selection
function refresh() {

    var child = document.getElementById('changed-box');
    var box = document.getElementById('box');

    // Only do the actions if child (icon) is actually there
    // i.e. don't refresh twice
    if (child) {
        var parent = child.parentElement;
        parent.removeChild(child);

        var text = document.getElementsByClassName('astro-text')[0];
        box.removeChild(text);

        const triangle = document.createElement('div');
        triangle.classList = 'primary-shape triangle position-two';
        triangle.setAttribute('id', 'original-triangle');
        const circle = document.createElement('div');
        circle.classList = 'primary-shape circle position-one';
        circle.setAttribute('id', 'original-circle');

        box.appendChild(triangle);
        box.appendChild(circle);
    }

    // Remove refresh button
    var refreshButton = document.getElementById('button-refresh');
    refreshButton.style.display = 'none';

    // Add date picker back
    var datePicker = document.getElementById('date-picker');
    datePicker.classList.remove('fade-out');
    datePicker.classList.add('fade-in');
    datePicker.style.display = 'block';
}