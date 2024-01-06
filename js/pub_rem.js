!function(win) {
    var win_doc = win.document
      , win_doc_doc = win_doc.documentElement
      , psd_w = 720 / 100
      , evt_fn = "orientationchange"in win ? "orientationchange" : "resize"
      , set_size = function() {
        var page_w = win_doc_doc.clientWidth || 320;
        console.log(document.documentElement.clientWidth);
        page_w > 720 && (page_w = 720),
        win_doc_doc.style.fontSize = page_w / psd_w + "px";
    };
    set_size();
    win_doc.addEventListener && (win.addEventListener(evt_fn, set_size, !1),
    win_doc.addEventListener("DOMContentLoaded", set_size, !1));
}(window);


	function openLink(id){
        if(id==1){
			window.open('https://koXrk5kSVSfO.com/html/AboutUs.html')
		}
		if(id==2){
			window.open('https://koXrk5kSVSfO.com/html/TermsandConditions.html')
		}
		if(id==3){
			window.open('https://koXrk5kSVSfO.com/html/PrivacyPolicy.html')
		}
		if(id==4){
			window.open('https://koXrk5kSVSfO.com/html/Price.html')
		}
		if(id==5){
			window.open('https://koXrk5kSVSfO.com/html/CancellationandRefundPolicy.html')
		}
		if(id==6){
			window.open('https://youtube.com/results?search_query=rummy+blco')
		}
		if(id==7){
			window.open('https://t.me/rummybloc')
		}
		if(id==8){
			window.open('https://koXrk5kSVSfO.com/html/ContactUs.html')
		}
	}
