FbApp.ChartModel = Backbone.Model.extend({
	defaults:{
		chartData:[]
	},
	initialize: function(options){
		_.extend(this, options || {});
		// On lance processData quand on reset la collection
		this.collection.on('reset', this.processData, this);
	},

	processData: function(){
		this.set('chartData', array);
		throw new Error("Error processData.");
	}
});
