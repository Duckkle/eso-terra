<template>
  <div class="flex-container">
    <div class="left-container">
      <header>
        <img
          class="logo"
          alt="Waltuh"
          src="https://i.etsystatic.com/20335141/r/il/c51cb4/2920989611/il_fullxfull.2920989611_k5hh.jpg"
          width="325"
          height="125"
        />

        <div class="wrapper">
          <HelloWorld msg="🧈🐕" />
          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/waltuh">Waltuh</RouterLink>
            <RouterLink to="/character-sheet">Character sheet</RouterLink>
          </nav>
        </div>
      </header>
    </div>

    <div class="right-container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.flex-container {
  display: flex;
}

.left-container {
  flex: 1;
  background-color: #f1f1f1; /* Just for visualization */
}

.right-container {
  flex: 2;
  background-color: #d38f8f; /* Just for visualization */
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin-bottom: 1cm;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .flex-container {
    flex-direction: row;
  }

  .left-container {
    flex: 1;
    order: 1; /* Change the order of left container to 1 */
  }

  .right-container {
    flex: 2;
    order: 2; /* Change the order of right container to 2 */
  }

  header {
    display: flex-start;
    flex-direction: column;
    place-items: left;
    padding-right: 1rem;
    margin-top: 2rem;
  }

  .logo {
    margin: 5px;
  }

  .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
