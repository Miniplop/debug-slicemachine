<template>
  <div>
    <div class="header">
      <div class="container">
        <prismic-image
            :field="slice.primary.logo"
            alt=""
            class="logo"
        />
        <div class="header-right">
          <div class="menus">
            <p class="menu-item">
              {{ slice.primary.menuItem }}
            </p>
            <p class="menu-item">
              {{ slice.primary.menuItemTwo }}
            </p>
            <p class="menu-item">
              {{ slice.primary.menuItemThree }}
            </p>
            <p class="menu-item">
              {{ slice.primary.menuItemFour }}
            </p>
          </div>
          <div class="header-right">
            <p class="username">
              {{ slice.primary.username }}
            </p>
            <prismic-image
                :field="slice.primary.avatar"
                alt=""
                class="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid rgba(215, 228, 228, 1);
  flex: 1;
}
.container {
  background-color: rgba(255, 255, 255, 1);
  padding: 32px 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
}
.logo {
  width: 172.93px;
  height: 39px;
}
.header-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.menus {
  margin-right: 38px;
  padding: 10px;
  display: flex;
  align-items: flex-start;
}
.menu-item {
  font-family: "Inter";
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  color: rgba(57, 64, 64, 1);
  &:not(:last-of-type) {
    margin-right: 40px;
  }
}
.username {
  font-family: "Inter";
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  color: rgba(157, 173, 173, 1);
  margin-right: 16px;
}
.avatar {
  width: 36px;
  height: 36px;
  border: 2px solid rgba(255, 255, 255, 1);
  border-radius: 100px;
}
</style>