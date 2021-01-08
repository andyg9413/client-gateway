export interface Gateway {
  name: string;
  ip: string;
  devices: any[];
  _id: string;
}

export interface GetGateways {
  data: Gateway[];
}

export interface Device {
  vendor: string;
  status: string;
}
