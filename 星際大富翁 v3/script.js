var firebase;

$(function(){
  var $nickname = $('#nickname'),
      $content = $('#content'),
      $send = $('#send'),
      $clear = $('#clear'),
      $showtext = $('#showtext'),
      time = new Date().getTime();
  
  var config = {
    databaseURL: "https://date1030-b8b3a.firebaseio.com/" //你的資料庫名稱
  };
  
  firebase.initializeApp(config);
  
  var database = firebase.database().ref(); //資料庫的目錄 ref('/test/')<-指定路徑目錄
  
  $send.on('click',write);
  
  $clear.on('click',remove);
  
  //設定在對話框按下 enter 的事件 ( enter 預設 keyCode 為 13 )
  $content.on('keydown', function(e){
    if(e.keyCode == 13){
      write();
    }
    
  });
  
  //寫入
  function write(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if(h<10){
      h = '0'+h;
    }
    if(m<10){
      m = '0' + m;
    }
    if(s<10){
      s = '0' + s;
    }
    var now = h+':'+m+':'+s; //獲取按下按鈕或 enter 的當下時間
    
    //記得一開始要先宣告 ms = new Date().getTime()
    var postData = {
      nickname:$('#nickname').val(),
      content:$('#content').val(),
      time:now,
      id:'id'+time
    };
    database.push(postData); //寫入資料
    $content.val(''); //按下送出之後，就把內容欄位清空
  }
  
  //第一次載入資料庫時顯示所有內容
  database.once('value', function(snapshot) {
    $showtext.html('');
    for(var i in snapshot.val()){
       $showtext.prepend('<div><div>'+snapshot.val()[i].time+'</div>'+snapshot.val()[i].nickname+' 說：'+snapshot.val()[i].content+'</div>');
    }
  });

  //每一次資料庫有變動時，獲取最新一筆內容呈現
  database.limitToLast(1).on('value', function(snapshot) {
    for(var i in snapshot.val()){
       $showtext.prepend('<div class="'+snapshot.val()[i].id+'"><div>'+snapshot.val()[i].time+'</div>'+snapshot.val()[i].nickname+' 說：'+snapshot.val()[i].content+'</div>');
    }
    
    //如果是自己發出去的文字，就改變顏色
    $showtext.find('.id'+time).css({
      color:'#f00'
    });
    $showtext.find('.id'+time+' div').css({
      color:'#f00'
    });
  });
  
    function remove(){
  //firebase.database().ref('users/').remove();
  database.remove();
  window.location.reload();
  }
  
});