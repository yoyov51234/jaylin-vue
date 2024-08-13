<script setup>
</script>

<template>
<div class="wrapper">
    <div class="box">
      <!-- <i class="icofont-search:before"></i> -->
      <i class="fa fa-search" aria-hidden="true"></i>
      <input type="text" name="" class="inputbox" placeholder="搜索">
      <!--  input cannot have presudo class : before -->
    </div>
  </div>
</template>

<style scoped>



 .box {
      font-family: "IcoFont";
      display: flex;
      justify-content: start;
      align-items: center;
      width: 102px;
      height: 40x;
      background-color: #F5F6FA;
      padding: 5px;
      padding-left: 17px;
      border-radius: 24px;
    }

    .box>i {
      font-size: 16px;
      color: #5B5B6C;
         background-color: #F5F6FA;
    }

    .box>input {
      padding-left: 8px;
      outline: none;
      border: none;
      color: #5B5B6C;
         background-color: #F5F6FA;
      /* flex: 1; */
      /* width: 20px; */
      width: 100%;
      height: 40px;
      font-size: 18px;
    }

.search-icon{

}

.content{
  outline: 0;
    border: 0px;
  
}
</style>