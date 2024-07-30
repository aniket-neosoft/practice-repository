document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById('navbar');

    const navItems = [
        { name: 'Home', href: './index.html' },
        { name: 'Products', href: './product.htm' },
        { name: 'Categories', href: './categories.htm' },
        { name: 'About Us', href: './aboutUs.htm' },
        { name: 'Contact', href: './contact.htm' },
        { name: 'Cart', href: './cart.htm' }
    ];

    const ul = document.createElement('ul');

    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.name;
        a.href = item.href;
        li.appendChild(a);
        ul.appendChild(li);
    });

    navbar.appendChild(ul);
});
