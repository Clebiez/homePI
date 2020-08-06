<script>
  // import WiHumidity from "svelte-icons/wi/WiHumidity.svelte";
  // import WiThermometer from "svelte-icons/wi/WiThermometer.svelte";
  import Card from "./Card.svelte";
  export let temperature = 'N/A';
  export let humidity = 'N/A';
</script>

<style>
  .live {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
</style>

<flexboxLayout>
  <div class="live">
    <Card title="Température">
      <div slot="content">{temperature}°C</div>
    </Card>
    <Card title="Humidité">
      <div slot="content">{humidity}%</div>
    </Card>
  </div>
</flexboxLayout>
