define(["View",getViewTemplatePath("switch"),"UISwitch"],function(a,b,c){return _.inherit(a,{onCreate:function(){this.$el.html(b)},events:{},onPreShow:function(){var a=this;this.uiSwitch||(console.log("nima"),this.uiSwitch=new c({wrapper:this.$el.find(".simple_switch"),changed:function(b){a.$(".demo1Status").html(b)}}),this.uiSwitch.show(),this.$(".demo1Status").html(this.uiSwitch.getStatus())),this.uiSwitch1||(this.uiSwitch1=new c({datamodel:{checkedFlag:!0},wrapper:this.$el.find(".simple_switch1")}),this.uiSwitch1.show()),this.uiSwitch2||(this.uiSwitch2=new c({wrapper:this.$el.find(".simple_switch2"),changed:function(a){console.log("i am status:",a)},checkAvailabe:function(){return a.uiSwitch1.getStatus()?!0:!1}}),this.uiSwitch2.show()),this.turning()},onShow:function(){},onHide:function(){}})});