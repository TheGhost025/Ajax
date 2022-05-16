$(document).ready(function() {
        
    $('#update-student-form').submit(function(e) {


      if (editedItem != null) {
        var url = ""
        var data = {
            name: $("#name").value,
            email: $("#email").value,
            birth: $("#date").value,
            gpa: $("#gpa").value,
            mobile_number: $("#mobile").value,
            gender: $("input[name = 'gender']:checked").value,
            level: $("input[name = 'level']:checked").value,
            status: $("input[name = 'status']:checked").value,
            department: $("input[name = 'department']:checked").value,
        }
      }

      $.ajax({
        /* ... */
      }).done(function(response) {
            editedItem.children().first().text(response.put(data))
            editedItem = null;
        })
      $(this).trigger('reset')
    })
  })