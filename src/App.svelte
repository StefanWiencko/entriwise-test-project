<script>
  import List from "./components/List.svelte";
  import { DataStore } from "./stores";

  $: data = $DataStore;
</script>

<main>
  <header>
    <h2>Statements</h2>
    <a href="/">View All</a>
  </header>
  <ul>
    {#if Object.keys(data).length === 0}
      <h2>Loading</h2>
    {:else}
      <List {data} />
    {/if}
  </ul>
  <pre>{JSON.stringify(data)}</pre>
</main>

<style>
  main {
    padding: 1rem;
    max-width: 240px;
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

  h2 {
    color: var(--header-color);
    font-size: 2rem;
    line-height: 0.5rem;
    font-weight: 500;
    display: flex;
    align-items: center;
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

  @media (min-width: 640px) {
    main {
      max-width: 800px;
    }
  }
</style>
