<script setup>
const props =defineProps({
arrowIconClass :{
    type:String,
    default:""
    }	,		
arrowIconNextClass :{
     type:String,
    default:""
},	 			
arrowIconPrevClass 	:{
     type:String,
    default:""
}	,			
indicatorItemActiveClass :{
     type:String,
    default:""
},		 			
indicatorItemClass :{
     type:String,
    default:""
},				
indicatorItemStyleClass :{
     type:String,
    default:""
}	,	
indicatorsClass :{
     type:String,
    default:""
},		 			
indicatorsInsideClass :{
     type:String,
    default:""
},			
indicatorsInsidePositionClass:{
     type:String,
    default:""
},	
indicatorPosition :{
     type:String,
    default:""
},			
itemActiveClass :{
     type:String,
    default:""
},					
itemClass:{
     type:String,
    default:""
},				
itemsClass :{
     type:String,
    default:""
},				
itemsDraggingClass:{
     type:String,
    default:""
},	 			
overlayClass :{
     type:String,
    default:""
},				
rootClass:{
     type:String,
    default:""
},				
sceneClass:{
     type:String,
    default:""
},	

arrow :{
    type:Boolean,
    default:true
},			
arrowHover 	:{
    type:Boolean,
    default:true
},	
asIndicator:{
    type:Boolean,
    default:false
},			
autoplay:{
    type:Boolean,
    default:false
},		
breakpoints:{
    type:Object
}, 
hasDrag :{
    type:Boolean,
    default:true
},		
iconNext:{
     type:String,
    default:""
}, 		
iconPack:{
     type:String,
    default:""
}, 		
iconPrev :{
     type:String,
    default:""
},			
iconSize :{
     type:String,
    default:""
},	
indicator:{
    type:Boolean,
    default:true
}, 		
indicatorInside:{
    type:Boolean,
    default:false
}, 
indicatorMode :{
     type:String,
    default:"click"
},	
indicatorPosition :{
     type:String,
    default:"bottom"
},		
indicatorStyle :{
     type:String,
    default:"dots"
},		
interval :{
    type:Number

},
itemsToList :{
    type:Number
},		
itemsToShow :{
    type:Number
},		
overlay :{
    type:Boolean,
    default:false
},			
override :{
    type:Boolean,
    default:false
},	
pauseHover :{
    type:Boolean,
    default:false
},
repeat:{}, 
value:{
    type:Number,
    default:0
},

scroll:{
    type:Function,
},		
input:{
    type:Function,

}


})

</script>

<template>
     <o-carousel 
:arrowIconClass="arrowIconClass"			
:arrowIconNextClass="arrowIconNextClass" 	 			
:arrowIconPrevClass="arrowIconPrevClass"				
:indicatorItemActiveClass="'bg-primary'" 	 			
:indicatorItemClas="indicatorItemClass"			
:indicatorItemStyleClass="indicatorItemStyleClass" 	
:indicatorsClass="indicatorsClass" 	 			
:indicatorsInsideClass="indicatorsInsideClass" 		
:indicatorsInsidePositionClass="indicatorsInsidePositionClass"
:indicatorPosition="indicatorPosition" 		
:itemActiveClass="itemActiveClass" 				
:itemClass="itemClass" 				
:itemsClass="itemsClass"  			
:itemsDraggingClass="itemsDraggingClass"	 			
:overlayClass="overlayClass"			
:rootClass="rootClass"				
:sceneClass="sceneClass"

:arrow="arrow"		
:arrowHover="arrowHover"		
:asIndicator="asIndicator"			
:autoplay="autoplay"		
:breakpoints="breakpoints"
:hasDrag="hasDrag" 		
:iconNext="iconNext" 		
:iconPack="iconPack" 		
:iconPrev="iconPrev" 			
:iconSize="iconSize"	
:indicator=indicator		
:indicatorInside="indicatorInside" 
:indicatorMode="indicatorMode"		
:indicatorStyle="indicatorStyle"		
:interval="interval" 
:itemsToList="itemsToList" 		
:itemsToShow="itemsToShow"		
:overlay="overlay" 			
:override="override" 	
:pauseHover="pauseHover"
:repeat="pauseHover"
:value="pauseHover">
<slot name="default"></slot>
<slot name="arrow" ></slot>
<slot name="overlay"></slot>
<slot name="indicator"></slot>
<slot name="indicators "></slot>

</o-carousel>
</template>


<style>


</style>

default 		
arrow 		


indicators 		

indicator 		
overlay

arrowIconClass 			
arrowIconNextClass 	 			
arrowIconPrevClass 				
indicatorItemActiveClass 	 			
indicatorItemClass 			
indicatorItemStyleClass 	
indicatorsClass 	 			
indicatorsInsideClass 		
indicatorsInsidePositionClass 	
indicatorPosition 		
itemActiveClass 				
itemClass 				
itemsClass  			
itemsDraggingClass 	 			
overlayClass 			
rootClass 				
sceneClass



arrow 		
arrowHover 		
asIndicator 			
autoplay 		
breakpoints 
hasDrag 		
iconNext 		
iconPack 		
iconPrev 			
iconSize 	
indicator 		
indicatorInside 
indicatorMode 	
indicatorPosition 		
indicatorStyle 		
interval 
itemsToList 		
itemsToShow 		
overlay 			
override 	
pauseHover 
repeat 
value