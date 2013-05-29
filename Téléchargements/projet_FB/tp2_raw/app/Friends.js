FbApp.Friends = Backbone.Collection.extend({
	model:FbApp.Friend,
	initialize: function(){
		this.sortField = 'name';
		this.filteredColl = this;
	},
	filterBySearch: function(value){
		value = value.toLowerCase();			
		this.filteredColl = _(this.filter(function(friend){
			return friend.get('name').toLowerCase().indexOf(value) != -1;
		}));

		this.sortCollection();
		this.trigger('reset',this.sortCollection());
	},
	sortCollection : function(){
		console.log('tentative d essai par '+ this.sortField);
		this.filteredColl = _(this.filteredColl.sortBy(this._visitor[this.sortField]));
		return this.filteredColl;
	},
	setSortBy : function(what){
		this.sortField = what;
		this.sortCollection();
		this.trigger('reset',this.sortCollection());
	},
	_visitor : {
		name: function(friendModel){ 
			return friendModel.get('name');
		},
		birthday: function(friendModel) {
			//var date = friendModel.get('birthday_date') || "01/01/3000";
			return Date.parse(friendModel.get('birthday_date'));
		},
		presence : function(friendModel) {
			var presence_priority = {'online':0,'idle':1,'offline':2, 'others':3};
			return presence_priority[friendModel.get('online_presence')] || 3;
		}
	}
});