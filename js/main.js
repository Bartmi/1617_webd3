/**
 * @author    Olivier Parent
 * @copyright Copyright © 2015-2016 Artevelde University College Ghent
 * @license   Apache License, Version 2.0
 */
!function(t){"use strict";function e(t){function e(){return console.log(this.href,window.location.host),!a.test(this.href)}var a=new RegExp("/"+window.location.host+"/");t(".c-page a[href]").filter(e).attr("target","_blank");var n=t(".highlight > pre > code");n.each(function(){t(this).parents(".highlight").addClass("language-"+t(this).data("lang"))});var d=t("aside.list-group"),i=d.children(".list-group-item");i.length<=1&&d.hide();var o=t("#table-of-contents"),r=t(".content").children("h2, h3, hr"),h=o.children(".dropdown-menu");r.length?(r.each(function(){var e=t(this),a=e.prop("tagName").toLowerCase();if("hr"===a)var n=t("<div>").addClass("dropdown-divider");else{e.prepend;var n=t("<a>").attr("href","#"+e.attr("id")),d=n.clone().addClass("heading-link fa fa-bookmark-o");n.addClass("dropdown-item").attr("data-counter",a+"-counter").text(e.text()),"h2"===a&&n.css("font-weight","bold"),e.prepend(d)}h.append(n)}),t("body").scrollspy({target:"#table-of-contents"})):o.hide();var l=t(".timeline__content[data-date], .timeline__content[data-week]");l.each(function(){moment.locale(t("html").attr("lang"));var e=t(this).data("date"),a=t(this).data("week"),n="";n="undefined"==typeof e?t("<div>").addClass("timeline__date").text("Week "+a):t("<time>").addClass("timeline__date").text(e).attr("datetime",t(this).data("date")),t(this).after(n)})}t(document).ready(e)}(jQuery);