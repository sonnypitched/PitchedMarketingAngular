export interface EmailScheduleModel {
  id: number;
  taskName: string;
  startDate: string;  
  endDate: string;  
  interval: string;
  emailTemplateID: number;
  queryBuilderID: number;
  
}


