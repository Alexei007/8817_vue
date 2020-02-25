<template>
    <div class="medical-wrap">
      <div class="page">
        <div class="page__bd" style="height: 100%;">
          <div class="weui-tab">
            <div class="weui-navbar">
              <div class="weui-navbar__item" @click="jump2Page('/')">
                数据
              </div>
              <div class="weui-navbar__item weui-bar__item_on" @click="jump2Page('/Medical')">
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

            <div class="weui-tab__panel mdui-table-fluid" :style="{marginTop: '12px'}">
              <table class="mdui-table">
                <thead :style="{backgroundImage: 'linear-gradient(#fff, #eee)'}">
                  <tr>
                    <th>省</th>
                    <th>疾控中心</th>
                    <th>咨询电话</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                  <td rowspan="1" class="rowspan-style">北京市</td>
                  <td>北京市疾病预防控制中心</td>
                  <td>
                    <a href="tel:010-64212461" class="phone">010-64212461</a>
                  </td>
                </tr>
                <tr>
                  <td rowspan="1" class="rowspan-style">天津市</td>
                  <td>天津市疾病预防控制中心</td>
                  <td>
                    <a href="tel:022-24333453" class="phone">022-24333453</a>
                  </td>
                </tr>
                <tr>
                  <td rowspan="11" class="rowspan-style">河北省</td>
                  <td>石家庄市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0311-86032070" class="phone">0311-86032070</a>
                  </td>
                </tr>
                <tr>
                  <td>唐山市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0315-3252542" class="phone">0315-3252542</a>
                  </td>
                </tr>
                <tr>
                  <td>秦皇岛市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0335-3652607" class="phone">0335-3652607</a>
                  </td>
                </tr>
                <tr>
                  <td>邯郸市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0310-8168129" class="phone">0310-8168129</a>
                  </td>
                </tr>
                <tr>
                  <td>邢台市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0319-2130065" class="phone">0319-2130065</a>
                  </td>
                </tr>
                <tr>
                  <td>保定市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0312-3353111" class="phone">0312-3353111</a>
                  </td>
                </tr>
                <tr>
                  <td>张家口市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0313-4099500" class="phone">0313-4099500</a>
                  </td>
                </tr>
                <tr>
                  <td>承德市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0314-2273158" class="phone">0314-2273158</a>
                  </td>
                </tr>
                <tr>
                  <td>沧州市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0317-5501918" class="phone">0317-5501918</a>
                  </td>
                </tr>
                <tr>
                  <td>廊坊市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0316-2206355" class="phone">0316-2206355</a>
                  </td>
                </tr>
                <tr>
                  <td>衡水市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0318-2811001" class="phone">0318-2811001</a>
                  </td>
                </tr>
                <tr>
                  <td rowspan="11" class="rowspan-style">山西省</td>
                  <td>太原市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0351-7822882" class="phone">0351-7822882</a>
                  </td>
                </tr>
                <tr>
                  <td>大同市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0352-2403469" class="phone">0352-2403469</a>
                  </td>
                </tr>
                <tr>
                  <td>阳泉市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0353-2297206" class="phone">0353-2297206</a>
                  </td>
                </tr>
                <tr>
                  <td>长治市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0355-3559851" class="phone">0355-3559851</a>
                  </td>
                </tr>
                <tr>
                  <td>晋城市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0356-2027867" class="phone">0356-2027867</a>
                  </td>
                </tr>
                <tr>
                  <td>朔州市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0349-2162928" class="phone">0349-2162928</a>
                  </td>
                </tr>
                <tr>
                  <td>晋中市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0354-3073499" class="phone">0354-3073499</a>
                  </td>
                </tr>
                <tr>
                  <td>运城市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0359-2052259" class="phone">0359-2052259</a>
                  </td>
                </tr>
                <tr>
                  <td>忻州市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0350-2032066" class="phone">0350-2032066</a>
                  </td>
                </tr>
                <tr>
                  <td>临汾市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0357-2012035" class="phone">0357-2012035</a>
                  </td>
                </tr>
                <tr>
                  <td>吕梁市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0358-2255203" class="phone">0358-2255203</a>
                  </td>
                </tr>
                <tr>
                  <td rowspan="12" class="rowspan-style">内蒙古自治区</td>
                  <td>呼和浩特市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0471-6627110" class="phone">0471-6627110</a>
                  </td>
                </tr>
                <tr>
                  <td>包头市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0472-5171570" class="phone">0472-5171570</a>
                  </td>
                </tr>
                <tr>
                  <td>乌海市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0473-2012495" class="phone">0473-2012495</a>
                  </td>
                </tr>
                <tr>
                  <td>赤峰市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0476-5891160" class="phone">0476-5891160</a>
                  </td>
                </tr>
                <tr>
                  <td>通辽市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0475-8239035" class="phone">0475-8239035</a>
                  </td>
                </tr>
                <tr>
                  <td>鄂尔多斯市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0477-3896567" class="phone">0477-3896567</a>
                  </td>
                </tr>
                <tr>
                  <td>呼伦贝尔市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0470-8293085" class="phone">0470-8293085</a>
                  </td>
                </tr>
                <tr>
                  <td>巴彦淖尔市疾病预防控制中心</td>
                  <td>
                    <a href="tel:15326784081" class="phone">15326784081</a>
                  </td>
                </tr>
                <tr>
                  <td>乌兰察布市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0474-4886980" class="phone">0474-4886980</a>
                  </td>
                </tr>
                <tr>
                  <td>兴安盟疾病预防控制中心</td>
                  <td>
                    <a href="tel:0482-2233006" class="phone">0482-2233006</a>
                  </td>
                </tr>
                <tr>
                  <td>锡林郭勒盟疾病预防控制中心</td>
                  <td>
                    <a href="tel:0479-7539330" class="phone">0479-7539330</a>
                  </td>
                </tr>
                <tr>
                  <td>阿拉善盟疾病预防控制中心</td>
                  <td>
                    <a href="tel:0483-8331807" class="phone">0483-8331807</a>
                  </td>
                </tr>
                <tr>
                  <td rowspan="14" class="rowspan-style">辽宁省</td>
                  <td>沈阳市疾病预防控制中心</td>
                  <td>
                    <a href="tel:024-95120" class="phone">024-95120</a>
                  </td>
                </tr>
                <tr>
                  <td>大连市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0411-84310142" class="phone">0411-84310142</a>
                  </td>
                </tr>
                <tr>
                  <td>鞍山市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0412-5547018" class="phone">0412-5547018</a>
                  </td>
                </tr>
                <tr>
                  <td>抚顺市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0413-7805555" class="phone">0413-7805555</a>
                  </td>
                </tr>
                <tr>
                  <td>本溪市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0414-3868948" class="phone">0414-3868948</a>
                  </td>
                </tr>
                <tr>
                  <td>丹东市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0415-6161773" class="phone">0415-6161773</a>
                  </td>
                </tr>
                <tr>
                  <td>锦州市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0416-2323357" class="phone">0416-2323357</a>
                  </td>
                </tr>
                <tr>
                  <td>营口市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0417-4893511" class="phone">0417-4893511</a>
                  </td>
                </tr>
                <tr>
                  <td>阜新市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0418-3986616" class="phone">0418-3986616</a>
                  </td>
                </tr>
                <tr>
                  <td>辽阳市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0419-4131738" class="phone">0419-4131738</a>
                  </td>
                </tr>
                <tr>
                  <td>盘锦市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0427-8180135" class="phone">0427-8180135</a>
                  </td>
                </tr>
                <tr>
                  <td>铁岭市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0410-2827198" class="phone">0410-2827198</a>
                  </td>
                </tr>
                <tr>
                  <td>朝阳市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0421-2836119" class="phone">0421-2836119</a>
                  </td>
                </tr>
                <tr>
                  <td>葫芦岛市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0429-3113098" class="phone">0429-3113098</a>
                  </td>
                </tr>
                <tr>
                  <td rowspan="9" class="rowspan-style">吉林省</td>
                  <td>长春市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0431-89819008" class="phone">0431-89819008</a>
                  </td>
                </tr>
                <tr>
                  <td>吉林市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0432-62022544" class="phone">0432-62022544</a>
                  </td>
                </tr>
                <tr>
                  <td>四平市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0434-3232092" class="phone">0434-3232092</a>
                  </td>
                </tr>
                <tr>
                  <td>辽源市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0437-6148276" class="phone">0437-6148276</a>
                  </td>
                </tr>
                <tr>
                  <td>通化市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0435-3210322" class="phone">0435-3210322</a>
                  </td>
                </tr>
                <tr>
                  <td>白山市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0439-3227851" class="phone">0439-3227851</a>
                  </td>
                </tr>
                <tr>
                  <td>松原市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0438-2163222" class="phone">0438-2163222</a>
                  </td>
                </tr>
                <tr>
                  <td>白城市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0436-3606110" class="phone">0436-3606110</a>
                  </td>
                </tr>
                <tr>
                  <td>延边朝鲜族自治州疾病预防控制中心</td>
                  <td>
                    <a href="tel:0433-2515868" class="phone">0433-2515868</a>
                  </td>
                </tr>
                <tr>
                  <td rowspan="13" class="rowspan-style">黑龙江省</td>
                  <td>哈尔滨市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0451-84651404" class="phone">0451-84651404</a>
                  </td>
                </tr>
                <tr>
                  <td>齐齐哈尔市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0452-2331693" class="phone">0452-2331693</a>
                  </td>
                </tr>
                <tr>
                  <td>鸡西市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0467-2881263" class="phone">0467-2881263</a>
                  </td>
                </tr>
                <tr>
                  <td>鹤岗市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0468-6111120" class="phone">0468-6111120</a>
                  </td>
                </tr>
                <tr>
                  <td>双鸭山市疾病预防控制中心</td>
                  <td>
                    <a href="tel:0469-6106037" class="phone">0469-6106037</a>
                  </td>
                </tr><tr><td>大庆市疾病预防控制中心</td><td><a href="tel:0459-4687314" class="phone">0459-4687314</a></td></tr><tr><td>伊春市疾病预防控制中心</td><td><a href="tel:0458-6113698" class="phone">0458-6113698</a></td></tr><tr><td>佳木斯市疾病预防控制中心</td><td><a href="tel:0454-8792000" class="phone">0454-8792000</a></td></tr><tr><td>七台河市疾病预防控制中心</td><td><a href="tel:0464-8685305" class="phone">0464-8685305</a></td></tr><tr><td>牡丹江市疾病预防控制中心</td><td><a href="tel:0453-6178040" class="phone">0453-6178040</a></td></tr><tr><td>黑河市疾病预防控制中心</td><td><a href="tel:0456-6103742" class="phone">0456-6103742</a></td></tr><tr><td>绥化市疾病预防控制中心</td><td><a href="tel:0455-8360741" class="phone">0455-8360741</a></td></tr><tr><td>大兴安岭地区疾病预防控制中心</td><td><a href="tel:0457-2732058" class="phone">0457-2732058</a></td></tr><tr><td rowspan="1" class="rowspan-style">上海市</td><td>上海市疾病预防控制中心</td><td><a href="tel:021-62758710" class="phone">021-62758710</a></td></tr><tr><td rowspan="13" class="rowspan-style">江苏省</td><td>南京市疾病预防控制中心</td><td><a href="tel:025-83538309" class="phone">025-83538309</a></td></tr><tr><td>无锡市疾病预防控制中心</td><td><a href="tel:0510-82723439" class="phone">0510-82723439</a></td></tr><tr><td>徐州市疾病预防控制中心</td><td><a href="tel:0516-85956789" class="phone">0516-85956789</a></td></tr><tr><td>常州市疾病预防控制中心</td><td><a href="tel:0519-86684627" class="phone">0519-86684627</a></td></tr><tr><td>苏州市疾病预防控制中心</td><td><a href="tel:0512-68285423" class="phone">0512-68285423</a></td></tr><tr><td>南通市疾病预防控制中心</td><td><a href="tel:0513-81551510" class="phone">0513-81551510</a></td></tr><tr><td>连云港市疾病预防控制中心</td><td><a href="tel:0518-85519287" class="phone">0518-85519287</a></td></tr><tr><td>淮安市疾病预防控制中心</td><td><a href="tel:0517-83644260" class="phone">0517-83644260</a></td></tr><tr><td>盐城市疾病预防控制中心</td><td><a href="tel:0515-88334457" class="phone">0515-88334457</a></td></tr><tr><td>扬州市疾病预防控制中心</td><td><a href="tel:0514-80826110" class="phone">0514-80826110</a></td></tr><tr><td>镇江市疾病预防控制中心</td><td><a href="tel:13016829738" class="phone">13016829738</a></td></tr><tr><td>泰州市疾病预防控制中心</td><td><a href="tel:0523-12320" class="phone">0523-12320</a></td></tr><tr><td>宿迁市疾病预防控制中心</td><td><a href="tel:0527-84389348" class="phone">0527-84389348</a></td></tr><tr><td rowspan="11" class="rowspan-style">浙江省</td><td>杭州市疾病预防控制中心</td><td><a href="tel:0571-85155039" class="phone">0571-85155039</a></td></tr><tr><td>宁波市疾病预防控制中心</td><td><a href="tel:0574-87680042" class="phone">0574-87680042</a></td></tr><tr><td>温州市疾病预防控制中心</td><td><a href="tel:0577-88908099" class="phone">0577-88908099</a></td></tr><tr><td>嘉兴市疾病预防控制中心</td><td><a href="tel:18857318999" class="phone">18857318999</a></td></tr><tr><td>湖州市疾病预防控制中心</td><td><a href="tel:0572-2760110" class="phone">0572-2760110</a></td></tr><tr><td>绍兴市疾病预防控制中心</td><td><a href="tel:0575-85551691" class="phone">0575-85551691</a></td></tr><tr><td>金华市疾病预防控制中心</td><td><a href="tel:0579-82339041" class="phone">0579-82339041</a></td></tr><tr><td>衢州市疾病预防控制中心</td><td><a href="tel:0570-3029162" class="phone">0570-3029162</a></td></tr><tr><td>舟山市疾病预防控制中心</td><td><a href="tel:0580-95120" class="phone">0580-95120</a></td></tr><tr><td>台州市疾病预防控制中心</td><td><a href="tel:13705760119" class="phone">13705760119</a></td></tr><tr><td>丽水市疾病预防控制中心</td><td><a href="tel:0578-95120" class="phone">0578-95120</a></td></tr><tr><td rowspan="16" class="rowspan-style">安徽省</td><td>合肥市疾病预防控制中心</td><td><a href="tel:0551-12320" class="phone">0551-12320</a></td></tr><tr><td>芜湖市疾病预防控制中心</td><td><a href="tel:0553-3856285" class="phone">0553-3856285</a></td></tr><tr><td>蚌埠市疾病预防控制中心</td><td><a href="tel:0552-12320" class="phone">0552-12320</a></td></tr><tr><td>淮南市疾病预防控制中心</td><td><a href="tel:0554-6318085" class="phone">0554-6318085</a></td></tr><tr><td>马鞍山市疾病预防控制中心</td><td><a href="tel:0555-8366611" class="phone">0555-8366611</a></td></tr><tr><td>淮北市疾病预防控制中心</td><td><a href="tel:0561-12320" class="phone">0561-12320</a></td></tr><tr><td>铜陵市疾病预防控制中心</td><td><a href="tel:0562-12320" class="phone">0562-12320</a></td></tr><tr><td>安庆市疾病预防控制中心</td><td><a href="tel:0556-12320" class="phone">0556-12320</a></td></tr><tr><td>黄山市疾病预防控制中心</td><td><a href="tel:0559-2591865" class="phone">0559-2591865</a></td></tr><tr><td>滁州市疾病预防控制中心</td><td><a href="tel:0550-3519352" class="phone">0550-3519352</a></td></tr><tr><td>阜阳市疾病预防控制中心</td><td><a href="tel:0558-2568810" class="phone">0558-2568810</a></td></tr><tr><td>宿州市疾病预防控制中心</td><td><a href="tel:0557-3672307" class="phone">0557-3672307</a></td></tr><tr><td>六安市疾病预防控制中心</td><td><a href="tel:0564-12320" class="phone">0564-12320</a></td></tr><tr><td>亳州市疾病预防控制中心</td><td><a href="tel:0558-5126128" class="phone">0558-5126128</a></td></tr><tr><td>池州市疾病预防控制中心</td><td><a href="tel:0566-2811701" class="phone">0566-2811701</a></td></tr><tr><td>宣城市疾病预防控制中心</td><td><a href="tel:0563-3392525" class="phone">0563-3392525</a></td></tr><tr><td rowspan="9" class="rowspan-style">福建省</td><td>福州市疾病预防控制中心</td><td><a href="tel:0591-87619239" class="phone">0591-87619239</a></td></tr><tr><td>厦门市疾病预防控制中心</td><td><a href="tel:0592-3693333" class="phone">0592-3693333</a></td></tr><tr><td>莆田市疾病预防控制中心</td><td><a href="tel:0594-2293339" class="phone">0594-2293339</a></td></tr><tr><td>三明市疾病预防控制中心</td><td><a href="tel:0598-8241150" class="phone">0598-8241150</a></td></tr><tr><td>泉州市疾病预防控制中心</td><td><a href="tel:0595-28067800" class="phone">0595-28067800</a></td></tr><tr><td>漳州市疾病预防控制中心</td><td><a href="tel:0596-2092652" class="phone">0596-2092652</a></td></tr><tr><td>南平市疾病预防控制中心</td><td><a href="tel:0599-8620676" class="phone">0599-8620676</a></td></tr><tr><td>龙岩市疾病预防控制中心</td><td><a href="tel:0597-2223270" class="phone">0597-2223270</a><a href="tel:0597-2291696" class="phone">0597-2291696</a></td></tr><tr><td>宁德市疾病预防控制中心</td><td><a href="tel:0593-2366851" class="phone">0593-2366851</a></td></tr><tr><td rowspan="11" class="rowspan-style">江西省</td><td>南昌市疾病预防控制中心</td><td><a href="tel:0791-86363837" class="phone">0791-86363837</a></td></tr><tr><td>景德镇市疾病预防控制中心</td><td><a href="tel:0798-8523030" class="phone">0798-8523030</a></td></tr><tr><td>萍乡市疾病预防控制中心</td><td><a href="tel:0799-6353639" class="phone">0799-6353639（白天）</a><a href="tel:0799-6834318" class="phone">0799-6834318（晚上）</a></td></tr><tr><td>九江市疾病预防控制中心</td><td><a href="tel:0792-8581998" class="phone">0792-8581998</a></td></tr><tr><td>新余市疾病预防控制中心</td><td><a href="tel:0790-6442740" class="phone">0790-6442740</a></td></tr><tr><td>鹰潭市疾病预防控制中心</td><td><a href="tel:0701-6440903" class="phone">0701-6440903</a></td></tr><tr><td>赣州市疾病预防控制中心</td><td><a href="tel:0797-8158705" class="phone">0797-8158705</a></td></tr><tr><td>吉安市疾病预防控制中心</td><td><a href="tel:0796-8227951" class="phone">0796-8227951</a></td></tr><tr><td>宜春市疾病预防控制中心</td><td><a href="tel:0795-3203471" class="phone">0795-3203471</a></td></tr><tr><td>抚州市疾病预防控制中心</td><td><a href="tel:0794-8283883" class="phone">0794-8283883</a></td></tr><tr><td>上饶市疾病预防控制中心</td><td><a href="tel:0793-8230042" class="phone">0793-8230042</a></td></tr><tr><td rowspan="17" class="rowspan-style">山东省</td><td>济南市疾病预防控制中心</td><td><a href="tel:0531-81278816" class="phone">0531-81278816</a></td></tr><tr><td>青岛市疾病预防控制中心</td><td><a href="tel:0532-85652500" class="phone">0532-85652500</a></td></tr><tr><td>淄博市疾病预防控制中心</td><td><a href="tel:0533-2184550" class="phone">0533-2184550</a></td></tr><tr><td>枣庄市疾病预防控制中心</td><td><a href="tel:0632-3698960" class="phone">0632-3698960</a></td></tr><tr><td>东营市疾病预防控制中心</td><td><a href="tel:0546-6070098" class="phone">0546-6070098</a></td></tr><tr><td>烟台市疾病预防控制中心</td><td><a href="tel:0535-6700925" class="phone">0535-6700925</a></td></tr><tr><td>潍坊市疾病预防控制中心</td><td><a href="tel:0536-8232244" class="phone">0536-8232244</a><a href="tel:0536-8232528" class="phone">0536-8232528</a></td></tr><tr><td>济宁市疾病预防控制中心</td><td><a href="tel:0537-2655350" class="phone">0537-2655350</a></td></tr><tr><td>泰安市疾病预防控制中心</td><td><a href="tel:0538-8489809" class="phone">0538-8489809</a></td></tr><tr><td>威海市疾病预防控制中心</td><td><a href="tel:0631-5300059" class="phone">0631-5300059</a></td></tr><tr><td>日照市疾病预防控制中心</td><td><a href="tel:0633-8816507" class="phone">0633-8816507</a></td></tr><tr><td>莱芜市疾病预防控制中心</td><td><a href="tel:0634-8677905" class="phone">0634-8677905</a></td></tr><tr><td>临沂市疾病预防控制中心</td><td><a href="tel:0539-8314790" class="phone">0539-8314790</a></td></tr><tr><td>德州市疾病预防控制中心</td><td><a href="tel:0534-2670077" class="phone">0534-2670077</a></td></tr><tr><td>聊城市疾病预防控制中心</td><td><a href="tel:0635-8222703" class="phone">0635-8222703</a></td></tr><tr><td>滨州市疾病预防控制中心</td><td><a href="tel:0543-3324709" class="phone">0543-3324709</a></td></tr><tr><td>菏泽市疾病预防控制中心</td><td><a href="tel:0530-5316867" class="phone">0530-5316867</a><a href="tel:0530-5311396" class="phone">0530-5311396</a></td></tr><tr><td rowspan="17" class="rowspan-style">河南省</td><td>郑州市疾病预防控制中心</td><td><a href="tel:0371-67135330" class="phone">0371-67135330</a></td></tr><tr><td>开封市疾病预防控制中心</td><td><a href="tel:0371-23886196" class="phone">0371-23886196</a></td></tr><tr><td>洛阳市疾病预防控制中心</td><td><a href="tel:0379-63211432" class="phone">0379-63211432</a><a href="tel:0379-63258625" class="phone">0379-63258625</a></td></tr><tr><td>平顶山市疾病预防控制中心</td><td><a href="tel:0375-2923247" class="phone">0375-2923247</a></td></tr><tr><td>安阳市疾病预防控制中心</td><td><a href="tel:0372-5122000" class="phone">0372-5122000</a></td></tr><tr><td>鹤壁市疾病预防控制中心</td><td><a href="tel:0392-3331019" class="phone">0392-3331019</a></td></tr><tr><td>新乡市疾病预防控制中心</td><td><a href="tel:0373-3695301" class="phone">0373-3695301</a></td></tr><tr><td>焦作市疾病预防控制中心</td><td><a href="tel:0391-8861399" class="phone">0391-8861399</a></td></tr><tr><td>濮阳市疾病预防控制中心</td><td><a href="tel:0393-6661306" class="phone">0393-6661306</a><a href="tel:0393-4436958" class="phone">0393-4436958</a></td></tr><tr><td>许昌市疾病预防控制中心</td><td><a href="tel:0374-6061050" class="phone">0374-6061050</a></td></tr><tr><td>漯河市疾病预防控制中心</td><td><a href="tel:0395-3134319" class="phone">0395-3134319</a></td></tr><tr><td>三门峡市疾病预防控制中心</td><td><a href="tel:0398-2846800" class="phone">0398-2846800</a></td></tr><tr><td>南阳市疾病预防控制中心</td><td><a href="tel:0377-62208199" class="phone">0377-62208199</a></td></tr><tr><td>商丘市疾病预防控制中心</td><td><a href="tel:0370-3272900" class="phone">0370-3272900</a></td></tr><tr><td>信阳市疾病预防控制中心</td><td><a href="tel:0376-6606201" class="phone">0376-6606201</a></td></tr><tr><td>周口市疾病预防控制中心</td><td><a href="tel:0394-8318801" class="phone">0394-8318801</a></td></tr><tr><td>驻马店市疾病预防控制中心</td><td><a href="tel:0396-2681811" class="phone">0396-2681811</a></td></tr><tr><td rowspan="14" class="rowspan-style">湖北省</td><td>武汉市疾病预防控制中心</td><td><a href="tel:027-85805111" class="phone">027-85805111</a></td></tr><tr><td>武汉市武昌区疾病预防控制中心</td><td><a href="tel:027-88872638" class="phone">027-88872638</a></td></tr><tr><td>黄石市疾病预防控制中心</td><td><a href="tel:0714-6369987" class="phone">0714-6369987</a></td></tr><tr><td>十堰市疾病预防控制中心</td><td><a href="tel:0719-8653676" class="phone">0719-8653676</a><a href="tel:0719-8675580" class="phone">0719-8675580</a></td></tr><tr><td>宜昌市疾病预防控制中心</td><td><a href="tel:0717-6922666" class="phone">0717-6922666</a></td></tr><tr><td>襄阳市疾病预防控制中心</td><td><a href="tel:0710-3604427" class="phone">0710-3604427</a></td></tr><tr><td>鄂州市疾病预防控制中心</td><td><a href="tel:0711-3380120" class="phone">0711-3380120</a></td></tr><tr><td>荆门市疾病预防控制中心</td><td><a href="tel:0724-2367212" class="phone">0724-2367212</a></td></tr><tr><td>孝感市疾病预防控制中心</td><td><a href="tel:0712-2315502" class="phone">0712-2315502</a></td></tr><tr><td>荆州市疾病预防控制中心</td><td><a href="tel:0716-8100971" class="phone">0716-8100971</a></td></tr><tr><td>黄冈市疾病预防控制中心</td><td><a href="tel:0713-3889697" class="phone">0713-3889697</a></td></tr><tr><td>咸宁市疾病预防控制中心</td><td><a href="tel:0715-8253396" class="phone">0715-8253396</a></td></tr><tr><td>随州市疾病预防控制中心</td><td><a href="tel:0722-3312677" class="phone">0722-3312677</a></td></tr><tr><td>恩施土家族苗族自治州疾病预防控制中心</td><td><a href="tel:0718-8252591" class="phone">0718-8252591</a></td></tr><tr><td rowspan="14" class="rowspan-style">湖南省</td><td>长沙市疾病预防控制中心</td><td><a href="tel:0731-84723626" class="phone">0731-84723626</a></td></tr><tr><td>株洲市疾病预防控制中心</td><td><a href="tel:0731-28224250" class="phone">0731-28224250</a></td></tr><tr><td>湘潭市疾病预防控制中心</td><td><a href="tel:0731-58393258" class="phone">0731-58393258</a></td></tr><tr><td>衡阳市疾病预防控制中心</td><td><a href="tel:0734-8221124" class="phone">0734-8221124</a></td></tr><tr><td>邵阳市疾病预防控制中心</td><td><a href="tel:0739-5324681" class="phone">0739-5324681</a></td></tr><tr><td>岳阳市疾病预防控制中心</td><td><a href="tel:0730-8887920" class="phone">0730-8887920</a></td></tr><tr><td>常德市疾病预防控制中心</td><td><a href="tel:0736-7727388" class="phone">0736-7727388</a></td></tr><tr><td>张家界市疾病预防控制中心</td><td><a href="tel:0744-8222404" class="phone">0744-8222404</a></td></tr><tr><td>益阳市疾病预防控制中心</td><td><a href="tel:0737-4200661" class="phone">0737-4200661</a></td></tr><tr><td>郴州市预防控制中心</td><td><a href="tel:0735-2235120" class="phone">0735-2235120</a></td></tr><tr><td>永州市疾病预防控制中心</td><td><a href="tel:0746-8213995" class="phone">0746-8213995</a></td></tr><tr><td>怀化市疾病预防控制中心</td><td><a href="tel:0745-2241448" class="phone">0745-2241448</a></td></tr><tr><td>娄底市疾病预防控制中心</td><td><a href="tel:0738-8312837" class="phone">0738-8312837</a></td></tr><tr><td>湘西土家族苗族自治州疾病预防控制中心</td><td><a href="tel:0743-8223671" class="phone">0743-8223671</a></td></tr><tr><td rowspan="21" class="rowspan-style">广东省</td><td>广州市疾病预防控制中心</td><td><a href="tel:020-83822400" class="phone">020-83822400</a></td></tr><tr><td>韶关市疾病预防控制中心</td><td><a href="tel:0751-8728262" class="phone">0751-8728262</a></td></tr><tr><td>深圳市疾病预防控制中心</td><td><a href="tel:13603065281" class="phone">13603065281</a></td></tr><tr><td>珠海市疾病预防控制中心</td><td><a href="tel:13392982277" class="phone">13392982277</a></td></tr><tr><td>汕头市疾病预防控制中心</td><td><a href="tel:0754-88280646" class="phone">0754-88280646</a></td></tr><tr><td>佛山市疾病预防控制中心</td><td><a href="tel:0757-82211214" class="phone">0757-82211214</a></td></tr><tr><td>江门市疾病预防控制中心</td><td><a href="tel:0750-3288501" class="phone">0750-3288501</a></td></tr><tr><td>湛江市疾病预防控制中心</td><td><a href="tel:0759-3637913" class="phone">0759-3637913</a></td></tr><tr><td>茂名市疾病预防控制中心</td><td><a href="tel:0668-2098888" class="phone">0668-2098888</a></td></tr><tr><td>肇庆市疾病预防控制中心</td><td><a href="tel:0758-2834810" class="phone">0758-2834810</a></td></tr><tr><td>惠州市疾病预防控制中心</td><td><a href="tel:0752-2873004" class="phone">0752-2873004</a></td></tr><tr><td>梅州市疾病预防控制中心</td><td><a href="tel:0753-2319782" class="phone">0753-2319782</a></td></tr><tr><td>汕尾市疾病预防控制中心</td><td><a href="tel:0660-3364531" class="phone">0660-3364531</a></td></tr><tr><td>河源市疾病预防控制中心</td><td><a href="tel:0762-3295899" class="phone">0762-3295899</a></td></tr><tr><td>阳江市疾病预防控制中心</td><td><a href="tel:0662-2238505" class="phone">0662-2238505</a></td></tr><tr><td>清远市疾病预防控制中心</td><td><a href="tel:0763-3369176" class="phone">0763-3369176</a></td></tr><tr><td>东莞市疾病预防控制中心</td><td><a href="tel:0769-22625775" class="phone">0769-22625775</a></td></tr><tr><td>中山市疾病预防控制中心</td><td><a href="tel:0760-88266799" class="phone">0760-88266799</a></td></tr><tr><td>潮州市疾病预防控制中心</td><td><a href="tel:0768-2858221" class="phone">0768-2858221</a></td></tr><tr><td>揭阳市疾病预防控制中心</td><td><a href="tel:0663-8215154" class="phone">0663-8215154</a></td></tr><tr><td>云浮市疾病预防控制中心</td><td><a href="tel:0766-8920581" class="phone">0766-8920581</a></td></tr><tr><td rowspan="14" class="rowspan-style">广西壮族自治区</td><td>南宁市疾病预防控制中心</td><td><a href="tel:0771-5679876" class="phone">0771-5679876</a></td></tr><tr><td>柳州市疾病预防控制中心</td><td><a href="tel:0772-2802630" class="phone">0772-2802630</a></td></tr><tr><td>桂林市疾病预防控制中心</td><td><a href="tel:0773-2825645" class="phone">0773-2825645</a></td></tr><tr><td>梧州市疾病预防控制中心	</td><td><a href="tel:0774-3901320" class="phone">0774-3901320</a></td></tr><tr><td>北海市疾病预防控制中心</td><td><a href="tel:0779-3905196" class="phone">0779-3905196</a></td></tr><tr><td>防城港市疾病预防控制中心	</td><td><a href="tel:0770-6189901" class="phone">0770-6189901</a></td></tr><tr><td>钦州市疾病预防控制中心	</td><td><a href="tel:0777-2823747" class="phone">0777-2823747</a></td></tr><tr><td>贵港市疾病预防控制中心	</td><td><a href="tel:0775-2939700" class="phone">0775-2939700</a></td></tr><tr><td>玉林市疾病预防控制中心	</td><td><a href="tel:0775-2823276" class="phone">0775-2823276</a></td></tr><tr><td>百色市疾病预防控制中心	</td><td><a href="tel:0776-2824507" class="phone">0776-2824507</a></td></tr><tr><td>贺州市疾病预防控制中心	</td><td><a href="tel:0774-5139238" class="phone">0774-5139238</a></td></tr><tr><td>河池市疾病预防控制中心	</td><td><a href="tel:0778-2110910" class="phone">0778-2110910</a></td></tr><tr><td>来宾市疾病预防控制中心	</td><td><a href="tel:0772-4211197" class="phone">0772-4211197</a></td></tr><tr><td>崇左市疾病预防控制中心	</td><td><a href="tel:0771-7837555" class="phone">0771-7837555</a></td></tr><tr><td rowspan="4" class="rowspan-style">海南省</td><td>海口市疾病预防控制中心</td><td><a href="tel:0898-66228340" class="phone">0898-66228340</a></td></tr><tr><td>三亚市疾病预防控制中心</td><td><a href="tel:0898-88273769" class="phone">0898-88273769</a></td></tr><tr><td>三沙市疾病预防控制中心</td><td><a href="tel:" class="phone"></a></td></tr><tr><td>儋州市疾病预防控制中心</td><td><a href="tel:0898-23322120" class="phone">0898-23322120</a></td></tr><tr><td rowspan="1" class="rowspan-style">重庆市</td><td>重庆市疾病预防控制中心</td><td><a href="tel:023-68812969" class="phone">023-68812969</a></td></tr><tr><td rowspan="21" class="rowspan-style">四川省</td><td>成都市疾病预防控制中心</td><td><a href="tel:028-86670028" class="phone">028-86670028</a></td></tr><tr><td>自贡市疾病预防控制中心</td><td><a href="tel:0813-8237116" class="phone">0813-8237116</a></td></tr><tr><td>攀枝花市疾病预防控制中心</td><td><a href="tel:0812-3373399" class="phone">0812-3373399</a></td></tr><tr><td>泸州市疾病预防控制中心</td><td><a href="tel:0830-2584041" class="phone">0830-2584041</a></td></tr><tr><td>德阳市疾病预防控制中心</td><td><a href="tel:0838-2517106" class="phone">0838-2517106</a></td></tr><tr><td>绵阳市疾病预防控制中心</td><td><a href="tel:0816-2222185" class="phone">0816-2222185</a></td></tr><tr><td>广元市疾病预防控制中心</td><td><a href="tel:0839-3223643" class="phone">0839-3223643</a></td></tr><tr><td>遂宁市疾病预防控制中心</td><td><a href="tel:0825-5807969" class="phone">0825-5807969</a></td></tr><tr><td>内江市疾病预防控制中心</td><td><a href="tel:0832-2279299" class="phone">0832-2279299</a></td></tr><tr><td>乐山市疾病预防控制中心</td><td><a href="tel:0833-2155579" class="phone">0833-2155579</a></td></tr><tr><td>南充市疾病预防控制中心</td><td><a href="tel:0817-2222427" class="phone">0817-2222427</a></td></tr><tr><td>眉山市疾病预防控制中心</td><td><a href="tel:028-38197429" class="phone">028-38197429</a></td></tr><tr><td>宜宾市疾病预防控制中心</td><td><a href="tel:0831-2222368" class="phone">0831-2222368</a></td></tr><tr><td>广安市疾病预防控制中心</td><td><a href="tel:0826-2335674" class="phone">0826-2335674</a></td></tr><tr><td>达州市疾病预防控制中心</td><td><a href="tel:0818-2371569" class="phone">0818-2371569</a></td></tr><tr><td>雅安市疾病预防控制中心</td><td><a href="tel:0835-2222723" class="phone">0835-2222723</a></td></tr><tr><td>巴中市疾病预防控制中心</td><td><a href="tel:0827-5266955" class="phone">0827-5266955</a></td></tr><tr><td>资阳市疾病预防控制中心</td><td><a href="tel:028-23038013" class="phone">028-23038013</a></td></tr><tr><td>阿坝州疾病预防控制中心</td><td><a href="tel:0837-2833041" class="phone">0837-2833041</a></td></tr><tr><td>甘孜州疾病预防控制中心</td><td><a href="tel:0836-2816678" class="phone">0836-2816678</a></td></tr><tr><td>凉山彝族自治州疾病预防控制中心</td><td><a href="tel:0834-12320" class="phone">0834-12320</a></td></tr><tr><td rowspan="9" class="rowspan-style">贵州省</td><td>贵阳市疾病预防控制中心</td><td><a href="tel:0851-12320" class="phone">0851-12320</a></td></tr><tr><td>六盘水市疾病预防控制中心</td><td><a href="tel:0858-8262532" class="phone">0858-8262532</a></td></tr><tr><td>遵义市疾病预防控制中心</td><td><a href="tel:0851-28921251" class="phone">0851-28921251</a></td></tr><tr><td>安顺市疾病预防控制中心</td><td><a href="tel:0851-33224789" class="phone">0851-33224789</a></td></tr><tr><td>毕节市疾病预防控制中心</td><td><a href="tel:0857-8301450" class="phone">0857-8301450</a></td></tr><tr><td>铜仁市疾病预防控制中心</td><td><a href="tel:0856-8169500" class="phone">0856-8169500</a></td></tr><tr><td>黔西南州疾病预防控制中心</td><td><a href="tel:0859-3121316" class="phone">0859-3121316</a></td></tr><tr><td>黔东南州疾病预防控制中心</td><td><a href="tel:0855-8277023" class="phone">0855-8277023</a></td></tr><tr><td>黔南州疾病预防控制中心</td><td><a href="tel:0854-7101611" class="phone">0854-7101611</a></td></tr><tr><td rowspan="16" class="rowspan-style">云南省</td><td>昆明市疾病预防控制中心</td><td><a href="tel:0871-64321445" class="phone">0871-64321445</a></td></tr><tr><td>曲靖市疾病预防控制中心</td><td><a href="tel:0874-8965051" class="phone">0874-8965051</a></td></tr><tr><td>玉溪市疾病预防控制中心</td><td><a href="tel:0877-8881358" class="phone">0877-8881358</a></td></tr><tr><td>保山市疾病预防控制中心</td><td><a href="tel:0875-2229637" class="phone">0875-2229637</a></td></tr><tr><td>昭通市疾病预防控制中心</td><td><a href="tel:0870-2152677" class="phone">0870-2152677</a></td></tr><tr><td>丽江市疾病预防控制中心</td><td><a href="tel:0888-3105878" class="phone">0888-3105878</a></td></tr><tr><td>普洱市疾病预防控制中心</td><td><a href="tel:0879-2311819" class="phone">0879-2311819</a></td></tr><tr><td>临沧市疾病预防控制中心</td><td><a href="tel:0883-2134563" class="phone">0883-2134563</a></td></tr><tr><td>楚雄州疾病预防控制中心</td><td><a href="tel:0878-3388315" class="phone">0878-3388315</a></td></tr><tr><td>红河州疾病预防控制中心</td><td><a href="tel:0873-3856682" class="phone">0873-3856682</a></td></tr><tr><td>文山市疾病预防控制中心</td><td><a href="tel:0876-2612164" class="phone">0876-2612164</a></td></tr><tr><td>西双版纳疾病预防控制中心</td><td><a href="tel:0691-2133951" class="phone">0691-2133951</a></td></tr><tr><td>大理州疾病预防控制中心</td><td><a href="tel:0872-2120770" class="phone">0872-2120770</a></td></tr><tr><td>德宏州疾病预防控制中心</td><td><a href="tel:0692-2112840" class="phone">0692-2112840</a></td></tr><tr><td>怒江州疾病预防控制中心</td><td><a href="tel:0886-3630682" class="phone">0886-3630682</a></td></tr><tr><td>香格里拉县疾病预防控制中心</td><td><a href="tel:0887-8222241" class="phone">0887-8222241</a></td></tr><tr><td rowspan="6" class="rowspan-style">西藏自治区</td><td>拉萨市疾病预防控制中心</td><td><a href="tel:0891-6383930" class="phone">0891-6383930</a></td></tr><tr><td>日喀则市疾病预防控制中心</td><td><a href="tel:0892-8821492" class="phone">0892-8821492</a></td></tr><tr><td>昌都地区疾病预防控制中心</td><td><a href="tel:0895-4822809" class="phone">0895-4822809</a></td></tr><tr><td>林芝地区疾病预防控制中心</td><td><a href="tel:0894-5822064" class="phone">0894-5822064</a></td></tr><tr><td>山南地区疾病预防控制中心</td><td><a href="tel:0893-7820503" class="phone">0893-7820503</a></td></tr><tr><td>那曲地区疾病预防控制中心</td><td><a href="tel:0896-3822264" class="phone">0896-3822264</a></td></tr><tr><td rowspan="10" class="rowspan-style">陕西省</td><td>西安市疾病预防控制中心</td><td><a href="tel:029-85510565" class="phone">029-85510565</a></td></tr><tr><td>铜川市疾病预防控制中心</td><td><a href="tel:0919-3181263" class="phone">0919-3181263</a></td></tr><tr><td>宝鸡市疾病预防控制中心</td><td><a href="tel:0917-3368158" class="phone">0917-3368158</a></td></tr><tr><td>咸阳市疾病预防控制中心</td><td><a href="tel:0293-3696955" class="phone">0293-3696955</a></td></tr><tr><td>渭南市疾病预防控制中心</td><td><a href="tel:0913-2182955" class="phone">0913-2182955</a></td></tr><tr><td>延安市疾病预防控制中心</td><td><a href="tel:0911-2323337" class="phone">0911-2323337</a></td></tr><tr><td>汉中市疾病预防控制中心</td><td><a href="tel:0916-2235170" class="phone">0916-2235170</a></td></tr><tr><td>榆林市疾控中心</td><td><a href="tel:0912-8117129" class="phone">0912-8117129</a></td></tr><tr><td>安康市疾病预防控制中心</td><td><a href="tel:0915-3114000" class="phone">0915-3114000</a></td></tr><tr><td>商洛市疾病预防控制中心</td><td><a href="tel:0914-2322848" class="phone">0914-2322848</a></td></tr><tr><td rowspan="14" class="rowspan-style">甘肃省</td><td>兰州市疾病预防控制中心</td><td><a href="tel:0931-8488782" class="phone">0931-8488782</a></td></tr><tr><td>嘉峪关市疾病预防控制中心</td><td><a href="tel:0937-6226069" class="phone">0937-6226069</a></td></tr><tr><td>金昌市疾病预防控制中心</td><td><a href="tel:0935-8334057" class="phone">0935-8334057</a></td></tr><tr><td>白银市疾病预防控制中心</td><td><a href="tel:0943-8663691" class="phone">0943-8663691</a></td></tr><tr><td>天水市疾病预防控制中心</td><td><a href="tel:0938-8212033" class="phone">0938-8212033</a></td></tr><tr><td>武威市疾病控制中心</td><td><a href="tel:0935-2889299" class="phone">0935-2889299</a></td></tr><tr><td>张掖市疾病预防控制中心</td><td><a href="tel:0936-8291306" class="phone">0936-8291306</a></td></tr><tr><td>平凉市疾病预防控制中心 </td><td><a href="tel:0933-8711926" class="phone">0933-8711926</a></td></tr><tr><td>酒泉市疾病预防控制中心</td><td><a href="tel:0937-2657259" class="phone">0937-2657259</a></td></tr><tr><td>庆阳市疾病预防控制中心</td><td><a href="tel:0934-8516058" class="phone">0934-8516058</a></td></tr><tr><td>定西市疾病预防控制中心</td><td><a href="tel:0932-8212378" class="phone">0932-8212378</a><a href="tel:0932-8217181" class="phone">0932-8217181</a></td></tr><tr><td>陇南市疾病预防控制中心</td><td><a href="tel:0939-8239229" class="phone">0939-8239229</a></td></tr><tr><td>临夏市疾病预防控制中心</td><td><a href="tel:0930-6317767" class="phone">0930-6317767</a></td></tr><tr><td>甘南州疾病预防控制中心</td><td><a href="tel:0941-8231823" class="phone">0941-8231823</a></td></tr><tr><td rowspan="8" class="rowspan-style">青海省</td><td>西宁市疾病预防控制中心</td><td><a href="tel:0971-8805230" class="phone">0971-8805230</a><a href="tel:0971-8800892" class="phone">0971-8800892</a><a href="tel:0971-8804594" class="phone">0971-8804594</a></td></tr><tr><td>海东市疾病预防控制中心</td><td><a href="tel:0972-8617379" class="phone">0972-8617379</a></td></tr><tr><td>海北藏族自治州疾病预防控制中心</td><td><a href="tel:0970-8642307" class="phone">0970-8642307</a></td></tr><tr><td>黄南藏族自治州疾病预防控制中心</td><td><a href="tel:0973-8722208" class="phone">0973-8722208</a></td></tr><tr><td>海南藏族自治州疾病预防控制中心</td><td><a href="tel:0974-8512660" class="phone">0974-8512660</a></td></tr><tr><td>果洛藏族自治州疾病预防控制中心</td><td><a href="tel:0975-8382058" class="phone">0975-8382058</a></td></tr><tr><td>玉树藏族自治州疾病预防控制中心</td><td><a href="tel:0976-8812502" class="phone">0976-8812502</a></td></tr><tr><td>海西蒙古族藏族自治州疾病预防控制中心</td><td><a href="tel:0977-8227272" class="phone">0977-8227272</a></td></tr><tr><td rowspan="5" class="rowspan-style">宁夏回族自治区</td><td>银川市疾病预防控制中心</td><td><a href="tel:0951-5085373" class="phone">0951-5085373</a></td></tr><tr><td>石嘴山市疾病预防控制中心</td><td><a href="tel:0952-2016051" class="phone">0952-2016051</a></td></tr><tr><td>吴忠市疾病预防控制中心</td><td><a href="tel:0953-2126344" class="phone">0953-2126344</a></td></tr><tr><td>固原市疾病预防控制中心</td><td><a href="tel:0954-2040944" class="phone">0954-2040944</a></td></tr><tr><td>中卫市疾病预防控制中心</td><td><a href="tel:0955-8597585" class="phone">0955-8597585</a></td></tr><tr><td rowspan="14" class="rowspan-style">新疆维吾尔自治区</td><td>乌鲁木齐市疾病预防控制中心</td><td><a href="tel:0991-2625962" class="phone">0991-2625962</a></td></tr><tr><td>克拉玛依市疾病预防控制中心</td><td><a href="tel:0990-6883284" class="phone">0990-6883284</a></td></tr><tr><td>吐鲁番市疾病预防控制中心</td><td><a href="tel:0995-8665045" class="phone">0995-8665045</a></td></tr><tr><td>哈密市疾病预防控制中心</td><td><a href="tel:0902-2253618" class="phone">0902-2253618</a></td></tr><tr><td>昌吉回族自治州疾病预防控制中心</td><td><a href="tel:0994-2596581" class="phone">0994-2596581</a></td></tr><tr><td>博尔塔拉蒙古自治州疾病预防控制中心</td><td><a href="tel:0909-2312479" class="phone">0909-2312479</a></td></tr><tr><td>巴音郭楞蒙古自治州疾病预防控制中心</td><td><a href="tel:0996-2206237" class="phone">0996-2206237</a></td></tr><tr><td>阿克苏地区疾病预防控制中心</td><td><a href="tel:0997-2556920" class="phone">0997-2556920</a></td></tr><tr><td>克孜勒苏柯尔克孜自治州疾病预防控制中心</td><td><a href="tel:0908-4222276" class="phone">0908-4222276</a></td></tr><tr><td>喀什地区疾病预防控制中心</td><td><a href="tel:0998-2650567" class="phone">0998-2650567</a></td></tr><tr><td>和田地区疾病预防控制中心</td><td><a href="tel:0903-2058820" class="phone">0903-2058820</a></td></tr><tr><td>伊犁哈萨克自治州疾病预防控制中心</td><td><a href="tel:0999-8035542" class="phone">0999-8035542</a></td></tr><tr><td>塔城地区疾病预防控制中心</td><td><a href="tel:0901-6267934" class="phone">0901-6267934</a></td></tr><tr><td>阿勒泰地区疾病预防控制中心</td><td><a href="tel:0906-2155538" class="phone">0906-2155538</a></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "medical",
        methods: {
          jump2Page (url) {
            this.$router.replace({
              path: url
            });
          },
        }
    }
</script>
<link href="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
<style scoped>

</style>
