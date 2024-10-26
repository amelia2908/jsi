console.log(123);
console.log(456);

document
  .getElementById("formlogin")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("submit");

    var phone = document.getElementById("phone");
    var password = document.getElementById("password");

    var phoneValue = phone.value;
    var passwordValue = password.value;
    console.log(phoneValue, passwordValue);

    // phone: 0123456789
    // password: 123456@@

    if (
      phoneValue === "0123456789" &&
      passwordValue === "9876543210"
    ) {
      Swal.fire({
        title: "Thành công:)",
        icon: "success",
        confirmButtonText: "OK:)",
        width: 600,
        backdrop: `
    rgba(0,0,123,0.4)
    url("https://sweetalert2.github.io/images/nyan-cat.gif")
    left top
    no-repeat
  `,
      });
    } else {
      Swal.fire({
        title: "Thất bại rồi:(",
        icon: "error",
        confirmButtonText: "OK:(",
        width: 600,

        backdrop: `
    rgba(0,0,123,0.4)
    url("https://sweetalert2.github.io/images/nyan-cat.gif")
    left top
    no-repeat
  `,
      });
    }
  });

document
  .getElementById("show-password-btn")
  .addEventListener("click", function (event) {
    document.getElementById("password").type = "text";
  });
document
  .getElementById("hide-password-btn")
  .addEventListener("click", function (event) {
    document.getElementById("password").type = "password";
  });
