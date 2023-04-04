(function() {
	$.get('json/attractions_tt.json').done(function(data) {

		let num = 0

		const name = new Array()
		const price = new Array()
		const name1 = new Array()
		const price1 = new Array()
		const name2 = new Array()
		const price2 = new Array()
		for (let i = 0; i < data.length; i++) {
			name.push(data[i].name)
			price.push(data[i].price)
		}
		name.reverse()
		price.reverse()

		for (let i = 0; i < name.length; i++) {
			if (i >= 300 && i <= 2000) {
				name2.push(name[i])
				price2.push(price[i])
			} else if (i <= 4000) {
				name1.push(name[i])
				price1.push(price[i])
			}
		}


		// 价格区间
		let jiageP2num1 = 0
		let jiageP2num2 = 0
		let jiageP2num3 = 0
		let jiageP2num4 = 0
		const jiageP2List = []


		for (let i = 0; i < price2.length; i++) {
			if (price2[i] <= 500) {
				jiageP2num1++
				jiageP2List[0] = jiageP2num1
			} else if (price2[i] <= 1000) {
				jiageP2num2++
				jiageP2List[1] = jiageP2num1
			} else if (price2[i] <= 1500) {
				jiageP2num3++
				jiageP2List[2] = jiageP2num3
			} else if (price2[i] <= 5000) {
				jiageP2num4++
				jiageP2List[3] = 0
			}
		}

		jiageP2num1 = 0
		jiageP2num2 = 0
		jiageP2num3 = 0
		jiageP2num4 = 0
		const jiageP1List = []

		for (let i = 0; i < price1.length; i++) {
			if (price1[i] <= 500) {
				jiageP2num1++
				jiageP1List[0] = jiageP2num1
			} else if (price1[i] <= 1000) {
				jiageP2num2++
				jiageP1List[1] = jiageP2num1
			} else if (price1[i] <= 1500) {
				jiageP2num3++
				jiageP1List[2] = jiageP2num3
			} else if (price1[i] <= 5000) {
				jiageP2num4++
				jiageP1List[3] = jiageP2num4
			}
		}


		name1.reverse()
		price1.reverse()
		name2.reverse()
		price2.reverse()
		// console.log(jiageP2List)
		// console.log(jiageP1List)
		// console.log(price1.length)

		// console.log(name1)
		// console.log(price2)
		var myLeftChart = echarts.init(document.querySelector('.bar .chart1'))
		var Leftoption1 = {
			title: {
				text: '价格排序',
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

		var Leftoption2 = {
			title: {
				text: '价格排序',
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
				data: name2,
				axisLabel: {
					textStyle: {
						color: '#fff',
						fontSize: '12'
					}
				}
			},
			series: [{
				type: 'bar',
				data: price2
			}],
			dataZoom: [{
				show: true,
				yAxisIndex: 0,
				filterMode: 'empty',
				width: 30,
				height: '80%',
				showDataShadow: false,
				right: '93%',
				startValue: name2.length,
				endValue: name2.length - 20
			}]
		}

		myLeftChart.setOption(Leftoption1)
		setInterval(Leftlun2, 5000)
		setInterval(Leftlun1, 10000)

		function Leftlun1() {
			myLeftChart.setOption(Leftoption2)
		}

		function Leftlun2() {
			myLeftChart.setOption(Leftoption1)
		}





		// 饼图
		var myFenBinChart = echarts.init(document.querySelector('.bin .chart'))

		var binFenoption1 = {
			tooltip: {
				trigger: 'item',
				formatter: '{a} <br/>{b}: {c} ({d}%)',
				position: function(p) {
					//其中p为当前鼠标的位置
					return [p[0] + 10, p[1] - 10]
				}
			},
			legend: {
				top: '90%',
				itemWidth: 10,
				itemHeight: 10,
				data: ['0~500元', '500~1000元', '1000~1500元', '1500~5000元'],
				textStyle: {
					color: 'rgba(255,255,255,.5)',
					fontSize: '12'
				}
			},
			series: [{
				name: '评分占比',
				type: 'pie',
				center: ['50%', '42%'],
				color: [
					'#065aab',
					'#066eab',
					'#0682ab'
				],
				label: { show: false },
				labelLine: { show: false },
				data: [{
						value: jiageP1List[0],
						name: '0~500元'
					},
					{
						value: jiageP1List[1],
						name: '500~1000元'
					},
					{
						value: jiageP1List[2],
						name: '1000~1500元'
					},
					{
						value: jiageP1List[3],
						name: '1500~5000元'
					}
				]
			}]
		}
		myFenBinChart.setOption(binFenoption1)






	})

})()
