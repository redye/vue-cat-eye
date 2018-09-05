<template>
  <div>
    <navigation-bar
      :bright="true"
      navigation-title="首页"
      center-bar-style="input"
      left-button-style="location"
      right-button-style="sign"
    />
    <carrousel :carrousels="carrousels"></carrousel>
    <tabs :value="currentTabIndex" ref="tabs" show-style="top">
      <tab
        v-for="(tab, index) in tabs"
        :title="tab.title"
        :selected="tab.selected"
        :index="index"
        :key="index"
        @click="onTabClick"
      >
        <div>tab content {{index}}</div>
      </tab>
    </tabs>
  </div>
</template>

<script>

export default {
  name: "Home",
  data: function() {
    return {
      currentTabIndex: 0,
      tabs: [{
        title: '电影',
        selected: true
      }, {
        title: '电视剧',
        selected: false
      }, {
        title: '综艺',
        selected: false
      }, {
        title: '书籍',
        selected: false
      }],
      carrousels: [{
        "adId":8078,
        "frame":1,
        "image":"http://p1.meituan.net/movie/f19e06920c9e6e4e3e8e6168f4b618b1250916.jpg",
        "link":"meituanmovie://www.meituan.com/web?url=https://i.meituan.com/awp/hfe/block/f7f0be3acc4124233ba9/19529/index.html",
        "materialId":5701
      }, {
        "adId":7828,
        "frame":2,
        "image":"http://p0.meituan.net/movie/ca760b870ccd21c8b200abd46413e64f169311.jpg",
        "link":"meituanmovie://www.meituan.com/videolist?id=1217402&name=%e6%9d%8e%e8%8c%b6%e7%9a%84%e5%a7%91%e5%a6%88&videoId=94746",
        "materialId":5496
      }, {
        "adId":7589,
        "frame":3,
        "image":"http://p0.meituan.net/movie/37dd56d52575623e59de76a2f84efe6a738417.png",
        "link":"meituanmovie://www.meituan.com/movie?id=344292&nm=%e9%98%bf%e5%b0%94%e6%b3%95%ef%bc%9a%e7%8b%bc%e4%bc%b4%e5%bd%92%e9%80%94",
        "materialId":5371
      }, {
        "adId":8092,
        "frame":11,
        "image":"http://p0.meituan.net/movie/9ab3516e2e236ef56e7c1e2072570d6e54713.jpg",
        "link":"meituanmovie://www.meituan.com/web?url=https%3a%2f%2fh5.dianping.com%2fapp%2fmovieshowlist%2fshow-detail.html%3fdata%3d50072%26fromTag%3dmy-top",
        "materialId":5737
      }, {
        "adId":7411,
        "frame":13,
        "image":"http://p0.meituan.net/movie/171289ae919158609b5c4e042211ea9d209680.jpg",
        "link":"meituanmovie://www.meituan.com/web?url=http://m.maoyan.com/cinema-on-demand/list",
        "materialId":5492
      }]
    }
  },
  methods: {
    onTabClick: function (index) {
      const lastTab = this.tabs[this.currentTabIndex]
      const currentTab = this.tabs[index]
      lastTab.selected = false
      currentTab.selected = true
      this.currentTabIndex = index
    }
  }
};
</script>

