const mainSol = document.querySelector(".main-sol");
const mainHighTemp = document.querySelector(".main-high-temp");
const mainLowTemp = document.querySelector(".main-low-temp");
const mainWindData = document.querySelector(".main-wind-data");
const todayMinusSix = document.querySelector(".today-minus-six");
const todayMinusFive = document.querySelector(".today-minus-five");
const todayMinusFour = document.querySelector(".today-minus-four");
const todayMinusThree = document.querySelector(".today-minus-three");
const todayMinusTwo = document.querySelector(".today-minus-two");
const todayMinusOne = document.querySelector(".today-minus-one");
const today = document.querySelector(".today");
const days = document.querySelectorAll(".days");

let allData;

const url =
  "https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0";

marsData = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      allData = data;

      mainSol.innerText = `Sol ${data.sol_keys[6]}`;
      mainHighTemp.innerHTML = `High: ${data[data.sol_keys[6]].AT.mx.toFixed(
        1
      )}&deg; F`;
      mainLowTemp.innerHTML = `Low: ${data[data.sol_keys[6]].AT.mn.toFixed(
        1
      )}&deg; F`;
      mainWindData.innerHTML = `Wind: ${data[data.sol_keys[6]].HWS.av.toFixed(
        1
      )} m/s ${data[data.sol_keys[6]].WD.most_common.compass_point}`;

      todayMinusSix.children[0].innerText = `Sol ${data.sol_keys[0]}`;
      todayMinusFive.children[0].innerText = `Sol ${data.sol_keys[1]}`;
      todayMinusFour.children[0].innerText = `Sol ${data.sol_keys[2]}`;
      todayMinusThree.children[0].innerText = `Sol ${data.sol_keys[3]}`;
      todayMinusTwo.children[0].innerText = `Sol ${data.sol_keys[4]}`;
      todayMinusOne.children[0].innerText = `Sol ${data.sol_keys[5]}`;
      today.children[0].innerText = `Sol ${data.sol_keys[6]}`;

      todayMinusSix.children[1].innerHTML = `High: ${data[
        data.sol_keys[0]
      ].AT.mx.toFixed(1)}&deg; F`;
      todayMinusFive.children[1].innerHTML = `High: ${data[
        data.sol_keys[1]
      ].AT.mx.toFixed(1)}&deg; F`;
      todayMinusFour.children[1].innerHTML = `High: ${data[
        data.sol_keys[2]
      ].AT.mx.toFixed(1)}&deg; F`;
      todayMinusThree.children[1].innerHTML = `High: ${data[
        data.sol_keys[3]
      ].AT.mx.toFixed(1)}&deg; F`;
      todayMinusTwo.children[1].innerHTML = `High: ${data[
        data.sol_keys[4]
      ].AT.mx.toFixed(1)}&deg; F`;
      todayMinusOne.children[1].innerHTML = `High: ${data[
        data.sol_keys[5]
      ].AT.mx.toFixed(1)}&deg; F`;
      today.children[1].innerHTML = `High: ${data[
        data.sol_keys[6]
      ].AT.mx.toFixed(1)}&deg; F`;

      todayMinusSix.children[2].innerHTML = `Low: ${data[
        data.sol_keys[0]
      ].AT.mn.toFixed(1)}&deg; F`;
      todayMinusFive.children[2].innerHTML = `Low: ${data[
        data.sol_keys[1]
      ].AT.mn.toFixed(1)}&deg; F`;
      todayMinusFour.children[2].innerHTML = `Low: ${data[
        data.sol_keys[2]
      ].AT.mn.toFixed(1)}&deg; F`;
      todayMinusThree.children[2].innerHTML = `Low: ${data[
        data.sol_keys[3]
      ].AT.mn.toFixed(1)}&deg; F`;
      todayMinusTwo.children[2].innerHTML = `Low: ${data[
        data.sol_keys[4]
      ].AT.mn.toFixed(1)}&deg; F`;
      todayMinusOne.children[2].innerHTML = `Low: ${data[
        data.sol_keys[5]
      ].AT.mn.toFixed(1)}&deg; F`;
      today.children[2].innerHTML = `Low: ${data[
        data.sol_keys[6]
      ].AT.mn.toFixed(1)}&deg; F`;
    });
  return allData;
};
marsData();

days.forEach((day, index) => {
  day.addEventListener("click", () => {
    mainSol.innerText = `Sol ${allData.sol_keys[index]}`;
    mainHighTemp.innerHTML = `High: ${allData[
      allData.sol_keys[index]
    ].AT.mx.toFixed(1)}&deg; F`;
    mainLowTemp.innerHTML = `Low: ${allData[
      allData.sol_keys[index]
    ].AT.mn.toFixed(1)}&deg; F`;
    mainWindData.innerHTML = `Wind: ${allData[
      allData.sol_keys[index]
    ].HWS.av.toFixed(1)} m/s ${
      allData[allData.sol_keys[index]].WD.most_common.compass_point
    }`;
  });
});
