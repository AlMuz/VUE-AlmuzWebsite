<template>
  <div id="notFound">
    <div class="notFound">
      <div class="notFound-404">
        <h5>{{ $t("notFound.header") }}</h5>
        <h3>
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </h3>
      </div>
      <h4>{{ $t("notFound.text") }}</h4>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
#notFound {
  position: relative;
  height: 400px;
}

#notFound .notFound {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}

.notFound {
  max-width: 520px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
}

.notFound .notFound-404 {
  position: relative;
  height: 240px;
}

.notFound .notFound-404 h3 {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  font-size: 252px;
  font-weight: 900;
  margin: 0px;
  color: #262626;
  text-transform: uppercase;
  letter-spacing: -40px;
  margin-left: -20px;
}

.notFound .notFound-404 h3>span {
  text-shadow: -8px 0px 0px #fff;
}

.notFound .notFound-404 h5 {
  position: relative;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: #262626;
  margin: 0px;
  letter-spacing: 3px;
  padding-left: 6px;
}

.notFound h4 {
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  color: #000;
  margin-top: 0px;
  margin-bottom: 25px;
}

.notFound h3, .notFound h4, .notFound h5 {
  text-decoration: none;
}

@media only screen and (max-width: 767px) {
  .notFound .notFound-404 {
    height: 200px;
  }
  .notFound .notFound-404 h3 {
    font-size: 200px;
  }
}

@media only screen and (max-width: 480px) {
  .notFound .notFound-404 {
    height: 162px;
  }
  .notFound .notFound-404 h3 {
    font-size: 162px;
    height: 150px;
    line-height: 162px;
  }
  .notFound h4 {
    font-size: 16px;
  }
}

</style>
