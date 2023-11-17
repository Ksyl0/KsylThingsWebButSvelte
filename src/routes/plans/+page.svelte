<script lang="ts">
    import { fade, fly } from "svelte/transition";
    let countdown: any;
    let untroll = false;
    let count = 0;
    countdown = setInterval(() =>{
        count++;
        if(count > 3 * 60 * 1000 + 33 * 1000 + 8000){
            clearInterval(countdown);
            console.log('Usunięted');
        }
    },1000);

    function UnTroll(){
        untroll = true;
    }
    
</script>
<svelte:head>
    <title>Plany</title>
</svelte:head>
<div style="overflow:hidden" class="h-100">
    <h1>Podstrona w budowie</h1>
    <h2><s>Plany? Po co komu plany? Viva la spontaniczność!</s></h2>
    <div class="vstack container-flex d-flex justify-content-center align-items-center">
        {#if count >= 5 && !untroll && count <= 3 * 60 * 1000 + 33 * 1000 + 7000}
        <h1 in:fade={{duration: 30000}}>Get trolled</h1>
        <div class="vstack container-flex d-flex justify-content-center align-items-center" in:fly={{y: 1500, duration: 30000}}>
            <iframe in:fade={{duration: 30000}} width="500" height="300"  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?&autoplay=1" title="YT Vid" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            {#if count >= 30}
            <button in:fade={{duration: 30000}} type="button" class="btn btn-primary mt-5" on:click={UnTroll}>UnTroll</button>
            {/if}
        </div>
        {/if}
    </div>
</div>