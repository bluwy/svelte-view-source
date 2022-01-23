<script>
  import SourceCode from '../../src/SourceCode.svelte'
  const fruits = ['apple', 'banana', 'orange', 'grape']
</script>

<SourceCode>
  <ul>
    {#each fruits as fruit}
      <li>{fruit}</li>
    {/each}
  </ul>
</SourceCode>
