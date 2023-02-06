const parentBlock = document.getElementsByClassName("parent-block");

for (const element of parentBlock) {
    const btn = document.createElement("button");
    btn.className = "button-block";
    btn.style.width ="85%";
    btn.style.height = "30px"
    btn.style.marginLeft = "23px"
    btn.style.marginTop = "10px"
    btn.innerText = "Save";
    element.appendChild(btn)
}
