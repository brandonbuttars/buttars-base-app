<script lang="ts">
  import Layout from './layouts/CompleteLayout.svelte'
  import Content from './layouts/CompleteContentLayout.svelte'
</script>

<Layout maxWidth={'240rem'}>
  <Content>
    <h1>App</h1>
  </Content>

  <!-- slots -->
  <div slot="app-top">Top</div>
  <div slot="app-header">Header</div>
  <div slot="app-right">Right</div>
  <div slot="app-left">Left</div>
  <div slot="app-footer">Footer</div>
  <div slot="app-bottom">Bottom</div>
  <div slot="app-utils">Utils</div>
</Layout>

<style>
  h1 {
    margin: 0;
    font-size: 10rem;
  }
</style>
