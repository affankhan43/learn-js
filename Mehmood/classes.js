//Mehmood Section-B
class project{
    constructor(tasks,stat){
        this.type="Development"
        this.dayscompleted=3
        this.tasks=tasks
        this.days=5
        this.stat=stat
    }
    daysrem(){
        var dayss=this.days-this.dayscompleted
        console.log("Remaining Days: "+dayss)
    }
    totaltasks(){
        return this.tasks.size;
    }
    status(){
        return this.stat;
    }
    completedtasks(){
        var count=0
        for(var i=1; i<=this.tasks.size;i++){
            if(this.tasks.get(i).statt=='Completed'){
                count=count+1
            }
        }
        console.log("Task Completed: "+count)
    }
    pendingtasks(){
        var countt=0
        for(var i=1; i<=this.tasks.size;i++){
            if(this.tasks.get(i).statt=='Not Started'){
                countt=countt+1
            }
        }
        console.log("Pending Tasks: "+countt)
    }
    taskassignee(taskid,assignee){
        this.tasks.get(taskid).assignee = assignee
    }
    deletetask(taskid){
        this.tasks.delete(taskid)
    }
    addtask(){
        tasklist.set(4,newtask)
        console.log(newtask)
    }
    changeassignee(taskid,assignee){
        this.tasks.get(taskid).assignee = newassign
    }
    printstatustask(taskid){
        return this.tasks.get(taskid).statt
    }
    printtask(taskid){
        return this.tasks.get(taskid)
    }
    changestatustask(taskid){
        this.tasks.get(taskid).statt="Completed"
    }
}
class task{
    constructor(name,days,assignee){
        this.statt='Not Started'
        this.name=name
        this.days=days
        this.assignee=assignee
    }
}
class assignee{
    constructor(name,title,status){
        this.name=name
        this.title=title
        this.status=status
    }
    changestatus(value){
        this.status=value
    }
}
var assign= new assignee('Mehmood','Web Developer','Active')
var newassign=new assignee('Jalal','Dot Net Developer','Active')

assign.changestatus="In Active"
console.log("Status Chnaged: ",assign)

var task1 = new task('development_1','5',assign)
var task2 = new task('development_2','5',assign)
var task3 = new task('development_3','5',assign)
var newtask = new task('development_4','5')

var tasklist = new Map();
tasklist.set(1,task1);
tasklist.set(2,task2);
tasklist.set(3,task3);

var chstat=new project(tasklist, 'In Progress')
// console.log("\nProject Status: "+chstat.status())
// console.log("\nTask Status: "+chstat.printstatustask(3))
// chstat.changestatustask(3)
// console.log("\nNew Task Status: "+chstat.printstatustask(3))
// // console.log("Task 3 Assignee: ",task3.assignee.name)
// console.log(task3)

var proj=new project(tasklist)
// console.log("\nTotal Tasks: "+proj.totaltasks())
// chstat.completedtasks()
// chstat.pendingtasks()
// chstat.deletetask(1)
// console.log("Total Tasks After Deletion: "+proj.totaltasks()+"\n")
// proj.addtask()
// proj.taskassignee(4)
// console.log(task2)
// proj.changeassignee(2,assign)
// console.log("New Assignee: ",task2)

// proj.taskassignee(4,assignee)
// console.log("Assignee Assigned: ",newtask)
var newperson= new assignee('Mehmood','Web Developer','Active')
console.log(proj.printtask(4))
proj.changeassignee(4,newperson)
console.log(proj.printtask(4))
