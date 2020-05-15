function moviePop(text) {
    const pop = document.querySelector('.pop-info');
    pop.textContent = '';
    pop.textContent = text;
    pop.classList.remove('d-none');
    setTimeout(() => {
        pop.classList.add('d-none');
    }, 5200);
}

export default moviePop;