<script setup >
import { faSlash } from "@fortawesome/free-solid-svg-icons";
import { stringifyVariables } from "@urql/core";

const props=defineProps({
elementsWrapperClass:{
 type:String,
  default:""  
}, 			
iconRight:{
 type:String,
  default:""  
},	
iconLeftClass:{
 type:String,
  default:""  
},
iconRightClass:{
 type:String,
  default:""  
},	
invertedClass:{
 type:String,
  default:""  
},
labelClass:{
 type:String,
  default:""  
},
outlinedClass:{
 type:String,
  default:""  
},
rootClass:{
 type:String,
  default:"border-primary  border-2 "  
},	 	
variantClass:{
  type:String,
  default:""  
},

text:{
  type:String,
  default:"button"
},
disabled:{
  type:Boolean,
  default:false
},		
iconBoth:{
  type:Boolean,
  default:false
}	,
iconLeft:{
  type:String,
  default:""
},
iconPack:{
type: String,
default:""
}	,	
iconRight:{
  type:String,
  default:""
},
inverted:{
  type:Boolean,
  default:false
}	,		
nativeType:{
  type:String,
  default:""
},
outlined:{
 type:Boolean,
  default:false
},
override:{
type:Boolean,
  default:false
},
tag:{
  type:String,
  default:"button"
}	,
variant:{
type:String,
default:"primary"
}

})


</script>

<template>
     <o-button 
        :iconRight="iconRight"
        :iconLeftClass="iconLeftClass"	
        :iconRightClass="iconRightClass"		
        :invertedClass="invertedClass"
        :labelClass="labelClass"	
        :outlinedClass="outlinedClass" 
        :rootClass="`${rootClass}`" 			 	
        :variantClass="variantClass"
         :disabled="disabled"		
        :expanded="expanded"		
        :iconBoth="iconBoth"		 	
        :iconLeft="iconLeft"
        :iconPack="iconPack"		
        :inverted="inverted"	
        :label="label"		
        :nativeType="nativeType"
        :outlined="outlined"	
        :override="override" 
        :rounded="rounded"		
        :size="size"
        :tag="tag"	
        :variant="variant"
         icon-left="plus">
      <span>{{text}}</span>
      <slot></slot>
      </o-button>
</template>

<style>


</style>

primary, info, success, warning, danger, and any other custom color
		
<!-- elementsWrapperClass 	 			
iconRight 		
iconLeftClass	
iconRightClass 		
invertedClass
labelClass 	
outlinedClass 
rootClass 			 	
variantClass -->


<!-- disabled 		
expanded 		
iconBoth 		 	
iconLeft 
iconPack 		
iconRight 	
inverted 	
label 		
nativeType 
outlined 	
override 
rounded 		
size 	
tag 	
variant -->