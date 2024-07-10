<script lang="ts">
    import { faBars } from '@fortawesome/free-solid-svg-icons';
    import { createEventDispatcher } from 'svelte';
    import Fa from "svelte-fa";

    export let open = false;
    const dispatch = createEventDispatcher();

    function toggleDropdown() {
        open = !open;
        dispatch('toggle', open);
    }
</script>

<div class="menu-button-container">
    <button aria-label="Open Menu" class="dropdown-button" on:click|stopPropagation={toggleDropdown}>
		<Fa icon={faBars} />
	</button>
</div>

<style lang="scss">
    .menu-button-container {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .dropdown-button {
            background-color: transparent;
            border: none;
            color: #fff;
            font-size: var(--font-size);
            cursor: pointer;
            padding: 0;
            margin: 0;
        }
    }
</style>