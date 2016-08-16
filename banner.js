/* Variables con las URL de cada tienda */
var GooglePlay = "https://play.google.com/store/apps/details?id=net.moblee.ibtm";
var AppStore = "https://itunes.apple.com/us/app/ibtm-latin-america/id1121353961?mt=8";
var FichaPDF = "http://www.ibtmlatinamerica.com/RXMX/RXMX_IcomexMexico/pdf/ibtm_FichApp.pdf";
var ShowSite = "http://www.ibtmlatinamerica.com/";


function appWelcomeBanner() {
    if(jQuery.cookie("mobileApp") == "true") {
		
		console.log(jQuery.cookie("mobileApp"));
		console.log('cookie not set');
		
    } else {
		
        //var mobileDiv = "";
        //var os;

		/* Arreglo. Tipos de dispositivos */
        var isMobile = {
            Android: function() { return navigator.userAgent.match(/Android/i); },
            BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); },
            iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
            Opera: function() { return navigator.userAgent.match(/Opera Mini/i); },
            Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
            any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
        };	
			
		/**************************/
		/* Div con el html del banner a mostrar */
		var mobileDiv = "<div id='bannerApp' style='z-index:10000000; position: fixed !important; position: absolute; top:0; right:0; bottom:0; left:0; box-sizing: border-box; width: 100%; background: rgba(64,0,36,0.85);'>"+
						"<div id='cerrar_banner' align='right'><img src='http://www.expobeautyshow.com/RNA/RNA_ExpoBeautyShow/images/moblee/top.png' /></div>"+
						"<div align='center'><a href='javascript:;'><img src='http://www.ibtmlatinamerica.com/RXMX/RXMX_IcomexMexico/images/App_WelcomeBanner.png' id='img_app'/></a></div>"+
						"</div>";
		/*
        if(isMobile.Android()) {		
            os = "android";
        } else if(isMobile.iOS()) {	
            os = "iOS";
        } else {
			os = "General";					
		}*/

		jQuery('body').prepend(mobileDiv);

		if(document.getElementById("cerrar_banner")){
			jQuery("#cerrar_banner" ).click(function(){
				jQuery("#bannerApp").remove();
				jQueryCookie();
				console.log('cookie set on banner closed');
			});
		}      

        if(document.getElementById("cerrar_banner")){
			jQuery("#img_app").click(function(){
				/* Si es dispositivo android, el link debe llevar a la tienda */
				if(isMobile.Android()) {
					location.href = GooglePlay;
				} 
				/* Si es iPhone, iPad o cualquier cosa Apple, que lleve a la App Store */	
				else if(isMobile.iOS()) {					
					location.href = AppStore;			
				} 
				/* Lo demás, que los lleve a la ficha en el sitioweb */
				else {
					location.href = FichaPDF;
				}
				
			/* Para quitar todo el div del banner */	
			jQuery("#bannerApp").remove();
			
			/* Establecer la cookie de tiempo */
			jQueryCookie();
			
			});
	
		}		
	}
	
}

function jQueryCookie(){
	/*
	var date = new Date();
	var minutes = 30;
	date.setTime(date.getTime() + (minutes * 60 * 1000));*/
	jQuery.cookie('mobileApp', 'true', { expires: 2, path: '/', domain: 'ibtmlatinamerica.com'});
	if (jQuery.cookie("mobileApp")) {
		console.log('cookie set');
	}
}
