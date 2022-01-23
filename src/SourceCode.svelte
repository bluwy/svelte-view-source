<script>
  import { slide } from 'svelte/transition'

  export let source = ''

  let checked = false
</script>

<div class="main-container">
  <slot />
  <label class="source-toggle">
    <input type="checkbox" bind:checked />
    View source
  </label>
  {#if checked}
    <pre transition:slide>{source}</pre>
  {/if}
</div>

<style>
  .main-container {
    position: relative;
    border: 3px solid gray;
    border-radius: 0.5rem;
  }

  .source-toggle {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.25rem 0.5rem 0.25rem 0.05rem;
    background-color: #ebebeb;
    border-left: 3px solid gray;
    border-bottom: 3px solid gray;
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0.5rem;
  }

  .source-toggle > input {
    opacity: 0;
    width: 0;
    height: 0;
    padding: 0;
    margin: 0;
  }

  pre {
    background-color: #ebebeb;
    border-top: 3px solid gray;
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    margin: 0;
    margin-top: 1rem;
    padding: 0.5rem;
    padding-top: 0.25rem;
    padding-bottom: 1.25rem;
  }
</style>
