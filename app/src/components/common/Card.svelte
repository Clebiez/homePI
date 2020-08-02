<script>
  export let title;
</script>

<style>
  .card {
    min-width: 120px;
    background-color: white;
    box-shadow: 0 1px 10px 0px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
  .card-title {
    padding: 4px 6px;
    font-size: 0.5em;
    font-weight: 700;
    text-transform: uppercase;
  }

  .card-content {
    text-align: center;
    padding: 6px;
    padding-bottom: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4em;
  }

</style>

<main>
  <div class="card">
    <div class="card-title">{title}</div>
    <div class="card-content">
      <slot name="content">N/A</slot>
    </div>
  </div>
</main>
