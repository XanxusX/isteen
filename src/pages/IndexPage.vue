<template>
  <q-page class="items-center justify-evenly">
    <div
      class="row items-center justify-evenly heading"
      :style="{ height: CalTopHeight() }"
    >
      <transition appear class="animated fadeInDown delay-1s slower">
        <h2
          class="text-white"
          :style="{
            'letter-spacing': '0.25em',
            'margin-top': '20vh',
            position: 'absolute',
            'margin-right': '45vw',
          }"
        >
          李欣庭 &nbsp;Isteen
        </h2>
      </transition>
      <transition appear class="animated fadeInDown delay-1s slower">
        <h4
          class="text-white"
          :style="{
            'letter-spacing': '0.15em',
            'margin-top': '50vh',
            position: 'absolute',
            'margin-left': '15vw',
          }"
        >
          <span style="color: white; background: rgb(118, 185, 0)">NVIDIA</span>
          創辦人暨執行長 黃仁勳認證的好聲音
        </h4>
      </transition>
      <transition
        appear
        class="animated infinite pulse slow"
        :style="{ 'margin-top': '75vh', position: 'absolute' }"
      >
        <q-btn
          round
          outline
          color="white"
          icon="keyboard_arrow_down"
          href="#intro"
        />
      </transition>
    </div>
    <div
      class="row items-center justify-evenly"
      style="backdrop-filter: brightness(0.3)"
      id="intro"
    >
      <div class="col-12 col-lg-6 items-center text-center q-py-xl q-px-lg">
        <h6 class="text-white">
          國立臺灣師範大學國文學系畢業，正職是音樂公司企劃，下班在 Twitch
          兼差當歌手。
          曾拿過流音之星全國高中職創作暨歌唱大賽獨唱組的亞軍、政大金旋獎獲得獨唱組冠軍，低沉的嗓音為招牌特色，歌聲中充滿感情，一開口就令人想哭，被
          Twitch 觀眾戲稱「殯葬系歌手」。 2022/11/4與李以樂於 Wirforce
          戶外直播巧遇 Nvidia 創辦人暨執行長 黃仁勳，現場即興點播《Always
          Remember Us This Way》獲得一片好評。
        </h6>
        <q-video
          :ratio="16 / 9"
          src="https://www.youtube.com/embed/uL8KEzQ0J84"
        ></q-video>
      </div>
      <div class="row items-center justify-evenly">
        <div class="col-12 col-lg-6 items-center text-center q-py-xl q-px-lg">
          <h5 class="text-white">最新單曲 寂寞星球</h5>
          <p class="text-white">
            小王子曾對飛行員說過：「當一個人好哀傷好哀傷的時候，就會喜歡看落日。」所以他在一天裡看了四十三次落日。
            我喜歡落日，也喜歡落日後的滿天星辰。
            或許每個人的心中都住著一顆寂寞星球，只有在世界沈靜時，才能閉起眼睛，看見點點星光。
            你知道嗎？所有大人都曾經是小朋友，只是我們都忘記了。
          </p>
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/4bpT-MlCRmY"
          ></q-video>
        </div>
      </div>
      <div class="row items-center justify-evenly">
        <div class="col-12 col-lg-6 items-center text-center q-py-xl"></div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import { ref } from 'vue';

const slide = ref(1);

const meta = ref<Meta>({
  totalCount: 1200,
});
const CalTopHeight = () => {
  return `${window.innerHeight - 50}px`;
};

const CalSectionHeight = () => {
  return `${window.innerHeight}px`;
};
</script>
