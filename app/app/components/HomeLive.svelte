<script>
  import {onMount} from 'svelte';
  import {getLive} from "../utils/frankyHome.js";

  import TempHumidity from "./common/TempHumidity.svelte";
  let temperature;
  let humidity;

  onMount(async () => {
    const res = await getLive();
    temperature = res.data.temp;
    humidity = res.data.humidity
  });
</script>

<style>

</style>

<main>
  <TempHumidity {temperature} {humidity}/>
</main>
