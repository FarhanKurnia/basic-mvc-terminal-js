const command = process.argv[2]
const params = process.argv.slice(3)
const TodoController = require("./controller/TodoController")

switch (command) {
    case 'show':
        TodoController.show()
        break;
    case 'add':
        TodoController.add(params)
        break
    case 'update':
        TodoController.update(params)
        break
    case 'delete':
        TodoController.delete(params)
        break
    case 'help':
        TodoController.help()
        break
    default:
        TodoController.notFound()
        break
}