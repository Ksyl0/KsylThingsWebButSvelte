<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { fade, fly } from "svelte/transition";

    let date: Date = new Date('2024-01-10')
    function calcTimeUntil(date: Date){
        const now = new Date();
        const difference = date.getTime() - now.getTime();

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        const months = Math.floor(days / 30);
        days -= months * 30
        const weeks = Math.floor(days / 7);
        days -= weeks * 7

        let countdown = {
        months: months,
        weeks: weeks,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        difference: difference
        }
        return countdown;
    }
    let timer: any = calcTimeUntil(date);
    onMount(() => {
        timer = calcTimeUntil(date);

        timer = setInterval(() => {
           timer = calcTimeUntil(date);
        },1000)
        
        return;
    })

    onDestroy(() => {
        clearInterval(timer);
    })
    
</script>
<svelte:head>
    <title>Odliczania</title>
</svelte:head>
<h1>Podstrona w budowie</h1>
<h2>Tutaj znajduje się odliczanie do aktualnie najważniejszej dla mnie rzeczy, może to być egzamin, albo premiera jakiejś fajnej gierki</h2>
<img src="assets/Prayge.webp" alt="A Pepe praying">
{#if timer.difference == null}
<h1>&nbsp;</h1>
<h2>&nbsp;</h2>
{:else if timer.difference > 0}
<h1 in:fly={{y: -200, duration: 3000}}>Pozostały czas do egzaminów zawodowych sesja styczeń:</h1>
<h2 in:fly={{y: 200, duration: 3000}}>Miesiące: {timer.months} Tygodnie: {timer.weeks} Dni: {timer.days} Godziny: {timer.hours} Minuty: {timer.minutes} Sekundy : {timer.seconds}</h2>
{:else}
<h2 in:fade>Aktualnie cierpie podczas egzaminów zawodowych</h2>
{/if}