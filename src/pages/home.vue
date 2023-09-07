<template>
    <main>
        <div>
            <h1>Header</h1>
            <p>
                Hello world.
            </p>
        </div>
    </main>
</template>

<script setup>
</script>

<style lang="sass">
main
    display: flex
    justify-content: center
    align-items: center
    height: 100%
    background: linear-gradient(to bottom, #40e0d0, #2080ff)
    color: white

    h1
        font-size: 2em
        margin-bottom: .5em
        text-align: center

    p
        text-align: center
        margin-bottom: 1em
        font-size: .8em
</style>
