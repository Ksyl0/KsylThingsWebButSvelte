<svelte:head>
    <title>Ksylowa Witryna Testowa</title>
</svelte:head>
<script lang="ts">
import { onDestroy, onMount } from "svelte";
import { fade } from "svelte/transition";

let timeSpent:number = 0;
let randInt:number = getRndInteger(15,40);
let data:Date = new Date('2023-07-11T17:00:00');
let countdown: any;
let interval: any;

onMount(() => {  
    interval = setInterval(() => {
        if(timeSpent<=randInt){
            timeSpent++;
        }
        countdown = calcTimeSinceLastStream(data)
    },1000)
    
    return(()=>{
        clearInterval(interval);
    })
});

onDestroy(() => {
    clearInterval(interval);
});

function getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  };

function calcTimeSinceLastStream(lastStream:Date){
    const now = new Date();
    let countdown: any;

    const difference = now.getTime() - lastStream.getTime();

    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const months = Math.floor(days / 30);
    days -= months * 30
    const weeks = Math.floor(days / 7);
    days -= weeks * 7;

    countdown = {
      years: years,
      months: months,
      weeks: weeks,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    }
    
    return countdown;
}

</script>
<h1>Kiedyś tu coś zrobie</h1>
<h1>Na serio</h1>
{#if timeSpent >= randInt}
<h2 transition:fade>Od ostatniego streama <a href="https://twitch.tv/Ksyl_" target="_blank">tutaj</a> minęły:</h2>
<h3 transition:fade>Lata: { countdown.years } Miesiące: { countdown.months } Tygodnie: { countdown.weeks } Dni: { countdown.days } Godziny: { countdown.hours } Minuty: { countdown.minutes } Sekundy: { countdown.seconds }</h3>
{/if}