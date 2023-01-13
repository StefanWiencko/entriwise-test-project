<script>
  import AnaliticsIcon from "./vectors/AnaliticsIcon.svelte";
  import { useListItem } from "../hooks/useListItem";
  import TriangleWarning from "./vectors/TriangleWarning.svelte";

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
    <a href={linkHref}>
      <time>{dateString}</time>
    </a>
  {:else}
    <time>{dateString}</time>
  {/if}

  <span class={`info-text ${action}`}>
    {infoText}
    {#if action === "incomplete-import"}
      <TriangleWarning fill={"#f46474"} margin="0 0 0 5px" />
    {/if}
  </span>
  <div class="buttons-container">
    <button
      disabled={primaryButtonStatus === "disabled"}
      class={`button-primary ${primaryButtonStatus}`}
      on:click|preventDefault={primaryBtnHandler}
    >
      {primaryButtonStatus === "disabled"
        ? "Import"
        : capitalized(primaryButtonStatus)}
    </button>
    <button
      disabled={!isSecondaryBtnActive}
      class={`button-secondary ${isSecondaryBtnActive ? "" : "disabled"}`}
      on:click|preventDefault={() =>
        console.log("Analitics button was clicked !")}
    >
      <AnaliticsIcon isActive={isSecondaryBtnActive} />
    </button>
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

  .button-primary {
    color: #fff;
    background-color: var(--brand-red);
    width: 80px;
  }
  .button-primary:active {
    opacity: 0.7;
    background-color: var(--brand-red);
  }

  .button-secondary {
    background-color: var(--brand-blue);
    width: 50px;
  }
  .button-secondary:active {
    background-color: var(--brand-blue);
    opacity: 0.7;
  }

  .import {
    background-color: var(--brand-yellow);
  }
  .import:active {
    background-color: var(--brand-yellow);
    opacity: 0.7;
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
  .info-text {
    position: relative;
  }
  .fully-imported {
    color: var(--brand-blue);
  }
  .incomplete-import {
    display: flex;
    align-items: center;
  }
  .fetching-events::after {
    content: " .";
    position: absolute;
    right: -5px;
    animation: dots 1s steps(5, end) infinite;
  }
  @keyframes dots {
    0%,
    20% {
      color: #333;
      text-shadow: 0.25em 0 0 #333, 0.5em 0 0 #333;
    }
    40% {
      color: var(--brand-light-gray);
      text-shadow: 0.25em 0 0 #333, 0.5em 0 0 #333;
    }
    60% {
      text-shadow: 0.25em 0 0 var(--brand-light-gray), 0.5em 0 0 #333;
    }
    80%,
    100% {
      text-shadow: 0.25em 0 0 var(--brand-light-gray),
        0.5em 0 0 var(--brand-light-gray);
    }
  }
</style>
