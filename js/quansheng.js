$.get('json/attractions_tt.json').done(function(data) {



	let num = 0
	var name1 = new Array()
	var price1 = new Array()
	for (let i = 0; i < data.length; i++) {
		num++
		if (num <= 2000) {
			name1.push(data[i].name)
			price1.push(data[i].price)
		}
	}





	var myLeftChart = echarts.init(document.querySelector('.xian .chart10'))
	var Leftoption1 = {
		title: {
			text: '地区评分排序',
			left: 'center',
			textStyle: { color: '#fff' }
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: { type: 'shadow' }
		},
		legend: {},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: {
			type: 'value',
			position: 'top',
		},
		yAxis: {
			type: 'category',
			data: name1,
			axisLabel: {
				textStyle: {
					color: '#fff',
					fontSize: '12'
				}
			}
		},
		series: [{
			type: 'bar',
			data: price1
		}],
		dataZoom: [{
			show: true,
			yAxisIndex: 0,
			filterMode: 'empty',
			width: 30,
			height: '80%',
			showDataShadow: false,
			right: '93%',
			startValue: name1.length,
			endValue: name1.length - 20
		}]
	}

	myLeftChart.setOption(Leftoption1)


})
