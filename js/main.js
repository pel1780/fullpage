$('.main').fullpage({
    // navigation: true, 우측 중간에 도트로 위치를 알려줌
    anchors: ['sec01', 'sec02', 'sec03', 'sec04', 'sec05'],
    afterLoad: function (anchorLink, index) {
        $('#header nav>ul>li').eq(index - 1).addClass('on').
            siblings().removeClass('on');
        $('.section').eq(index - 1).addClass('on').
            siblings().removeClass('on');
    }
});

// $('#header nav>ul>li').on('click', function () {
//     var idx = $(this).index();
//     $(this).addClass('on').siblings().removeClass();
// })