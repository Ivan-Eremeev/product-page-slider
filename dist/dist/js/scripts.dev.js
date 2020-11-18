"use strict";

$(document).ready(function () {
  function slider(slider, sliderFor) {
    slider.slick({
      slidesToShow: 4,
      // Сколько слайдов показывать на экране
      slidesToScroll: 1,
      // Сколько слайдов пролистывать за раз
      asNavFor: sliderFor,
      // Связь со слайдерами
      dots: false,
      // Пагинация
      arrows: true,
      // Стрелки
      // speed: 500, // Скорость перехода слайдов
      // autoplay: false, // Автопрокрутка
      // autoplaySpeed: 2000, // Скорость автопрокрутки
      centerMode: true,
      // Задает класс .slick-center слайду в центре
      focusOnSelect: true,
      // Выбрать слайд кликом
      infinite: true,
      // Зацикленное пролистывание
      // vertical: false, // Вертикальный слайдер
      // rtl: false, // Слайды листаются справа налево
      centerPadding: '0px',
      // Отступы слева и справа чтоб увидеть часть крайних слайдов
      // adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
      variableWidth: true,
      // Подгоняет ширину слайдов под размер элемента,
      swipe: true,
      // Перелистывание пальцем
      draggable: false,
      // Перелистывание мышью
      responsive: [// Адаптация
      {
        breakpoint: 992,
        settings: {
          arrows: false
        }
      }, {
        breakpoint: 720,
        settings: {
          arrows: false
        }
      }],
      lazyLoad: 'ondemand' // Отложенная загрузка изображений. В тэг надо добавлять атрибут <img data-lazy="img/image.png"/>

    });
    sliderFor.slick({
      slidesToShow: 1,
      // Сколько слайдов показывать на экране
      slidesToScroll: 1,
      // Сколько слайдов пролистывать за раз
      dots: false,
      // Пагинация
      arrows: true,
      // Стрелки
      infinite: true,
      // Зацикленное пролистывание
      fade: true,
      // Плавный переход (анимация исчезновения появления) В false будет листаться
      asNavFor: slider // Связь со слайдерами

    });
  }

  ;
  slider($('#productPageSliderNav'), $('#productPageSliderFor'));
});