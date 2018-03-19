$(document).ready(function (){
    $("body").on("click", "#text-enter-button", function (event) {
        var burgerData = {
            name: $("#enter_text").val().trim()
        };
        $.post("/", burgerData).done(function (data) {
            getCall();
        });
    });

    function getCall() {
        $.get("/").done(function (data) {
            var HTML = $.parseHTML(data, document, true);
            var bodyHTML = HTML[15].innerHTML
            console.log(HTML);
            $(".main-container").html(bodyHTML);
        });
    }
});