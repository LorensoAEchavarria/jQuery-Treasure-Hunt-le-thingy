$("#clicky").click(function() {
 $(".words").text("Now double click meh");    
});
$(".words").dblclick(function() {
  $(".wow").fadeToggle();  
  $(".words").text("Now touch the liger nose. Don't worry it does not bite"); 
});
$(".wow").click(function() {
    $(".pcmasterrace").fadeToggle();  
    $(".wow").hide();  
    $(".words").text("congratz take my old fan i dont need it, now go on with your life and ignore the whale.");
    
});
$(document).ready(function(){
    $("#whale").click(function(){
        alert("Great, you broke the website im not fixing this!");
        $("body").css('background-image', 'url("https://media.tenor.com/images/9cf4abb38f9ffa4f73f1f48807a50d5a/tenor.gif")');
        $("body").hide(); 
    });
});    
$("#whale").mouseenter(function() {
    $(".words").text("What are you doing dont you dare click on the whale, the whale is a lie.");
    $("body").addClass("Here");
});
$("#whale").mouseleave(function() {
    $("body").css("background-color", "#454647").fadeIn(3000);
    $(".words").text("Good stay away from the whale, Avoid the danger.");
});