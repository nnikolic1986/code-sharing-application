// SETUP 3 ACE WINDOWS
var htmlEditor = ace.edit("HTMLeditor");
var cssEditor = ace.edit("CSSeditor");
var jsEditor = ace.edit("JSeditor");
jsEditor.setTheme("ace/theme/terminal");
jsEditor.session.setMode("ace/mode/javascript");
cssEditor.setTheme("ace/theme/terminal");
cssEditor.session.setMode("ace/mode/css");
htmlEditor.setTheme("ace/theme/terminal");
htmlEditor.session.setMode("ace/mode/html");



$(document).ready(function(){
    recreateIframe();

    $("textarea").keyup(function() {
        //recreateIframe();
        updateContent();
    });

    $("#navbar-save").on("click", () => {
        $("#save-project-btn").trigger("click");
    });

    $("#navbar-publish").on("click", ()=> {
        $("#publish-project-btn").trigger("click");
    });

    $("#write-css").on("click", () => {
        $("#write-html").show();
        $("#write-js").show();
        $("#write-css").hide();
        $("#CSS-window-container").show();
        $("#HTML-window-container").hide();
        $("#JS-window-container").hide();
    });

    $("#write-js").on("click", () => {
        $("#write-html").show();
        $("#write-css").show();
        $("#write-js").hide();
        $("#CSS-window-container").hide();
        $("#HTML-window-container").hide();
        $("#JS-window-container").show();
    });

    $("#write-html").on("click", () => {
        $("#write-css").show();
        $("#write-js").show();
        $("#write-html").hide();
        $("#CSS-window-container").hide();
        $("#HTML-window-container").show();
        $("#JS-window-container").hide();
    });

    $(window).resize(() => {
        if ($(window).width() > 800) {
          $(".edit-window-container").show();
          $(".lg-navbar").show();
        }
    });
});

function recreateIframe() {
  var source = "";
  if ($('iframe')) {
    source += $('iframe').attr('src');
    iframeRemover($('iframe'));
  }

  var newIframe = $('<iframe>');
  newIframe.attr('id', 'results-frame');
  newIframe.attr('src', source);

  $('.display-container').append(newIframe);
  updateContent();
}

function updateContent () {
    $("#writeHTML").val(htmlEditor.getValue());
    $("#writeJS").val(jsEditor.getValue());
    $("#writeCSS").val(cssEditor.getValue());
    $("#hiddenHTML").val(htmlEditor.getValue());
    $("#hiddenJS").val(jsEditor.getValue());
    $("#hiddenCSS").val(cssEditor.getValue());
    $("#projectName").val($("#navbar-project-name-input").val());
    $("#hiddenProjectName").val($("#projectName").val());
}

function iframeRemover(iframe) {
    iframe.remove();
}
