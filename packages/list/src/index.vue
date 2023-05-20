<template>
  <div class="list-tabs__item">
    <el-tabs>
      <el-tab-pane
        :label="item.title"
        v-for="(item, index) in list"
        :key="index"
      >
        <el-scrollbar max-height="300px">
          <div
            class="container"
            v-for="(item1, index1) in item.content"
            :key="index1"
            @click="clickItem(item1, index1)"
          >
            <div class="avatar" v-if="item1.avatar">
              <el-avatar size="" :src="item1.avatar" />
            </div>
            <div class="content">
              <div v-if="item1.title" class="title">
                <div>
                  {{ item1.title }}
                </div>
                <el-tag v-if="item1.tag" size="small" :type="item1.tagType">{{
                  item1.tag
                }}</el-tag>
              </div>
              <div v-if="item1.time" class="time">{{ item1.time }}</div>
              <div v-if="item1.desc" class="time">{{ item1.desc }}</div>
            </div>
          </div>
          <div class="actions">
            <div
              class="a-item"
              v-for="(action, i) in actions"
              :key="i"
              @click="clickAction(action, i)"
            >
              <div class="a-icon" v-if="action.icon">
                <component :is="`el-icon-${toLine(action.icon)}`"></component>
              </div>
              <div class="a-text">{{ action.text }}</div>
            </div>
          </div>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from "vue";
import { ActionOptions, ListOptions, ListItem } from "./types";
import { toLine } from "../../utils";
const props = defineProps({
  // 列表内容
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true,
  },
  // 操作内容
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => [],
  },
});
const emits = defineEmits(["clickItem", "clickAction"]);
const clickItem = (item: ListItem, i: number) => {
  emits("clickItem", { item, i });
};
const clickAction = (item: ActionOptions, i: number) => {
  emits("clickAction", { item, i });
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 12px;
  &:hover {
    background: #dcefff;
  }
  .avatar {
    flex: 1;
    margin-bottom: 0;
  }
  .content {
    flex: 4;
    text-align: left;
    margin-bottom: 0;
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;
  }
  .time {
    color: #cccbcb;
    font-size: 12px;
  }
}
.actions {
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
  height: 50px;
  .a-item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .a-icon {
    margin-right: 4px;
    position: relative;
    top: 2px;
  }
}
</style>