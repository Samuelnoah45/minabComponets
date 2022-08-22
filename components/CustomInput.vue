<template>
 
  
      <o-autocomplete
        v-model="name"
        placeholder="e.g. Anne"
        :keep-first="keepFirst"
        :open-on-focus="openOnFocus"
        :data="filteredDataObj"
        field="user.first_name.name"
        @select="option => selected = option"
       :inputClasses="{inputClass:`focus:outline-none rounded border-2 border-gray-200 p-1 text-red-600  w-full `}"
        
      >
      </o-autocomplete>

</template>
<script>
  const data = [
    { id: 1, user: { first_name:{ name:'Jesse'}, last_name: 'Simmons' }, date: '2016/10/15 13:43:27', gender: 'Male' },
    { id: 2, user: { first_name:{ name: 'John'}, last_name: 'Jacobs' }, date: '2016/12/15 06:00:53', gender: 'Male' },
    { id: 3, user: { first_name: { name:'Tina'}, last_name: 'Gilbert' }, date: '2016/04/26 06:26:28', gender: 'Female' },
    { id: 4, user: { first_name: { name:'Clarence'}, last_name: 'Flores' }, date: '2016/04/10 10:28:46', gender: 'Male' },
    { id: 5, user: { first_name: { name:'Anne'}, last_name: 'Lee' }, date: '2016/12/06 14:38:38', gender: 'Female' },
    
  ]

  export default {
    data() {
      return {
        data,
        keepFirst: false,
        openOnFocus: false,
        name: '',
        selected: null
      }
    },
    computed: {
      filteredDataObj() {
        return this.data.filter(option => {
          return (
            option.user.last_name
              .toString()
              .toLowerCase()
              .indexOf(this.name.toLowerCase()) >= 0
          )
        })
      }
    }
  }
</script>
