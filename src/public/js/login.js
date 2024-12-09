
function handleLoginBtn(){
    $("#loginBtn").on("click", function(event) {
        event.preventDefault();
        let email = $("#email").val();
        let password = $("#password").val();

        $.ajax({
            url: `${window.location.origin}/login`,
            method: "POST",
            data: {email: email, password: password},
            success: function(data) {
                window.location.href = "/";
            },
            error: function(err) {
                alert("Sua senha ou e-mail está incorreta!");
            }
        })
    });
}
$(document).ready(function() {
    handleLoginBtn();
});