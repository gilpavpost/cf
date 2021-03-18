<!--
<template>
  <div class="card auth-form">
    <div class="card-content">
      <div class="card-title">Sign in</div>
      <form action="#">
        <div class="input-field">
          <i class="material-icons prefix">email</i>
          <input id="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>

        <div class="input-field">
          <i class="material-icons prefix">vpn_key</i>
          <input id="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>

        <div class="btn-group">
          <router-link class="btn waves-effect waves-light grey" to="/">
            Back
            <i class="material-icons left">keyboard_backspace</i>
          </router-link>
          <button class="btn waves-effect waves-light" type="submit">
            Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

-->
<template>
<div class="wrapper">
      <form>
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="login">
      <input type="text" id="password" class="fadeIn third" name="login" placeholder="password">
      <input type="submit" class="fadeIn fourth" value="Log In">
    </form>

    <div id="formFooter">
      <a class="underlineHover" href="#">Forgot Password?</a>
    </div>
</div>
     <!-- Login Form -->

</template>
<script>
export default {}
</script>

<style lang="scss" scoped>
.auth-form {
  min-width: 400px;

  .input-field {
    margin-bottom: 2rem;
  }

  .card-title {
    margin-bottom: 2rem;
    text-align: center;
  }

  .btn-group {
    display: flex;
    justify-content: space-between;
  }
  .underlineHover {
    text-decoration-style: none;
  }
}
</style>
