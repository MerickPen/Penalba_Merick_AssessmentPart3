const stylesheet = document.createElement("style");
stylesheet.textContent = `
body {
    font-family: Arial, sans-serif;
    max-width: 1000px;
    margin: auto;
    padding: 1rem;
}

iframe {
    width: 100%;
    height: 450px;
    border: 0;
}

#weather {
    padding: 1rem;
    border: 1px solid #ccc;
    margin-top: 1rem;
}
`;
document.head.appendChild(stylesheet);