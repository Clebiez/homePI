<script>
  import {onMount} from "svelte";
  import {getTownCurrentWeather} from "../utils/openWeatherMap.js";
  import TempHumidity from "./common/TempHumidity.svelte";
  let temperature;
  let humidity;
  let currentWeather;

  onMount(async () => {
    const res = await getTownCurrentWeather();
    temperature = res.data.main.temp;
    humidity = res.data.main.humidity;
    currentWeather = res.data.weather[0];
  });
</script>

<style>
  .currentWeather {
    margin-left: 12px;
    margin-bottom: 12px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    text-transform: capitalize;
    font-family: 'Playfair Display';
  }

  .currentWeather img {
    width: 50px;
  }
</style>

<main>
  {#if currentWeather}
    <div class="currentWeather">
      <img
        src={`http://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`}
        alt="Icon Weather" />
      <span>{currentWeather.description}</span>
    </div>
  {/if}
  <TempHumidity {temperature} {humidity} />
</main>
