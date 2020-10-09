// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour-pass").on("click", function(event) {
        event.preventDefault();
      var id = $(this).data("id");
      var newBurger = $(this).data("newBurger");
  
      var newBurgerdata = {
        devoured: newBurger
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerdata
      }).then(
        function() {
          console.log("changed burger to", newBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#submitbtn").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var addBurger = {
        burger_name: $("#bu").val().trim(),
        devoured: $("[burger_name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: addBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#deleteburger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });