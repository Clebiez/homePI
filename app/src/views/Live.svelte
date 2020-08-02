<script>
  import HomeLive from "../components/HomeLive.svelte";
  import TownLive from "../components/TownLive.svelte";
  import HeaderBar from '../components/common/HeaderBar.svelte';
</script>

<style>
  h2 {
    margin: 12px 18px;
    font-size: 1.6em;
    font-family: "Playfair Display", Arial;
  }

  h2.town {
    margin-top: 24px;
    margin-bottom: 0;
  }
</style>

<main>
  <HeaderBar>Live view</HeaderBar>
  <h2>@ Home</h2>
  <HomeLive />
  <h2 class="town">@ Caen</h2>
  <TownLive />

</main>
