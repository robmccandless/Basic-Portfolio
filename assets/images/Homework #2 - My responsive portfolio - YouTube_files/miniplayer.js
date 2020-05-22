(function(g){var window=this;var O5=function(a,b){var c="ytp-miniplayer-button-bottom-right";var d=g.X?{D:"div",Y:["ytp-icon","ytp-icon-expand-watch-page"]}:{D:"svg",O:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},J:[{D:"g",O:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},J:[{D:"g",O:{transform:"translate(-1.000000, -3.000000)"},J:[{D:"polygon",O:{points:"0 0 24 0 24 24 0 24"}},{D:"path",O:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]};var e="Open video page";a.M().fa("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d=g.X?{D:"div",Y:["ytp-icon","ytp-icon-expand-miniplayer"]}:{D:"svg",O:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},J:[{D:"g",O:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},J:[{D:"g",O:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},J:[{D:"path",O:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.Q.call(this,{D:"button",Y:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],O:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},J:[d]});var f=this;this.N=a;this.ia("click",this.onClick,this);this.ka("title",g.WM(a,e,"i"));g.Je(this,function(){return g.KM(b.bb(),f.element)})},P5=function(a){g.Q.call(this,{D:"div",
H:"ytp-miniplayer-ui"});this.player=a;this.I=!1;this.G=this.w=this.u=void 0;this.K(a,"minimized",this.uI);this.K(a,"onStateChange",this.EO)},Q5=function(a){g.wL.call(this,a);
this.o=new P5(this.player);this.o.hide();g.jL(this.player,this.o.element,4);a.app.G.o&&(this.load(),g.K(a.getRootNode(),"ytp-player-minimized",!0))};
g.r(O5,g.Q);O5.prototype.onClick=function(){this.N.na("onExpandMiniplayer")};g.r(P5,g.Q);g.h=P5.prototype;
g.h.show=function(){this.u=new g.un(this.tI,null,this);this.u.start();if(!this.I){this.C=new g.uQ(this.player,this);g.B(this,this.C);g.jL(this.player,this.C.element,4);this.C.B=.6;this.U=new g.BP(this.player);g.B(this,this.U);this.A=new g.Q({D:"div",H:"ytp-miniplayer-scrim"});g.B(this,this.A);this.A.ca(this.element);this.K(this.A.element,"click",this.LA);var a=new g.Q({D:"button",Y:["ytp-miniplayer-close-button","ytp-button"],O:{"aria-label":"Close"},J:[g.aM()]});g.B(this,a);a.ca(this.A.element);
this.K(a.element,"click",this.fz);a=new O5(this.player,this);g.B(this,a);a.ca(this.A.element);this.B=new g.Q({D:"div",H:"ytp-miniplayer-controls"});g.B(this,this.B);this.B.ca(this.A.element);this.K(this.B.element,"click",this.LA);var b=new g.Q({D:"div",H:"ytp-miniplayer-button-container"});g.B(this,b);b.ca(this.B.element);a=new g.Q({D:"div",H:"ytp-miniplayer-play-button-container"});g.B(this,a);a.ca(this.B.element);var c=new g.Q({D:"div",H:"ytp-miniplayer-button-container"});g.B(this,c);c.ca(this.B.element);
this.R=new g.YM(this.player,this,!1);g.B(this,this.R);this.R.ca(b.element);b=new g.tO(this.player,this);g.B(this,b);b.ca(a.element);this.L=new g.YM(this.player,this,!0);g.B(this,this.L);this.L.ca(c.element);this.G=new g.eO(this.player,this);g.B(this,this.G);this.G.ca(this.A.element);this.w=new g.EO(this.player,this);g.B(this,this.w);g.jL(this.player,this.w.element,4);this.F=new g.Q({D:"div",H:"ytp-miniplayer-buttons"});g.B(this,this.F);g.jL(this.player,this.F.element,4);a=new g.Q({D:"button",Y:["ytp-miniplayer-close-button",
"ytp-button"],O:{"aria-label":"Close"},J:[g.aM()]});g.B(this,a);a.ca(this.F.element);this.K(a.element,"click",this.fz);a=new g.Q({D:"button",Y:["ytp-miniplayer-replay-button","ytp-button"],O:{"aria-label":"Close"},J:[g.pM()]});g.B(this,a);a.ca(this.F.element);this.K(a.element,"click",this.yM);this.K(this.player,"presentingplayerstatechange",this.vI);this.K(this.player,"appresize",this.gt);this.K(this.player,"fullscreentoggled",this.gt);this.gt();this.I=!0}0!=this.player.getPlayerState()&&g.Q.prototype.show.call(this);
this.w.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.u&&(this.u.dispose(),this.u=void 0);g.Q.prototype.hide.call(this);this.player.app.G.o||(this.I&&this.w.hide(),this.player.loadModule("annotations_module"))};
g.h.X=function(){this.u&&(this.u.dispose(),this.u=void 0);g.Q.prototype.X.call(this)};
g.h.fz=function(){this.player.stopVideo();this.player.na("onCloseMiniplayer")};
g.h.yM=function(){this.player.playVideo()};
g.h.LA=function(a){if(a.target==this.A.element||a.target==this.B.element)g.R(this.player.M().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.QC(g.QK(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.na("onExpandMiniplayer")};
g.h.uI=function(){g.K(this.player.getRootNode(),"ytp-player-minimized",this.player.app.G.o)};
g.h.tI=function(){g.IO(this.w);this.G.w();this.u&&this.u.start()};
g.h.vI=function(a){g.V(a.state,32)&&this.C.hide()};
g.h.gt=function(){g.XO(this.w,0,g.RK(this.player).getPlayerSize().width,!1);this.w.Iu()};
g.h.EO=function(a){this.player.app.G.o&&(0==a?this.hide():this.show())};
g.h.bb=function(){return this.C};
g.h.kc=function(){return!1};
g.h.Rd=function(){return!1};
g.h.Li=function(){return!1};
g.h.uu=function(){};
g.h.ki=function(){};
g.h.dl=function(){};
g.h.Yl=function(){return null};
g.h.ct=function(){return new g.th(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.lk=function(a,b,c,d,e){var f=0,k=d=0,l=g.Ph(a);if(b){c=g.Hn(b,"ytp-prev-button")||g.Hn(b,"ytp-next-button");var m=g.Hn(b,"ytp-play-button"),n=g.Hn(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.Mh(b,this.element),k=b.x,f=b.y-12):n&&(k=g.Hn(b,"ytp-miniplayer-button-top-left"),f=g.Mh(b,this.element),b=g.Ph(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=g.RK(this.player).getPlayerSize().width;e=f+(e||0);l=g.Pd(k,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.ht=function(){};
g.h.jg=function(){};g.r(Q5,g.wL);Q5.prototype.create=function(){};
Q5.prototype.Pf=function(){return!1};
Q5.prototype.load=function(){this.player.hideControls();this.o.show()};
Q5.prototype.unload=function(){this.player.showControls();this.o.hide()};g.LL.miniplayer=Q5;})(_yt_player);
