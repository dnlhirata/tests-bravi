<template>
    <div>
        <nav :class="headerFloatMode ? 'nav-float fade-in-down' : 'fade-in'">
            <div class="box-nav">
            </div>
        </nav>
    </div>
</template>

<script>
</script>

<style scoped>
    .box-nav {
        height: inherit;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0px auto 0px auto;
    }
</style>