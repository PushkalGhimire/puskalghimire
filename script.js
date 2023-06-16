$('.fa-sun').hide();

$('.fa-moon').click(function(){
    localStorage.setItem('dark-mode', 'dark');
    $(this).hide();
    $('.fa-sun').show();
    $('.body').addClass('bodyDark');
    $('.nav-link').addClass('nav-linkAct');
    $('.fab').addClass('socialDark');
    $('.span').removeClass('spanDark');
    $('.post').addClass('postDark');
    $('.postA').addClass('aDark');
    $('.line').addClass('lineDark');
    $('.BlogDesc').addClass('darkBlogDesc');
});
$('.fa-sun').click(function(){
        $(this).hide();
        $('.fa-moon').show();
        $('.body').removeClass('bodyDark');
        $('.span').addClass('spanDark');
        $('.nav-link').removeClass('nav-linkAct');
        $('.fab').removeClass('socialDark');
        $('.post').removeClass('postDark');
        $('.postA').removeClass('aDark');
        $('.BlogDesc').removeClass('darkBlogDesc');
        localStorage.setItem('dark-mode', 'light');
        $('.line').removeClass('lineDark');
});
           
if (localStorage.getItem('dark-mode')== 'dark'){
    $('.body').addClass('bodyDark');
    $('.nav-link').addClass('nav-linkAct');
    $('.fab').addClass('socialDark');
    $('.fa-moon').hide();
    $('.span').removeClass('spanDark');
    $('.fa-sun').show()
    $('.post').addClass('postDark');
    $('.BlogDesc').addClass('darkBlogDesc');
    $('.postA').addClass('aDark');
    $('.line').addClass('lineDark');
 }
 else{
            $('.body').removeClass('bodyDark');
            $('.nav-link').removeClass('nav-linkAct');
            $('.fab').removeClass('socialDark');
            $('.span').addClass('spanDark');
            $('.post').removeClass('postDark');
            $('.postA').removeClass('aDark');
            $('.BlogDesc').removeClass('darkBlogDesc');
            $('.line').removeClass('lineDark');
 }

 $('.ham-burger').click(function(){
     $('.nav-links').toggleClass('nav-linksActivate');
     $('.fas fa-moon').toggleClass('fasmoon');
     $('.fas fa-sun').toggleClass('fasmoon');
 });