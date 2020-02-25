<template>
    <div class="bulletin-wrap">
      <div class="page">
        <div class="page__bd" style="height: 100%;">
          <div class="weui-tab">
            <div class="weui-navbar">
              <div class="weui-navbar__item" @click="jump2Page('/')">
                数据
              </div>
              <div class="weui-navbar__item" @click="jump2Page('/Medical')">
                疾控
              </div>
              <div class="weui-navbar__item weui-bar__item_on" @click="jump2Page('/Bulletin')">
                通报
              </div>
              <div class="weui-navbar__item" @click="jump2Page('/Faq')">
                问答
              </div>
            </div>

            <div class="clear-navbar-fix"></div>

            <div class="weui-tab__panel">

              <div class="weui-panel">
                <div class="weui-panel__hd">信息来自国家卫生健康委员会官方网站</div>

                <div v-for="item in list" class="weui-panel__bd bulletin-panel__bd" @click="jump2DetailPage(item.id)">
                  <div class="weui-media-box weui-media-box_text">
                    <p class="weui-media-box__desc bulletin-title">{{item.title}}</p>
                    <ul class="weui-media-box__info">
                      <li class="weui-media-box__info__meta">{{item.from}}</li>
                      <li class="weui-media-box__info__meta">{{item.create_time}}</li>
                    </ul>
                  </div>
                </div>

              </div>

            </div>


          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import MapData from '@/data/map.js'
    export default {
        name: "bulletin",
        data () {
          return {
            list: []
          }
        },
        mounted () {
          var that = this;
          MapData.loadLocalJson('/static/bulletin/bulletin.json').then(function (response) {
            var da = response.data;
            da = eval(da)

            that.list = da
          });
        },
        methods: {
          jump2DetailPage (id) {
            location.href = '/#/bulletin-detail?id='+id;
          },
          jump2Page (url) {
            this.$router.replace({
              path: url
            });
          },
        }
    }
</script>

<style scoped>
  .bulletin-title
  {
    color: #536DFE;
    /*text-decoration: underline;*/
    letter-spacing: 2px;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .bulletin-panel__bd
  {
    /*border-bottom: 1px solid #eee;*/
  }

  .bulletin-panel__bd:nth-child(even)
  {
    background-image: linear-gradient(#fafafa, #fff);
  }

  .bulletin-panel__bd:nth-child(odd)
  {
    background-image: linear-gradient(#fafafa, #f5f5f5);
  }

  .weui-media-box__info__meta
  {
    color: #666;
    letter-spacing: 2px;
  }
</style>
