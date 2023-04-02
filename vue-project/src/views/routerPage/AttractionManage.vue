<!-- <template></template>
  <div>
    <div ref="container" class="esri-widget my-panel">
      <div class="esri-widget__header">
        <span class="esri-icon-settings"></span>
        {{title}}
        <span class="esri-icon-close" @click="close"></span>
      </div>
      <div class="esri-widget__body">
        <div class="esri-widget__label">面板内容</div>
        <div>
          <button @click="onButtonClick">按钮1</button>
          <button @click="onButtonClick">按钮2</button>
          <button @click="onButtonClick">按钮3</button>
        </div>
     </div>
   </div>
  </div>
</template>

<script setup lang="ts">
import * as jsx from "@arcgis/core-jsx";
import { useRef } from "vue";
interface Props {
  title: string,
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
}

const Panel = (props: Props) => {
  const containerRef = useRef(null);

  const close = () => {
    const container = containerRef.value as __esri.Widget;
    container.container.classList.add("esri-widget--hidden");
  };

  const onButtonClick = () => {
    console.log("Clicked the button");
  };

  return jsx.createElement(
    "div",
    null,
    jsx.createElement(
      "div",
      { ref: containerRef, class: `esri-widget my-panel esri-widget--${props.position}` },
      jsx.createElement(
        "div",
        { class: "esri-widget__header" },
        jsx.createElement("span", { class: "esri-icon-settings" }),
        props.title,
        jsx.createElement("span", { class: "esri-icon-close", onClick: close })
      ),
      jsx.createElement(
        "div",
        { class: "esri-widget__body" },
        jsx.createElement("div", { class: "esri-widget__label" }, "面板内容"),
        jsx.createElement(
          "div",
          null,
          jsx.createElement("button", { onClick: onButtonClick }, "按钮1"),
          jsx.createElement("button", { onClick: onButtonClick }, "按钮2"),
          jsx.createElement("button", { onClick: onButtonClick }, "按钮3")
        )
      )
    )
  );
};

// 设置位置和标题
const props = {
  position: "top-left",
  title: "自定义面板"
};
</script>

<style lang="scss" scoped>.my-panel {
  background-color: #fff;
  border: 1px solid #ebebeb;
  padding: 10px;
  max-width: 250px;
}

.esri-icon-close {
  float: right;
  margin: 0;
  padding: 0;
  cursor: pointer;
}
</style> -->
