<template>
  <div>
    <draggable v-model="list" :move="getdata" @update="datadragEnd">
      <transition-group>
        <div class="listItem" v-for="(item,index) in list" :key="index">{{item.name}}</div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  data () {
    return {
      list: [
        {
          'name': 'for',
          'order': 4,
          'fixed': false
        },
        {
          'name': 'vue.js 2.0',
          'order': 5,
          'fixed': false
        },
        {
          'name': 'on',
          'order': 7,
          'fixed': false
        },
        {
          'name': 'draggable',
          'order': 2,
          'fixed': false
        },
        {
          'name': 'vue.draggable',
          'order': 1,
          'fixed': false
        },
        {
          'name': 'component',
          'order': 3,
          'fixed': false
        },
        {
          'name': 'based',
          'order': 6,
          'fixed': false
        },
        {
          'name': 'Sortablejs',
          'order': 8,
          'fixed': false
        }
      ]

    }
  },
  components: { draggable },
  methods: {
    getdata (evt) {
      console.log(evt.draggedContext.element.order)
    },
    datadragEnd (evt) {
      console.log('拖动前的索引 :' + evt.oldIndex)
      console.log('拖动后的索引 :' + evt.newIndex)
      console.log(this.list)
    }
  }
}
</script>

<style scoped lang="less">
.listItem{
  height: 35px;
  line-height: 35px;
  padding: 0 15px;
  border-bottom: 1px solid #ddd;
}
</style>
