export default function scrollTo(id) {
    const element = document.getElementById(id);

    // TODO: refactor it: (- 60) as its the header height.
    window.scrollTo({
        top: element.offsetTop - 60,
        behavior: 'smooth',
    });
}
