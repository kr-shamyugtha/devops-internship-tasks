async function loadMenu(category) {
    try {
        const response = await fetch(`/api/${category}`);

        const data = await response.json();

        const menuContainer = document.getElementById("menu-container");

        let title =
            category.charAt(0).toUpperCase() +
            category.slice(1);

        let html = `<h2>${title}</h2>`;

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

        document.getElementById("menu-container").innerHTML =
            "<h2>Error loading menu.</h2>";
    }
}