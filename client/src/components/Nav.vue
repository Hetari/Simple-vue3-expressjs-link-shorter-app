<template>
  <!-- Sidebar -->
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="bg-white col-auto col-md-2 min-vh-100">
        <div>
          <a
            href=""
            class="mx-5 mt-5 py-5 d-flex align-items-center text-decoration-none text-uppercase fw-bold"
          >
            <i class="fs-5 fa fa-guage"></i>
            <span class="fs-4 d-none d-sm-inline link-so"
              >link <span>so</span></span
            >
          </a>
          <div class="mb-5 bg-secondary w-75 h-rule m-auto"></div>

          <ul class="nav nav-pills flex-column">
            <li class="nav-item fw-bold">
              <a href="" class="nav-link text-dark">
                <i class="fa-solid fa-house pe-2"></i>
                Home</a
              >
            </li>
            <li class="nav-item fw-bold">
              <a href="" class="nav-link text-dark">
                <i class="fa-solid fa-link pe-2"></i>
                Link Shorter</a
              >
            </li>
            <li class="nav-item fw-bold">
              <a href="" class="nav-link text-dark">
                <i class="fa-solid fa-gear pe-2"></i>
                Settings</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {};
</script>

<style>
:root {
  --main-color: #4e60ff;
  --secondary-color: #2b2b43;
}

.link-so {
  color: var(--main-color);
}

.link-so span {
  color: var(--secondary-color);
}

.h-rule {
  height: 2px;
  opacity: 0.5;
}
</style>