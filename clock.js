function draw(){
    for(i=0;i<60;i++){
      D = (i<10) ? "0"+i : i;
      $("#s").append("<li data-item="+D+">"+D+"</li>");
    }
    for(i=0;i<60;i++){
       D = (i<10) ? "0"+i : i;
      $("#m").append("<li data-item="+D+">"+D+"</li>");
    }
    for(i=0;i<12;i++){
       D = (i<10) ? "0"+i : i;
       if (D > 12){
           D = D-12;
       }
      $("#h").append("<li data-item="+D+">"+D+"</li>");
    }
  }
  function place(){
    hdeg = 30;
    msdeg = 6;
    $("#s li").each(function(index){
      $(this).css({transform: "rotateZ("+msdeg * index +"deg) translateX("+ parseInt(200) +"px)"});
    });
    $("#m li").each(function(index){
      $(this).css({transform: "rotateZ("+msdeg * index +"deg) translateX("+ parseInt(170) +"px)"});
    });
    $("#h li").each(function(index){
      $(this).css({transform: "rotateZ("+hdeg * index +"deg) translateX("+ parseInt(140) +"px)"});
    });
  }
  //TIMER
  function sec(ts,timer){
    TS = ts % 60;
    if(ts == 0 && timer) min(0,timer);
    deg = 360/60 * ts;
    $("#s li").removeClass("active");
    $("#s li").eq(TS).addClass("active");
    $("#s").css({transform: "rotateZ(-"+deg+"deg)"});
    ts++;
    if(timer) setTimeout(function(){sec(ts,timer)},TIME * 1000);
  }
  function min(tm,timer){
    TM = tm % 60;
    if(tm == 0 && timer) hour(0,timer);
    deg = 360/60 * tm;
    $("#m li").removeClass("active");
    $("#m li").eq(TM).addClass("active");
    $("#m").css({transform: "rotateZ(-"+deg+"deg)"});
    tm++;
    if(timer) setTimeout(function(){min(tm,timer)}, TIME * 60000);
  }
  function hour(th,timer){
    TH = th % 24;
    
    if (TH > 12){
        TH=TH-12;
    }
    deg = 360/12 * th;
    $("#h li").removeClass("active");
    $("#h li").eq(TH).addClass("active");
    $("#h").css({transform: "rotateZ(-"+deg+"deg)"});
    th++;
    if(timer) setTimeout(function(){hour(th,timer)}, TIME * 3600000);
  }
  //CLOCK
  function clock(){
    d = new Date();
    H = d.getHours();
    M = d.getMinutes();
    S = d.getSeconds();
    hour(H,0);
    min(M,0);
    sec(S,0);
    setTimeout(function(){clock();},1000);
  }
  
  $(document).ready(function(){
    //onload start
    //make sure the whole document is loaded first
    message('running', 'the clock is avalible');
    draw();
    place();
    clock();
  });
