let count = 0;

const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn-decrease, .btn-reset, .btn-increase');

btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;

        if (styles.contains('btn-decrease')) {
            count--;
        } else if (styles.contains('btn-increase')) {
            count++;
        } else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "#222";
        }

        value.textContent = count;
    });
});
