$(document).ready(function () {
    $(":checkbox").change(placePeg);
    function placePeg() {
        var p1Sub1 = $("#p1-sub1").is(":checked");
        var p1Sub2 = $("#p1-sub2").is(":checked");
        var p1Sub3 = $("#p1-sub3").is(":checked");
        if(p1Sub1 && p1Sub2 && p1Sub3){
            $("#p1-sub-msg").show();
        }
        var p1Bship1 = $("#p1-bship1").is(":checked");
        var p1Bship2 = $("#p1-bship2").is(":checked");
        var p1Bship3 = $("#p1-bship3").is(":checked");
        var p1Bship4 = $("#p1-bship4").is(":checked");
        if(p1Bship1 && p1Bship2 && p1Bship3 && p1Bship4){
            $("#p1-bship-msg").show();
        }
        var p2Sub1 = $("#p2-sub1").is(":checked");
        var p2Sub2 = $("#p2-sub2").is(":checked");
        var p2Sub3 = $("#p2-sub3").is(":checked");
        if(p2Sub1 && p2Sub2 && p2Sub3){
            $("#p2-sub-msg").show();
        }
        var p2Bship1 = $("#p2-bship1").is(":checked");
        var p2Bship2 = $("#p2-bship2").is(":checked");
        var p2Bship3 = $("#p2-bship3").is(":checked");
        var p2Bship4 = $("#p2-bship4").is(":checked");
        if(p2Bship1 && p2Bship2 && p2Bship3 && p2Bship4){
            $("#p2-bship-msg").show();
        }
        var playerOneLoses = (p1Sub1 && p1Sub2 && p1Sub3) && (p1Bship1 && p1Bship2 && p1Bship3 && p1Bship4)
        var playerTwoLoses = (p2Sub1 && p2Sub2 && p2Sub3) && (p2Bship1 && p2Bship2 && p2Bship3 && p2Bship4)
        if(playerOneLoses || playerTwoLoses){
            $("#gameOverMsg").show();
        }
    }
});