FbApp.ChartView = Backbone.View.extend({
	initialize: function(){
		this.model.on('change:chartData', this.render, this);
		this.$chart = this.$el.find('.chart');
	},
	render: function(collection){
		console.log('debug rendering');
		this.$chart.append(
			$('.chart').highcharts({
				chart: {
					plotBackgroundColor: null,
					plotBorderWidth: null,
					plotShadow: false
				},
				title: {
					text: this.model.get('title')
				},
				tooltip: {
					pointFormat: '{series.name}: <b>{point.percentage}%</b>',
					percentageDecimals: 1,
					formatter: function() {
						return '<b>'+ this.point.name +'</b>: '+ Math.round(this.percentage) +' %';
					}
				},
				plotOptions: {
					pie: {
						allowPointSelect: true,
						cursor: 'pointer',
						dataLabels: {
							enabled: true
						},
						showInLegend: true
					}
				},
				legend: {
	                layout: 'vertical',
	                align: 'left',
	                verticalAlign: 'middle',
	                borderWidth: 1
           		},
				series: [{
					type: 'pie',
					name: 'Pourcentage ',
					data: this.model.get('chartData')
				}]
			})
			);
		console.log('end rendering');
	}

})