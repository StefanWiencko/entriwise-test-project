<script>
  import AnaliticsIcon from "./vectors/AnaliticsIcon.svelte";
  import { useListItem } from "../hooks/useListItem";

  export let item;
  const {
    action,
    infoText,
    isSecondaryBtnActive,
    primaryButtonStatus,
    primaryBtnHandler,
  } = useListItem(item);

  const startDate = new Date(item.startDate).toLocaleString("en", {
    month: "short",
    day: "2-digit",
  });

  const endDate = new Date(item.endDate).toLocaleString("en", {
    month: "short",
    day: "2-digit",
  });

  const capitalized = (word) => word.charAt(0).toUpperCase() + word.slice(1);
  const dateString = `${startDate} - ${endDate}`;
  const linkHref = `https://sellercentral.amazon.com/gp/payments-account/view-transactions.html?subview=groups&groupId=${item.financialEventGroupId}`;
</script>

<div class="container">
  {#if item.financialEventGroupId}
    <a href={linkHref}><time>{dateString}</time></a>
  {:else}<time>{dateString}</time>
  {/if}

  <span class={`${action === "fully-imported" ? "fully-imported" : ""}`}
    >{infoText}</span
  >
  <div class="buttons-container">
    <button
      disabled={primaryButtonStatus === "disabled"}
      class={`button-primary ${primaryButtonStatus}`}
      on:click={primaryBtnHandler}
      >{primaryButtonStatus === "disabled"
        ? "Import"
        : capitalized(primaryButtonStatus)}</button
    >
    <button
      disabled={!isSecondaryBtnActive}
      class={`button-secondary ${isSecondaryBtnActive ? "" : "disabled"}`}
      on:click={() => console.log("Analitics button was clicked !")}
      ><AnaliticsIcon isActive={isSecondaryBtnActive} /></button
    >
  </div>
</div>

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
  .buttons-container {
    display: flex;
    height: 100%;
  }
  button {
    border: transparent;
    height: 100%;
    padding: 0;
    border-radius: 0;
    font-size: 0.9rem;
  }
  button:active {
    opacity: 0.8;
  }
  .button-primary {
    color: #fff;
    background-color: var(--brand-red);
    width: 80px;
  }

  .button-secondary {
    background-color: var(--brand-blue);
    width: 50px;
  }

  .import {
    background-color: var(--brand-yellow);
  }
  .disabled {
    background-color: var(--brand-medium-gray);
    color: var(--brand-gray);
    border: 1px solid var(--brand-gray);
  }
  .disabled:active {
    opacity: 1;
    background: var(--brand-medium-gray);
  }
  .fully-imported {
    color: var(--brand-blue);
  }
</style>
