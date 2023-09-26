button.addEventListener('click', async (e) => {
  e.preventDefault();
  countValue += 1;
  count.textContent = countValue;
  para.innerHTML = await quote();
});
