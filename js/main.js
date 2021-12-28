$(function(){
    // 서브메뉴
    $('.gnb > li').hover(function(){
        $('.lnb', this).stop().slideDown();
        $('.bg-lnb').stop().slideDown('.slow');
    },function(){
        $('.lnb', this).stop().slideUp();
        $('.bg-lnb').stop().slideUp();
    });

    // 사이드바
    $('.btn-sidebar').click(function(){
        $('.btn-sidebar img').css({'transform':'rotate(180deg)'});
    });
})