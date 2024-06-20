document.addEventListener("DOMContentLoaded", function() {
    const colors = [
        { name: "Green-50", hexcode: "#FBFDEE" },
        { name: "Green-100", hexcode: "#F2F7C9" },
        { name: "Green-200", hexcode: "#ECF4AF" },
        { name: "Green-300", hexcode: "#E3EE8A" },
        { name: "Green-400", hexcode: "#DDEB74" },
        { name: "Green-500", hexcode: "#D5E651" },
        { name: "Green-600", hexcode: "#C2D14A" },
        { name: "Green-700", hexcode: "#97A33A" },
        { name: "Gray", hexcode: "#454659" },
        { name: "Dark Gray", hexcode: "#1C1B1D" },
        { name: "White", hexcode: "#E5E1E3" },
        { name: "Black", hexcode: "#141314" }
    ];

    const section = document.getElementById('colors-section');
    colors.forEach(color => {
        const colorDiv = document.createElement('div');
        colorDiv.className = 'color-box';
        colorDiv.style.backgroundColor = color.hexcode;

        if (color.name === "Black") {
            colorDiv.style.border = "1px solid #E5E1E3";
        }

        const descriptionDiv = document.createElement('div');
        descriptionDiv.className = 'color-description-box';
        descriptionDiv.innerHTML = `
            <h2>${color.name}</h2>
            <p>${color.hexcode}</p>
        `;

        const containerDiv = document.createElement('div');
        containerDiv.appendChild(colorDiv);
        containerDiv.appendChild(descriptionDiv);

        section.appendChild(containerDiv);
    });

});
