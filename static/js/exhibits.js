$(document).ready(function(){$(".button-collapse").sideNav(),$("html").removeClass("preload"),$(".gonzofiy").gonzofiy(),$("div.modal-trigger").click(function(){$($(this).data("modal")).length&&$($(this).data("modal")).openModal()})}),function(n){n.fn.gonzofiy=function(i){var t,a,o=this,e=!1,s=n.extend({menu:".table-of-contents",defaultid:"#home",animout:"fadeOutLeft",animin:"fadeInLeft"},i);t=n(s.menu),n.fn.hidesection=function(i){this.addClass(s.animout+" animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){n(this).hide().removeClass(s.animout+" animated"),"function"==typeof i&&i.call(this)})},n.fn.showsection=function(i){this.show().addClass(s.animin+" animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){n(this).removeClass(s.animin+" animated"),"function"==typeof i&&i.call(this)}),a=n(this)},n.fn.setmenu=function(i){this.find(".active").removeClass("active"),n('a[href="'+i+'"]').addClass("active")},n(window).bind("hashchange",function(){var i=n("#"+window.location.hash.substr(1)).length?"#"+window.location.hash.substr(1):s.defaultid,d=n("main").find(o,".active");e||!d.length||d.hasClass("active")||(e=!0,t.setmenu(i),a?a.hidesection(function(){n(i).showsection(function(){e=!1})}):n(i).showsection(function(){e=!1}))}),t.find("a").each(function(){n(this).click(function(){return e?!1:void 0})}),n(window).trigger("hashchange")}}(jQuery);