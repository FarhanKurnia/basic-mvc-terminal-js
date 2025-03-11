class TodoView{
    static show(todos){
        console.log("To Do List: ")
        todos.forEach(element => {
            const{id,task,description,status} = element
            if(status == "done"){
                console.log(`${id}. [*] ${task}: ${description}`)
            } else if (status == "on-progress"){
                console.log(`${id}. [-] ${task}: ${description}`)
            } else{
                console.log(`${id}. [ ] ${task}: ${description}`)
            }
        });
    }

    static response(message){
        console.log(message)
    }

    static help(){
        console.log("-- help information")
        console.log('1. Show Data\n\t- for show data use command: show\n\texample: node index.js show ')
        console.log('2. Add Data\n\t- for add data use command: add ["task"] ["description"]\n\texample: node index.js add "Pancasila" "Tugas halaman 5"')
        console.log('4. Update Data\n\t- for update data use command: update ["task" (*mandatory*)] ["description" (*opsional*)]\n\texample: node index.js update 4 "Pendidikan Kewarganegaraan"')
        console.log('3. Delete Data\n\t- for delete data use command: delete ["id"]\n\t example: node index.js delete 4')
    }

}

module.exports = TodoView