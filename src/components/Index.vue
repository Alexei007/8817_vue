<template>
    <div class="index-wrap">
      <div class="page">
        <div class="page__bd" style="height: 100%;">
          <div class="weui-tab">
            <div class="weui-navbar">
              <div class="weui-navbar__item weui-bar__item_on" @click="jump2Page('/')">
                数据
              </div>
              <div class="weui-navbar__item" @click="jump2Page('/Medical')">
                疾控
              </div>
              <div class="weui-navbar__item" @click="jump2Page('/Bulletin')">
                通报
              </div>
              <div class="weui-navbar__item" @click="jump2Page('/Faq')">
                问答
              </div>
            </div>

            <div class="clear-navbar-fix"></div>

            <div class="weui-tab__panel">

              <div class="weui-panel weui-panel_access">
                <div class="weui-panel__hd">
                  全国疫情
                  <p class="weui-media-box__desc" :style="{float: 'right', fontSize: '0.8rem', letterSpacing: '0'}">统计截至：{{updateTime}}</p>
                </div>

                <div class="weui-panel__bd">
                  <div class="weui-flex" :style="{padding: '16px 0'}">
                    <div class="weui-flex__item index-flex-item">
                      <p>确诊</p>
                      <p>{{ updateData.confirmed }}</p>
                      <!--<p>+{{ updateData.confirmedIncr }}</p>-->
                    </div>
                    <div class="weui-flex__item index-flex-item">
                      <p>疑似</p>
                      <p>{{ updateData.suspected }}</p>
                      <!--<p>+{{ updateData.suspectedIncr }}</p>-->
                    </div>
                    <div class="weui-flex__item index-flex-item">
                      <p>治愈</p>
                      <p>{{ updateData.cured }}</p>
                      <!--<p>+{{ updateData.curedIncr }}</p>-->
                    </div>
                    <div class="weui-flex__item index-flex-item">
                      <p>死亡</p>
                      <p>{{ updateData.dead }}</p>
                      <!--<p>+{{ updateData.deadIncr }}</p>-->
                    </div>
                  </div>
                </div>
              </div>

              <div class="weui-panel weui-panel_access" :style="{marginTop: '0'}">
                <div class="weui-panel__hd">疫情分布图</div>
                <div class="weui-panel__bd">
                  <div id="myChart" :style="{width: '100%', height: '360px'}"></div>
                </div>
              </div>

              <div class="weui-panel weui-panel_access" :style="{marginTop: '0'}">
                <!--<div class="weui-panel__hd">国内疫情</div>-->
                <div class="weui-panel__bd mdui-table-fluid">
                  <table class="mdui-table">
                    <thead :style="{backgroundImage: 'linear-gradient(#eee, #e4e4e4)'}">
                      <tr :style="{fontWeight: 'bold', letterSpacing: '1px'}">
                        <td>地区</td>
                        <td>确诊</td>
                        <td>治愈</td>
                        <td>死亡</td>
                      </tr>
                    </thead>
                    <tbody v-for="(item, index) in mapData">
                      <tr v-on:click="showCities(index)" class="parent-tr">
                        <td>
                          <img src="@/assets/down.png" v-show="!item.iShowCities && item.cities.length" :style="{width: '14px', verticalAlign: 'middle'}">
                          <img src="@/assets/up.png" v-show="item.iShowCities && item.cities.length" :style="{width: '14px', verticalAlign: 'middle'}">
                          <div v-if="!item.cities.length" :style="{width: '14px', display: 'inline-block'}"></div>
                          {{item.provinceName}}
                        </td>
                        <td>{{item.confirmedCount[0]}}</td>
                        <td>{{item.curedCount[0]}}</td>
                        <td>{{item.deadCount[0]}}</td>
                      </tr>
                      <tr class="child-tr animated" v-bind:class="{ slideInDown: item.iShowCities, fadeInUp: !item.iShowCities }" v-for="vo in item.cities" v-show="item.iShowCities">
                        <td>{{vo.cityName}}</td>
                        <td>{{vo.confirmedCount[0]}}</td>
                        <td>{{vo.curedCount[0]}}</td>
                        <td>{{vo.deadCount[0]}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import MapData from "@/data/map.js"
    import '../../node_modules/echarts/map/js/china.js'

    export default {
        name: "index",
        data () {
          return {
            test: false,
            updateData: {
              confirmed: 0,
              confirmedIncr: 0,
              suspected: 0,
              suspectedIncr: 0,
              cured: 0,
              curedIncr: 0,
              dead: 0,
              deadIncr: 0,
            },
            updateTime: 0,
            mapData: [],
            mapShowData: []
          }
        },
        mounted(){
          var that = this;
          MapData.loadLocalJson('/static/map_data.json').then(function (response) {
            var new_arr = new Array();
            var update_info;
            var mapData = eval(response.data);
            var mapShowData = [];
            for ( var i=0; i<mapData.length; i++ ) {
              if ( i==0 ) {
                update_info = mapData[i];
              } else if ( i>=4 ) {
                mapData[i].iShowCities = false;
                mapData[i].cityClass = false;
                new_arr.push(mapData[i]);
                mapShowData[i] = {
                  name: mapData[i].provinceShortName,
                  value: mapData[i].confirmedCount[0]
                };
              }
            }
            that.updateData = update_info
            that.mapData = new_arr
            that.mapShowData = mapShowData
            that.updateTime = response.update_time
            that.initMap();
          });
        },
        methods: {
          showCities (index) {
            if ( this.mapData[index].iShowCities == true ) {
              this.mapData[index].iShowCities = false;
              this.mapData[index].cityClass = this.mapData[index].iShowCities? 'fadeInDown': 'fadeInUp';
            } else {
              this.mapData[index].iShowCities = true;
            }
          },
          getProvinceDetail (province) {
            for ( let i=0; i<this.mapData.length; i++ ) {
              if ( province == this.mapData[i].provinceShortName ) {
                return this.mapData[i];
                break;
              }
            }
          },
          jump2Page (url) {
            this.$router.replace({
              path: url
            });
          },
          initMap(){
            var that = this;

            // 基于准备好的dom，初始化echarts实例
            let echarts = this.$echarts.init(document.getElementById('myChart'));

            var option = {
              tooltip: {
                triggerOn: "click",
                formatter: function(e, t, n) {

                  var provinceDetail  = that.getProvinceDetail(e.name);

                  return provinceDetail.provinceName + '<br>'
                    + '确诊：' + provinceDetail.confirmedCount + '<br>'
                    // + '疑似：' + provinceDetail.suspectedCount + '<br>'
                    + '治愈：' + provinceDetail.curedCount + '<br>'
                    + '死亡：' + provinceDetail.deadCount + '<br>'
                }
              },
              visualMap: {
                min: 0,
                max: 1000,
                left: 2,
                bottom: 4,
                showLabel: !0,
                text: ["确诊"],
                align: 'auto',
                inverse: false,
                orient: 'horizontal',
                textGap: 2,
                itemWidth: 10,
                itemHeight: 10,
                pieces: [{
                  gt: 5000,
                  label: ">5000",
                  color: "#B71C1C"
                }, {
                  gte: 1000,
                  lte: 4999,
                  label: "1000~4999",
                  color: "#E53935"
                }, {
                  gte: 500,
                  lte: 999,
                  label: "500~999",
                  color: "#FF9800"
                }, {
                  gte: 100,
                  lte: 499,
                  label: "100~499",
                  color: "#FFCC80"
                }, {
                  gte: 1,
                  lte: 99,
                  label: "1~99",
                  color: "#FFE0B2"
                }],
              },
              geo: {
                map: "china",
                roam: !1,
                scaleLimit: {
                  min: 1,
                  max: 2
                },
                zoom: 1.23,
                top: 40,
                label: {
                  normal: {
                    show: !0,
                    fontSize: "14",
                    color: "#263238"
                  }
                },
                itemStyle: {
                  normal: {
                    borderColor: "#666"
                  },
                  emphasis: {
                    areaColor: "#42A5F5",
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    borderWidth: 0
                  }
                }
              },
              series: [{
                type: 'scatter',
                coordinateSystem: 'geo'
              }, {
                name: "确诊病例",
                type: "map",
                geoIndex: 0,
                data: that.mapShowData
              }]
            };

            echarts.setOption(option);
          }
        }
    }
</script>

<style scoped>
  .index-flex-item
  {
    text-align: center;
    padding: 6px 0;
    border: 0;
  }

  .index-flex-item:nth-child(1)
  {
    color: #F44336;
  }

  .index-flex-item:nth-child(2)
  {
    color: #FF9800;
  }

  .index-flex-item:nth-child(3)
  {
    color: #00C853;
  }

  .index-flex-item:nth-child(4)
  {
    color: #9E9E9E;
  }

  .index-flex-item p:nth-child(1)
  {
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 1px;
  }

  .index-flex-item p:nth-child(2)
  {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .index-flex-item p:nth-child(3)
  {
    font-size: 0.8rem;
  }

  tr td:nth-child(1)
  {
    color: #3a3a3a;
  }
  tr td:nth-child(2)
  {
    color: #F44336;
  }
  tr td:nth-child(3)
  {
    color: #00C853;
  }
  tr td:nth-child(4)
  {
    color: #9E9E9E;
  }

  .parent-tr
  {
    background-image: linear-gradient(#fff, #eee);
  }

  .child-tr
  {
    background-image: linear-gradient(#f5f5f5, #fafafa);
  }

  #myChart
  {
    background-image: linear-gradient(#fff, #fafafa);
  }
</style>
