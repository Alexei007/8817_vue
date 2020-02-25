<template>
    <div clas="faq-detail-wrap">
      <div class="page">
        <div class="page__bd" style="height: 100%;">
          <div class="weui-tab">
            <div class="weui-navbar">
              <div class="weui-navbar__item faq-detail-navbar">
                <a class="faq-detail-back"  @click="goPrevPage()">
                  <img src="@/assets/back.png" alt="返回">
                  返回
                </a>
                问答详情
              </div>
            </div>

            <div class="clear-navbar-fix"></div>

            <div class="weui-tab__panel">

              <div class="weui-article">
                <h1 class="faq-detail-title">{{data.question}}</h1>
                <div>
                  <ul class="weui-media-box__info faq-detail-sub-title">
                    <!--<li class="weui-media-box__info__meta">卫生应急办公室</li>-->
                    <li class="weui-media-box__info__meta">{{data.create_time}}</li>
                  </ul>

                  <div class="faq-detail-answer" v-html="data.answer"></div>
                </div>
              </div>

              <div class="weui-footer footer-wrap">
                <p class="weui-footer__text">信息来自国家卫生健康委员会官方网站</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import MapData from '@/data/map.js'
  import axios from 'axios';
  export default {
    name: "faq-detail",
    data () {
      return {
        data: []
      }
    },
    mounted () {
      var that = this;

      axios.get('/static/faq/'+MapData.getUrlKey('id')+'.json').then(function (response) {
          that.data = response.data.data;
      });
    },
    methods: {
      goPrevPage: function () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .faq-detail-navbar
  {
    position: relative;
    color: #3a3a3a;
  }

  .faq-detail-back
  {
    position: absolute;
    left: 16px;
    font-size: 0.8rem;
    color: #3a3a3a;
  }

  .faq-detail-back img
  {
    width: 12px;
    vertical-align: middle;
  }

  .faq-detail-title
  {
    margin: 0;
    color: #536DFE;
    font-weight: bold;
    font-size: 1.4rem;
    letter-spacing: 1px;
  }

  .faq-detail-sub-title
  {
    margin-bottom: 6px;
    color: #888;
    font-size: 0.8rem;
    letter-spacing: 1px;
  }

  .faq-detail-answer
  {
    font-size: 1.2rem;
    line-height: 2rem;
    color: #666;
    letter-spacing: 1px;
  }
</style>
