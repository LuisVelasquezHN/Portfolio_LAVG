const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const observeHiddenElements = () => {
    const hiddenElements = document.querySelectorAll('.hiddenObs, .hiddenObs2');
    hiddenElements.forEach((el) => observer.observe(el));
};

document.addEventListener("DOMContentLoaded", observeHiddenElements);

const mutationObserver = new MutationObserver(() => {
    observeHiddenElements(); 
});

mutationObserver.observe(document.body, { childList: true, subtree: true });
