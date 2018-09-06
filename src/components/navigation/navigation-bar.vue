<template>
  <div id="navigation">
    <navigation-container :bright="bright">
      <div slot="navigationLeft" class="navigation-content-container" v-if="leftButtonStyle !== 'none'" @click="onLeftButtonClick">
        <div class="navigation-goback" v-if="leftButtonStyle === 'back'">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <polyline points="10,2 1,11 10,20" style="fill:none;stroke:rgb(51,51,51);stroke-width:2"/>
          </svg>
        </div>
        <div class="nav-location-container" v-else-if="leftButtonStyle === 'location'">
          <span class="location-text">上海</span>
          <img src="../../assets/images/arrow_down.png" style="width: 1rem; height: 1rem; margin-left: 0.2rem" />
        </div>
      </div>
      <div slot="navigationCenter" class="navigation-content-container" v-if="centerBarStyle !== 'none'">
        <div v-if="centerBarStyle === 'title'">
          <span class="navigation-title" :style="{color: bright ? '#fff': $textColor}">{{navigationTitle}}</span>
        </div>
        <div class="input-bar" v-else-if="centerBarStyle === 'input'">
          <input-bar placeholder="找影视剧、影人、影院、演员、..."></input-bar>
        </div>
      </div>
      <div slot="navigationRight" class="navigation-content-container" v-if="rightButtonStyle !== 'none'" @click="onRightButtonClick">
        <img class="navigation-search" src='../../assets/images/search.png' v-if="rightButtonStyle === 'search'"/>
        <img class="navigation-search" src='../../assets/images/share.png' v-else-if="rightButtonStyle === 'share'"/>
        <img class="navigation-search" src='../../assets/images/collection.png' v-else-if="rightButtonStyle === 'collection'"/>
        <div class="sign-container" v-else-if="rightButtonStyle === 'sign'">
          <div class="sign-background-image"><span class="sign-text">{{day}}</span></div>
        </div>
      </div>
    </navigation-container>
  </div>
</template>

<script>

import NavigationContainer from './navigation-container'
import InputBar from './input-bar'

export default {
  name: 'NavigationBar',
  components: {
    NavigationContainer,
    InputBar
  },
  props: {
    leftButtonStyle: {
      type: String,
      default: 'none' // none | back | location
    },
    centerBarStyle: {
      type: String,
      default: 'title' // title | input | tab
    },
    rightButtonStyle: {
      type: String,
      default: 'search' // search | share | collection | sign
    },
    navigationTitle: {
      type: String
    },
    bright: {
      type: Boolean
    }
  },
  data: function () {
    return {
      day: (new Date()).getDate()
    }
  },
  methods: {
    onLeftButtonClick: function(e) {
      e.preventDefault()
      console.log(`left nav button click`)
    },
    onRightButtonClick: function(e) {
      e.preventDefault()
      console.log(`right nav button click`)
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../../assets/style/layout.scss';

.navigation-content-container {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.navigation-goback {
  width: 1.25rem;
  height: 1.25rem;
}
.navigation-title {
  font-size: 1rem;
  color: $textColor;
  font-weight: bold;
}
.navigation-search {
  width: 1.25rem;
  height: 1.25rem;
}
.nav-location-container {
  display: flex;
  align-items: center;
  background-color: $redLight;
  height: 2rem;
  padding: 0 0.5rem;
  @include borderRadius(1rem)
}
.sign-container {
  width: 2rem;
  height: 2rem;
  background-color: $redLight;
  @include borderRadius(1rem);
  display: flex;
  align-items: center;
  justify-content: center;
}
.sign-background-image {
  background-image: url('../../assets/images/calendar.png');
  background-size: 1.5rem;
  width: 1.4rem;
  height: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sign-text {
  color: $red;
  font-size: 0.5rem;
}
.location-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #fff;
  font-size: 1rem;
  flex: 1;
}
.input-bar {
  display: flex;
  flex: 1;
}
</style>



