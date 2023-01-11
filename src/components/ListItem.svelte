<script>
  import AnaliticsIcon from "./vectors/AnaliticsIcon.svelte";
  export let index;
</script>

<div class="container">
  <time>{index}</time>
  <span>Information</span>
  <div class="buttons-container">
    <button class="button-primary">Primary</button>
    <button class="button-secondary"><AnaliticsIcon /></button>
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
  .button-secondary {
    background-color: var(--brand-blue);
    width: 50px;
  }
</style>
