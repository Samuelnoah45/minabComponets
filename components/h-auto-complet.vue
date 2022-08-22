<script setup>
import {ref ,computed, toRefs} from 'vue'  

const emit=defineEmits(['update:modelValue'])

const props= defineProps({
 
placeholder:{
        type:String,
        default:""
    },
expandedClass:{
type:String,
default:"",
        default:""
    },
  
inputClasses:{
     type:String,
        default:""
    
}		,	
   itemClass:{
   type:String,
    default:""
},	

itemEmptyClass:{
     type:String,
      default:""
}	,
itemFooterClass:{
    type:String,
    default:""
}	,
itemGroupTitleClass :{
   type:String,
    default:""
}	 ,		
itemHeaderClass:{
 type:String,
   default:""
},					
menuClass:{
   type:String,
    default:""
}	,		
menuPositionClass:{
 type:String,
  default:""
},
rootClass:{
    type:String,
    default:""
},
itemHoverClass:{
 type:String,
 default:""
},
appendToBody :{
  type:Boolean,
  default:false
},
autocomplete :{

},
checkInfiniteScroll :{
 type:Boolean,
  default:false
},
clearOnSelect :{
 type:Boolean,
  default:false
},
clearable :{
 type:Boolean,
  default:false
},
confirmKeys:{
  type:Array,
  default:["Tab","Enter"]
},
data :{
  type:Array,
  default:[]
},
debounceTyping :{
 type:Number,
},
field:{
type:String,
default:""
},
groupField:{
type:String,
default:""
},
groupOptions:{
type:String,
default:""
},
icon :{
type:String,
default:""
},
iconPack:{
type:String,
default:"fa"
},
iconRight:{
type:String,
default:""
},	
iconRightClickable:{
 type:Boolean,
  default:false
},
	
keepFirst:{
 type:Boolean,
  default:false
},	
keepOpen:{
 type:Boolean,
  default:false
},
openOnFocus:{
 type:Boolean,
  default:false
},
override:{
 type:Boolean,
  
},	
selectOnClickOutside:{
 type:Boolean,
  default:false
},
selectableFooter:{
 type:Boolean,
  default:false
},
selectableHeader:{
 type:Boolean,
  default:false
},	
	
type:{
type:String,
default:""
},
modelValue:{
type:String,
default:""
},
validationMessage:{
type:String,
default:""
},
iconClick:{
 type:Function
},	
blur:{
 type:Function

},
focus:{
 type:Function

},	
input :{
 type:Function

},	
select:{
 type:Function
  
},
selectHeader:{
  type:Function
},	
selectFooter:{
  type:Function
},
infiniteScroll:{
  type:Function
},	
typing :{
  type:Function
},
iconRightClick:{
  type:Function
}
})

const { type } = toRefs(props)
   
</script>

<template>
      <o-autocomplete 
       :inputClasses="{inputClass:`focus:outline-none rounded border-2 border-gray-200 p-1 text-black  w-full ${inputClasses} `}"
       :itemEmptyClass="`bg-gray-100 text-black  ${itemEmptyClass}` "
       :itemClass="`cursor-pointer hover:bg-gray-100`"
       :itemFooterClass="` ${itemFooterClass}`"
       :itemGroupTitleClass="`text-gray-600 border-b border-gray-600  ${itemGroupTitleClass}`"
       :itemHeaderClass="itemHeaderClass"
       :menuClass="` ${menuClass}`"
       :rootClass="`${rootClass}`"
       :group-options="groupOptions"
       :group-field="groupField"
       v-model="modelValue"
       :data="data"
       :placeholder="placeholder"
       :icon="icon"
       :field="field"
       :clearable="clearable"
       :clearOnSelect="false"
       :keepFirst="keepFirst"
       :itemHoverClass="`bg-gray-100 ${itemHoverClass}`"
       icon-click 		
      @blur="blur" 		
      @focus="focus"		
      @input="input"		
      @select="select"
      @select-header="selectHeader"	
      @select-footer="selectFooter"	
      @infinite-scroll="selectFooter"		
      @typing="typing"		
      @icon-right-click="iconRightClick">
  <template #empty ></template>
  <template #group: >{{}}</template>
  <template #footer>{{}}</template>
  <template #header>{{}}</template>
      </o-autocomplete>
</template>

<style>


</style>

