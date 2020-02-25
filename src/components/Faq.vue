<template>
  <div class="faq-wrap">
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
            <div class="weui-navbar__item" @click="jump2Page('/Bulletin')">
              通报
            </div>
            <div class="weui-navbar__item weui-bar__item_on" @click="jump2Page('/Faq')">
              问答
            </div>
          </div>

          <div class="clear-navbar-fix"></div>

          <div class="weui-tab__panel">

            <div class="weui-panel weui-panel_access">
              <div class="weui-panel__hd">信息来自国家卫生健康委员会官方网站</div>
              <div class="weui-panel__bd">

                <div @click="jump2DetailPage(item.id)" class="weui-media-box weui-media-box_text faq-panel__bd" v-for="item in list">
                  <h4 class="weui-media-box__title faq-title">{{item.question}}</h4>
                  <p class="weui-media-box__desc faq-desc" v-html="item.desc"></p>
                  <a href="javascript:;" class="faq-link">查看详情</a>
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
      name: "faq",
      data () {
        return {
          list: []
        }
      },
      mounted () {
        var that = this;
        MapData.loadLocalJson('/static/faq/faq.json').then(function (response) {
          var da = response.data;
          da = eval(da)
          that.list = da
        });
      },
      methods: {
        jump2DetailPage (id) {
          location.href = '/#/faq-detail?id='+id;
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
  .weui-media-box__desc
  {
    -webkit-line-clamp: 5;
  }

  .faq-title
  {
    color: #536DFE;
    white-space: pre-line;
    margin-bottom: 4px;
    letter-spacing: 2px;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .faq-desc
  {
    font-size: 1rem!important;
    line-height: 1.6rem;
    color: #666;
    letter-spacing: 1px;
  }

  .faq-link
  {
    width: 100%;
    display: inline-block;
    color: #536DFE;
    margin-top: 26px;
    text-align: right;
    font-weight: bold;
    letter-spacing: 1px;
  }

  .faq-panel__bd:nth-child(even)
  {
    background-image: linear-gradient(#fafafa, #f5f5f5);
  }

  .faq-panel__bd:nth-child(odd)
  {
    background-image: linear-gradient(#fafafa, #fff);
  }

  .weui-media-box:before
  {
    border-top: 0;
  }
</style>
