const inputRangeRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

function fontSizeControl(event) {
    textRef.style.fontSize = event.currentTarget.value + 'px';
}

inputRangeRef.addEventListener('input', fontSizeControl);