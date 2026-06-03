async function loadMenu(category) {
    try {
        const response = await fetch(`/api/${category}`);

        const data = await response.json();

        const menuContainer = document.getElementById("menu-container");

        let html = `<h2>${category.toUpperCase()}</h2>`;

        data.forEach(item => {
            html += `
                <div class="menu-item">
                    <span>${item.name}</span>
                    <span class="price">₹${item.price}</span>
                </div>
            `;
        });

        menuContainer.innerHTML = html;

    } catch (error) {
        console.error(error);
    }
}