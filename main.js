const { createApp } = Vue

createApp({
  data() {
    return {
      newTask:{
        text:``,
        done: false
      },
      tasks:[
        {
          text:'fare i compiti',
          done: true
        },
        {
          text:'fare la spesa',
          done: true
        },
        {
          text:'fare la lavatrice',
          done: true
        },
        {
          text:'porta a spasso il cane',
          done: true
        }
      ]
    } 
  },
  created(){

  },
  methods:{
    removeTask(index){
      this.tasks.splice(index,1)
    },
    addTask(){
      if(this.newTask !== ``){
        this.tasks.unshift(this.newTask)
      }
      this.newTask= ``
    },
    checkText(index){
      this.tasks[index].done = !this.tasks[index].done
    }
}
}).mount('#app')

