<script lang="ts">
    
</script>
<div class="vh-100 container-flex d-flex vstack">
    <nav class="navbar navbar-expand-lg navbar-light bg-light col sticky-top flex-shrink-0 justify-content-start align-items-center">
        <a class="mx-1 px-2 btn btn-secondary navbar" href="/">Dom</a>
        <a class="mx-1 px-2 btn btn-secondary navbar" href="/plans" >Plany</a>
        <a class="mx-1 px-2 btn btn-secondary navbar" href='/countdowns' data-sveltekit-preload-data>Odliczania</a>        
        <a class="mx-1 px-2 btn btn-secondary navbar" href="https://lista.ksylthings.dev">Lista Rimworld TTK</a>
    </nav>
    
    <div class="h-100">
        <div class="row h-100 g-0 justify-content-center">
            <div class="col-lg-2 col-0 bg-dark">
                
            </div>
            <div class="col-lg-8 col-12 vstack d-flex align-items-center justify-content-center h-100">
                <slot></slot>
            </div>
            <div class="col-lg-2 col-0 bg-dark">
                
            </div>
        </div>
    </div>
</div>
