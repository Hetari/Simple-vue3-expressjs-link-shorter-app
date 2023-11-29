<template>
  <div class="container my-5 py-5">
    <div class="row justify-content-end">
      <div class="col-lg-10 col-md-8 col-sm-8">
        <h1>Create a Shortlink</h1>
        <form method="post" action="" @submit="handleSubmit">
          <div class="mb-3">
            <label for="originalUrl" class="form-label">Original URL</label>
            <input
              type="url"
              class="form-control"
              id="originalUrl"
              placeholder="Enter the original URL"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Create Shortlink
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  methods: {
    handleSubmit(event) {
      // event.preventDefault();
      // axios
      //   .post("127.0.0.1:3000/url/short", { originalUrl: this.originalUrl })
      //   .then((response) => {
      //     console.log(response.data);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
      // Make the HTTP request using fetch
      fetch("http://localhost:3000/url/short", {
        method: "POST",
        body: JSON.stringify({ originalUrl: this.originalUrl }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style>
</style>