"use strict";

const lesson1 = document.querySelector(".lesson-1");
const lesson2 = document.querySelector(".lesson-2");
const lesson3 = document.querySelector(".lesson-3");
const lessons = document.querySelectorAll(".lesson");
const arrowBtnLeft = document.getElementById("arrow-left");
const arrowBtnRight = document.getElementById("arrow-right");
const eventParent = document.querySelector(".les-parent");
arrowBtnRight.addEventListener("click", function (e) {
  const next = Array.from(lessons, (el, i, arr) => {
    el.classList.add("hidden");
  });
  //Array.from([1, 2, 3], (x) => x + x);
  console.log(next);
  // next.forEach((element) => {});
  // (el, i, arr) => {
  //   if (!arr.at(i).classList.contains("hidden")) {
  //     arr.at(i).classList.add("hidden");
  //     arr.at(i++).classList.remove("hidden");
  //     if (i != arr.length - 1) {
  //       next[i + 1].classList.remove("hidden");
  //     }
  //     return;
});

// function handleClickRight(event) {
//   event.preventDefault();
//   console.log(event);
//   console.log(lessons);
//   // Loop lessons, add/remove class 'hidden'
//   lessons.forEach((node, i, arr) => {
//     // Log more!
//     console.log("forEach - ", node, i, arr);
//     if (i === 0) {
//       node.classList.add("hidden");
//       debugger;
//       lessons[i]; //BUG
//     }
//     if (i == arr.length - 1) {
//       arr[i].classList.remove("hidden");
//       console.log(arr[i]);
//     }
//   });
// }
// arrowBtnRight.addEventListener("click", handleClickRight);

// arrowBtnRight.addEventListener("click", function (e) {
//   lessons.forEach((el, i, arr) => {
//     if (i == 0) {
//       el.classList.add("no-vis");
//     }
//     if (i == arr.length - 1) {
//       arr[i].classList.remove("hidden");
//     }
//   });
// });