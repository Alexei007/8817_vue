<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  ::-webkit-scrollbar
  {
    width: 5px;
    height: 10px!important;
    background-color: #fff;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);
    border-radius: 0px;
    background-color: #fff;
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0, 0.5);
    background-color: #fff;
  }

  *
  {
    -webkit-user-select: none!important;
    -moz-user-select: none!important;
    -ms-user-select: none!important;
    user-select: none!important;
  }

  .weui-navbar
  {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 0 2px 10px #aaa;
    letter-spacing: 1px;
  }

  .clear-navbar-fix
  {
    width: 100%;
    height: 42px;
  }

  .footer-wrap
  {
    height: 50px;
    line-height: 50px;
    font-size: 0.8rem;
  }

  .weui-navbar
  {
    background-image: linear-gradient(#fafafa, #fff);
    border-bottom: 0;
    color: #999;
    font-size: 1rem;
    letter-spacing: 2px;
    font-weight: bold;
  }

  .weui-navbar, .weui-navbar .weui-navbar__item
  {
    height: 40px;
    line-height: 40px;
    padding: 0;
  }

  .weui-navbar__item:active
  {
    background-color: transparent;
  }

  .weui-bar__item_on
  {
    background-color: #efefef!important;
    background-image: linear-gradient(#f5f5f5, #eaeaea);
    color: #666;
  }

  .weui-panel__hd
  {
    background-image: linear-gradient(#eee, #fafafa);
    letter-spacing: 1px;
    margin-top: 12px;
  }

  .weui-panel
  {
    border: 0;
  }
</style>
