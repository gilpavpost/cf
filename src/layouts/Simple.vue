<template>
  <div>
    <nav class="teal accent-4">
      <div class="nav-wrapper container">
        <router-link class="brand-logo" to="/">MultiLayouts</router-link>|
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <router-link to="/">Home</router-link>|
          </li>
          <li>
            <router-link class="waves-effect grey darken-1 btn" to="/login">Sign in</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style lang="scss">

</style>

