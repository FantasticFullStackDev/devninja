
window.onload = function () {
	Particles.init({
	  selector: ".background"
	});
	if($(window).scrollTop() > 20){
	  nav.classList.add("sticky");
	  scrollBtn.style.display = "block";
	}else{
	  nav.classList.remove("sticky");
	  scrollBtn.style.display = "none";
	}
  };
  var particles = Particles.init({
	selector: ".background",
	color: ["#faebd7", "white", "burlywood"],
	connectParticles: false,
	responsive: [
	  {
		breakpoint: 768,
		options: {
		  color: ["#faebd7", "white", "burlywood"],
		  maxParticles: 43,
		  connectParticles: false
		}
	  }
	]
  });

// Image Lazy Loading
window.addEventListener("DOMContentLoaded", function() {
    var lazy = document.getElementsByClassName('lazy');
    initializeLoad(lazy);
  });
  
  function initializeLoad(imgs) {
    if (imgs.length > 0) {
      if ('IntersectionObserver' in window) {
        lazyLoad(imgs);
      } else {
        loadIntersection(imgs);
      }
    } else {
      return;
    }
  }
  
  function lazyLoad(lazy) {
    var options = {
      threshold: 0.8
    }
  
    var observer = new IntersectionObserver(function(entries, self) {
      for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        if (entry.isIntersecting) {
          var src = entry.target.getAttribute('data-src');
          TweenMax.set(entry.target, {attr:{src:src}});
          TweenMax.fromTo(entry.target, 1, {css:{opacity:0, y:"-50px"}}, {css:{opacity:1, y:0}}, 1.5);
          self.unobserve(entry.target);
        }
      }
    }, options)
    for (var i = 0; i < lazy.length; i++) {
      var lazyItem = lazy[i];
      observer.observe(lazyItem);
    }
  }
  
  function loadIntersection(lazy) {
    var io = document.createElement('script');
    io.src = "https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver";
    document.head.appendChild(io);
    return io.onload = function() {
      lazyLoad(lazy);
    }
  }

$(window).scroll(function(e){
    parallax();
});

function parallax(){
    var scrolled = $(window).scrollTop();
    $('.home').css('top',-(scrolled*0.0315)+'rem');
    $('.home > .home-content').css('padding-top',(scrolled*0.05)+'rem');
    $('.home > .home-content').css('opacity',1-(scrolled*.00175));
};

/***** GSAP Scroll Animation ******/

var letterLoad = {
	".one span" : false,
	".two span" : false,
	".three span" : false,
}

$(window).scroll(function(e){
  value = $(window).scrollTop();
  if(value > 1600 && !letterLoad[".one span"])
    letterLoading(".one span");
  if (value > 2500 && !letterLoad[".two span"])
    letterLoading(".two span");
  if (value > 3200 && !letterLoad[".three span"])
    letterLoading(".three span");
});

// Letter GSAP Loading one
function letterLoading (target) {
  letterLoad[target] = true;
  let tl = gsap.timeline();
  tl.fromTo(target, {
      x: -150,
      y: -50,
      rotation: -180,
      scale: 3
  }, {
      x: 20,
      y: 20,
      rotation: 30,
      scale:  0.3,
      duration: 0.24,
      stagger: 0.05
  })
  .to(target, {
      x: 0,
      y: 0,
      scale: 1,
      rotation: 0,
      duration: 0.16,
      stagger: 0.05
  }, 0.24) // start after the very first one ends
  .to(target, {
      opacity: 1,
      duration: 0.4,
      stagger: 0.05
  }, 0);
}

// Portfolio Animation
$(document).ready( function() {

	var itemSelector = '.grid-item'; 

	var $container = $('#container').isotope({
		itemSelector: itemSelector,
		masonry: {
		  columnWidth: itemSelector,
		  isFitWidth: true
		}
	});

	//Ascending order
	var responsiveIsotope = [
		[480, 7],
		[720, 10]
	];

	var itemsPerPageDefault = 12;
	var itemsPerPage = defineItemsPerPage();
	var currentNumberPages = 1;
	var currentPage = 1;
	var currentFilter = '*';
	var filterAtribute = 'data-filter';
	var pageAtribute = 'data-page';
	var pagerClass = 'isotope-pager';

	function changeFilter(selector) {
		$container.isotope({
			filter: selector
		});
	}


	function goToPage(n) {
		currentPage = n;

		var selector = itemSelector;
			selector += ( currentFilter != '*' ) ? '['+filterAtribute+'="'+currentFilter+'"]' : '';
			selector += '['+pageAtribute+'="'+currentPage+'"]';

		changeFilter(selector);
	}

	function defineItemsPerPage() {
		var pages = itemsPerPageDefault;

		for( var i = 0; i < responsiveIsotope.length; i++ ) {
			if( $(window).width() <= responsiveIsotope[i][0] ) {
				pages = responsiveIsotope[i][1];
				break;
			}

			

		}

		return pages;
	}
	
	function setPagination() {

		var SettingsPagesOnItems = function(){

			var itemsLength = $container.children(itemSelector).length;
			
			var pages = Math.ceil(itemsLength / itemsPerPage);
			var item = 1;
			var page = 1;
			var selector = itemSelector;
				selector += ( currentFilter != '*' ) ? '['+filterAtribute+'="'+currentFilter+'"]' : '';
			
			$container.children(selector).each(function(){
				if( item > itemsPerPage ) {
					page++;
					item = 1;
				}
				$(this).attr(pageAtribute, page);
				item++;
			});

			currentNumberPages = page;

		}();

		var CreatePagers = function() {

			var $isotopePager = ( $('.'+pagerClass).length == 0 ) ? $('<div class="'+pagerClass+'"></div>') : $('.'+pagerClass);

			$isotopePager.html('');
			
			for( var i = 0; i < currentNumberPages; i++ ) {
				var $pager = $('<a href="javascript:void(0);" class="pager" '+pageAtribute+'="'+(i+1)+'"></a>');
					$pager.html(i+1);
					
					$pager.click(function(){
						var page = $(this).eq(0).attr(pageAtribute);
						goToPage(page);
					});

				$pager.appendTo($isotopePager);
			}

			$container.after($isotopePager);

		}();

	}

	setPagination();
	goToPage(1);

	//Adicionando Event de Click para as categorias
	$('.filters a').click(function(){
		var filter = $(this).attr(filterAtribute);
		currentFilter = filter;

		setPagination();
		goToPage(1);


	});

	//Evento Responsivo
	$(window).resize(function(){
		itemsPerPage = defineItemsPerPage();
		setPagination();
	});

	

});



 $(document).ready( function() {   

// filter items on button click
$('.filter-button-group').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $('.grid').isotope({ filter: filterValue });
  $('.filter-button-group li').removeClass('active');
  $(this).addClass('active');
});
    })
	

 $(document).ready( function() {   

// filter items on button click
$('.isotope-pager').on( 'click', 'a', function() {
  var filterValue = $(this).attr('data-page');

  $('.isotope-pager a').removeClass('active');
  $(this).addClass('active');
});
    })