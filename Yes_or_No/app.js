const API = "https://yesno.wtf/api";
const screenImg = document.querySelector(".screenImg");
const sayYoN = document.querySelector(".say-Yes-or-No");

const getApi = async () => {
  const apiResponse = await axios.get(API);
  changeImg(apiResponse.data.image);
  changeYon(apiResponse.data.answer);
};

const changeImg = (e) => {
  screenImg.setAttribute("src", e);
  screenImg.style.display = "block";
};

const changeYon = (e) => {
  sayYoN.innerHTML = e.toUpperCase();
};

window.addEventListener("load", getApi);
