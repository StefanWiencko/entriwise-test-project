<script>
  import ListItem from "./ListItem.svelte";
  import PendingItem from "./PendingItem.svelte";

  export let data;

  let countPendingItems = 0;

  const isPending = (item) => {
    const statement = item === null && data.pendingCount !== countPendingItems;
    if (statement) {
      countPendingItems += 1;
      return statement;
    }
    return statement;
  };

  const isBlank = (item) => {
    console.log(data.pendingCount === countPendingItems, countPendingItems);
    return (
      item === null &&
      (data.pendingCount === 0 || data.pendingCount === countPendingItems)
    );
  };

  const normalizeDatalength = (data) => {
    const settlements = data.settlements;

    console.log(settlements);
    if (settlements.length < 6) {
      while (settlements.length < 6) {
        settlements.push(null);
      }
      return settlements;
    }
    if (settlements.length > 5) {
      return settlements.splice(0, 6);
    }
    return settlements;
  };

  $: normalizedSettlementsData = normalizeDatalength(data);
</script>

{#each normalizedSettlementsData as item, index (index)}
  {#if isPending(item)}
    <PendingItem />
  {:else if isBlank(item)}
    <div class="container" />
  {:else}
    <ListItem {item} />
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
