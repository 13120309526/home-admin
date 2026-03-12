<template>
  <div :class="{'hidden':hidden}" class="pagination-container">
    <el-pagination
      :background="background"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :pager-count="pagerCount"
      :total="total"
      :total-text="totalText"
      :prev-text="prevText"
      :next-text="nextText"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
      <!-- 自定义插槽来翻译其他文本 -->
      <template slot="total">
        {{ totalText }} {{ total }} {{ itemsText }}
      </template>
      <template slot="sizes">
        <el-select v-model="pageSize" size="small" @change="handleSizeChange">
          <el-option
            v-for="item in pageSizes"
            :key="item"
            :label="item + ' ' + perPageText"
            :value="item"
          />
        </el-select>
      </template>
      <template slot="jumper">
        {{ gotoText }}
        <input type="number" min="1" :max="totalPages" @keyup.enter="handleCurrentChange($event.target.value)" />
        {{ pageText }}
      </template>
    </el-pagination>
  </div>
</template>

<script>
import { scrollTo } from '@/utils/scroll-to'

export default {
  name: 'Pagination',
  props: {
    total: {
      required: true,
      type: Number
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 20
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 50]
      }
    },
    // 移动端页码按钮的数量端默认值5
    pagerCount: {
      type: Number,
      default: document.body.clientWidth < 992 ? 5 : 7
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    background: {
      type: Boolean,
      default: true
    },
    autoScroll: {
      type: Boolean,
      default: true
    },
    hidden: {
      type: Boolean,
      default: false
    },
    // 国际化相关属性
    totalText: {
      type: String,
      default: '共'
    },
    itemsText: {
      type: String,
      default: '条'
    },
    pageText: {
      type: String,
      default: '页'
    },
    gotoText: {
      type: String,
      default: '前往'
    },
    perPageText: {
      type: String,
      default: '条/页'
    },
    prevText: {
      type: String,
      default: '上一页'
    },
    nextText: {
      type: String,
      default: '下一页'
    }
  },
  data() {
    return {
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.page
      },
      set(val) {
        this.$emit('update:page', val)
      }
    },
    pageSize: {
      get() {
        return this.limit
      },
      set(val) {
        this.$emit('update:limit', val)
      }
    },
    totalPages() {
      return Math.ceil(this.total / this.pageSize)
    }
  },
  methods: {
    handleSizeChange(val) {
      if (this.currentPage * val > this.total) {
        this.currentPage = 1
      }
      this.$emit('pagination', { page: this.currentPage, limit: val })
      if (this.autoScroll) {
        scrollTo(0, 800)
      }
    },
    handleCurrentChange(val) {
      this.$emit('pagination', { page: val, limit: this.pageSize })
      if (this.autoScroll) {
        scrollTo(0, 800)
      }
    }
  }
}
</script>

<style scoped>
.pagination-container {
  background: #fff;
}
.pagination-container.hidden {
  display: none;
}
</style>
