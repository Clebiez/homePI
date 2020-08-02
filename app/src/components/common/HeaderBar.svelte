<script>
  import Bar from './bar.svelte';
</script>

<style>
  h1 {
    font-size: 1.3em;
    font-family: 'Playfair Display';
    text-align: center;
    padding: 0;
    margin: 0;
    line-height: 1.6;
  }

</style>

<Bar>
  <h1><slot></slot></h1>
</Bar>
