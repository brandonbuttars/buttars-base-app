<script>
</script>

<div>
  <header id="content-header">
    <slot name="content-header" />
  </header>
  <article id="content-article"><slot /></article>
  <footer id="content-footer">
    <slot name="content-footer" />
  </footer>
</div>

<style lang="postcss">
  div {
  }

  header {
    padding: var(--theme-spacing);
  }

  article {
    padding: var(--theme-spacing);
  }

  footer {
    padding: var(--theme-spacing);
  }
</style>
