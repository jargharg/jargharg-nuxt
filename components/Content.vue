<template>
  <section class="content">
    <p class="content__block">
      By day I work at
      <ext-link href="https://www.moneysupermarket.com">
        MoneySuperMarket.com</ext-link
      >
      as a Frontend Developer, making responsive, performant, accessible web
      apps. By night I make lots of other things like
      <ext-link href="https://autopoetry.jarodhargreav.es"> web apps</ext-link>
      and
      <ext-link :href="codepenLinks[0]">front</ext-link>-<ext-link
        :href="codepenLinks[1]"
        >end</ext-link
      >
      <ext-link :href="codepenLinks[2]">snippets</ext-link> /
      <ext-link href="https://soundcloud.com/nymph-lodes">music</ext-link>
      / <ext-link href="https://500px.com/jaha">photos</ext-link>.
    </p>

    <p class="content__block content__block--highlight">
      Some recent projects:
      <span
        v-for="(link, index) in recentProjectLinks"
        :key="index"
        :href="link.link"
      >
        <ext-link :href="link.link">{{ link.description }}</ext-link
        >{{ index === recentProjectLinks.length - 1 ? '.' : ', ' }}
      </span>
    </p>

    <p class="content__block">
      I'm good with JavaScript (ESNext, Vue, Angular, React), CSS, semantic and
      a11y-focussed HTML, web animations, Webpack, Git and responsive design.
      I've also dabbled in AWS, GCP, Node.js, HTML Canvas and
      <button
        class="content__button"
        @click="isOtherLanguagesDisplayed = !isOtherLanguagesDisplayed"
      >
        several other</button
      ><span v-if="isOtherLanguagesDisplayed" aria-live="polite">
        (Python, Java, SQL, C++, Ruby, PHP and more...)</span
      >
      coding languages. Fancy getting in&nbsp;touch? ↓
    </p>

    <Links v-once class="content__block" />
  </section>
</template>

<script>
import Links from './Links';
import ExtLink from './ExternalLink';

export default {
  name: 'Content',
  components: {
    Links,
    ExtLink,
  },
  data() {
    return {
      isOtherLanguagesDisplayed: false,
      codepenLinks: [
        'https://codepen.io/jargharg/pen/MWbzvJO',
        'https://codepen.io/jargharg/pen/KKgMLGv',
        'https://codepen.io/jargharg/pen/poJvoWp',
      ],
      recentProjectLinks: [
        {
          link: 'https://hannahandjarodgetmarried.com',
          description: 'wedding invitation',
        },
        {
          link: 'https://autopoetry.jarodhargreav.es',
          description: 'Autopoetry',
        },
        {
          link: 'https://sequencer.jarodhargreav.es',
          description: 'a basic sequencer',
        },
        {
          link: 'https://music-for-airports.jarodhargreav.es',
          description: 'Music for Airports',
        },
        {
          link: 'https://vibesniper.com',
          description: 'Vibesniper',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.content {
  a,
  button {
    color: var(--color-primary);
    cursor: pointer;
    position: relative;
    display: inline;
    text-decoration: underline;
    text-decoration-color: var(--color-secondary);
    text-decoration-thickness: 2px;
    text-decoration-style: dashed;
    text-underline-offset: 2px;
    transition: 0.3s background, 0.3s color;

    &:hover,
    &:focus {
      outline: none;
      background: var(--color-primary);
      color: var(--color-inset);
    }
  }

  &__button {
    background: none;
    font-size: inherit;
    padding: 0;
    margin: 0;
    border: none;
    color: inherit;
    font-family: inherit;
  }

  &__block {
    margin: 1rem auto;
    max-width: 65ch;
    text-transform: none;
    user-select: auto;
    text-align: left;

    @media screen and (min-width: 500px) {
      text-align: justify;
    }

    &--highlight {
      border-top: 1px solid var(--color-primary);
      border-bottom: 1px solid var(--color-primary);
      padding: 1rem 0;
    }
  }
}
</style>
