<script setup>
import { useQuery } from '@urql/vue';
import  users from '../graphql/query/users.gql'
import {ref ,computed} from 'vue'

const  datad=ref([{
            type: 'Fruit',
            items: ['Apple', 'Banana', 'Watermelon'],
            a: ['Apple', 'Banana', 'Watermelon']

          },
          {
            type: 'Vegetables',
            items: ['Carrot', 'Broccoli', 'Cucumber', 'Onion'],
            a: ['Carrot', 'Broccoli', 'Cucumber', 'Onion']
          }])
const datac= ref(['Angular', 'Angular 2', 'Aurelia', 'Backbone', 'Ember', 'jQuery', 'Meteor', 'Node.js', 'Polymer', 'React', 'RxJS', 'Vue.js'])
const data=ref([ 
    {id: 1,  user: { first_name: 'Jesse', last_name: 'Simmons' }, date: '2016/10/15 13:43:27', gender: 'Male' },
    { id: 2, user: { first_name: 'John', last_name: 'Jacobs' }, date: '2016/12/15 06:00:53', gender: 'Male' },
    { id: 3, user: { first_name: 'Tina', last_name: 'Gilbert' }, date: '2016/04/26 06:26:28', gender: 'Female' },
    { id: 4, user: { first_name: 'Clarence', last_name: 'Flores' }, date: '2016/04/10 10:28:46', gender: 'Male' },
    { id: 5, user: { first_name: 'Anne', last_name: 'Lee' }, date: '2016/12/06 14:38:38', gender: 'Female' },
    { id: 6, user: { first_name: 'Sara', last_name: 'Armstrong' }, date: '2016/09/23 18:50:04', gender: 'Female' },
    { id: 7, user: { first_name: 'Anthony', last_name: 'Webb' }, date: '2016/08/30 23:49:38', gender: 'Male' },
    { id: 8, user: { first_name: 'Andrew', last_name: 'Greene' }, date: '2016/11/20 14:57:47', gender: 'Male' },
    { id: 9, user: { first_name: 'Russell', last_name: 'White' }, date: '2016/07/13 09:29:49', gender: 'Male' },
    { id: 10, user: { first_name: 'Lori', last_name: 'Hunter' }, date: '2016/12/09 01:44:05', gender: 'Female' },
    { id: 11, user: { first_name: 'Ronald', last_name: 'Wood' }, date: '2016/12/04 02:23:48', gender: 'Male' },
    { id: 12, user: { first_name: 'Michael', last_name: 'Harper' }, date: '2016/07/27 13:28:15', gender: 'Male' },
    { id: 13, user: { first_name: 'George', last_name: 'Dunn' }, date: '2017/03/07 12:26:52', gender: 'Male' },
    { id: 14, user: { first_name: 'Eric', last_name: 'Rogers' }, date: '2016/06/07 05:41:52', gender: 'Male' },
    { id: 15, user: { first_name: 'Juan', last_name: 'Meyer' }, date: '2017/02/01 04:56:34', gender: 'Male' },])
const Value=ref('s')

const items=ref([
          {
            title: 'Slide 1',
            image: 'https://picsum.photos/id/1/1230/500'
          },
          {
            title: 'Slide 2',
            image: 'https://picsum.photos/id/2/1230/500'
          },
          {
            title: 'Slide 3',
            image: 'https://picsum.photos/id/3/1230/500'
          },
          {
            title: 'Slide 4',
            image: 'https://picsum.photos/id/4/1230/500'
          },
          {
            title: 'Slide 5',
            image: 'https://picsum.photos/id/5/1230/500'
          },
          {
            title: 'Slide 6',
            image: 'https://picsum.photos/id/6/1230/500'
          },
          {
            title: 'Slide 7',
            image: 'https://picsum.photos/id/7/1230/500'
          }
        ])
const selected=ref()
const filterdata= computed(()=>{
 return data.value.filter(option => {
console.log("mqo")
          return (
            option.user.first_name
              .toString()
              .toLowerCase()
              .indexOf(Value.value.toLowerCase()) >= 0
          )
        })
})

const d =computed(()=>{
   return datad.value.filter(option => {
          return (
            option
              .toString()
              .toLowerCase()
              .indexOf(Value.value.toLowerCase()) >= 0
          )
        })
})

const filterdata2=computed(()=>{
    const newData = []
        datad.value.forEach(element => {
          const items = element.items.filter(item => item.toLowerCase().indexOf(Value.value.toLowerCase()) >= 0)
          if (items.length) {
            newData.push({ type: element.type, items })
          }
        })
        return newData
      
})

const values=ref(1)

const arrow=ref(true) 
const arrowHover=ref(true)
const drag=ref(true)       
const  perList=ref(4)
const increment=ref(1)
const repeat=ref(false)
    </script>
<template>
  <div class="grid grid-cols-4 w-full  h-screen p-4 gap-x-4">
    <!-- //autocomplete -->
    <div class="felx justify-center items-center h-80">
      <h-auto-complet
       :data="filterdata2"
       inputClass=""
       rootClass=""
       itemClass="''"
       itemEmptyClass=""
       groupField="type"
       groupOptions="items"
       placeholder="search"
       itemFooterClass=""
       @select="option => selected = option"
       v-model="Value">
      <template #footer >{{"footer"}}</template>
      <template #empty >{{"no result found"}}</template>
      <template #header >{{"Header"}}</template>
      </h-auto-complet>
       <div>{{selected}}</div>

      <!-- //button -->
 </div>
 <div class="felx justify-center items-center h-80">
    <h-button>
      <template #default >{{""}}</template>
    </h-button>
 </div>
    <div>
       <h-carousel v-model="values" :arrow="true" :arrow-hover="true" :items-to-show="2" :items-to-list="1" :repeat="false" :has-drag="true">
      <template #default>
         <o-carousel-item v-for="(item, i) in items" :key="i">
        <img :src="item.image" />
      </o-carousel-item>
      </template>
    
    </h-carousel>
    </div>


      </div>
      
    <!-- <NuxtWelcome /> -->

</template>

