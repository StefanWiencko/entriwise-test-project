<script>
  import ListItem from "./ListItem.svelte";
  import PendingItem from "./PendingItem.svelte";

  export let data;

  let countPendingItems = 0;

  const isPending = (item) => {
    const statement =
      item === undefined && data.pendingCount !== countPendingItems;
    if (statement) {
      countPendingItems += 1;
      return statement;
    }
    return statement;
  };

  const isBlank = (item) => {
    return (
      item === undefined &&
      (data.pendingCount === 0 || data.pendingCount === countPendingItems)
    );
  };

  const normalizeDatalength = (data) => {
    const settlements = data.settlements;

    if (settlements.length > 5) {
      return settlements.splice(0, 6);
    }
    return settlements;
  };

  $: normalizedSettlementsData = normalizeDatalength(data);
</script>

{#each { length: 6 } as _, index}
  {#if isPending(normalizedSettlementsData[index])}
    <PendingItem />
  {:else if isBlank(normalizedSettlementsData[index])}
    <div class="container" />
  {:else}
    <ListItem item={normalizedSettlementsData[index]} />
  {/if}
{/each}

<style>
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--brand-light-gray);
    border: 1px solid var(--brand-gray);
    margin: 0.7rem;
    padding-left: 12px;
    height: 50px;
  }
</style>
