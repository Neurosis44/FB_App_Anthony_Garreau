FbApp.ChartCountryModel = FbApp.ChartModel.extend({
	processData: function(collection){
		var paramCollection = collection || this.collection;
		var data=[];
		paramCollection.forEach(function(friend){
			if(friend.get('hometown_location') != null){
				data[friend.get('hometown_location')['country']] += 1;	
			}
			else 
			{
				data['null'] += 1;	
			}
		});

		
		for(var i in data)
		{
			data[i] = 0;
		}

		paramCollection.forEach(function(friend){
			if(friend.get('hometown_location') != null){
				data[friend.get('hometown_location')['country']] += 1;	
			}
			else 
			{
				data['null'] += 1;	
			}
		});

		var dataTemp = [];

		for(var i in data)
		{
			if(i != "null"){
				dataTemp.push([i, data[i]]);
			} 
			else {
				dataTemp.push(['Undefined', data[i]]);
			}

			console.log(i + "=" + data[i]);
		}
		this.set('chartData', dataTemp);
		console.log(this.get('chartData'));
	}
});