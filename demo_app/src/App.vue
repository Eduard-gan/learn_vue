<template>
  <div id="app">

    <link
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      rel="stylesheet">

    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a
        class="navbar-brand"
        href="#">Vue demo app</a>
      <button 
        class="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarCollapse" 
        aria-controls="navbarCollapse" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"/>
      </button>
      <div 
        id="navbarCollapse" 
        class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">

          <router-link 
            tag="li"
            class="nav-item"
            to="/">
            <a class="nav-link">Главная</a>
          </router-link>

          <router-link 
            tag="li"
            class="nav-item"
            to="/users">
            <a class="nav-link">Пользователи</a>
          </router-link>

          <router-link
            tag="li"
            class="nav-item"
            to="/add">
            <a class="nav-link">Добавить</a>
          </router-link>
        </ul>
      </div>
    </nav>

    <main 
      role="main" 
      class="container">
      <router-view/>
    </main>
  </div>
</template>

<style>
#app {
  margin-top: 80px;
}
</style>
