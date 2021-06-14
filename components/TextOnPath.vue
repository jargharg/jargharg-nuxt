<template>
  <g class="text-on-path">
    <path
      transform="translate(-100,0) scale(1.1,1)"
      class="text-path"
      :id="`textLine${rowIndex}`"
      d="M0,320C500,0 940,0 1440,320"
    />

    <text>
      <textPath
        alignment-baseline="middle"
        class="text"
        :startOffset="0"
        :xlink:href="`#textLine${rowIndex}`"
      >
        <animate
          attributeName="startOffset"
          :from="startOffset"
          to="0"
          begin="0s"
          dur="3s"
          keyTimes="0;1"
          calcMode="spline"
          keySplines="0 1 0 1"
        />
        <slot />
      </textPath>
    </text>
  </g>
</template>

<script>
export default {
  props: {
    rowIndex: {
      type: Number,
      required: true,
    },
  },
  computed: {
    startOffset() {
      return Math.random() > 0.5 ? 200 : -200;
    },
  },
};
</script>

<style lang="scss">
.text {
  font-size: 2.4rem;
  letter-spacing: 0.05em;
  opacity: 0.6;
  text-transform: uppercase;
}

.text-on-path {
  .text-path {
    fill: none;
    stroke-width: 60px;
  }

  &:nth-child(2n) {
    .text-path {
      stroke: var(--color-primary);
    }

    .text {
      fill: var(--color-secondary);
    }
  }

  &:nth-child(2n + 1) {
    .text-path {
      stroke: var(--color-secondary);
    }

    .text {
      fill: var(--color-primary);
    }
  }
}
</style>
