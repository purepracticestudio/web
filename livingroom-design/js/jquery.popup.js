//小坪數 

$(function(){
  //隱藏背景與訊息對話框
  $("#black_bg").hide();
  //點選了解

  $("#click").click(function(){
    //淡入顯示背景與對話框
      $("#black_bg").fadeIn(300);
  });
  //點X 回畫面
  $("#live").click(function(){
      $("#black_bg").fadeOut(300);
});
});



//小坪數 底部回去看更多設計
$(function(){
  //隱藏背景與訊息對話框
  $("#black_bg").hide();
  //點選了解

  $("#click").click(function(){
    //淡入顯示背景與對話框
      $("#black_bg").fadeIn(300);
  });
  //點X 回畫面
  $("#live_right").click(function(){
      $("#black_bg").fadeOut(300);
});
});


//小坪數 底部回去看小坪數
$(function(){
  //隱藏背景與訊息對話框
  $("#black_bg").hide();
  //點X 回畫面
  $("#live_lookbig").click(function(){
      $("#black_bg").fadeOut(300);
      $("#black_bg_2").fadeIn(300);
 
});
});









//大坪數 
$(function(){
  //隱藏背景與訊息對話框
  $("#black_bg_2").hide();
  //點選了解

  $("#click_2").click(function(){
    //淡入顯示背景與對話框
      $("#black_bg_2").fadeIn(300);
  });
  //點X 回畫面
  $("#live_2").click(function(){
      $("#black_bg_2").fadeOut(300);
});
});

//大坪數 底部回去看更多設計
$(function(){
  //隱藏背景與訊息對話框
  $("#black_bg_2").hide();
  //點選了解

  $("#click_2").click(function(){
    //淡入顯示背景與對話框
      $("#black_bg_2").fadeIn(300);
  });
  //點X 回畫面
  $("#live_left").click(function(){
      $("#black_bg_2").fadeOut(300);
});
});


//大坪數 底部回去看小坪數
$(function(){
  //隱藏背景與訊息對話框
  $("#black_bg_2").hide();
  //點X 回畫面
  $("#live_looksmail").click(function(){
      $("#black_bg_2").fadeOut(300);
      $("#black_bg").fadeIn(300);
 
});
});


