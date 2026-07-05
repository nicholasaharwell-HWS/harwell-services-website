document.querySelectorAll(".ba-slider").forEach((slider) => {
  const range = slider.querySelector(".ba-range");
  const beforeWrap = slider.querySelector(".ba-before-wrap");
  const handle = slider.querySelector(".ba-handle");

  range.addEventListener("input", () => {
    beforeWrap.style.width = `${range.value}%`;
    handle.style.left = `${range.value}%`;
  });
});
