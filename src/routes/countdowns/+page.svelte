<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { fade, fly } from "svelte/transition";

  let date: Date = new Date("2024-01-10T08:00:00");
  let date2: Date = new Date("2024-01-18T08:00:00");
  function calcTimeUntil(date: Date) {
    const now = new Date();
    const difference = date.getTime() - now.getTime();

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const months = Math.floor(days / 30);
    days -= months * 30;
    const weeks = Math.floor(days / 7);
    days -= weeks * 7;

    let countdown = {
      months: months,
      weeks: weeks,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      difference: difference,
    };
    return countdown;
  }
  let timer: any;
  let cd1: any = calcTimeUntil(date);
  let cd2: any = calcTimeUntil(date2);
  let cds: any[] = [cd1, cd2];
  let messages: any[] = [
    [
      "Pozostały czas do egzaminu zawodowego teoretycznego sesja styczeń",
      "Aktualnie pisze egzamin(albo jestem już po nim jak jest po 09:00)!",
      "Egzamin teoretyczny finished, 78% ez",
    ],
    [
      "Pozostały czas do egzaminu zawodowego praktycznego sesja styczeń",
      "Aktualnie pisze egzamin(albo jestem już po nim jak jest po 11:00)!",
      "Egzamin praktyczny finished, stóweczka jeszcze większe ez",
    ],
  ];
  onMount(() => {
    cd1 = calcTimeUntil(date);

    timer = setInterval(() => {
      cd1 = calcTimeUntil(date);
      cd2 = calcTimeUntil(date2);
      cds = [cd1, cd2];
    }, 1000);

    return;
  });

  onDestroy(() => {
    clearInterval(timer);
  });
</script>

<svelte:head>
  <title>Odliczania</title>
</svelte:head>
<h1>Podstrona w budowie</h1>
<h2>
  Tutaj znajduje się odliczanie do aktualnie najważniejszej dla mnie rzeczy,
  może to być egzamin, albo premiera jakiejś fajnej gierki
</h2>
<img src="assets/Prayge.webp" alt="A Pepe praying" />
{#each cds as timero, i}
<div class="countdownContainer">
    {#if timero.difference == null}
    <h2>&nbsp;</h2>
    <h2>&nbsp;</h2>
    {:else if timero.difference > 0}
    <h2 in:fly={{ y: -200, duration: 3000 }}>{messages[i][0]}</h2>
    <h2 in:fly={{ y: 200, duration: 3000 }}>
        Miesiące: {timero.months} Tygodnie: {timero.weeks} Dni: {timero.days} Godziny:
        {timero.hours} Minuty: {timero.minutes} Sekundy : {timero.seconds}
    </h2>
    {:else if timero.difference < 1000 * 60 * 60 * 3 && timero.difference > -((1000 * 60 * 60 * 3) + (1000 * 60 * 10)) }
    <h2 in:fade>{messages[i][1]}</h2>
    {:else}
    <h2 in:fade>{@html messages[i][2]}</h2>
    {/if}
</div>
    {/each}

<style>
    .countdownContainer{
        border: #545454 solid 2px;
        background-color: #7c7c7c;
        margin-bottom: 10px;
    }
</style>