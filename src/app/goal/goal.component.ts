import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals =[
  new Goal(1,'Watch finding Nemo','Find an online version',new Date(2018,3,21)),
  new Goal(2,'Buy cookie','Need to check the cookie recipe',new Date(2018,5,13)),
  new Goal(3,'Buy new phone case','Ann has an upcoming birthday',new Date(2018,6,23)),
  new Goal(4,'Watch football game','Need some time to relax',new Date(2018,4,17)),
  new Goal(5,'Sharpen my coding skills','Cause thats what matters to me',new Date(2018,7,7)),
  new Goal(6,'Plan my world domination plan','Cause am one evil man',new Date(2018,9,25)),
]
  deleteGoal(isComplete, index){
    if (isComplete){
           let toDelete=confirm(`Are you sure you want to delete ${this.goals[index].name}`)

           if(toDelete){
               this.goals.splice(index,1)
           }
       }
  }

  toogleDetails(index){
    this.goals[index].showdescription = !this.goals[index].showdescription;
  }

  addNewGoal(goal){
        let goalLength = this.goals.length;
        goal.id=goalLength+1;
        goal.completeDate = new Date(goal.completeDate)
        this.goals.push(goal)
    }

  constructor() { }

  ngOnInit() {
  }

}
