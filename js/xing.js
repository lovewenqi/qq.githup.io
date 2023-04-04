(function() {
	$.get('json/attractions_xinjian.json').done(function(data) {
		var name1 = new Array()
		var score1 = new Array()
		var name2 = new Array()
		var score2 = new Array()
		var name3 = new Array()
		var score3 = new Array()
		var binscore1_1 = 0
		var binscore1_2 = 0
		var binscore1_3 = 0

		var binscore2_1 = 0
		var binscore2_2 = 0
		var binscore2_3 = 0

		var binscore3_1 = 0
		var binscore3_2 = 0
		var binscore3_3 = 0
		var num = 0

		// 景区等级个数   一
		var wuA1 = 0
		var siA1 = 0
		var zanW1 = 0
		const zhexian1 = new Array()

		// 景区等级个数   二
		var wuA2 = 0
		var siA2 = 0
		var zanW2 = 0
		const zhexian2 = new Array()

		// 景区等级个数   三
		var wuA3 = 0
		var siA3 = 0
		var zanW3 = 0
		const zhexian3 = new Array()



		// 景区score个数
		const zhexianS1 = new Array()
		const zhexianS2 = new Array()
		const zhexianS3 = new Array()

		for (var i = 0; i < data.length; i++) {
			num++
			if (num <= 1000) {
				name1.push(data[i].name)
				score1.push(data[i].score)
				if (data[i].level == '5A景区') {
					wuA1++
				} else if (data[i].level == '4A景区') {
					siA1++
				} else if (data[i].level == '暂无等级') {
					zanW1++
				}
			} else if (num <= 2000) {
				name2.push(data[i].name)
				score2.push(data[i].score)
				if (data[i].level == '5A景区') {
					wuA2++
				} else if (data[i].level == '4A景区') {
					siA2++
				} else if (data[i].level == '暂无等级') {
					zanW2++
				}
			} else if (num <= 4000) {
				name3.push(data[i].name)
				score3.push(data[i].score)
				if (data[i].level == '5A景区') {
					wuA3++
				} else if (data[i].level == '4A景区') {
					siA3++
				} else if (data[i].level == '暂无等级') {
					zanW3++
				}
			}
		}




		//折线二数据整理
		zhexian1.push(wuA1, siA1, zanW1)
		zhexian2.push(wuA2, siA2, zanW2)
		zhexian3.push(wuA3, siA3, zanW3)


		for (var i = 0; i < score1.length; i++) {
			if (score1[i] < 2) {
				binscore1_1++
			} else if (score1[i] < 4) {
				binscore1_2++
			} else if (score1[i] < 5) {
				binscore1_3++
			}
		}

		for (var i = 0; i < score2.length; i++) {
			if (score2[i] < 2) {
				binscore2_1++
			} else if (score2[i] < 4) {
				binscore2_2++
			} else if (score2[i] < 5) {
				binscore2_3++
			}
		}

		for (var i = 0; i < score3.length; i++) {
			if (score3[i] < 2) {
				binscore3_1++
			} else if (score3[i] < 4) {
				binscore3_2++
			} else if (score3[i] < 5) {
				binscore3_3++
			}
		}


		//折线一数据整理
		zhexianS1.push(binscore1_1, binscore1_2, binscore1_3)
		zhexianS2.push(binscore2_1, binscore2_2, binscore2_3)
		zhexianS3.push(binscore3_1, binscore3_2, binscore3_3)
		// console.log(zhexianS1)
		// console.log(binscore1_3)
		// name = name.reverse()
		// score = score.reverse()
		// console.log(name1)
		// console.log(name2)

		var myChart = echarts.init(document.querySelector('.echartsxing'), 'dark')
		var option1 = {
			title: {
				text: '星级排序',
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
				data: score1
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
		var option2 = {
			title: {
				text: '星级排序',
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
				data: score2
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
		var option3 = {
			title: {
				text: '星级排序',
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
				data: name3,
				axisLabel: {
					textStyle: {
						color: '#fff',
						fontSize: '12'
					}
				}
			},
			series: [{
				type: 'bar',
				data: score3
			}],
			dataZoom: [{
				show: true,
				yAxisIndex: 0,
				filterMode: 'empty',
				width: 30,
				height: '80%',
				showDataShadow: false,
				right: '93%',
				startValue: name3.length,
				endValue: name3.length - 20
			}]
		}
		myChart.setOption(option1)

		setInterval(lun2, 5000)
		setInterval(lun3, 15000)
		setInterval(lun1, 20000)

		function lun1() {
			myChart.setOption(option2)
		}

		function lun2() {
			myChart.setOption(option1)
		}

		function lun3() {
			myChart.setOption(option3)
		}
		// window.addEventListener('resize', function() {
		// 	// 让我们的图表调用 resize这个方法
		// 	myChart.resize()
		// })


		//  饼图之评分
		var myFenBinChart = echarts.init(document.querySelector('.echattsbinxing'), 'dark')

		var binFenoption1 = {
			title: {
				text: '景区score占比',
				left: 'center'
			},
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
				data: ['0-2分', '3-4分', '5分'],
				textStyle: {
					color: 'rgba(255,255,255,.5)',
					fontSize: '12'
				}
			},
			series: [{
				name: '评分占比',
				type: 'pie',
				center: ['50%', '42%'],
				radius: ['40%', '60%'],
				color: [
					'#065aab',
					'#066eab',
					'#0682ab'
				],
				label: { show: false },
				labelLine: { show: false },
				data: [{
						value: binscore1_1,
						name: '0-2分'
					},
					{
						value: binscore1_2,
						name: '3-4分'
					},
					{
						value: binscore1_3,
						name: '5分'
					}
				]
			}]
		}


		// **************2*************
		var binFenoption2 = {
			title: {
				text: '景区score占比',
				left: 'center'
			},
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
				data: ['0-2分', '3-4分', '5分'],
				textStyle: {
					color: 'rgba(255,255,255,.5)',
					fontSize: '12'
				}
			},
			series: [{
				name: '评分占比',
				type: 'pie',
				center: ['50%', '42%'],
				radius: ['40%', '60%'],
				color: [
					'#065aab',
					'#066eab',
					'#0682ab'
				],
				label: { show: false },
				labelLine: { show: false },
				data: [{
						value: binscore2_1,
						name: '0-2分'
					},
					{
						value: binscore2_2,
						name: '3-4分'
					},
					{
						value: binscore2_3,
						name: '5分'
					}
				]
			}]
		}

		myFenBinChart.setOption(binFenoption1)
		setInterval(lunBinFen1, 5000)
		setInterval(lunBinFen2, 10000)

		function lunBinFen1() {
			myFenBinChart.setOption(binFenoption1)
		}

		function lunBinFen2() {
			myFenBinChart.setOption(binFenoption2)
		}


		// 使用刚指定的配置项和数据显示图表。





		// 饼图之星级
		var myBinChart1 = echarts.init(document.querySelector('.echattsbinxing1'), 'dark')

		var binAoption1 = {
			title: {
				text: '景区等级占比',
				left: 'center'
			},
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
				data: ['五A景区', '四A景区', '暂无等级'],
				textStyle: {
					color: 'rgba(255,255,255,.5)',
					fontSize: '12'
				}
			},
			series: [{
				name: '景区',
				type: 'pie',
				center: ['50%', '42%'],
				radius: ['40%', '60%'],
				color: [
					'#065aab',
					'#066eab',
					'#0682ab',
					'#0696ab',
					'#06a0ab',
					'#06b4ab',
					'#06c8ab',
					'#06dcab',
					'#06f0ab'
				],
				label: { show: false },
				labelLine: { show: false },
				data: [{
						value: wuA1,
						name: '五A景区'
					},
					{
						value: siA1,
						name: '四A景区'
					},
					{
						value: zanW1,
						name: '暂无等级'
					}
				]
			}]
		}

		// 使用刚指定的配置项和数据显示图表。
		myBinChart1.setOption(binAoption1)


		var binAoption2 = {
			title: {
				text: '景区等级占比',
				left: 'center'
			},
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
				data: ['五A景区', '四A景区', '暂无等级'],
				textStyle: {
					color: 'rgba(255,255,255,.5)',
					fontSize: '12'
				}
			},
			series: [{
				name: '景区',
				type: 'pie',
				center: ['50%', '42%'],
				radius: ['40%', '60%'],
				color: [
					'#065aab',
					'#066eab',
					'#0682ab',
					'#0696ab',
					'#06a0ab',
					'#06b4ab',
					'#06c8ab',
					'#06dcab',
					'#06f0ab'
				],
				label: { show: false },
				labelLine: { show: false },
				data: [{
						value: wuA2,
						name: '五A景区'
					},
					{
						value: siA2,
						name: '四A景区'
					},
					{
						value: zanW2,
						name: '暂无等级'
					}
				]
			}]
		}



		var binAoption3 = {
			title: {
				text: '景区等级占比',
				left: 'center'
			},
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
				data: ['五A景区', '四A景区', '暂无等级'],
				textStyle: {
					color: 'rgba(255,255,255,.5)',
					fontSize: '12'
				}
			},
			series: [{
				name: '景区',
				type: 'pie',
				center: ['50%', '42%'],
				radius: ['40%', '60%'],
				color: [
					'#065aab',
					'#066eab',
					'#0682ab',
					'#0696ab',
					'#06a0ab',
					'#06b4ab',
					'#06c8ab',
					'#06dcab',
					'#06f0ab'
				],
				label: { show: false },
				labelLine: { show: false },
				data: [{
						value: wuA3,
						name: '五A景区'
					},
					{
						value: siA3,
						name: '四A景区'
					},
					{
						value: zanW3,
						name: '暂无等级'
					}
				]
			}]
		}


		setInterval(BinALun02, 5000)
		setInterval(BinALun03, 15000)
		setInterval(BinALun01, 20000)

		function BinALun01() {
			myBinChart1.setOption(binAoption1)
		}

		function BinALun02() {
			myBinChart1.setOption(binAoption2)
		}

		function BinALun03() {
			myBinChart1.setOption(binAoption3)
		}



		// 折线图   score  一

		var myZheXian2Chart = echarts.init(document.querySelector('.echattszhexian1'), 'dark')
		// 指定配置和数据
		var ZheXian2option01 = {
			title: {
				text: '景区score数量',
				left: 'center'
			},
			color: ['#2f89cf'],
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					// 坐标轴指示器，坐标轴触发有效
					type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			grid: {
				left: '0%',
				top: '10px',
				right: '0%',
				bottom: '4%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				data: [
					'0-2分',
					'3-4分',
					'5分'
				],
				axisTick: { alignWithLabel: true },
				axisLabel: {
					textStyle: {
						color: 'rgba(255,255,255,.6)',
						fontSize: '12'
					}
				},
				axisLine: { show: false }
			}],
			yAxis: [{
				type: 'value',
				axisLabel: {
					textStyle: {
						color: 'rgba(255,255,255,.6)',
						fontSize: '12'
					}
				},
				axisLine: {
					lineStyle: {
						color: 'rgba(255,255,255,.1)'
						// width: 1,
						// type: "solid"
					}
				},
				splitLine: { lineStyle: { color: 'rgba(255,255,255,.1)' } }
			}],
			series: [{
				name: '总数',
				type: 'bar',
				barWidth: '35%',
				data: zhexianS1,
				itemStyle: { barBorderRadius: 5 }
			}]
		}
		myZheXian2Chart.setOption(ZheXian2option01)


		var ZheXian2option02 = {
			title: {
				text: '景区score数量',
				left: 'center'
			},
			color: ['#2f89cf'],
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					// 坐标轴指示器，坐标轴触发有效
					type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			grid: {
				left: '0%',
				top: '10px',
				right: '0%',
				bottom: '4%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				data: [
					'0-2分',
					'3-4分',
					'5分'
				],
				axisTick: { alignWithLabel: true },
				axisLabel: {
					textStyle: {
						color: 'rgba(255,255,255,.6)',
						fontSize: '12'
					}
				},
				axisLine: { show: false }
			}],
			yAxis: [{
				type: 'value',
				axisLabel: {
					textStyle: {
						color: 'rgba(255,255,255,.6)',
						fontSize: '12'
					}
				},
				axisLine: {
					lineStyle: {
						color: 'rgba(255,255,255,.1)'
						// width: 1,
						// type: "solid"
					}
				},
				splitLine: { lineStyle: { color: 'rgba(255,255,255,.1)' } }
			}],
			series: [{
				name: '总数',
				type: 'bar',
				barWidth: '35%',
				data: zhexianS2,
				itemStyle: { barBorderRadius: 5 }
			}]
		}

		var ZheXian2option03 = {
			title: {
				text: '景区score数量',
				left: 'center'
			},
			color: ['#2f89cf'],
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					// 坐标轴指示器，坐标轴触发有效
					type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			grid: {
				left: '0%',
				top: '10px',
				right: '0%',
				bottom: '4%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				data: [
					'0-2分',
					'3-4分',
					'5分'
				],
				axisTick: { alignWithLabel: true },
				axisLabel: {
					textStyle: {
						color: 'rgba(255,255,255,.6)',
						fontSize: '12'
					}
				},
				axisLine: { show: false }
			}],
			yAxis: [{
				type: 'value',
				axisLabel: {
					textStyle: {
						color: 'rgba(255,255,255,.6)',
						fontSize: '12'
					}
				},
				axisLine: {
					lineStyle: {
						color: 'rgba(255,255,255,.1)'
						// width: 1,
						// type: "solid"
					}
				},
				splitLine: { lineStyle: { color: 'rgba(255,255,255,.1)' } }
			}],
			series: [{
				name: '总数',
				type: 'bar',
				barWidth: '35%',
				data: zhexianS3,
				itemStyle: { barBorderRadius: 5 }
			}]
		}


		setInterval(zhexianLun12, 5000)
		setInterval(zhexianLun13, 15000)
		setInterval(zhexianLun11, 20000)

		function zhexianLun11() {
			myZheXian2Chart.setOption(ZheXian2option01)
		}

		function zhexianLun12() {
			myZheXian2Chart.setOption(ZheXian2option02)
		}

		function zhexianLun13() {
			myZheXian2Chart.setOption(ZheXian2option03)
		}




		// 折线图   等级  二 

		var myZheXian1Chart = echarts.init(document.querySelector('.echattszhexian2'), 'dark')
		// 指定配置和数据
		var ZheXian1option01 = {
			title: {
				text: '景区等级排序数量',
				left: 'center'
			},
			color: ['#2f89cf'],
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					// 坐标轴指示器，坐标轴触发有效
					type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			grid: {
				left: '0%',
				top: '10px',
				right: '0%',
				bottom: '4%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				data: [
					'五A景区',
					'四A景区',
					'暂无等级'
				],
				axisTick: { alignWithLabel: true },
				axisLabel: {
					textStyle: {
						color: 'rgba(255,255,255,.6)',
						fontSize: '12'
					}
				},
				axisLine: { show: false }
			}],
			yAxis: [{
				type: 'value',
				axisLabel: {
					textStyle: {
						color: 'rgba(255,255,255,.6)',
						fontSize: '12'
					}
				},
				axisLine: {
					lineStyle: {
						color: 'rgba(255,255,255,.1)'
						// width: 1,
						// type: "solid"
					}
				},
				splitLine: { lineStyle: { color: 'rgba(255,255,255,.1)' } }
			}],
			series: [{
				name: '总数',
				type: 'bar',
				barWidth: '35%',
				data: zhexian1,
				itemStyle: { barBorderRadius: 5 }
			}]
		}
		myZheXian1Chart.setOption(ZheXian1option01)

		var ZheXian1option02 = {
			title: {
				text: '景区等级排序数量',
				left: 'center'
			},
			color: ['#2f89cf'],
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					// 坐标轴指示器，坐标轴触发有效
					type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			grid: {
				left: '0%',
				top: '10px',
				right: '0%',
				bottom: '4%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				data: [
					'五A景区',
					'四A景区',
					'暂无等级'
				],
				axisTick: { alignWithLabel: true },
				axisLabel: {
					textStyle: {
						color: 'rgba(255,255,255,.6)',
						fontSize: '12'
					}
				},
				axisLine: { show: false }
			}],
			yAxis: [{
				type: 'value',
				axisLabel: {
					textStyle: {
						color: 'rgba(255,255,255,.6)',
						fontSize: '12'
					}
				},
				axisLine: {
					lineStyle: {
						color: 'rgba(255,255,255,.1)'
						// width: 1,
						// type: "solid"
					}
				},
				splitLine: { lineStyle: { color: 'rgba(255,255,255,.1)' } }
			}],
			series: [{
				name: '总数',
				type: 'bar',
				barWidth: '35%',
				data: zhexian2,
				itemStyle: { barBorderRadius: 5 }
			}]
		}

		var ZheXian1option03 = {
			title: {
				text: '景区等级排序数量',
				left: 'center'
			},
			color: ['#2f89cf'],
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					// 坐标轴指示器，坐标轴触发有效
					type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			grid: {
				left: '0%',
				top: '10px',
				right: '0%',
				bottom: '4%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				data: [
					'五A景区',
					'四A景区',
					'暂无等级'
				],
				axisTick: { alignWithLabel: true },
				axisLabel: {
					textStyle: {
						color: 'rgba(255,255,255,.6)',
						fontSize: '12'
					}
				},
				axisLine: { show: false }
			}],
			yAxis: [{
				type: 'value',
				axisLabel: {
					textStyle: {
						color: 'rgba(255,255,255,.6)',
						fontSize: '12'
					}
				},
				axisLine: {
					lineStyle: {
						color: 'rgba(255,255,255,.1)'
						// width: 1,
						// type: "solid"
					}
				},
				splitLine: { lineStyle: { color: 'rgba(255,255,255,.1)' } }
			}],
			series: [{
				name: '总数',
				type: 'bar',
				barWidth: '35%',
				data: zhexian3,
				itemStyle: { barBorderRadius: 5 }
			}]
		}


		setInterval(zhexianLun02, 5000)
		setInterval(zhexianLun03, 15000)
		setInterval(zhexianLun01, 20000)

		function zhexianLun01() {
			myZheXian1Chart.setOption(ZheXian1option01)
		}

		function zhexianLun02() {
			myZheXian1Chart.setOption(ZheXian1option02)
		}

		function zhexianLun03() {
			myZheXian1Chart.setOption(ZheXian1option03)
		}
		// 把配置给实例对象


	})
})()
