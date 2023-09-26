(function app() {
  const url = 'https://dummyjson.com/quotes';
  const para = document.querySelector('.quote');
  const button = document.querySelector('.btn');
  const count = document.querySelector('.count');
  function randomPic(arr = []) {
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
  }

  async function quote() {
    const array = [];
    try {
      const response = await fetch(url);
      const data = await response.json();
      const result = await (data.quotes);
      result.forEach((element) => {
        array.push(element.quote);
      });
      const randSelect = randomPic(array);
      return randSelect;
    } catch (error) {
      throw new Error(error);
    }
  }

  let countValue = 1;
  button.addEventListener('click', async (e) => {
    e.preventDefault();
    countValue += 1;
    count.textContent = countValue;
    para.innerHTML = await quote();
  });
}());
