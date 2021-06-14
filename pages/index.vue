<template>
  <div class="container">
    <Background />

    <main class="main">
      <Header />
      <Content />
    </main>
  </div>
</template>

<script>
import Background from '@/components/Background';
import Content from '@/components/Content';
import Header from '@/components/Header';

export default {
  components: {
    Background,
    Content,
    Header,
  },
  beforeMount() {
    this.watchForA11yPrefs();
  },
  methods: {
    watchForA11yPrefs() {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      this.$store.commit('setA11y', { reduceMotion: mediaQuery.matches });
      const handleMedia = (e) =>
        this.$store.commit('setA11y', { reduceMotion: e.matches });
      mediaQuery.addEventListener('change', handleMedia);
    },
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  background: var(--color-primary);
  color: var(--color-text);
  font-family: var(--font-stack);
  margin: 0;
  padding: 0;
}

::selection {
  background: var(--color-primary);
  color: var(--color-inset);
}

.container {
  animation: fadeIn 0.5s forwards;
  cursor: default;
  display: grid;
  font-display: swap;
  font-family: var(--font-stack);
  font-size: 1.2em;
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    font-size: 1em;
  }
}

.main {
  align-self: center;
  animation: fadeIn 0.7s forwards;
  background: var(--color-inset);
  box-shadow: 0 10px 100px 0 rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  font-weight: 400;
  justify-self: center;
  margin: 1em;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    border-radius: 50px;
    font-size: 1.3rem;
    max-width: 80%;
    padding: 3rem;
  }
}

.sr-only {
  height: 1px;
  left: -10000px;
  overflow: hidden;
  position: absolute;
  top: auto;
  width: 1px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
