const Todo = require("../model/Todo")
const TodoView = require("../view/TodoView")

class TodoController{
    static show(){
        let todos = Todo.show()
        TodoView.show(todos)
    }

    static add(params){
        Todo.add(params)
        TodoView.response("Berhasil melakukan tambah Data")
    }

    static update(params){
        Todo.update(params)
        TodoView.response("Berhasil melakukan update data")
    }

    static delete(params){
        Todo.delete(params)
        TodoView.response("Berhasil melakukan hapus data")
    }

    static notFound(){
        TodoView.response("command not found, for information use command: help")
    }

    static help(){
        TodoView.help()
    }

}

module.exports = TodoController