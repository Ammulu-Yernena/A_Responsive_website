function showItem(itemNumber) {
  for (let i = 1; i <= 4; i++) {
    const item = document.querySelector(`.item${i}`);
    if (i === itemNumber) {
      item.style.display = "grid";
    } else {
      item.style.display = "none";
    }
  }
}
