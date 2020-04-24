<template>
  <header>
    <a href>
      <div class="title">
        <span>BulbaDex</span>
      </div>
    </a>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
@import url("//db.onlinewebfonts.com/c/f4d1593471d222ddebd973210265762a?family=Pokemon");
header {
  height: auto;
  background-color: #f00000;
}
.title span {
  font-family: "Pokemon", monospace;
  font-size: 2.5rem;
  color: #ffcb05;
  text-shadow: 3px 3px #3d7dca;
  letter-spacing: 2pt;
}
a {
  text-decoration: none;
}
</style>