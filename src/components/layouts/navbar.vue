<template>
  <div class="nav-menu fixed-top">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <nav class="navbar navbar-dark navbar-expand-lg">
            <a class="navbar-brand" href="/"
              ><p
                class="text-white font-weight-bold"
                style="margin: 0px !important"
              >
                IMNHerbalStore
              </p></a
            >
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar"
              aria-controls="navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <router-link
                    to="/"
                    class="nav-link"
                    :class="{ active: $route.path === '/' }"
                  >
                    HOME
                    <span class="sr-only" v-if="$route.path === '/'"
                      >(current)</span
                    >
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link
                    to="/gomilk"
                    class="nav-link"
                    :class="{ active: $route.path === '/gomilk' }"
                  >
                    GOMILK
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link
                    to="/hitawa"
                    class="nav-link"
                    :class="{ active: $route.path === '/hitawa' }"
                  >
                    HITAWA
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link
                    to="/femile"
                    class="nav-link"
                    :class="{ active: $route.path === '/femile' }"
                  >
                    FEMILE
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link
                    to="/contact"
                    class="btn btn-outline-light my-3 my-sm-0 ml-lg-3"
                    :class="{ active: $route.path === '/contact' }"
                  >
                    Anda Berminat?
                  </router-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
