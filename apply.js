const applicationForm = document.querySelector(".application-page form");

applicationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.assign("submitted.html");
});
