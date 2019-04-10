$("button").click(function() {
    var age = $(".age").val();
    var gender = $(".age").val();
if(age < 12 && gender=== "Female" ){
$(".message").text("Dora");
}
else if(age > 15 && gender=== "Male" ){
$(".message").text("Spongebob");
}
else if(age < 16 && gender==="Female" ){
$(".message").text("Penny Proud");
}
else if(age > 19 && gender==="Male" ){
$(".message").text("Peter Griffin");
}
});
