export class Goal {
  public showdescription:boolean;
  constructor(public id:number, public name:string, public description:string, public completeDate:Date){
    this.showdescription = false;
  }
}
