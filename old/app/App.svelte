<script>
  import Live from "./views/Live.svelte";
  //   import DailyForecast from "./views/DailyForecast.svelte";
  //   import WeekForecast from "./views/WeekForecast.svelte";
</script>

<style>
  :global(body) {
    /* this will apply to <body> */
    margin: 0;
    padding: 0;
    background-color: white;
    font-family: "Muli", Arial;
    color: #0b032d;
  }
</style>

<page>
  <actionBar title="Live View" />
    <Live />
</page>
