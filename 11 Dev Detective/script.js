const Token = "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";
let searchBtn = document.querySelector("[data-search-btn]");
let clearBtn = document.querySelector("#clear-btn");
const nameEle = document.querySelector("input");
const lightBtn = document.querySelector(".light-mode");
const darkBtn = document.querySelector(".dark-mode");
const wrapper = document.querySelector(".wrapper");
const searchForm = document.querySelector(".search");
const profileContainer = document.querySelector(".profile-container");
const numberContainer = document.querySelector(".numbbers-container");

// Fetch user information from GitHub API
async function getUserInfo(username) {
  const headers = {
    Authorization: `Token ${Token}`,
  };

  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers,
  });

  const data = await response.json();

  if (response.status === 200) {
    showUserInfo(data, username);
  } else {
    throw new Error(`Failed to fetch user information: ${data.message}`);
  }
}

// Display user information in the UI
function showUserInfo(user, username) {
  changeProfilePicture(user.avatar_url);
  changeName(user.name);
  changeUserName(username);
  let date = formatJoinedDate(user.created_at);
  changeJoiningDate(date);
  changeAbout(user.bio);
  changeReposNumber(user.public_repos);
  changeFollowersNumber(user.followers);
  changeFollowingNumber(user.following);
  changeAddress(user.location);
  changeTwitterLink(user.twitter_username);
  changeWebsiteLink(user.blog);
  changeJobTitle(user.company);
}

function formatJoinedDate(isoDate) {
  const date = new Date(isoDate);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
}

function changeProfilePicture(url) {
  const profilePic = document.querySelector("#profile-pic");
  profilePic.src = url.toString();
}

function changeName(name) {
  const namePara = document.querySelector("[data-name]");
  namePara.textContent = name || "Not Available";
}

function changeUserName(userId) {
  const anchor = document.querySelector("[data-username]");
  anchor.textContent = `@${userId}`;
  anchor.href = `https://github.com/${userId}`;
}

function changeJoiningDate(date) {
  const joiningDate = document.querySelector("[data-joined-date]");
  joiningDate.textContent = `Joined ${date}`;
}

function changeAbout(bio) {
  const bioPara = document.querySelector(".about");
  bioPara.textContent = bio || "Not Available";
}

function changeReposNumber(num) {
  const repoNumber = document.querySelector("#repos-number");
  repoNumber.textContent = num;
}

function changeFollowersNumber(num) {
  const followersNum = document.querySelector("#followers-number");
  followersNum.textContent = num;
}

function changeFollowingNumber(num) {
  const followingNum = document.querySelector("#following-number");
  followingNum.textContent = num;
}

function changeAddress(address) {
  const userAddress = document.querySelector("[data-address]");
  userAddress.textContent = address || "Not Available";
}

function changeTwitterLink(url) {
  const twitter = document.querySelector("[data-twitter]");
  twitter.textContent = url ? url.toString() : "Not Available";
  twitter.href = url || "";
}

function changeWebsiteLink(url) {
  const web = document.querySelector("[data-website]");
  web.textContent = url ? url.toString() : "Not Available";
  web.href = url || "";
}

function changeJobTitle(job) {
  const jobDesc = document.querySelector("[data-job]");
  jobDesc.textContent = job || "Not Available";
}

async function showUserDetails(event) {
  event.preventDefault(); // Prevent form submission

  const nameEle = document.querySelector("#search-input");
  let username = nameEle.value;

  // Get the user information from GitHub
  await getUserInfo(username);
}

document.addEventListener("DOMContentLoaded", function () {
  getUserInfo("theyashsawarkar"); // Fetch and show initial user data
});

searchBtn.addEventListener("click", showUserDetails);
clearBtn.addEventListener("click", () => {
  nameEle.value = "";
});

// nameEle.addEventListener("click", () => {
//   clearBtn.classList.remove("hide");                 -----> add the featur :- the clear button should be invisible till you don't click on the input field
// });

darkBtn.addEventListener("click", (event) => {
  //   event.preventDefault();
  darkBtn.classList.remove("active");
  lightBtn.classList.add("active");
  wrapper.classList.add("dark-wrapper");
  searchForm.classList.add("search-dark");
  profileContainer.classList.add("profile-container-dark");
  numberContainer.classList.add("numbbers-container-dark");
});

lightBtn.addEventListener("click", (event) => {
  //   event.preventDefault();
  lightBtn.classList.remove("active");
  darkBtn.classList.add("active");
  wrapper.classList.remove("dark-wrapper");
  searchForm.classList.remove("search-dark");
  profileContainer.classList.remove("profile-container-dark");
  numberContainer.classList.remove("numbbers-container-dark");
});
