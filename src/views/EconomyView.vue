<template>
  <div class="container_EconomyView">
    <img
      class="economyViewImage margin_top_100"
      src="http://cdn1.zhizhucms.com/image/4586934/2020/8/31/%E7%AC%AC%E4%B8%80%E7%AB%A0.png-hd"
      alt=""
    />
    <div class="textContain margin_top_60">
      <div class="normalLabel">
        文人笔记中较早出现的<span class="hightLabel">“ 浦东 ”</span
        >，是在元代诗人杨禹的《山居心语》中：
      </div>
    </div>
    <div class="ciImageContain margin_top_30"></div>
    <div class="textContain margin_top_60">
      <div class="normalLabel">
        不过这里的<span class="hightLabel">“ 浦东 ”</span>，其实是“上海浦”
        东。当时的“上海浦” 和 “下海浦”，是黄浦江未形成前，吴淞江的两条支流。
      </div>
    </div>
    <div class="padding_left_right_10 margin_top_20">
      <img
        class="width_100"
        src="http://cdn1.zhizhucms.com/image/4586934/2020/9/26/%E4%B8%8A%E6%B5%B7%E6%B5%A6.png-hd"
        alt=""
      />
    </div>
    <div class="textContain margin_top_10">
      <div class="normalLabel">
        放在几千年甚至上万年的时间尺度下考察<span class="hightLabel"
          >“ 浦东 ”</span
        >和<span class="hightLabel">“ 上海 ”</span
        >，所指涉的对象时有变化，两者的关系也变化不居。
      </div>
    </div>
    <div class="textContain margin_top_20">
      <div class="normalLabel">
        从地质形成来看，共同诞生于沧海桑田的造陆运动；从行政隶属来看，早期相对独立，随着“上海”逐步发展，最终将“浦东”完全纳入其中。
      </div>
    </div>
    <div class="padding_left_right_10">
      <img
        @click="goToTimeLine"
        class="width_100"
        src="http://cdn1.zhizhucms.com/image/4586934/2020/8/20/%E6%97%B6%E9%97%B4%E8%BD%B4%E6%8C%89%E9%92%AE.png-hd"
        alt=""
      />
      <img
        class="shouImage"
        src="http://cdn1.zhizhucms.com/image/4586934/2020/8/20/%E7%82%B9%E5%87%BB%E8%BF%9B%E5%85%A5.png-hd"
        alt=""
      />
    </div>
    <div class="textContain margin_top_20">
      <div class="normalLabel">
        从上海历代政区变化图中，可以清晰看出陆地与海洋关系的蝉变，生动诠释何为“沧海桑田”。
      </div>
    </div>
    <div class="padding_left_right_10 margin_top_30">
      <img
        class="width_100 border_color_black"
        src=" https://cdn1.zhizhucms.com/image/4586934/2020/8/22/%E6%B5%A6%E4%B8%9C%E5%8F%98%E8%BF%81_1_118.png-hd"
        alt=""
      />
      <div class="describeLabel">
        <span>今天的上海市除闵行地区以东，大部分都是一片泽国</span>
      </div>
    </div>

    <div class="padding_left_right_10 margin_top_20">
      <img
        class="width_100"
        src="http://cdn1.zhizhucms.com/image/4586934/2020/8/22/%E5%B9%B4%E4%BB%A3.png-hd"
        alt=""
      />
    </div>
    <div class="normalImageContain margin_top_30">
      <img
        class="tipImage"
        src="http://cdn1.zhizhucms.com/image/4586934/2021/2/24/%E6%8F%90%E7%A4%BA_copy.png-hd"
        alt=""
      />
      <img
        class="tipShouImage"
        src="http://cdn1.zhizhucms.com/image/4586934/2020/8/22/%E6%89%8B.png-hd"
        alt=""
      />
    </div>
    <div class="textContain margin_top_40">
      <div class="normalLabel">
        浦东成陆时间相对较晚，并不意味着历史文脉的断裂和欠奉。就拿今日浦东最著名的“陆家嘴”来说，它的源头，可追溯至明代文人陆深。
      </div>
    </div>
    <div class="normalImageContain margin_top_30">
      <img
        class="width_100"
        src="http://cdn1.zhizhucms.com/image/4586934/2020/9/26/%E9%99%86%E6%B7%B1.gif"
        alt=""
      />
    </div>
    <div class="width_100 textContain margin_top_30">
      <div class="normalLabel padding_10">《明史》文苑传中这样评价陆深：</div>
    </div>
    <div class="padding_left_right_40 margin_top_30">
      <img
        class="width_100"
        src="http://cdn1.zhizhucms.com/image/4586934/2020/10/26/%E6%98%8E%E5%8F%B2%E8%AF%84%E4%BB%B7.png-hd"
        alt=""
      />
      <img
        class="hongziImage"
        src="http://cdn1.zhizhucms.com/image/4586934/2020/8/20/%E7%BA%A2%E5%AD%97.png-hd"
        alt=""
      />
    </div>
    <div class="textContain margin_top_30">
      <div class="normalLabel">
        陆深，年少时与徐帧卿相互切磋，故文章有名。工于书法，仿李琵、赵孟耶。然为人颇傲慢，因此，人们对他稍有非议。
      </div>
    </div>
    <div class="shufaDivContain margin_top_60">
      <div class="normalImageContain">
        <img
          class="shufaImage"
          src="http://cdn1.zhizhucms.com/image/4586934/2020/8/20/%E9%99%86%E6%B7%B1%E4%B9%A6%E6%B3%95%E5%A2%A8%E8%BF%B9%E9%80%89%E7%B2%B9.png-hd"
          alt=""
        />
      </div>
      <div class="swiperContain margin_top_60">
        <swiper ref="mySwiper" class="swiper" :options="swiperOption">
          <swiper-slide
            v-for="(item, index) in calligraphyArray"
            :key="index + 'card'"
          >
            <div class="image1">
              <img
                class="image1"
                :src="item.image"
                alt=""
                @click="checkFufaDetail(item)"
              />
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="padding_10_flex_right">
        <img
          class="qiaoyiqiaoImage"
          src="http://cdn1.zhizhucms.com/image/4586934/2020/8/20/%E6%95%B2%E4%B8%80%E6%95%B2%E5%AD%97%E8%B4%B4.png-hd"
          alt=""
        />
      </div>
    </div>
    <div class="textContain margin_top_30">
      <div class="normalLabel">
        陆深曾祖父陆德衡以入赘身份迁入浦东，因异乡人被排挤，最终落户于当时荒芜多水患的黄浦江沿江地区。陆氏后人陆续在此聚居，该地区因此得名“陆家嘴”。
      </div>
    </div>
    <div class="textContain margin_top_30">
      <div class="normalLabel">
        陆深回乡丁忧期间，建了一座园林，叫“后乐园”，取意于范仲淹名句“先天下之忧而忧，后天下之乐而乐”。不论是民国期间的“花园路”，还是现在，云集了陆家嘴“三件套”等超高建筑的花园石桥路，都和这座“后乐园”有关。
      </div>
    </div>
    <img
      class="width_100 margin_top_-100"
      src="http://cdn1.zhizhucms.com/image/4586934/2020/8/20/%E8%8A%B1%E5%9B%AD%E8%B7%AF.png-hd"
      alt=""
    />
    <div class="width_100 textContain margin_top_30">
      <div class="normalLabel padding_10">对于家乡，陆深曾这样这样评价：</div>
    </div>
    <div class="padding_left_right_40 margin_top_30">
      <img
        class="commentImage"
        src="http://cdn1.zhizhucms.com/image/4586934/2020/8/20/%E8%AF%84%E4%BB%B7.png-hd"
        alt=""
      />
      <img
        class="commentRedImage"
        src="http://cdn1.zhizhucms.com/image/4586934/2020/8/20/%E8%AF%84%E4%BB%B7%E7%BA%A2%E5%AD%97.png-hd"
        alt=""
      />
    </div>
    <div class="textContain margin_top_30">
      <div class="normalLabel">
        而陆深自己也是“淳如”而实在的人。晚清的《上海县竹枝词》曾将陆深评价为
        <span class="hightLabel">“ 今古兼通 ”</span
        >，并引述他的话说，“士君子有志用世，非兼通今古，何得言经济？”
      </div>
    </div>
    <div class="textContain margin_top_30">
      <div class="normalLabel">
        所谓的“经济”即实学，崇尚经世致用，是与空谈性命之学相对立的概念。他关心边防军事、河流疏浚、盐务、气候、渔业······
      </div>
    </div>
    <div class="padding_left_right_30 margin_top_30 margin_bottom_60">
      <img
        class="width_100"
        src="http://cdn1.zhizhucms.com/image/4586934/2020/8/31/%E4%B8%8B%E4%B8%80%E7%AB%A0-1.png-hd"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
export default {
  data() {
    return {
      swiperOption: {
        freeMode: true,
        slidesPerView: "auto",
        spaceBetween: 40,
      },
      calligraphyArray: [
        {
          image:
            "http://cdn1.zhizhucms.com/image/4586934/2020/8/20/%E4%B9%A6%E6%B3%95%E5%A2%A8%E8%BF%B93_nxWE2M2.png-hd",
          detail:
            "http://cdn1.zhizhucms.com/image/4586934/2020/8/20/%E4%B9%A6%E6%B3%953%E8%AF%A6%E6%83%85.png-hd",
        },
        {
          image:
            "http://cdn1.zhizhucms.com/image/4586934/2020/8/20/%E4%B9%A6%E6%B3%95%E5%A2%A8%E8%BF%B92.png-hd",
          detail:
            "http://cdn1.zhizhucms.com/image/4586934/2020/8/20/%E4%B9%A6%E6%B3%952%E8%AF%A6%E6%83%85.png-hd",
        },
        {
          image:
            "http://cdn1.zhizhucms.com/image/4586934/2020/8/20/%E4%B9%A6%E6%B3%95%E5%A2%A8%E8%BF%B91.png-hd",
          detail:
            "http://cdn1.zhizhucms.com/image/4586934/2020/9/26/%E4%B9%A6%E6%B3%951%E8%AF%A6%E6%83%85.png-hd",
        },
      ],
    };
  },

  methods: {
    goToTimeLine() {
      this.$router.push("/TimeLine");
    },
    checkFufaDetail(item) {
      this.$router.push({
        path: "/CalligraphyDetail",
        query: item,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container_EconomyView {
  display: flex;
  width: 100vw;
  overflow-x: hidden;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  margin: 0px;
}

.commentImage {
  width: 211.5px;
  height: 353px;
}

.commentRedImage {
  position: absolute;
  width: 70.5px;
  height: 293.5px;
  right: 68px;
  top: 29px;
}

.economyViewImage {
  height: 43px;
}

.ciImageContain {
  width: 211.5px;
  height: 248.5px;
  background-size: cover;
  background-image: url("http://cdn1.zhizhucms.com/image/4586934/2020/8/20/%E5%B1%B1%E5%B1%85%E5%BF%83%E8%AF%AD.png-hd");
}

.textContain {
  padding-left: 10px;
  padding-right: 10px;

  .normalLabel {
    font-size: 15px;
    color: #222;
    line-height: 25px;
  }
  .hightLabel {
    font-size: 15px;
    color: #000;
    font-weight: 600;
    line-height: 25px;
  }
}

.padding_10 {
  padding-left: 10px;
  padding-right: 10px;
}

.padding_left_right_10 {
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
}

.padding_left_right_40 {
  position: relative;
  padding-left: 40px;
  padding-right: 40px;
}

.padding_left_right_30 {
  position: relative;
  padding-left: 25px;
  padding-right: 25px;
}

.qiaoyiqiaoImage {
  width: 108px;
  height: 60px;
  margin-right: 20px;
  animation-name: slidein;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-direction: reverse;
}

.shouImage {
  width: 87px;
  height: 27px;
  position: absolute;
  right: 20px;
  bottom: 0px;
  animation-name: slidein;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-direction: reverse;
}

@keyframes slidein {
  0% {
    transform: scale(1);
  }

  25% {
    transform: scale(1.05);
  }

  50% {
    transform: scale(1);
  }

  75% {
    transform: scale(1.05);
  }
}

.normalImageContain {
  padding-left: 0px;
  padding-right: 0px;
  position: relative;
}

.tipImage {
  width: 163px;
  height: 46px;
}

.tipShouImage {
  width: 26px;
  height: 40px;
  position: absolute;
  bottom: 25px;
  left: calc(50% - 13px);
  animation: 0.8s linear 1s infinite alternate leftImageAnimation;
}

.border_color_black {
  border: 1px solid #000;
}

@keyframes leftImageAnimation {
  from {
    transform: translate(-65%);
  }
  to {
    transform: translate(65%);
  }
}

.describeLabel {
  height: 25px;
  width: calc(100% - 39px);
  background: #000;
  position: absolute;
  bottom: 3px;
  text-align: center;
  span {
    font-size: 13px;
    color: #f2f2f2;
    font-weight: 500;
  }
}

.hongziImage {
  width: 41px;
  position: absolute;
  left: 56px;
  top: 30px;
}

.shufaImage {
  width: 227px;
  height: 47px;
}
.width_100 {
  width: 100%;
}

.margin_top_-100 {
  margin-top: -100px;
}

.margin_top_60 {
  margin-top: 60px;
}

.margin_top_40 {
  margin-top: 40px;
}

.margin_top_100 {
  margin-top: 100px;
}

.margin_top_20 {
  margin-top: 20px;
}

.margin_top_10 {
  margin-top: 10px;
}

.margin_top_30 {
  margin-top: 30px;
}

.margin_bottom_60 {
  margin-bottom: 60px;
}

.swiperContain {
  width: 100%;
}

.image1 {
  height: 231px;
}

::v-deep .swiper-slide {
  width: auto !important;
}

::v-deep .swiper {
  padding-left: 20px;
  padding-right: 20px;
}

.shufaDivContain {
  width: 100%;
  background-image: url("http://cdn1.zhizhucms.com/image/4586934/2020/8/20/%E4%B9%A6%E6%B3%95%E5%BA%95%E7%BA%B9.png-hd");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.huayuanluDivContain {
  width: 100%;
  height: 700px;
  background-image: url("http://cdn1.zhizhucms.com/image/4586934/2020/8/20/%E8%8A%B1%E5%9B%AD%E8%B7%AF.png-hd");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.padding_10_flex_right {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
}
</style>
