<script>
  import HomeLive from "../components/HomeLive.svelte";
  import TownLive from "../components/TownLive.svelte";
</script>

<style>
  .title {
    margin: 12px 18px;
    font-size: 22px;
    font-family: "PlayfairDisplay-SemiBold", Arial;
    font-weight: 600;
  }

  .town {
    margin-top: 24px;
    margin-bottom: 0;
  }
</style>

<scrollView orientation="vertical">
	<stackLayout orientation="vertical">
		<label class="title" text="@ Home" />
    <!-- <HomeLive /> -->

		<label class="title town" text="@ Caen" />
    <TownLive />

	</stackLayout>
</scrollView>

