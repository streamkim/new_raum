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
    $('.btn-sidebar-open').click(function(){
        $('.btn-sidebar-open').hide();
        $('#sidebar').animate({right: 0},600);
    });
    $('.btn-sidebar-close').click(function(){
        $('.btn-sidebar-open').show();
        $('#sidebar').animate({right: -212},600);
    });

    // a태그 상단 이동 막기
    $('a[href="#"]').click(function(e) {
        e.preventDefault();
    });
})