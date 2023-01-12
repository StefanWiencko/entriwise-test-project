<script>
  import ListItem from "./ListItem.svelte";

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
  $: console.log(normalizedSettlementsData);
</script>

{#each normalizedSettlementsData as item, index (index)}
  {#if isPending(item)}
    <h2>Pending</h2>
  {:else if isBlank(item)}
    <h2>Blank</h2>
  {:else}
    <ListItem {item} />
  {/if}
{/each}

<style></style>
