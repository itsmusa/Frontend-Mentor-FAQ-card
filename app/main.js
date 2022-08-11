const question = document.querySelectorAll(".question");

question.forEach(elem => elem.addEventListener("click", openFaq))

function openFaq(elem) {

    if (elem.target.classList[0] === 'question') {
        const faq = elem.target.parentElement;
        faq.classList.toggle("active");
    }

    if (elem.target.classList[0] === 'arrow' || elem.target.tagName.toLowerCase() === 'p') {
        const faq = elem.target.parentElement.parentElement;
        faq.classList.toggle("active");
    }
};
