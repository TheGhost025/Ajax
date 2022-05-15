$.ajax({
    url: "",
    type: "POST",
    data: {
        id: $("#id").value,
        name: $("#name").value,
        email: $("#email").value,
        birth: $("#date").value,
        gpa: $("#gpa").value,
        mobile_number: $("#mobile").value,
        gender: $("input[name = 'gender']:checked").value,
        level: $("input[name = 'level']:checked").value,
        status: $("input[name = 'status']:checked").value,
        department: $("input[name = 'department']:checked").value,
    },
    beforeSend: function (xhr) {
        xhr.setRequestHeader("X-CSRFToken", csrftoken);
    },
});