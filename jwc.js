document.addEventListener("DOMContentLoaded", function(event) {
  var script = document.createElement("script");
  script.src = "https://lib.baomitu.com/jquery/3.2.1/jquery.min.js";
  script.onload = script.onreadystatechange = function() {
    setTimeout(() => {
      if (location.pathname === '/') {
        injectLogin();
        return;
      }

      const topFrame = window.frames['topFrame'];
      topFrame.changeTop = function (obj) {
        obj.cIndex = obj.getAttribute('cIndex');
        topFrame.changeTop_(obj, topFrame.arrayHref[obj.cIndex-0+1][1]);
      }
    }, 500);
  };
  document.body.appendChild(script);
});

function injectLogin() {
  $('[name="zjh"]').val('A19140010')
  $('[name="mm"]').val('A19140010')
}
