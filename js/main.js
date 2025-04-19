(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);

    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(window).width() > 992) {
            if ($(this).scrollTop() > 45) {
                $('.sticky-top .container').addClass('shadow-sm').css('max-width', '100%');
            } else {
                $('.sticky-top .container').removeClass('shadow-sm').css('max-width', $('.topbar .container').width());
            }
        } else {
            $('.sticky-top .container').addClass('shadow-sm').css('max-width', '100%');
        }
    });

    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: false,
        loop: true,
        margin: 0,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });

    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        responsiveClass: true,
        responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 2 },
            1200: { items: 2 }
        }
    });

    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        responsiveClass: true,
        responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 2 },
            1200: { items: 2 }
        }
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Show More Services Button
    document.addEventListener("DOMContentLoaded", function () {
        var showMoreBtn = document.getElementById("showMoreBtn");
        var moreServices = document.getElementById("more-services");

        if (showMoreBtn && moreServices) {
            showMoreBtn.addEventListener("click", function (event) {
                event.preventDefault();
                moreServices.style.display = "flex";
                this.style.display = "none";
            });
        }
    });

    // FAQ Accordion Script
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll('.faq-question').forEach(button => {
            button.addEventListener('click', function () {
                const answer = this.nextElementSibling;
                const icon = this.querySelector('.faq-icon');

                if (answer.style.display === "block") {
                    answer.style.display = "none";
                    icon.textContent = "+";
                } else {
                    document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = "none");
                    document.querySelectorAll('.faq-icon').forEach(ic => ic.textContent = "+");

                    answer.style.display = "block";
                    icon.textContent = "−";
                }
            });
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
        const accordionContainer = document.querySelector(".accordion-basics");

        if (accordionContainer) {
            const accordions = accordionContainer.querySelectorAll(".accordion");

            accordions.forEach((accordion) => {
                accordion.addEventListener("click", function () {
                    // Close all other panels within this specific accordion group
                    accordions.forEach((acc) => {
                        if (acc !== this) {
                            acc.classList.remove("active");
                            acc.nextElementSibling.classList.remove("show");
                        }
                    });

                    // Toggle the clicked accordion
                    this.classList.toggle("active");
                    const panel = this.nextElementSibling;
                    panel.classList.toggle("show");
                });
            });
        }
    });
    document.addEventListener("DOMContentLoaded", function () {
        const faqItems = document.querySelectorAll(".faq-stock-market-basics-item h3");

        faqItems.forEach(item => {
            item.addEventListener("click", function () {
                const parent = this.parentElement;
                parent.classList.toggle("active");

                // Close other open items
                document.querySelectorAll(".faq-stock-market-basics-item").forEach(faq => {
                    if (faq !== parent) {
                        faq.classList.remove("active");
                    }
                });
            });
        });
    });

    // Pricing Toggle Logic for fantastic equity calls service
    document.addEventListener("DOMContentLoaded", function () {
        const toggleButtons = document.querySelectorAll('.toggle-btn');

        const planPrices = {
            monthly: {
                basic: '🔥 ₹3,499/- month',
                advanced: '🔥 ₹3,599/- month',
                premium: '🔥 ₹3,699/- month'
            },
            quarterly: {
                basic: '🔥 ₹9,999/- / 3 months',
                advanced: '🔥 ₹10,299/- / 3 months',
                premium: '🔥 ₹10,599/- / 3 months'
            },
            yearly: {
                basic: '🔥 ₹34,999/- / year',
                advanced: '🔥 ₹35,499/- / year',
                premium: '🔥 ₹35,999/- / year'
            }
        };

        toggleButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Remove 'active' from all buttons
                toggleButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                const selectedPlan = this.getAttribute('data-plan');

                document.querySelector('.basic .new-price').textContent = planPrices[selectedPlan].basic;
                document.querySelector('.advanced .new-price').textContent = planPrices[selectedPlan].advanced;
                document.querySelector('.premium-plan .new-price').textContent = planPrices[selectedPlan].premium;
            });
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('contactForm').addEventListener('submit', async function(e) {
        e.preventDefault();

        const formData = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          mobile: document.getElementById('mobile').value
        };

        const scriptURL = 'https://script.google.com/macros/s/AKfycbyS3FN9JRX5R0-z-6SXAwKbKYpjemvXdckQhCz0CDfEra8NJV8Dk0hBspz9QAfabNv4Sg/exec';

        try {
          await fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' },
            mode: 'no-cors'
          });
          alert('Form submitted successfully!');
          document.getElementById('contactForm').reset();
        } catch (error) {
          console.error('Error!', error);
          alert('Error submitting form');
        }
      });
    });


document.addEventListener('DOMContentLoaded', function() {
    const riskForm = document.getElementById('riskForm');
    const submitBtn = document.getElementById('submit-risk');

    riskForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Analyzing...';

        // Validate all required fields are answered
        let allAnswered = true;
        for (let i = 1; i <= 20; i++) {
            if (!document.getElementById(`q${i}`).value) {
                allAnswered = false;
                break;
            }
        }

        if (!allAnswered) {
            alert('Please answer all questions before submitting.');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Calculate My Risk Profile';
            return;
        }

        // Collect all answers with validation
        const answers = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            mobile: document.getElementById('mobile').value.trim(),
            timestamp: new Date().toISOString()
        };

        // Add all question answers with fallback values
        for (let i = 1; i <= 20; i++) {
            answers[`q${i}`] = document.getElementById(`q${i}`).value || "0";
        }

        // Calculate Risk Score (Sum of all values)
        let totalScore = 0;
        for (let i = 1; i <= 20; i++) {
            totalScore += parseInt(answers[`q${i}`]) || 0;
        }

        // Determine Risk Profile
        let riskProfile;
        if (totalScore >= 80) {
            riskProfile = "Aggressive";
        } else if (totalScore >= 50) {
            riskProfile = "Moderate";
        } else {
            riskProfile = "Conservative";
        }

        // Add to submission data
        answers.riskScore = totalScore;
        answers.riskProfile = riskProfile;

        // Debug: Verify all questions are collected
        console.log("Collected answers:", answers);
        for (let i = 1; i <= 20; i++) {
          console.log(`Q${i}:`, answers[`q${i}`],
                     "Element:", document.getElementById(`q${i}`));
        }

        // Debug: Log the data being sent
        console.log("Submitting data:", answers);



        try {
            // Send to Google Sheets
            const response = await fetch('https://script.google.com/macros/s/AKfycbw-1_NPhZ60M_Bl9_XZBAOx1YM3knZm_JCUNQEJcL4v5Ok7vj8KMVGYfP8UjRvWlTEZ/exec', {
                method: 'POST',
                body: JSON.stringify(answers),
                headers: { 'Content-Type': 'application/json' },
                mode: 'no-cors'
            });

            // Show Result to User
            alert(`Your Risk Profile: ${riskProfile}\nScore: ${totalScore}/100`);
            riskForm.reset();
        } catch (error) {
            console.error('Error:', error);
            alert('Submission failed. Please try again or contact support.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Calculate My Risk Profile';
        }
    });
});

const form = document.getElementById('CREDIT-AMOUNT-form');
const amountSpan = document.getElementById('CREDIT-AMOUNT-amount'); // Fixed ID (was CREDIT-AMOUNT-amount)
const messageDiv = document.getElementById('CREDIT-AMOUNT-message');

const CREDIT_AMT_pricingMatrix = {
  "Equity Calls Segment": {
    "Basic":    { "Monthly": 3499,  "Quarterly": 9999, "Yearly": 34999 },
    "Advance":  { "Monthly": 3599,  "Quarterly": 10299, "Yearly": 35499 },
    "Premium":  { "Monthly": 3699, "Quarterly": 10599, "Yearly": 35999 }
  },
  "Option Calls Segment": {
    "Basic":    { "Monthly": 4499,  "Quarterly": 749,  "Yearly": 2899 },
    "Advance":  { "Monthly": 4799,  "Quarterly": 1499, "Yearly": 4999 },
    "Premium":  { "Monthly": 4999,  "Quarterly": 2499, "Yearly": 8999 }
  },
  "Portfolio Building": {
    "Basic":    { "Monthly": 5999,  "Quarterly": 5499, "Yearly": 19999 },
    "Advance":  { "Monthly": 8999,  "Quarterly": 6999, "Yearly": 24999 },
    "Premium":  { "Monthly": 11999,  "Quarterly": 8499, "Yearly": 29999 }
  }
};

// CALCULATION FUNCTIONS (ORIGINAL WORKING VERSION)
function updateAmount() {
  const service = document.getElementById('CREDIT-AMOUNT-service').value;
  const plan = document.getElementById('CREDIT-AMOUNT-plan').value;
  const term = document.getElementById('CREDIT-AMOUNT-term').value;

  let amt = 0;
  if (service && plan && term) {
    amt = CREDIT_AMT_pricingMatrix?.[service]?.[plan]?.[term] || 0;
  }
  amountSpan.textContent = amt.toLocaleString('en-IN');
}

function updateTermOptions() {
  const service = document.getElementById('CREDIT-AMOUNT-service').value;
  const termSelect = document.getElementById('CREDIT-AMOUNT-term');

  termSelect.innerHTML = '';

  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = 'Select Term Period';
  termSelect.appendChild(defaultOption);

  let terms = ["Monthly", "Quarterly", "Yearly"];
  if (service === "Option Calls Segment" || service === "Portfolio Building") {
    terms = ["Monthly"];
  }

  terms.forEach(term => {
    const opt = document.createElement('option');
    opt.value = term;
    opt.textContent = term;
    termSelect.appendChild(opt);
  });

  updateAmount();
}

// EVENT LISTENERS FOR CALCULATION (ORIGINAL WORKING VERSION)
document.getElementById('CREDIT-AMOUNT-service').addEventListener('change', () => {
  updateTermOptions();
});

['CREDIT-AMOUNT-plan', 'CREDIT-AMOUNT-term'].forEach(id =>
  document.getElementById(id).addEventListener('change', updateAmount)
);

// FORM SUBMISSION WITH ERROR HANDLING (IMPROVED VERSION)
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  messageDiv.textContent = 'Submitting...';
  messageDiv.style.color = 'blue';

  try {
    const data = new FormData(form);
    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      mobile: data.get('mobile'),
      service: data.get('service'),
      planType: data.get('planType'),
      term: data.get('term'),
      amount: amountSpan.textContent
    };

    // Basic validation
    if (!payload.name || !payload.email || !payload.mobile ||
        !payload.service || !payload.planType || !payload.term ||
        payload.amount === '0') {
      throw new Error('Please fill all fields and select valid options');
    }

    const response = await fetch("https://script.google.com/macros/s/AKfycbyVyPFUvhrWFdNBVm_WHXQ8hTWcooXclo76SL2c2V2sn1FVF47s6cpa61EjguEn7rAfsA/exec", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) throw new Error('Server response not OK');

    form.reset();
    amountSpan.textContent = '0';
    messageDiv.textContent = "✅ Thank you! You will receive the payment link shortly on WhatsApp.";
    messageDiv.style.color = 'green';

  } catch (error) {
    console.error('Submission error:', error);
    messageDiv.textContent = `❌ Error: ${error.message}`;
    messageDiv.style.color = 'red';
  } finally {
    submitBtn.disabled = false;
  }
});

})(jQuery);
