
class assignee {
    constructor(name, title, status) {
        this.aName = name
        this.aTitle = title
        this.aStatus = status
    }
    
    changeStatus(status) {
        this.aStatus = status
    }
}

class tasks{
    constructor(id, name, days, assignee, status) {
        this.tId = id
        this.tName = name
        this.tDays = days
        this.tAssignee = assignee
        this.tStatus = status
    }
    
    changeTaskStatus(status) {
        console.log('\nTask status changed to: ' + (this.tStatus = status))
    }
    printTaskMethadology(){
        return 'Agile';
    }
    taskPercentage(taskDays,projectDays){
        var per = taskDays/projectDays * 100;
        return per;
    }
}
class project{
	constructor(name, type, days, tasks) {
        this.name = name
        this.type = type
        this.days = days
		this.tasks = tasks
        this.daysCompleted = 10
    }
    projectDetails(){
        console.log(this.name)
        console.log(this.type)
        console.log(this.days)
        console.log(super.printTaskMethadology())
    }
    getTaskPercentage(taskid){
        var task = this.tasks.get(taskid);
        var taskDays = task.tDays;
        var per  = super.taskPercentage(taskDays,this.days);
        return 'The Percentage of' + task.tName + 'is : ' + per;
    }
    daysRemaining() {
        console.log('\nRemaining Days: ' + (this.days - this.daysCompleted))
    }

    totalTasks() {
        console.log('\nTotal Task(s): ' + this.tasks.size)
    }
    
	printTasks() {
        var map = this.tasks.values()

        for(var i = 1; i <= this.tasks.size; i++) {
            console.log('\nTask no#' + i + ': ' + map.next().value.tName)
        }
    }
    
    status() {
        var map = this.tasks.values()
        var initial = false, progress = false, completed = false

        for(var i = 0; i < this.tasks.size; i++) {
            var status = map.next().value.tStatus

            if(status == 'Initial') {
                initial = true
            } if(status == 'Progress') {
                progress = true
            } if(status == 'Completed') {
                completed = true
            }
        }

        if(initial == true && progress == false && completed == false) {
            console.log('\nProject Status: ' + 'Initial')
        } else if(progress == true) {
            console.log('\nProject Status: ' + 'Progress')
        } else if(completed == true && progress == false && initial == false) {
            console.log('\nProject Status: ' + 'Completed')
        } else {
            console.log('\nProject Status: ' + 'Progress')
        }
    }

    completedTasks() {
        var map = this.tasks.values()
        var count = 0

        for(var i = 0; i < this.tasks.size; i++) {
            var status = map.next().value.tStatus

            if(status == 'Completed') {
                count += 1
            }
        }

        if(count >= 1) {
            console.log('\nCompleted Task(s): ' + count)
        } else {
            console.log('\nCompleted Task(s): ' + 'NA')
        }
    }

    pendingTasks() {
        var map = this.tasks.values()
        var count = 0

        for(var i = 0; i < this.tasks.size; i++) {
            var status = map.next().value.tStatus

            if(status != 'Completed') {
                count += 1
            }
        }

        if(count >= 1) {
            console.log('\nPending Task(s): ' + count)
        } else {
            console.log('\nPending Task(s): ' + 'NA')
        }
    }

    taskAssignee(taskId) {
        var map = this.tasks.values()
        var value, tId = 0

        for(var i = 0; i < this.tasks.size; i++) {
            value = map.next().value
            tId = value.tId

            if(tId == taskId) {
                return console.log('\nAssignee of Task#' + tId + ': ' + value.tAssignee.aName)
            }
        }
        console.log('\nTask Assignee: ' + 'NA')
    }

    addTask(key, task) {
        this.tasks.set(key,task)
        //console.log('\nTask Added: ' + (Boolean(this.tasks.set(taskId, task)) ? 'Success' : 'Failed'))
    }

    deleteTask(taskId) {
        console.log('\nTask Deleted: ' + (this.tasks.delete(taskId) ? 'Success' : 'Failed'))
    }

    ChangeAssignee(taskId, assignee) {
        var map = this.tasks.values()
        var value, tId = 0

        for(var i = 0; i < this.tasks.size; i++) {
            value = map.next().value
            tId = value.tId

            if(tId == taskId) {
                console.log('\nChanged assignee of Task#' + tId + ' to: ' + (Boolean(value.tAssignee = assignee) ? value.tAssignee.aName : 'Failed'))
            }
        }
    }
}
var asher = new assignee('Asher', 'Developer', 'Active')
var ahsan = new assignee('Ahsan', 'Developer', 'Active')

var task1 = new tasks(1, 'Architecture', 5, asher, 'Initial')
var task2 = new tasks(2, 'Development_1', 1, asher, 'Initial')
var task3 = new tasks(3, 'Development_2', 5, asher, 'Initial')
var task4 = new tasks(4, 'Development_3', 5, asher, 'Completed')
var task5 = new tasks(5, 'Development_4', 5, asher, 'Completed')

var tasklist = new Map();
tasklist.set(1, task1);
tasklist.set(2, task2);
tasklist.set(3, task3);
tasklist.set(4, task4);

var pro = new project('Blockchain', 'Development', 30, tasklist)
var task6 = new tasks(6, 'Development_4', 5, asher, 'Completed')
console.log(pro.tasks)
pro.addTask(6,task6)
console.log(pro.tasks)
// pro.daysRemaining()
// pro.printTasks()
// pro.totalTasks()
// pro.status()
// pro.completedTasks()
// task4.changeTaskStatus('Initial')
// pro.pendingTasks()
// pro.taskAssignee(3)
// pro.addTask(5, task5)
// pro.deleteTask(5)
//pro.ChangeAssignee(4, ahsan)
//console.log('\n')
//var method = pro.printTaskMethadology();
// console.log(method)
// pro.projectDetails()
//console.log(pro.getTaskPercentage(2))