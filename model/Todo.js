const fs = require("fs")


class Todo{
    constructor(id,task,description,status){
        this.id = id
        this.task = task
        this.description = description
        this.status = status || "to-do"

    }
    static getTodos(){
        let data = fs.readFileSync('./data.json','utf8')
        let parseData = JSON.parse(data)
        let todos = parseData.map(element => {
            const{id,task,description,status} = element
            return new Todo(id,task,description,status)
        })
        return todos
    }

    static save(data){
        fs.writeFileSync('./data.json',JSON.stringify(data, null, 4))
    }

    static show(){
        let todos = this.getTodos()
        return todos
    }

    static add(params){
        let todos = this.getTodos()
        let id = todos[todos.length-1].id+1
        let task = params[0]
        let description = params[1]
        let temp = new Todo(id, task, description)
        todos.push(temp)
        this.save(todos)
        // console.log(todos)
    }

    static delete(params){
        let todos = this.getTodos()
        let id = Number(params[0])
        todos = todos.filter(params=>params.id !== id)
        this.save(todos)
    }

    static update(params){
        let todos = this.getTodos()
        let id = Number(params[0])
        let task = params[1]
        let description = params[2]
        todos = todos.map(todo=>{
            if(todo.id === id){
                todo.task = task === undefined? todo.task : task
                todo.description = description === undefined? todo.description : description
                todo.status = todo.status
            }
            return todo
        })
        this.save(todos)
    }

    

}

module.exports = Todo