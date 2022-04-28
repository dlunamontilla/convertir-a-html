<script>
    import { data } from "../../functions/store";
    import { compile } from "../../functions/compiler";

    /**
     * 
     * @param { SubmitEvent  } e Evento de formulario.
     * @returns { void }
     */
    function submitHandle(e) {
        e.preventDefault();
        const [field] = this;
        const { value } = field;

        data.set(value);
    }

    /**
     * @type { string }
     */
    let text = "";

    $: {
        data.set(text);
        compile(text);
    }

</script>
<div class="form-container">
    <form action="" method="post" class="form" on:submit="{submitHandle}">
        <label for="format" class="form__label">
            <span>Ingrese o pegue su texto aquí</span>
            <textarea name="format" id="format" required="required" placeholder="Copie y pegue su texto acá para convertirlo en tabla" bind:value="{text}"></textarea>
        </label>

        <div class="group-button">
            <button type="submit" class="button button--primary">
                Convertir texto a tabla
            </button>
        </div>
    </form>
</div>