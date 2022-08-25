import { defineNuxtPlugin } from '#app';
import Oruga from '@oruga-ui/oruga-next';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Oruga,{
        autocomplete: {
            // rootClass: '',
            // menuClass: 'myautocomplete-menu',
            // itemFooterClass:"text-black-600 border-b-2 border-gray-600" ,
            // itemEmptyClass:"text-black bg-gray-100",
            // itemClass:"hover:bg-gray-100 cursor-pointer",
            // itemGroupTitleClass:"text-black-600 border-b-2 border-gray-600",
            // itemHeaderClass:"text-black-600 border-b-2 border-gray-600",
            // menuClass:"menuClass",
            // rootClass:"rootClass",
            // itemHoverClass:'bg-gray-100'
    //     },
    //  button:{
    // elementsWrapperClass:"",			
    // iconRight:"",	
    // iconLeftClass:"",	
    // iconRightClass:"", 		
    // invertedClass:"",
    // labelClass:"",
    // outlinedClass:"",
    // rootClass:"border-red-600 border-4",			 	
    // variantClass:"",
    
        }

    })
})
