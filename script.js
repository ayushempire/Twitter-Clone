// * Dom elemetns

//  selecting main page and login page
const mainPage = document.querySelector(".main-page");

const loginPage = document.querySelector(".login-page");

const right_middle = document.querySelector(".right-middle-main");

const brands_loginpage = document.querySelector(".brand");

const mian_top_login_btn = document.querySelector(".btn-top");

const feedPage = document.querySelector(".feed-page");

const loginpage_login_btn = document.querySelector(".login-page-loginbtn");

const loginpage_model = document.querySelector(".login-model");

const login_model_icon = document.querySelector(".login-model i");

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

// todo : making back to main page function
const loginpage_to_mainpage = () => {
  loginPage.style.display = "none";
  mainPage.style.display = "grid";
};

// todo adding event listener to brandslogin page
brands_loginpage.addEventListener("click", (e) => {
  if (e.target.classList[0] === "brand-home-btn") {
    loginpage_to_mainpage();
  }
  // console.log(e.target.classList);
});

// todo creating function for main to feed page
const login_to_feed = () => {
  mainPage.style.display = "none";
  loginPage.style.display = "none";
  feedPage.style.display = "grid";
};

mian_top_login_btn.addEventListener("click", (e) => {
  const input_user_info = document.querySelector(".user-info");
  // console.log(input_user_info);

  const input_user_password = document.querySelector(".password");
  // console.log(input_user_password);

  if (input_user_info.value !== "" && input_user_password.value !== "") {
    login_to_feed();
  } else if (input_user_info.value == "" && input_user_password.value == "") {
    goToLoginPage();
    loginpage_model.style.display = "block";
  }
  // console.log(e.target.classList);
});

// * log in page

// todo : making login page login btn ative
loginpage_login_btn.addEventListener("click", () => {
  // *selecting log in page userinfo
  const loginpage_userinfo = document.querySelector(".loginpage-userinfo");

  // *selecting log in page password
  const loginpage_password = document.querySelector(".loginpage-password");

  if (loginpage_userinfo.value !== "" && loginpage_password.value !== "") {
    login_to_feed();
  } else {
    loginpage_model.style.display = "block";
  }
});

// todo login model cross button
login_model_icon.addEventListener("click", () => {
  loginpage_model.style.display = "none";
});
