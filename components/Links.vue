<template>
  <section class="links">
    <ext-link
      v-for="(link, index) in links"
      v-bind:href="link.link"
      v-bind:key="index"
      target="_blank"
    >
      {{ link.description }}
    </ext-link>
  </section>
</template>

<script>
import ExtLink from './ExternalLink';

export default {
  components: {
    ExtLink,
  },
  data() {
    return {
      links: [
        {
          link: 'https://github.com/jargharg/',
          description: 'Github',
        },
        {
          link: 'https://www.linkedin.com/in/jarodhargreaves/',
          description: 'LinkedIn',
        },
        {
          link: 'https://instagram.com/jargharg/',
          description: 'Instagram',
        },
        {
          link: 'mailto:jarod.hargreaves@gmail.com',
          description: 'Email',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.links {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 600px;
  padding: 0 25px;

  a {
    margin: 0 1ch;
  }
}
</style>
