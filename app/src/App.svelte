<script>
  import {Router, Link, Route} from "svelte-routing";

  import Live from "./views/Live.svelte";
  import DailyForecast from "./views/DailyForecast.svelte";
  import WeekForecast from "./views/WeekForecast.svelte";
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

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap"
    rel="stylesheet" />
  <link
    href="https://fonts.googleapis.com/css2?family=Muli:wght@400;700&display=swap"
    rel="stylesheet" />
</svelte:head>

<main>

  <Live />

  <!-- <DailyForecast />

        <WeekForecast /> -->

</main>
