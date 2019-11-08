<template>
  <header class="header">
    <div class="header-wrap">
      <nav class="header-nav">
        <div class="header-nav--item header-nav--item__past">Прошедшие</div>
        <div class="header-nav--item header-nav--item__current">Текущие</div>
        <div class="header-nav--item header-nav--item__future">Близжайшие</div>
      </nav>
      <input type="text" class="header-search" placeholder="Поиск...">
    </div>
  </header>
</template>

<style lang="scss">
  .header{
    height: 60px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    line-height: 60px;
    font-size: 20px;
    &-wrap{
      display: flex;
      align-items: center;
      max-width: 1180px;
      margin: auto;
    }
    &-nav{
      display: flex;
      margin-left: 40px;
      &--item{
        width: 160px;
        cursor: pointer;
        transition-duration: 1s;
        &:hover{
          background-color: #F0EEEE;
        }
      }
    }
    &-search{
      margin-left: auto;
      margin-right: 70px;
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
      font-size: 16px;
      transition-duration: .7s;
      &:focus{
        width: 300px;
      }
    }
  }

  @media screen and (max-width: 900px) {
    .header{
      font-size: 18px;
      &-nav{
        &--item{
          width: 140px;
        }
      }
      &-search{
        &:focus{
          width: 200px;
        }
      }
    }
  }

  @media screen and (max-width: 760px) {
    .header{
      height: 123px;
      padding: 20px 20px 0;
      font-size: 16px;
      &-wrap{
        flex-direction: column;
      }
      &-nav{
        order: 2;
        width: 100%;
        margin: 0;
        &--item{
          width: 100%;
        }
      }
      &-search{
        order: 1;
        width: 100%;
        margin: 10px 0;
        &:focus{
          width: 100%;
        }
      }
    }
  }
</style>
