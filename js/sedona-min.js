var mainPage="index.html",hotelsPage="hotels.html",emptyPage="empty.html",path=window.location.pathname,nameCurPage=path.split("/").pop();if(nameCurPage==mainPage){var form=document.querySelector(".search-form"),searchQuantityAdults=document.querySelector("#search-quantity-adults"),searchQuantityChildren=document.querySelector("#search-quantity-children"),popupWindow=document.querySelector(".popup-window");$(function(){$.datepicker.setDefaults($.datepicker.regional.ru),$("#search-date-arrival").datepicker({showOn:"focus",minDate:"0",dateFormat:"dd MM yy"}),$("#search-date-departure").datepicker({showOn:"focus",minDate:"1",dateFormat:"dd MM yy"})}),$("#call-calendar-arrival").click(function(){$("#search-date-arrival").focus()}),$("#call-calendar-departure").click(function(){$("#search-date-departure").focus()}),popupWindow.classList.remove("popup-on"),$("#call-popup").click(function(){popupWindow.classList.toggle("popup-on"),popupWindow.classList.remove("modal-error")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popupWindow.classList.remove("modal-error"),popupWindow.classList.remove("popup-on"))}),form.addEventListener("submit",function(e){(searchQuantityAdults.value<=0||searchQuantityChildren.value<0)&&(e.preventDefault(),popupWindow.classList.remove("modal-error"),popupWindow.offsetWidth=popupWindow.offsetWidth,popupWindow.classList.add("modal-error"))})}if(nameCurPage==hotelsPage){var link=document.querySelector(".up-arrow-js"),sortUp=document.querySelector(".catalog-items"),downLink=document.querySelector(".down-arrow-js"),sortDown=document.querySelector(".catalog-items"),arrowUp=document.querySelector(".up-arrow"),arrowCur=document.querySelector(".current-arrow"),arrowDown=document.querySelector(".down-arrow"),byPrice=document.querySelector(".header-catalog-sorting li:nth-child(1)"),byType=document.querySelector(".header-catalog-sorting li:nth-child(2)"),byRating=document.querySelector(".header-catalog-sorting li:nth-child(3)");link.addEventListener("click",function(e){e.preventDefault(),sortUp.classList.add("catalog-items-js"),arrowUp.classList.add("current-arrow"),arrowDown.classList.remove("current-arrow")}),downLink.addEventListener("click",function(e){e.preventDefault(),sortDown.classList.remove("catalog-items-js"),arrowUp.classList.remove("current-arrow"),arrowDown.classList.add("current-arrow")}),byPrice.addEventListener("click",function(e){e.preventDefault(),byPrice.classList.add("current-sorting"),byType.classList.remove("current-sorting"),byRating.classList.remove("current-sorting")}),byType.addEventListener("click",function(e){e.preventDefault(),byPrice.classList.remove("current-sorting"),byType.classList.add("current-sorting"),byRating.classList.remove("current-sorting")}),byRating.addEventListener("click",function(e){e.preventDefault(),byPrice.classList.remove("current-sorting"),byType.classList.remove("current-sorting"),byRating.classList.add("current-sorting")})}nameCurPage==emptyPage&&$(function(){$("#slider-range-empty").slider({range:!0,min:0,max:3650,values:[0,3e3],slide:function(e,r){$("#amount").val("ОТ   "+r.values[0]+"         |         ДО "+r.values[1])}}),$("#amount").val("ОТ   "+$("#slider-range-empty").slider("values",0)+"         |        ДО "+$("#slider-range-empty").slider("values",1))});
