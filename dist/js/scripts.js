$(document).ready(function () {
  
  function slider(slider,sliderFor) {
    if (slider.length && sliderFor.length) {
      slider.slick({
        slidesToShow: 5, // Сколько слайдов показывать на экране
        slidesToScroll: 1, // Сколько слайдов пролистывать за раз
        asNavFor: sliderFor, // Связь со слайдерами
        dots: false, // Пагинация
        arrows: true, // Стрелки
        centerMode: true, // Задает класс .slick-center слайду в центре
        focusOnSelect: true, // Выбрать слайд кликом
        infinite: true, // Зацикленное пролистывание
        centerPadding: '0px', // Отступы слева и справа чтоб увидеть часть крайних слайдов
        swipe: true, // Перелистывание пальцем
        draggable: false, // Перелистывание мышью
        responsive: [ // Адаптация
          {
          breakpoint: 500,
            settings: {
              slidesToShow: 3, // Сколько слайдов показывать на экране
            }
          }
        ],
        prevArrow: '<div class="productPageSliderNav_arrow productPageSliderNav_arrow--prev">',
        nextArrow: '<div class="productPageSliderNav_arrow productPageSliderNav_arrow--next">',
      });
      
      sliderFor.slick({
        slidesToShow: 1, // Сколько слайдов показывать на экране
        slidesToScroll: 1, // Сколько слайдов пролистывать за раз
        dots: false, // Пагинация
        arrows: true, // Стрелки
        infinite: true, // Зацикленное пролистывание
        fade: true, // Плавный переход (анимация исчезновения появления) В false будет листаться
        asNavFor: slider, // Связь со слайдерами
        draggable: false, // Перелистывание мышью
        adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
        prevArrow: '<div class="productPageSliderFor_arrow productPageSliderFor_arrow--prev">',
        nextArrow: '<div class="productPageSliderFor_arrow productPageSliderFor_arrow--next">',
      });
    };

    $.fancybox.defaults.thumbs.autoStart = true;

    $().fancybox({
      selector : '#productPageSliderFor .slick-slide:not(.slick-cloned) div .productPageSlider_link',
      backFocus : false,
      loop: true, // Зацикленный просмотр
      buttons: [ // Кнопки в верхней панели
        "close"
      ],
      afterShow : function( instance, current ) {
        current.opts.$orig.closest(".slick-initialized").slick('slickGoTo', parseInt(current.index), true);
      }
    });
    
  }

  slider($('#productPageSliderNav'),$('#productPageSliderFor'));

});