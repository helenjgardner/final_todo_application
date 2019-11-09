(this.webpackJsonpfinal_todo_app=this.webpackJsonpfinal_todo_app||[]).push([[0],{54:function(e,t,a){e.exports=a(71)},59:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(7),c=a.n(l),o=a(9),r=a(8),i=a(10),d=a(11),u=a(12),m=(a(59),a(22)),p=a.n(m),k=(a(62),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"col-12 col-sm-6 red"},this.props.count," ",this.props.text)}}]),t}(s.a.Component)),f=(a(63),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={newTaskText:""},a.updateTaskText=function(e){a.setState({newTaskText:e.target.value})},a.handleClick=function(){a.props.addTaskFunc(a.state.newTaskText),a.setState({newTaskText:""})},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 col-sm-9"},s.a.createElement("div",{className:"mt-3 mb-3"},s.a.createElement("input",{id:"addItemInput",type:"text",maxLength:"85",className:"form-control",placeholder:"New task description (max length 85)",value:this.state.newTaskText,onChange:this.updateTaskText}))),s.a.createElement("div",{className:"col-12 col-sm-3"},s.a.createElement("div",{className:"mt-3 mb-3"},s.a.createElement("button",{id:"AddButton",className:"btn btn-success",onClick:this.handleClick},"Add to list"))))}}]),t}(s.a.Component)),h=(a(64),a(13)),D=a.n(h),E=a(95),Y=a(38),y=a(15),T=a(98),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).handleClickDel=function(e){window.confirm("Are you sure you want to delete?")&&a.props.deleteTaskFunc(a.props.id)},a.handleClickDone=function(){a.props.toggleTaskFunc(a.props.id,!0)},a.handleDateChange=function(e){a.props.setDateDueFunc(a.props.id,e)},a.handleClickEdit=function(){var e=prompt("Update task details",a.props.task);a.props.editTaskFunc(a.props.id,e)},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"row toDo"},s.a.createElement("div",{className:"col-4 col-sm-3"},s.a.createElement("i",{className:"fas fa-trash-alt pad",title:"Delete Task",onClick:this.handleClickDel}),s.a.createElement("i",{className:"fas fa-clipboard-check green pad",title:"Mark as Done",onClick:this.handleClickDone}),s.a.createElement("i",{className:"fas fa-pencil-alt",title:"Edit",onClick:this.handleClickEdit})),s.a.createElement("div",{className:"col-8 col-sm-5"},this.props.task),s.a.createElement("div",{className:"col-12 col-sm-4"},s.a.createElement(y.a,{utils:Y.a},s.a.createElement(E.a,{container:!0},s.a.createElement(T.a,{margin:"normal",id:"date-picker-dialog",label:"Date due",format:"dd/MM/yyyy",value:this.props.dateDue,minDate:D()(),onChange:this.handleDateChange,KeyboardButtonProps:{"aria-label":"change date"}})))))}}]),t}(s.a.Component),v=(a(70),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).handleClick=function(e){window.confirm("Are you sure you want to delete?")&&a.props.deleteTaskFunc(a.props.id)},a.handleClickUnDone=function(){a.props.toggleTaskFunc(a.props.id,!1)},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"row done"},s.a.createElement("div",{className:"col-12 col-sm-3"},s.a.createElement("i",{className:"fas fa-trash-alt pad",title:"Delete Task",onClick:this.handleClick}),s.a.createElement("i",{className:"fas fa-undo",onClick:this.handleClickUnDone,title:"Mark task incomplete"})),s.a.createElement("div",{className:"col-12 col-sm-5 greyItalic"},this.props.task),s.a.createElement("div",{className:"col-12 col-sm-4 greyItalic"},"Done ",D()(this.props.dateDone,"YYYY-MM-DD").format("DD/MM/YYYY")))}}]),t}(s.a.Component)),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={tasks:[{text:"clean driveway",completed:!1,dateDue:D()().add(7,"days").format("YYYY-MM-DD"),dateDone:"",id:p()()},{text:"paint landing",completed:!1,dateDue:D()().add(2,"days").format("YYYY-MM-DD"),dateDone:"",id:p()()},{text:"mend trousers",completed:!1,dateDue:D()().add(3,"days").format("YYYY-MM-DD"),dateDone:"",id:p()()},{text:"change dishwasher salt",completed:!0,dateDue:"",dateDone:"2019-10-12",id:p()()},{text:"buy crayons",completed:!0,dateDue:"",dateDone:"2019-09-01",id:p()()},{text:"a really, really, long task to display",completed:!1,dateDue:D()().add(8,"days").format("YYYY-MM-DD"),dateDone:"2019-09-01",id:p()()}]},a.addTask=function(e){if(""!==e){var t={text:e,completed:!1,dateDue:D()().add(7,"days").format("YYYY-MM-DD"),dateDone:"",id:p()()},n=a.state.tasks.slice();n.push(t),a.setState({tasks:n})}else alert("Task cannot be blank - please try again")},a.deleteTask=function(e){var t=a.state.tasks.filter((function(t){return t.id!==e}));a.setState({tasks:t})},a.toggleTaskStatus=function(e,t){var n=a.state.tasks.slice();n.forEach((function(a){a.id===e&&(a.completed=t,t?a.dateDone=D()():(a.dateDone="",a.dateDue=D()().add(7,"days").format("YYYY-MM-DD")))})),a.setState({tasks:n})},a.setDateDue=function(e,t){var n=a.state.tasks.slice();n.forEach((function(a){a.id===e&&(a.dateDue=t)})),a.setState({tasks:n})},a.editTask=function(e,t){if(""!==t){var n=a.state.tasks.slice();n.forEach((function(a){a.id===e&&(a.text=t)})),a.setState({tasks:n})}else alert("Task cannot be blank - please try again")},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state.tasks.filter((function(e){return!e.completed}));t.sort((function(e,t){return D()(e.dateDue).format("YYYYMMDD")-D()(t.dateDue).format("YYYYMMDD")}));var a=this.state.tasks.filter((function(e){return e.completed}));return a.sort((function(e,t){return D()(e.dateDone).format("YYYYMMDD")-D()(t.dateDone).format("YYYYMMDD")})),s.a.createElement("div",null,s.a.createElement("br",null),s.a.createElement("h4",null," Today's (",D()().format("ddd Do MMM"),") List "),s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row",id:"totalItem"},s.a.createElement("hr",null),s.a.createElement(k,{count:t.length,text:"Tasks Still to Complete"}),s.a.createElement(k,{count:a.length,text:"Tasks Already Done!! "})),s.a.createElement("hr",null),s.a.createElement(f,{addTaskFunc:this.addTask}),s.a.createElement("h5",null," Tasks Still to Complete "),t.map((function(t){return s.a.createElement(b,{key:t.id,id:t.id,task:t.text,completed:t.completed,dateDue:t.dateDue,deleteTaskFunc:e.deleteTask,toggleTaskFunc:e.toggleTaskStatus,setDateDueFunc:e.setDateDue,editTaskFunc:e.editTask})})),s.a.createElement("br",null),s.a.createElement("h5",null," Tasks Already Done!!"),a.map((function(t){return s.a.createElement(v,{key:t.id,id:t.id,task:t.text,completed:t.completed,dateDone:t.dateDone,deleteTaskFunc:e.deleteTask,toggleTaskFunc:e.toggleTaskStatus})}))),s.a.createElement("br",null))}}]),t}(s.a.Component);c.a.render(s.a.createElement(g,null),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.ba51cf68.chunk.js.map