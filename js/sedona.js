
var mainPage = "index.html";

var hotelsPage = "hotels.html"

var path = window.location.pathname;
var nameCurPage = path.split("/").pop();

if ( nameCurPage == mainPage) {   // если текущая страница основная - выполняется код ниже

// попап
var form = document.querySelector(".search-form");
var searchQuantityAdults = document.querySelector("#search-quantity-adults");
var searchQuantityChildren = document.querySelector("#search-quantity-children");
var popupWindow = document.querySelector(".popup-window");

// календарь

    $(function() {

      $.datepicker.setDefaults($.datepicker.regional['ru']);
      $('#search-date-arrival').datepicker({
        showOn: "focus",
		    minDate: "0",
        dateFormat: "dd MM yy",
       });

      $('#search-date-departure').datepicker({
        showOn: "focus",
		    minDate: "1",
        dateFormat: "dd MM yy",
		});
    });

    $('#call-calendar-arrival').click(function() {
      $('#search-date-arrival').focus();
    });

    $('#call-calendar-departure').click(function() {
      $('#search-date-departure').focus();
    });

// попап

    popupWindow.classList.remove("popup-on");
      $('#call-popup').click(function() {
        popupWindow.classList.toggle("popup-on");
        popupWindow.classList.remove("modal-error");
      });

      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
        popupWindow.classList.remove("modal-error");
        popupWindow.classList.remove("popup-on");
          }
        });

    form.addEventListener("submit", function (evt) {

    if (searchQuantityAdults.value <= 0 || searchQuantityChildren.value < 0 ) {
        evt.preventDefault();
	    popupWindow.classList.remove("modal-error");
      popupWindow.offsetWidth = popupWindow.offsetWidth;
      popupWindow.classList.add("modal-error");
    }
    });
}    // закрывается иф певой страницы

if ( nameCurPage == hotelsPage) {  // если текущая страница отели - выполняется код ниже

    // отели
    var link = document.querySelector(".up-arrow-js");
    var sortUp = document.querySelector(".catalog-items");

    var downLink = document.querySelector(".down-arrow-js");
    var sortDown = document.querySelector(".catalog-items");

    var arrowUp = document.querySelector(".up-arrow");
    var arrowCur = document.querySelector(".current-arrow");

    var arrowDown = document.querySelector(".down-arrow");

    // отели сортировка
    var byPrice = document.querySelector(".header-catalog-sorting li:nth-child(1)");
    var byType = document.querySelector(".header-catalog-sorting li:nth-child(2)");
    var byRating = document.querySelector(".header-catalog-sorting li:nth-child(3)");

    // страница отелей

            link.addEventListener("click", function(event) {
              event.preventDefault();
              sortUp.classList.add("catalog-items-js");
              arrowUp.classList.add("current-arrow");
              arrowDown.classList.remove("current-arrow");
            });

            downLink.addEventListener("click", function(event) {
            event.preventDefault();
            sortDown.classList.remove("catalog-items-js");
            arrowUp.classList.remove("current-arrow");
            arrowDown.classList.add("current-arrow");
            });

    // активная сортировка шапки второй страницы

            byPrice.addEventListener("click", function(event) {
              event.preventDefault();
              byPrice.classList.add("current-sorting");
              byType.classList.remove("current-sorting");
              byRating.classList.remove("current-sorting");
            });

            byType.addEventListener("click", function(event) {
              event.preventDefault();
              byPrice.classList.remove("current-sorting");
              byType.classList.add("current-sorting");
              byRating.classList.remove("current-sorting");
            });

            byRating.addEventListener("click", function(event) {
              event.preventDefault();
              byPrice.classList.remove("current-sorting");
              byType.classList.remove("current-sorting");
              byRating.classList.add("current-sorting");
            });
} // закрывающая скобка иф-а отелей
