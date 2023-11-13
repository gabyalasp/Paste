$(document).ready(function () {
  var cart = [];

  function updateCartDisplay() {
    var cartItems = cart
      .map(function (item) {
        return (
          "<li>" +
          item.name +
          " - $" +
          item.price.toFixed(2) +
          " x " +
          item.quantity +
          "</li>"
        );
      })
      .join("");
    $("#cart-modal .modal-body").html("<ul>" + cartItems + "</ul>");
  }

  function clearCart() {
    cart = [];
    updateCartDisplay();
  }

  $(".add-to-cart").click(function () {
    var name = $(this).data("name");
    var price = Number($(this).data("price"));
    var quantity = parseInt(
      $(this).closest(".card-footer").find(".input-increment").val()
    );
    var existingItem = cart.find((item) => item.name === name);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      var item = { name: name, price: price, quantity: quantity };
      cart.push(item);
    }
    updateCartDisplay();
  });

  $("#realizar-compra").click(function () {
    // Use SweetAlert2 to show the message
    Swal.fire({
      title: "¡Compra realizada!",
      text: "Se ha enviado un enlace de compra a su correo.",
      icon: "success",
      confirmButtonText: "Cerrar",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload(); // Recarga la página
      }
    });
  });
});
