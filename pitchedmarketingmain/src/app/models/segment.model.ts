export interface SegmentModel {
  id: number;
  segmentname: string;  
}

export interface SegmentDetailModel {
  id: number;
  segmentid: number;  
  fieldname: string;
  operator: string;
  conditionvalue1: string;
  conditionvalue2: string;
}


