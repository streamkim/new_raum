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
    if($(window).width() > 480) {
        $('.btn-sidebar-open').click(function(){
            $('.btn-sidebar-open').hide();
            $('#sidebar').animate({right: 0},600);
        });
        $('.btn-sidebar-close').click(function(){
            $('.btn-sidebar-open').show();
            $('#sidebar').animate({right: -202},600);
        });
    };

    // 사이드바 모바일
    if($(window).width() <= 480) {
        $('.btn-sidebar-open').click(function(){
            $('.btn-sidebar-open').hide();
            $('#sidebar').animate({right: 0},600);
        });
        $('.btn-sidebar-close').click(function(){
            $('.btn-sidebar-open').show();
            $('#sidebar').animate({right: -222},600);
        });
    };

    // a태그 상단 이동 막기
    $('a[href="#"]').click(function(e) {
        e.preventDefault();
    });

    // 메인 슬라이드
    $('.slider > .pages > div').click(function() {
        var $this = $(this);
        var $slider = $this.closest('.slider');
        
        $this.addClass('active');
        $this.siblings('.active').removeClass('active');
        
        var index = $this.index();
        
        $slider.find(' > .slides > .active').removeClass('active');
        $slider.find(' > .slides > li').eq(index).addClass('active');
    });
    
    $('.slider > .side-btns > div').click(function() {
        var $this = $(this);
        var index = $this.index();
        var $slider = $this.closest('.slider');
        
        var $current = $slider.find('.pages > div.active');
        var $post;
        
        if ( index == 0 ) {
            $post = $current.prev();
        }
        else {
            $post = $current.next();
        }
        
        if ( $post.length == 0 ) {
            if ( index == 0 ) {
                $post = $slider.find('.pages > div:last-child');
            }
            else {
                $post = $slider.find('.pages > div:first-child');
            }
        }
        
        $post.click();
    });

    function Slider1__moveNext() {
        var $slider = $('.main-slide');
        var $nextBtn = $slider.find('.side-btns > div:last-child');
        $nextBtn.click();
    }
    
    setInterval(Slider1__moveNext, 5000);

    // 모바일 매거진 슬라이드
    $('.mslider > .mpages > div').click(function() {
        var $this = $(this);
        var $slider = $this.closest('.mslider');
        
        $this.addClass('active');
        $this.siblings('.active').removeClass('active');
        
        var index = $this.index();
        
        $slider.find(' > .mslides > .active').removeClass('active');
        $slider.find(' > .mslides > li').eq(index).addClass('active');
    });
    
    $('.mslider > .mside-btns > div').click(function() {
        var $this = $(this);
        var index = $this.index();
        var $slider = $this.closest('.mslider');
        
        var $current = $slider.find('.mpages > div.active');
        var $post;
        
        if ( index == 0 ) {
            $post = $current.prev();
        }
        else {
            $post = $current.next();
        }
        
        if ( $post.length == 0 ) {
            if ( index == 0 ) {
                $post = $slider.find('.mpages > div:last-child');
            }
            else {
                $post = $slider.find('.mpages > div:first-child');
            }
        }
        $post.click();
    });
})