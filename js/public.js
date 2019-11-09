function tabs(bnt, cen) {
  var Tab = $(bnt);
  var TabBnt = Tab.children("li");
  var TabCen = $(cen);
  TabBnt.click(function() {
    $(this).addClass("active").siblings().removeClass("active");
    TabCen.hide().eq($(this).index()).show();
  });
}
