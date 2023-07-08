// * Dom elemetns

//  selecting main page and login page
const mainPage = document.querySelector(".main-page");

const loginPage = document.querySelector(".login-page");

const right_middle = document.querySelector(".right-middle-main");

// ******************************************************************** //

// main page

// todo: creating function to change the page

const goToLoginPage = () => {
  mainPage.style.display = "none";
  loginPage.style.display = "grid";
};

// todo: adding action listerner right_middle

right_middle.addEventListener("click", (e) => {
  if (e.target.classList[0] === "log-in") {
    goToLoginPage();
  }
  // console.log(e.target.classList);
});
