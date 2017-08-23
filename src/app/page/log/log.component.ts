import {Component, OnInit} from '@angular/core';
import * as echarts from 'echarts'

@Component({
    selector: 'nz-log',
    templateUrl: './log.component.html',
    styleUrls: ['./log.component.less']
})
export class LogComponent implements OnInit {
    _ERROR = 70;
    _WARN = 7;
    _FATAL = 66;

    _formatLOG = percent => `${percent} %`;


    constructor() {
    }

    ngOnInit() {
        const myChart = echarts.init(document.getElementById('log-history-analysis'));
        console.dir(echarts);
        const data_val = [22700, 23066, 24066, 23492, 27532, 26694, 28757],
            xAxis_val = ['2010', '2011', '2012', '2013', '2014', '2015', '2016'];
        const data_val1 = [0, 0, 0, 0, 0, 0, 0];
        const option = {
            backgroundColor: '#293042',
            grid: {
                left: 10,
                top: '10%',
                bottom: 20,
                right: 40,
                containLabel: true
            },
            tooltip: {
                show: true,
                backgroundColor: '#384157',
                borderColor: '#384157',
                borderWidth: 1,
                formatter: '{b}:{c}',
                extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 1)'
            },
            legend: {
                right: 0,
                top: 0,
                data: ['距离'],
                textStyle: {
                    color: '#5c6076'
                }
            },
            title: {
                text: '人才资源总量',
                x: '4.5%',
                top: '1%',
                textStyle: {
                    color: '#fff'
                }
            },
            xAxis: {
                data: xAxis_val,
                boundaryGap: false,
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: {
                ayisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                },
                min: 20000,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#2e3547'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#384157'
                    }
                }
            },

            series: [{
                type: 'bar',
                name: 'linedemo',


                tooltip: {
                    show: false
                },
                animation: false,
                barWidth: 1.4,
                hoverAnimation: false,
                data: data_val,
                itemStyle: {
                    normal: {
                        color: '#f17a52',
                        opacity: 0.6,
                        label: {
                            show: false
                        }
                    }
                }
            }, {
                type: 'line',
                name: '人才资源总量',

                animation: false,
                symbol: 'circle',

                hoverAnimation: false,
                data: data_val1,
                itemStyle: {
                    normal: {
                        color: '#f17a52',
                        opacity: 0,
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1,
                        color: '#384157',
                        opacity: 1
                    }
                }
            }, {
                type: 'line',
                name: 'linedemo',
                smooth: true,
                symbolSize: 10,
                animation: false,
                lineWidth: 1.2,
                hoverAnimation: false,
                data: data_val,
                symbol: 'circle',
                itemStyle: {
                    normal: {
                        color: '#f17a52',
                        shadowBlur: 40,
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#f17a52',

                            }
                        }
                    }
                },
                areaStyle: {
                    normal: {
                        color: '#f17a52',
                        opacity: 0.08
                    }
                }

            }]
        };
        myChart.setOption(option);
    }


}


