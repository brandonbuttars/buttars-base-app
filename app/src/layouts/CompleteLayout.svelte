<script>
  export let maxWidth = null

  $: max_width = maxWidth ? `max-width: ${maxWidth};` : null
</script>

<div id="app-wrapper">
  <div id="app-top">
    <slot name="app-top" />
  </div>
  <header id="app-header">
    <slot name="app-header" />
  </header>
  <main id="app-main">
    <section id="app-left">
      <slot name="app-left" />
    </section>
    <section id="app-body" style={max_width}>
      <article>
        <slot />
      </article>
    </section>
    <section id="app-right">
      <slot name="app-right" />
    </section>
  </main>
  <footer id="app-footer">
    <slot name="app-footer" />
  </footer>
  <div id="app-bottom">
    <slot name="app-bottom" />
  </div>
  <aside id="app-utils">
    <slot name="app-utils" />
  </aside>
</div>

<style lang="postcss">
  #app-wrapper {
    height: 100vh;
    width: 100vw;
    position: relative;
    display: grid;
    grid-template-rows: auto auto 1fr auto auto auto;
    font-size: 4rem;
  }

  #app-top {
  }

  #app-header {
  }

  #app-main {
    display: grid;
    grid-template-columns: auto 1fr auto;
  }

  #app-left {
  }

  #app-body {
    justify-self: center;
    width: 100%;

    > article {
      padding: var(--theme-spacing);
    }
  }

  #app-right {
  }

  #app-footer {
  }

  #app-bottom {
  }

  #app-utils {
  }
</style>
