let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let closeButton = document.querySelector(".popup__close-button");
let popupSubmitButton = document.querySelector(".popup__submit-button");
let formElement = document.querySelector(".popup__container");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  let nameInput = document.querySelector(".name__input");
  let jobInput = document.querySelector(".job__input");
  let profileTitle = document.querySelector(".profile__title");
  let profileSubtitle = document.querySelector(".profile__subtitle");

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
}

function handleOpen(evt) {
  console.log(evt);
  popup.classList.add("popup_visible");
}

function handleClose(evt) {
  console.log(evt);
  popup.classList.remove("popup_visible");
}

editButton.addEventListener("click", handleOpen);
closeButton.addEventListener("click", handleClose);
formElement.addEventListener("submit", handleProfileFormSubmit);
