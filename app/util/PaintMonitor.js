Ext.define('MyApp.util.PaintMonitor', {
   override : 'Ext.util.PaintMonitor',

   //Thanks! http://trevorbrindle.com/chrome-43-broke-sencha/

   constructor: function(config) {
       if (Ext.browser.is.Firefox || (Ext.browser.is.WebKit && Ext.browser.engineVersion.gtEq('536') && !Ext.browser.engineVersion.ltEq('537.36') && !Ext.os.is.Blackberry)) {
           return new Ext.util.paintmonitor.OverflowChange(config);
       }
       else {
           return new Ext.util.paintmonitor.CssAnimation(config);
       }
   }
}, function(){
	//console.log("paintmonitor temp. fix is active");
});