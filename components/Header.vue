<template>
  <h1 class="name">
    <span class="sr-only">Jarod Hargreaves, Frontend Web Developer</span>

    <div class="name__partials__container" aria-hidden="true">
      <div class="name__partials">
        <span>J</span>
        <span>a</span>
        <span>r</span>
        <span>o</span>
        <span>d</span>
      </div>

      <div class="name__partials">
        <span>H</span>
        <span>a</span>
        <span>r</span>
        <span>g</span>
        <span>r</span>
        <span>e</span>
        <span>a</span>
        <span>v</span>
        <span>e</span>
        <span>s</span>
      </div>
    </div>
  </h1>
</template>

<script>
export default {
  name: 'Header',
  mounted() {
    this.content = document.querySelector('.content');
    this.contentHTML = this.content.innerHTML;

    const nameLetters = this.$el.querySelectorAll('.name__partials span');

    nameLetters.forEach((letter, index) => {
      letter.char = letter.innerText;
      nameLetters[index].addEventListener('mouseenter', () =>
        this.replaceLetters('enter', letter)
      );
      nameLetters[index].addEventListener('mouseleave', () =>
        this.replaceLetters('leave', letter)
      );
    });
  },
  methods: {
    replaceLetters(type, element) {
      if (type === 'enter') {
        const regex = new RegExp('(?!([^<]+)?>)+' + element.char, 'gi');
        const textReplaced = this.content.innerHTML.replace(regex, '&lowbar;');
        this.content.innerHTML = textReplaced;
        element.style.opacity = 0.5;
      } else {
        this.content.innerHTML = this.contentHTML;
        element.style.opacity = 1;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.name {
  color: var(--color-primary);
  display: inline-block;
  font-family: var(--display-font-stack);
  font-size: clamp(2rem, 5.6vw, 4.35rem);
  font-weight: var(--display-font-weight);
  letter-spacing: 0.05em;
  line-height: 1.2em;
  margin: 0;

  &__partials {
    cursor: pointer;
    display: inline-flex;
    text-transform: uppercase;

    span {
      transition: 0.2s opacity;
    }

    &__container {
      user-select: none;
    }
  }
}
</style>
