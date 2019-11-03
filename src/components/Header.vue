<template>
  <header class="header">
    <nav class="header-nav">
      <div class="header-nav--item header-nav--item__past">Прошедшие</div>
      <div class="header-nav--item header-nav--item__current">Текущие</div>
      <div class="header-nav--item header-nav--item__future">Близжайшие</div>
    </nav>
    <input type="text" class="header-search" placeholder="Поиск...">
  </header>
</template>

<style lang="scss">
  .header{
    display: flex;
    align-items: center;
    height: 60px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 0 150px;
    line-height: 60px;
    font-size: 20px;
    &-nav{
      display: flex;
      font-size: 20px;
      &--item{
        width: 180px;
        cursor: pointer;
        transition-duration: 1s;
        &:hover{
          background-color: #F0EEEE;
        }
      }
    }
    &-search{
      margin-left: auto;
      height: 40px;
      width: 160px;
      border: none;
      border-radius: 40px;
      background-image: url('~@/assets/img/search.png');
      background-size: 25px;
      background-repeat: no-repeat;
      background-position: 10px center;
      box-shadow: inset 0px 0px 3px 1px rgba(61,61,61, .3);
      cursor: pointer;
      text-align: center;
      font-size: 18px;
      transition-duration: .7s;
      &:focus{
        background-position: -100px;
        width: 300px;
      }
    }
  }
</style>
