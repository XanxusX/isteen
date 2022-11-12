<template>
  <q-layout view="lHh Lpr lff">
    <q-header style="background: transparent">
      <q-toolbar>
        <q-toolbar-title></q-toolbar-title>

        <q-btn
          flat
          round
          dense
          icon="fa-brands fa-instagram"
          herf="https://www.instagram.com/isteenlee/"
          class="q-mr-sm"
        />
        <q-btn
          flat
          round
          dense
          icon="fa-brands fa-twitch"
          href="https://www.twitch.tv/isteenlee"
          class="q-mr-sm"
        />
        <q-btn
          flat
          round
          dense
          icon="fa-brands fa-youtube"
          href="https://www.youtube.com/channel/UCQg1Dl3d5ixyH_NMB0p4kUg/featured"
          class="q-mr-sm"
        />
        <q-btn
          flat
          round
          dense
          icon="fa-brands fa-tiktok"
          href="https://www.tiktok.com/@isteenlee"
          class="q-mr-sm"
        />
        <q-btn
          flat
          round
          dense
          icon="fa-brands fa-facebook"
          href="https://www.facebook.com/isteenlee"
          class="q-mr-sm"
        />
        <q-btn
          flat
          round
          dense
          icon="fa-brands fa-spotify"
          href="https://open.spotify.com/artist/0oUpAcUVbIduFLEpZatuBc?si=RlxhhtnlTWa6EWcCjpLwIA"
          class="q-mr-sm"
        />
        <q-btn
          flat
          round
          dense
          icon="fa-solid fa-music"
          href="https://music.apple.com/tw/artist/%E6%9D%8E%E6%AC%A3%E5%BA%AD/1606950614"
          class="q-mr-sm"
        />
        <q-btn
          flat
          round
          dense
          icon="fa-brands fa-discord"
          href="https://discord.com/invite/DnJb494XYv"
        />
      </q-toolbar>
    </q-header>
    <q-img
      src="https://scontent.ftpe8-1.fna.fbcdn.net/v/t39.30808-6/290676756_434258388709475_737166682712733880_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=uW6Uxct--G0AX_-0n7_&_nc_ht=scontent.ftpe8-1.fna&oh=00_AfBDtjEO0_nE9SVzzsybkrIuadz6lNg6fwxu2WLFK9HGOQ&oe=637052F7"
      :height="CalHeight()"
      style="position: fixed"
      :ratio="16 / 9"
      fit="cover"
    ></q-img>
    <q-footer class="bg-transparent" style="backdrop-filter: brightness(0.3)">
      <q-toolbar>
        <q-toolbar-title class="text-body2 text-center"
          >Made with
          <q-icon color="red" name="fa-solid fa-heart" class="q-mx-sm" /> by
          <q-btn
            flat
            color="secondary"
            label="Fan"
            href="https://github.com/XanxusX/isteen"
          />
          所有素材版權皆屬於唯有音樂
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const CalHeight = () => {
  return `${window.innerHeight}px`;
};
</script>
