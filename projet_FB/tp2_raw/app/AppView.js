FbApp.AppView = Backbone.View.extend({
	events : {
		"click #byName":"sortByNames",
		"click #byBirthday":"sortByBirthdays",
		"click #byPresence":"sortByPresence",
		"keydown #search":"filterBySearch",
		"keyup #search":"filterBySearch",
		"click #chartByRelationShip" : "showRelationshipChart",
		"click #chartByAge" : "showAgeChart",
		"click #chartBySex" : "showSexChart",
		"click #chartByCountry" : "showCountryChart"
	},
	initialize: function(){
		this.collection.on('reset',this.render,this);
		this.$friendList = this.$el.find('.friend-list');
		this.render();
	},
	render:function(collection){
		var coll = collection|| this.collection;
		this.$friendList.empty();
		var $container = $('<div />');
		coll.forEach(function(friend){
			var view = new FbApp.FriendView({model:friend});
			$container.append(view.render().$el);
		},this);
		this.$friendList.append($container);
	},
	sortByNames : function(){
		this.collection.setSortBy('name');
	},
	sortByBirthdays: function(){
		this.collection.setSortBy('birthday');
	},
	sortByPresence: function(){
		this.collection.setSortBy('presence');
	},
	filterBySearch: function(){
		this.collection.filterBySearch($('#search').val());
	},
	showRelationshipChart : function(){
		this.relationshipView.render(this.collection);
	},
	showSexChart: function(){
	    this.sexView.render(this.collection);
    },
	showAgeChart: function(){
	    this.ageView.render(this.collection);
	},
	showCountryChart: function(){
	    this.countryView.render(this.collection);
	}
});