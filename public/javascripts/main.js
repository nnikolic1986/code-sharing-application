
$(document).ready(function(){

    // Files to appear and disappear login and sign-up
    // $(".main-content").click(function(){
    //     $('#login-form').hide();
    //   });

    // $('#main-overlay').click(function(){
    //     $('#main-overlay').hide();
    //     $('#signup-box').hide();
    //     $('#project-signup-box').hide();
    //   });

    // $(".signup-link").on("click", function(){
    //     $("#signup-box").css("display", "flex");
    //     $("#login-form").css("display", "none");
    //     $("#main-overlay").css("display", "block");
    // });

    // $("#main-signup").on("click", function(){
    //     $("#main-overlay").css("display", "none");
    // });


    // AJAX request to check user log-in status on new project

});

function isUserLoggedIn() {
    $.ajax({
        url: "/api/user",
        method: "get",
        success: (res) => {
            if (res.user) {

            }
            serveSignup(res.user);
        },
        failure: (err) => {
            console.log(err);
        }
    });
}

function serveSignup (bool) {
    if (!bool) {
        $("#project-signup-box").css("display", "flex");
        $("#main-overlay").css("display", "block");
     }
}

function getInfo() {
    console.log("HOLA");
    $("#results-div").remove();
    $("#results-box").append("<div id='results-div'></h1>");
    const penHTML = $("#pen-HTML").val();
    const penCSS = $("#pen-CSS").val();
    const penJS = $("#pen-JS").val();
    console.log("<style>" + penCSS + "</style>");
    $("#results-div").append("<style>" + penCSS + "</style>");
    $("#results-div").append(penHTML);
    $("#results-div").append("<script>" + penJS + "</script>");
  }
