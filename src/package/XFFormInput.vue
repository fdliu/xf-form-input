<template>
  <div class="xf-form-input">
    <el-input clearable :placeholder="placeholder" v-model.trim.number="phone" @blur="blurValidate" @clear="clearValue">
      <template slot="append"><i :class="appendIcon" @click="callMasage"></i></template>
    </el-input>
    <div v-if="isError" class="xf-form-error">
      <i class="el-icon-error"></i><span>{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "XfInput",
  props: {
    value: {
      type: [String, Number],
      default: () => {
        return "";
      }
    },
    placeholder: {
      type: String,
      default: () => {
        return "请输入手机号";
      }
    },
    errorMessage: {
      type: String,
      default: () => {
        return "手机号码格式错误";
      }
    },
    appendIcon: {
      type: String,
      default: () => {
        return "el-icon-phone";
      }
    }
  },
  data() {
    return {
      phone: "",
      isError: false,
    }
  },
  methods: {
    callMasage() {
      if (this.isError) return;
      !!this.phone && this.$message({
        message: '正在拨打电话...',
        type: 'success'
      }) && this.$emit("callBack");
      !this.phone && this.$message({
        message: `${this.placeholder}...`,
        type: 'warning'
      });
    },
    blurValidate() {
      if (!this.phone) return;
      if (/^1[3-9]\d{9}$/.test(this.phone)) {
        this.isError = false;
        console.log("手机号码格式正确");
      } else {
        this.isError = true;
        console.log("手机号码格式错误");
      }
    },
    clearValue() {
      this.phone = '';
      this.isError = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.xf-form-input {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}

.xf-form-error {
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
}

.xf-form-error>i {
  margin-right: 5px;
}
</style>
