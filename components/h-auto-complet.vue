<script setup>
import { def } from '@vue/shared';
import { ref, computed, toRefs } from 'vue'
// import Oruga from '@oruga-ui/oruga-next';
const emit = defineEmits(['update:modelValue'])

const props = defineProps({

  placeholder: {
    type: String,
    default: ""
  },
  expandedClass: {
    type: String,
    default: "",
    default: ""
  },

  inputClasses: {
    type: String,
    default: ""

  },
  itemClass: {
    type: String,
    default: ""
  },

  itemEmptyClass: {
    type: String,
    default: ""
  },
  itemFooterClass: {
    type: String,
    default: ""
  },
  itemGroupTitleClass: {
    type: String,
    default: ""
  },
  itemHeaderClass: {
    type: String,
    default: ""
  },
  menuClass: {
    type: String,
    default: ""
  },
  menuPositionClass: {
    type: String,
    default: ""
  },
  rootClass: {
    type: String,
    default: ""
  },
  itemHoverClass: {
    type: String,
    default: ""
  },
  inputClass: {
    type: String,
    default: ""

  },
  appendToBody: {
    type: Boolean,
    default: false
  },
  autocomplete: {

  },
  checkInfiniteScroll: {
    type: Boolean,
    default: false
  },
  clearOnSelect: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  confirmKeys: {
    type: Array,
    default: ["Tab", "Enter"]
  },
  data: {
    type: Array,
    default: []
  },
  debounceTyping: {
    type: Number,
  },
  field: {
    type: String,
    default: ""
  },
  groupField: {
    type: String,
    default: ""
  },
  groupOptions: {
    type: String,
    default: ""
  },
  icon: {
    type: String,
    default: ""
  },
  iconPack: {
    type: String,
    default: "fa"
  },
  iconRight: {
    type: String,
    default: ""
  },
  iconRightClickable: {
    type: Boolean,
    default: false
  },

  keepFirst: {
    type: Boolean,
    default: true
  },
  keepOpen: {
    type: Boolean,
    default: false
  },
  openOnFocus: {
    type: Boolean,
    default: false
  },
  override: {
    type: Boolean,

  },
  selectOnClickOutside: {
    type: Boolean,
    default: false
  },
  selectableFooter: {
    type: Boolean,
    default: false
  },
  selectableHeader: {
    type: Boolean,
    default: false
  },

  type: {
    type: String,
    default: ""
  },
  modelValue: {
    type: String,
    default: ""
  },
  validationMessage: {
    type: String,
    default: ""
  },
  iconClick: {
    type: Function
  },
  blur: {
    type: Function

  },
  focus: {
    type: Function

  },
  input: {
    type: Function

  },
  select: {
    type: Function

  },
  selectHeader: {
    type: Function
  },
  selectFooter: {
    type: Function
  },
  infiniteScroll: {
    type: Function
  },
  typing: {
    type: Function
  },
  iconRightClick: {
    type: Function
  }
})


</script>

<template>
  <o-autocomplete
    :inputClasses="{ inputClass: ` ${inputClass}` }"
    :itemEmptyClass="itemEmptyClass" 
    :itemClass="`border-blue-600 ${itemClass}`" 
    :itemFooterClass="itemFooterClass"
    :itemGroupTitleClass="itemGroupTitleClass" 
    :itemHeaderClass="itemHeaderClass"
    :menuClass="menuClass"
    :rootClass="rootClass"
    :group-options="groupOptions" 
    :group-field="groupField" 
    v-model="modelValue"
    :confirmKeys="confirmKeys" 
    :data="data" :placeholder="placeholder" 
    :icon="icon" :field="field"
    :clearable="clearable" :clearOnSelect="false" 
    :keepFirst="true" 
    :itemHoverClass="itemHoverClass"
    icon-click
    @blur="blur" @focus="focus"
    @input="$emit('update:modelValue',$event.target.value)"
    @select="select"
    @select-header="selectHeader"
    @select-footer="selectFooter"
    @infinite-scroll="selectFooter"
    @typing="typing"
    @icon-right-click="iconRightClick">
    <template #empty>
      <slot name="empty"></slot>
    </template>
    <template #group>
      <slot name="group"></slot>
    </template>
    <template #footer>
      <slot name="footer"></slot>
    </template>
    <template #header>
      <slot name="header"></slot>
    </template>
  </o-autocomplete>
</template>

<style>

</style>

