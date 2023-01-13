<script>
  import List from "./components/List.svelte";
  import PendingItem from "./components/PendingItem.svelte";
  import { DataStore } from "./stores";

  $: data = $DataStore;
</script>

<main>
  <header>
    <div>
      <h2>Statements</h2>
      <h3>
        {#if data.pendingCount > 1}
          {`(${data.pendingCount} pending)`}
        {/if}
      </h3>
    </div>
    <a href="/">View All</a>
  </header>
  <ul>
    {#if Object.keys(data).length === 0}
      {#each { length: 6 } as { }}
        <PendingItem />
      {/each}
    {:else}
      <List {data} />
    {/if}
    <!-- {#each { length: 6 } as { }}
      <PendingItem />
    {/each} -->
  </ul>
</main>

<style>
  main {
    padding: 1rem;
    max-width: 800px;
    margin: 0 auto;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid var(--brand-gray);
    padding: 6px 0;
    margin-bottom: 30px;
  }
  div {
    display: flex;
    align-items: flex-end;
  }
  h2 {
    color: var(--header-color);
    font-size: 2rem;
    line-height: 0.5rem;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
  h3 {
    font-size: 1rem;
    line-height: 0.8rem;
    margin-left: 0.5rem;
    color: var(--brand-red);
  }

  a {
    font-size: 1.3rem;
    color: var(--brand-gray);
    align-self: flex-end;
  }
  ul {
    padding: 0 1rem;
    list-style: none;
    gap: 12px;
  }
</style>
