$(function () {
    AOS.init();

    window.setTimeout(() => {
        $('#EZLoader').fadeOut(500);
    }, 1000)
    var lastScrollTop = 0;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if ($('.az-banner-anim')) {
            if (st > lastScrollTop) {
                $('.az-banner-anim').css('transform', 'translateY(-30px)');
            } else {
                $('.az-banner-anim').css('transform', 'translateY(0)');
            }
        }
        lastScrollTop = st;
    });


    window.setInterval(() => {
        $('#ez-screen-1').toggleClass('hide');
        $('#ez-screen-2').toggleClass('show');
    }, 5000)
})
function changeStep() {
    $("#EzMobile").removeClass('show');
    $("#EzMobile").addClass('hide');
    $("#EzCharacter").addClass('hide')
    $("#EzQuestion").removeClass('hide');
}
var currentStep = 1;
var selectedOption = null;

function handleOptionChange(option) {
    $(`.ez-question-option`).removeClass('active');
    $(`.ez-question-option:nth-child(${option})`).addClass('active');
    selectedOption = option;
    $('#EzStepButton').fadeIn(300);
}

function handleQuestionChange() {
    if (currentStep === 4) {
        var target = $('#Download').offset().top;
        $('html,body').animate({
            scrollTop: target
        });
    } else {
        const nextStep = currentStep + 1;
        $('#EzStepButton span').text(nextStep === 4 ? 'Get the app to answer & earn' : 'Next');
        if (nextStep === 4) {
            $('#EzStepButton').fadeOut(400);
        }
        $('#EzStepCard').removeClass(`step-${currentStep}`);
        $('#EzStepCard').addClass(`step-${nextStep}`);

        $(`#EzStepProgress span`).removeClass('active');
        $(`#EzStepProgress span:nth-child(${nextStep})`).addClass('active');

        $(`#EzStepData${currentStep}`).removeClass('show');
        $(`#EzStepData${currentStep}`).addClass('hide');
        $(`#EzStepData${nextStep}`).removeClass('next');
        $(`#EzStepData${nextStep}`).addClass('show');
        currentStep = nextStep;
    }
}

