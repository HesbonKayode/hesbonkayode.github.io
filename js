const menu = document.queryselector("#menu")
const nav = document.queryselector(".links")

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}