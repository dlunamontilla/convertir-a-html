<script>
    /**
     * @type Array<Object<string, number|string>>
     */
    export let textData;

    $: textData = textData;
</script>

<div class="results">
    <table class="results__table">
        <colgroup>
            <col />
            <col />
            <col />
        </colgroup>

        <thead>
            <tr>
                <th>Descripción del producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
            </tr>
        </thead>

        <tbody>
            {#if Array.isArray(textData)}
                {#each textData as { volume, description, amount }}
                    <tr>
                        <td>{description}</td>
                        <td>{volume}</td>
                        <td>{amount}</td>
                    </tr>
                {/each}
            {/if}

            {#if !Array.isArray(textData) || textData.length < 1}
                <tr> <td colspan="3"></td></tr>
            {/if}
        </tbody>
    </table>
</div>
