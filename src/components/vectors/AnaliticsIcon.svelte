<script>
  export let isActive;
  export let width = 32;
  export let height = 32;
  const fill = isActive ? "#ffffff" : "#c4c4c4";
</script>

<svg xmlns="http://www.w3.org/2000/svg" {width} {height} viewBox="0 0 64 64"
  ><path
    {fill}
    d="M23 48.5h-3v-15h-6v15h-3v-18h12v18M38 48.5h-3v-24h-6v24h-3v-27h12v27M53 48.5h-3v-33h-6v33h-3v-36h12v36M8 48.5h48v3H8z"
  /></svg
>

<style></style>
