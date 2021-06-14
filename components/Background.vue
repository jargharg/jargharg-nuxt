<template>
  <svg
    class="splash"
    ref="splash"
    viewBox="0 0 1340 800"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <text-on-path
      v-for="(skills, index) in skillRows"
      :row-index="index"
      :key="index"
      :transform="`translate(0,${translates[index]})`"
    >
      {{ skills }}
    </text-on-path>
  </svg>
</template>

<script>
import { mapState } from 'vuex';

import TextOnPath from './TextOnPath.vue';

const SKILL_ROWS = 17;
const SKILLS_PER_ROW = 10;
const SPACE_BETWEEN_LINES = 60;
const OVERLAP = SPACE_BETWEEN_LINES * 4;

export default {
  components: {
    TextOnPath,
  },
  data() {
    return {
      skills: [
        'JavaScript',
        'ESNext',
        'Vue',
        'Angular',
        'React (+Native)',
        'Node',
        'GSAP',
        'Anime.js',
        'Webpack',
        'Gulp',
        'Functional programming',
        'CSS',
        'SCSS',
        'BEM',
        'Animation',
        'Responsive design',
        'Mobile first styling',
        'HTML',
        'Semantic HTML',
        'Accessible design',
        'Web performance',
        'a11y awareness',
        'Automated testing',
        'Jasmine',
        'Jest',
        'Testcafe',
        'Browserstack',
        'Git',
        'GCP',
        'AWS',
        'Firebase',
        'Jenkins',
      ],
    };
  },
  mounted() {
    if (this.reduceMotion) this.$refs.splash.pauseAnimations();
  },
  computed: {
    ...mapState({
      reduceMotion: (state) => state.a11y.reduceMotion,
    }),
    translates() {
      let translates = [];
      for (let i = 0; i < SKILL_ROWS; i++) {
        translates.push(i * SPACE_BETWEEN_LINES - OVERLAP);
      }
      return translates;
    },
    skillRows() {
      let skillRows = [];

      for (let i = 0; i < SKILL_ROWS; i++) {
        let skillRow = [];

        for (let j = 0; j < SKILLS_PER_ROW; j++) {
          let randomSkill = this.getRandomSkill({ previous: skillRow[j - 1] });
          skillRow.push(randomSkill);
        }

        skillRows.push(skillRow.join(' · '));
      }

      return skillRows;
    },
  },
  methods: {
    getRandomSkill({ previous }) {
      let skill = this.skills[Math.floor(Math.random() * this.skills.length)];
      return skill !== previous ? skill : this.getRandomSkill({ previous });
    },
  },
};
</script>

<style lang="scss">
.splash {
  font-family: var(--display-font-stack);
  font-weight: var(--display-font-weight);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  user-select: none;
  width: 100vw;
  z-index: -1;
}
</style>
