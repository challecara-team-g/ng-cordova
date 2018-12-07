export class TaskContent{
  id:string;
  day_of_week:number;
  title:string;
  detail:string;
  group_id:string;
  // create_at:Date;
  update_at:Date;
  icon_id:string;
  assign_user: string;
  comment: string;

  constructor(day_of_week,title,detail,icon_id,assign_user,comment){
    this.day_of_week = day_of_week;
    this.title = title;
    this.detail = detail;
    this.icon_id = icon_id;
    this.assign_user = assign_user;
    this.comment = comment;
  }

  deserialize() { // 追加
    return Object.assign({}, this);
  }
  setData(date: Date): TaskContent { // 追加
    this.update_at = date;
    return this;
  }
  setGroup(group_id): TaskContent{
    this.group_id = group_id
    return this
  }
  setId(set_id){
    this.id = set_id
  }
}
