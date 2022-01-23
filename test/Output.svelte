<script>
  import SourceCode from './SourceCode.svelte';
  const fruits = ['apple', 'banana', 'orange', 'grape']
</script>

<SourceCode source={`
  <ul>
    {#each fruits as fruit}
      <li>{fruit}</li>
    {/each}
  </ul>
`} >
  <ul>
    {#each fruits as fruit}
      <li>{fruit}</li>
    {/each}
  </ul>
</SourceCode>
