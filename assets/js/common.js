//UA判別
var _ua = (function(u) {
  return {
    Tablet: (u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1) ||
      u.indexOf("ipad") != -1 ||
      (u.indexOf("android") != -1 && u.indexOf("mobile") == -1) ||
      (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1) ||
      u.indexOf("kindle") != -1 ||
      u.indexOf("silk") != -1 ||
      u.indexOf("playbook") != -1,
    Mobile: (u.indexOf("windows") != -1 && u.indexOf("phone") != -1) ||
      u.indexOf("iphone") != -1 ||
      u.indexOf("ipod") != -1 ||
      (u.indexOf("android") != -1 && u.indexOf("mobile") != -1) ||
      (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1) ||
      u.indexOf("blackberry") != -1
  }
})(window.navigator.userAgent.toLowerCase());

//デバイス別 viewport 指定
if (_ua.Mobile) {
  $("meta[name='viewport']").attr('content', 'width=device-width, initial-scale=1');
} else if (_ua.Tablet) {
  $("meta[name='viewport']").attr('content', 'width=1200');
} else {
  $("meta[name='viewport']").attr('content', 'width=1200');
}

/**
 * internal linkスムーズスクロール
 */
 $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 10
        }, 1000);
        return false;
      }
    }
  });
});

//ウィンドウ幅で画像を切替える
$(document).ready(function() {
  $(function() {
    var $setElem = $('img'),
      pcName = '_pc',
      spName = '_sp',
      replaceWidth = 767;

    $setElem.each(function() {
      var $this = $(this);

      function imgSize() {
        if (window.innerWidth > replaceWidth) {
          $this.attr('src', $this.attr('src').replace(spName, pcName));
        } else {
          $this.attr('src', $this.attr('src').replace(pcName, spName));
        }
      }
      $(window).resize(function() {
        imgSize();
      });
      imgSize();
    });
  });
});

//UAを確認してbodyにクラス追加
$(document).ready(function() {
  var agent = navigator.userAgent;
  if (agent.search(/iPhone/) != -1) {
    $("body").addClass("iphone");
  } else if (agent.search(/Android/) != -1) {
    $("body").addClass("android");
  }
});

$(document).ready(function () {
  // メニューを開く
  $(document).on('click', '.js-menu-bar', function() {
    $('.js-menu-box').fadeIn('slow');
    $(this).toggleClass('menu-active');
    return false;
  });
  // メニューを閉じる
  $(document).on('click', '.menu-active', function() {
    $('.js-menu-box').fadeOut('slow');
  });
  // タグを開く
  $(document).on('click', '.js-tag-btn', function() {
    $('.js-balloon').fadeIn('slow');
    setTimeout(function() { 
      $('.js-balloon').fadeOut('slow');
    }, 3000);
    return false;
  });

  // 並び替えを開く
  $(document).on('click', '.js-sort-btn', function() {
    $('.js-sort-box').fadeIn('slow');
    $(this).toggleClass('sort-active');
    return false;
  });
  // 並び替えを閉じる
  $(document).on('click', '.sort-active', function() {
    $('.js-sort-box').fadeOut('slow');
  });

  // select
  $(".drop").removeClass("open");
  $('.drop').on('click', function(){ 
    if($("#dropId a").hasClass("add") ==  false && $("#dropId a").hasClass("") ==  false) {
      $("#dropId").addClass("border-none");
    } else {
      $("#dropId").removeClass("border-none");
    }
  })

  if(window.location.pathname == "/" || window.location.pathname == "/index.html") {
    // slider event
    $('.js-mv-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      infinite: true,
      cssEase: 'linear',
      autoplaySpeed: 2000,
      variableWidth: true,
      centerMode: true,
      dots: false,
    });

    // custom slick button
    $('.js-slick-prev').click(function(e){ 
      e.preventDefault(); 
      $('.js-mv-slider').slick('slickPrev');
    } );

    $('.js-slick-next').click(function(e){
      e.preventDefault(); 
      $('.js-mv-slider').slick('slickNext');
    } ); 

    $('.js-youtube-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      infinite: true,
      cssEase: 'linear',
      autoplaySpeed: 1500,
      variableWidth: true,
      centerMode: true,
      dots: false,
      responsive: [{
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
    $('.js-instagram-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      infinite: true,
      cssEase: 'linear',
      autoplaySpeed: 1500,
      variableWidth: true,
      centerMode: true,
      dots: false,
      responsive: [{
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  }

  if(window.location.pathname == "/job-search.html") {
    //accordion event
    $('.toggle').click(function(e) {
      e.preventDefault();
      $(this).toggleClass("active").next().slideToggle();
    });
  }

  // modal box
  if(window.location.pathname == "/" || window.location.pathname == "/index.html" || window.location.pathname == "/occupation.html" || window.location.pathname == "/special.html" || window.location.pathname == "/career-advisor.html" || window.location.pathname == "/service.html") {
    $('.js-modal-open').on('click', function(e){
      e.preventDefault();
      $('#'+$(this).data('modal')).fadeIn("slow");
    })

    $('.close-btn').on('click', function(){
      $('.modal').fadeOut("slow");
    })

    $(window).on('click', function(event){
      if (jQuery.inArray( event.target, $('.modal') ) != "-1") {
        $('.modal').css('display','none');
      }
    })
  }

  if(window.location.pathname == "/job-search.html") {
    var wi = $(window).width(); 
    if(wi > 639) {
      $('.js-modal-open').on('click', function(e){
        e.preventDefault();
        $('#'+$(this).data('modal')).fadeIn("slow");
      })
  
      $('.close-btn').on('click', function(){
        $('.modal').fadeOut("slow");
      })
  
      $(window).on('click', function(event){
        if (jQuery.inArray( event.target, $('.modal') ) != "-1") {
          $('.modal').css('display','none');
        }
      })
    } else if(wi < 639) {
      $('.js-modal-open').on('click', function(e){
        e.preventDefault();
        $('#'+$(this).data('modal')).addClass("modal-show");
      })
      $('.close-btn').on('click', function(){
        $('.modal').removeClass("modal-show");
      })
      $(window).on('click', function(event){
        if (jQuery.inArray( event.target, $('.modal') ) != "-1") {
          $('.modal').css('display','none');
        }
      })
    }
  }

  // slider event
  if(window.location.pathname == "/job-detail.html") {
    $('.js-single-mv-slider').slick({
      autoplay: true,
      arrows: true,
      infinite: true,
      cssEase: 'linear',
      autoplaySpeed: 2000,
      variableWidth: true,
      centerMode: true,
      dots: true,
      responsive: [
				{
					breakpoint: 639,
          settings: {
            variableWidth: false,
            centerMode: false,
          },
				}
      ]
    });
    $('.js-single-slider').slick({
      autoplay: true,
      arrows: true,
      infinite: true,
      cssEase: 'linear',
      autoplaySpeed: 2000,
      dots: true,
    });
  }

});

// Start tabs.js
if(window.location.pathname == "/" || window.location.pathname == "/index.html") {
  $(function(){
    var tabs = function(options) {
      var el = document.querySelector(options.el);
      var tabNavigationLinks = el.querySelectorAll(options.tabNavigationLinks);
      var tabContentContainers = el.querySelectorAll(options.tabContentContainers);
      var activeIndex = 0;
      var initCalled = false;
      var init = function() {
        if (!initCalled) {
          initCalled = true;
          el.classList.remove('no-js');
          for (var i = 0; i < tabNavigationLinks.length; i++) {
            var link = tabNavigationLinks[i];
            handleClick(link, i);
          }
        }
      };
      var handleClick = function(link, index) {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          goToTab(index);
        },1000);
      };
      var goToTab = function(index) {
        if (index !== activeIndex && index >= 0 && index <= tabNavigationLinks.length) {
          tabNavigationLinks[activeIndex].classList.remove('is-active');
          tabNavigationLinks[index].classList.add('is-active');
          tabContentContainers[activeIndex].classList.remove('is-active');
          tabContentContainers[index].classList.add('is-active');
          activeIndex = index;
        }
      };


      // Returns init and goToTab
      return {
        init: init,
        goToTab: goToTab
      };
    };
    window.tabs = tabs;
    var myTabs1 = tabs({
      el: '#tabs1',
      tabNavigationLinks: '.js-tab-link',
      tabContentContainers: '.js-tab-content'
    });
    // Initialise Set 1
    myTabs1.init();
  });
}

// slide movement
if(window.location.pathname == "/" || window.location.pathname == "/index.html" || window.location.pathname == "/occupation.html" || window.location.pathname == "/special.html" || window.location.pathname == "/service.html") {
  var xOffset = 0;
  var isMouseIn = false;
  const slides = document.getElementById("slides");

  setInterval(translate, 0);

  function translate() {
    let offsetIncrementor = isMouseIn ? 0.05 : 0.2;
    if (xOffset >= 200 * 7) xOffset = 0;
    else xOffset = xOffset + offsetIncrementor;
    slides.style.transform = "translateX(-" + xOffset + "px)";
  }

  slides.addEventListener("mouseover", function (event) {
    isMouseIn = true;
  });

  slides.addEventListener("mouseout", function (event) {
    isMouseIn = false;
  });
}

//ページトップへ戻るボタンの処理
$(function() {
	var topBtn = $('.jsPageTop');
	topBtn.hide();
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
		scrollHeight = $(document).height() + 500;
		scrollPosition = $(window).height() + $(window).scrollTop();
		footHeight = $(".footer").innerHeight();
    var windowWidth = $(window).outerWidth();
        if ( scrollHeight - scrollPosition  <= footHeight ) {
          if (windowWidth < 768) {
            $('.jsPageTop').css({
              "bottom": 100,
            });
          } else {
            $(".jsPageTop").css({
              "bottom": footHeight + 25,
            });
          }
          $(".jsPageTop").css({
              "position":"fixed",
          });
          $("body").css({
              "position":"relative",
          });
        } else {
            if (windowWidth < 768) {
              $('.jsPageTop').css({
                "position":"fixed",
                "bottom": 100,
              });
            } else {
              $(".jsPageTop").css({
                "position":"fixed",
                "bottom": 25,
              });
            }
        }
	});
	topBtn.click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
});

