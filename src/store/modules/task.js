import axios from "axios";

const task = {
    namespaced : true,
    state: {
        tasks: []
    },
    getters: {
        allTasks(state) {
            return state.tasks
        }
    },
    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks
        },
        newTask(state, task){
            state.tasks.unshift(task)
        },
        updateTask(state, updatedTask){
            const index = state.tasks.findIndex( task => task.id == updatedTask.id)
            if( index != -1 ){
                state.tasks.splice(index,1,updatedTask)
            }
        },
        removeTask(state,id){
            const index = state.tasks.findIndex( task => task.id == id)
            if( index != -1 ){
                state.tasks = state.tasks.filter( task => task.id != id)
            }
        }
    },
    actions: {
        async fetchTasks({ commit }) {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
                commit('setTasks', response.data)
            } catch (error) { console.log(error) }
        },
        async filterTasks({ commit }, num) {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${num}`)
                commit('setTasks', response.data)
            } catch (error) { console.log(error) }
        },
        async postTask({ commit }, title ) {
            try {
                const response = await axios.post('https://jsonplaceholder.typicode.com/todos',{
                    title : title,
                    completed : false
                })            
                commit('newTask', response.data)
            } catch (error) { console.log(error) }
        },
        async updateTask({ commit }, task ) {
            try {
                const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${task.id}`,{
                    id : task.id,
                    title : task.title,
                    completed : !task.completed
                })            
                commit('updateTask', response.data)
            } catch (error) { console.log(error) }
        },
        async removeTask({ commit }, task ) {
            try {
                await axios.delete(`https://jsonplaceholder.typicode.com/todos/${task.id}`)            
                commit('removeTask', task.id)
            } catch (error) { console.log(error) }
        }

    }
}
export default task;