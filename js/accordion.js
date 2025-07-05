jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('nav .accordion-hamburger-title').removeClass('active');
		jQuery('nav .accordion-hamburger-title').attr('aria-expanded', 'false');
		jQuery('nav .accordion-hamburger').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-hamburger-title').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Add aria-expanded indicator
			jQuery(this).attr('aria-expanded', 'true');
			// Open up the hidden content panel
			jQuery('nav ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('nav .accordion-hamburger-title-2').removeClass('active');
		jQuery('nav .accordion-hamburger-title-2').attr('aria-expanded', 'false');
		jQuery('nav .accordion-hamburger-2').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-hamburger-title-2').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Add aria-expanded indicator
			jQuery(this).attr('aria-expanded', 'true');
			// Open up the hidden content panel
			jQuery('nav ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('nav .accordion-hamburger-title-3').removeClass('active');
		jQuery('nav .accordion-hamburger-title-3').attr('aria-expanded', 'false');
		jQuery('nav .accordion-hamburger-3').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-hamburger-title-3').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Add aria-expanded indicator
			jQuery(this).attr('aria-expanded', 'true');
			// Open up the hidden content panel
			jQuery('nav ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('nav .accordion-hamburger-title-4').removeClass('active');
		jQuery('nav .accordion-hamburger-title-4').attr('aria-expanded', 'false');
		jQuery('nav .accordion-hamburger-4').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-hamburger-title-4').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Add aria-expanded indicator
			jQuery(this).attr('aria-expanded', 'true');
			// Open up the hidden content panel
			jQuery('nav ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.search-accordion-link').removeClass('active');
		jQuery('.search-accordion-link').attr('aria-expanded', 'false');
		jQuery('.site-search').slideUp(300).removeClass('open');
	}

	jQuery('.search-accordion-link').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Add aria-expanded indicator
			jQuery(this).attr('aria-expanded', 'true');
			// Open up the hidden content panel
			jQuery('nav ' + currentAttrValue).slideDown(300).addClass('open');
			// Hiding the Hamburger
			jQuery('nav .accordion-hamburger-title').removeClass('active');
			jQuery('nav .accordion-hamburger-title').attr('aria-expanded', 'false');
			jQuery('nav .accordion-hamburger').slideUp(300).removeClass('open');
		}

		e.preventDefault();
	});
});

jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.location-accordions .location-accordion-title').removeClass('active');
		jQuery('.location-accordions .location-accordion-title').attr('aria-expanded', 'false');
		jQuery('.location-accordions .location-accordion-content').slideUp(450).removeClass('open');
	}

	jQuery('.location-accordion-title').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Add aria-expanded indicator
			jQuery(this).attr('aria-expanded', 'true');
			// Open up the hidden content panel
			jQuery('.location-accordions ' + currentAttrValue).slideDown(450).addClass('open');
		}

		e.preventDefault();
	});
});

jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.individual-faq .faq-accordion-title').removeClass('active');
		jQuery('.individual-faq .faq-accordion-title').attr('aria-expanded', 'false');
		jQuery('.individual-faq .faq-accordion-content').slideUp(250).removeClass('open');
	}

	jQuery('.faq-accordion-title').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Add aria-expanded indicator
			jQuery(this).attr('aria-expanded', 'true');
			// Open up the hidden content panel
			jQuery('.individual-faq ' + currentAttrValue).slideDown(250).addClass('open');
		}

		e.preventDefault();
	});
});

jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.fixednav-trigger').removeClass('active');
		jQuery('.fixednav-trigger').attr('aria-expanded', 'false');
		jQuery('.fixed-nav-container .fixed-nav-content').slideUp(450).removeClass('open');
		jQuery('.sub-menu-content').removeClass('active');
		jQuery('#newnav').removeClass('expanded');
		jQuery('.fixednav-trigger').text("Menu");
	}

	jQuery('.fixednav-trigger').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Add aria-expanded indicator
			jQuery(this).attr('aria-expanded', 'true');
			// Open up the hidden content panel
			jQuery('.fixed-nav-container ' + currentAttrValue).slideDown(450).addClass('open');
			jQuery('.sub-menu-content').addClass('active');
			jQuery('#newnav').addClass('expanded');
			jQuery('.fixednav-trigger').text("Home Health & Hospice");
		}

		e.preventDefault();
	});
});

jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.fixednav-trigger-pd').removeClass('active');
		jQuery('.fixednav-trigger-pd').attr('aria-expanded', 'false');
		jQuery('.fixed-nav-container .fixed-nav-content').slideUp(450).removeClass('open');
		jQuery('.sub-menu-content').removeClass('active');
		jQuery('#newnav').removeClass('expanded');
		jQuery('.fixednav-trigger-pd').text("Menu");
	}

	jQuery('.fixednav-trigger-pd').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Add aria-expanded indicator
			jQuery(this).attr('aria-expanded', 'true');
			// Open up the hidden content panel
			jQuery('.fixed-nav-container ' + currentAttrValue).slideDown(450).addClass('open');
			jQuery('.sub-menu-content').addClass('active');
			jQuery('#newnav').addClass('expanded');
			jQuery('.fixednav-trigger-pd').text("Private Duty Services");
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.fixednav-trigger-2').removeClass('active');
		jQuery('.fixednav-trigger-2').attr('aria-expanded', 'false');
		jQuery('.fixed-nav-container .fixed-nav-content-2').slideUp(450).removeClass('open');
	}

	jQuery('.fixednav-trigger-2').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Add aria-expanded indicator
			jQuery(this).attr('aria-expanded', 'true');
			// Open up the hidden content panel
			jQuery('.fixed-nav-container ' + currentAttrValue).slideDown(450).addClass('open');
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.p-expander .p-expander-link').removeClass('active');
		jQuery('.p-expander .p-expander-link').attr('aria-expanded', 'false');
		jQuery('.p-expander-link-holder').removeClass('fade');
		jQuery('.p-expander .p-expander-content').slideUp(450).removeClass('open');
		jQuery('.p-expander .p-expander-link').text("Read More");
	}

	jQuery('.p-expander-link').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Adjust fade height
			jQuery('.p-expander-link-holder').addClass('fade');
			// Add aria-expanded indicator
			jQuery(this).attr('aria-expanded', 'true');
			// Open up the hidden content panel
			jQuery('.p-expander ' + currentAttrValue).slideDown(450).addClass('open');
			// Swap text inside of Read More
			jQuery(this).text("Read Less");
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.location-search-accordion .accordion-section-title3').removeClass('active');
		jQuery('.location-search-accordion .accordion-section-title3').attr('aria-expanded', 'false');
		jQuery('.location-search-accordion .accordion-section-content3').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-section-title3').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Add aria-expanded indicator
			jQuery(this).attr('aria-expanded', 'true');
			// Open up the hidden content panel
			jQuery('.location-search-accordion ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.location-search-accordion .accordion-section-title').removeClass('active');
		jQuery('.location-search-accordion .accordion-section-title').attr('aria-expanded', 'false');
		jQuery('.location-search-accordion .accordion-section-content').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-section-title').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Add aria-expanded indicator
			jQuery(this).attr('aria-expanded', 'true');
			// Open up the hidden content panel
			jQuery('.location-search-accordion ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.location-search .mobile-loc-search-button').removeClass('active');
		jQuery('.location-search .mobile-loc-search-button').attr('aria-expanded', 'false');
		jQuery('.location-search .mobile-loc-search-button').text("Search Locations");
		jQuery('.location-search #mobile-loc-search').slideUp(300).removeClass('open');
	}

	jQuery('.mobile-loc-search-button').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Add aria-expanded indicator
			jQuery(this).attr('aria-expanded', 'true');
			// Change locations search button text
			jQuery(this).text("Hide Location Search");
			// Open up the hidden content panel
			jQuery('.location-search ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function () {
function close_accordion_section() {
	jQuery(this).blur();
		jQuery('.hospice-accordion-header').attr('aria-expanded', 'false');
		jQuery('.faq-list li div').slideUp(300);
	}

	jQuery('.hospice-accordion-header').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = '#'+jQuery(this).attr('aria-controls');

		if (jQuery(this).attr('aria-expanded') === 'true') {
			close_accordion_section();
		} else {
			close_accordion_section();
			jQuery(this).blur();
			// Add active class to section title
			// Add aria-expanded indicator
			jQuery(this).attr('aria-expanded', 'true');
			// Open up the hidden content panel
			jQuery(currentAttrValue).slideDown(300);
		}

		e.preventDefault();
	});});