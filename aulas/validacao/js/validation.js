$(document).ready(function() {
    $("#myForm").validate({
      rules: {
        name: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Please enter your name",
        email: {
          required: "Please enter your email",
          email: "Please enter a valid email address"
        }
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
  });