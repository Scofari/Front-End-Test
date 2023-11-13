export function extractTextFromHTML(htmlString: string) {
    const tempElement = document.createElement("p");
    tempElement.innerHTML = htmlString;

    const textContent = tempElement.textContent || tempElement.innerText;

    return textContent.trim();
}
