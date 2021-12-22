<template>
  <footer class="footer bg-dark">
    <div class="mycontain">
      <div class="row">
        <div class="col-md-6">
          <div class="footer-cart text-light">
            <h2 class="py-4">social medias :</h2>
            <a
              v-for="(media, index) in medias"
              :key="index"
              class="social-icon text-dark"
              href="media.link"
            >
              <i :class="media.name"></i>
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="footer-cart">
            <h2 class="py-4 text-light">helpful links :</h2>
            <a
              v-for="(link, index) in links"
              :key="index"
              class="links"
              :href="link.href"
              target="_blank"
            >
              {{ link.name }} <br />
            </a>
          </div>
        </div>
      </div>
    </div>
    <br>
    <hr class="text-light">
    <p class="text-light text-center">© 2021 <a class="text-light" :href="copyRight.href" target="_blank">{{copyRight.name}}</a></p>
  </footer>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  setup() {
    const links = reactive([
      {
        name: "bootstrap",
        href: "https://getbootstrap.com/",
      },
      {
        name: "jsonplaceholder",
        href: "https://jsonplaceholder.typicode.com/",
      },
      {
        name: "vue.js",
        href: "https://vuejs.org/",
      },
      {
        name: "npm",
        href: "https://www.npmjs.com/",
      },
    ]);
    const medias = reactive([
      { name: "bi bi-instagram", href: "#" },
      { name: "bi bi-twitter", href: "#" },
      { name: "bi bi-facebook", href: "#" },
      { name: "bi bi-linkedin", href: "#" },
      { name: "bi bi-github", href: "#" },
      { name: "bi bi-dribbble", href: "#" },
    ]);
    const copyRight = reactive({
        name : 'Aarsh Nasiri',
        href:'https://arashnasiri.com'
    })
    return {
      links,
      medias,
      copyRight
    };
  },
};
</script>

<style>
.footer {
  margin-top: 30px;
  padding: 30px 0 10px 0;
}
.mycontain {
  width: 60%;
  margin: auto;
}
.social-icon {
  font-size: 2.5rem;
  padding: 1rem;
  border-radius: 5px;
  background: #E5E5E5;
  margin-right: 5.5rem;
  line-height: 8rem;
}
.social-icon:hover {
  background: #fff;
}
.links {
  font-size: 1.8rem;
  line-height: 4rem;
  color: #E5E5E5;
}
.links:hover {
  color: #fff;
}
</style>