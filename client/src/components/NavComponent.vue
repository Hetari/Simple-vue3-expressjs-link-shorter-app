<template>
  <header class="bg-white">
    <nav class="flex justify-between items-center w-[92%] mx-auto">
      <div>
        <h1 class="text-2xl uppercase py-4 font-bold">
          Link<span class="text-[#64389f]">on</span>
        </h1>
      </div>
      <div
        class="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5"
      >
        <!-- <ul
          class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8"
        >
          <li>
            <a class="hover:text-[#64389f] transition duration-300" href="#"
              >Products</a
            >
          </li>
          <li>
            <a class="hover:text-[#64389f] transition duration-300" href="#"
              >Solution</a
            >
          </li>
          <li>
            <a class="hover:text-[#64389f] transition duration-300" href="#"
              >Resource</a
            >
          </li>
          <li>
            <a class="hover:text-[#64389f] transition duration-300" href="#"
              >Developers</a
            >
          </li>
          <li>
            <a class="hover:text-[#64389f] transition duration-300" href="#"
              >Pricing</a
            >
          </li>
        </ul> -->
      </div>
      <div class="flex items-center gap-6">
        <button
          class="text-[#4f46e5] px-5 py-2 rounded-full hover:text-[#322cac] transition duration-300 font-bold"
        >
          Log in
        </button>

        <button
          class="bg-[#4f46e5] text-white px-5 py-2 rounded-full hover:bg-[#322cac] transition duration-300 font-bold"
        >
          Sign in
        </button>
        <ion-icon
          onclick="onToggleMenu(this)"
          name="menu"
          class="text-3xl cursor-pointer md:hidden"
        ></ion-icon>
      </div>
    </nav>
  </header>
  <router-view />
</template>

<script>
// Burger menus
document.addEventListener("DOMContentLoaded", function () {
  // open
  const burger = document.querySelectorAll(".navbar-burger");
  const menu = document.querySelectorAll(".navbar-menu");

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll(".navbar-close");
  const backdrop = document.querySelectorAll(".navbar-backdrop");

  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }
});
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

.fix {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 300px !important;
}
</style>