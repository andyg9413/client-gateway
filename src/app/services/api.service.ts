import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Device, Gateway, GetGateways} from "../shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getGateways(): Observable<GetGateways> {
    return this.http.get<GetGateways>('http://localhost:3000/gateways');
  }

  addDevice(data: any): Observable<Device> {
    console.log(data);
    return this.http.post<Device>('http://localhost:3000/devices', data);
  }

  getDevice(id: any): Observable<Device> {
    return this.http.get<Device>(`http://localhost:3000/devices/${id}`);
  }

  updateDevice(data: any): Observable<Device> {
    console.log(data);
    return this.http.put<Device>(`http://localhost:3000/devices/${data.id}`, {vendor: data.data.vendor, status: data.data.status});
  }

  deleteDevice(id: any): Observable<Device> {
    console.log(id);
    return this.http.delete<Device>(`http://localhost:3000/devices/${id}`);
  }

  deleteGateway(id: any): Observable<Gateway> {
    console.log(id);
    return this.http.delete<Gateway>(`http://localhost:3000/gateways/${id}`);
  }

  addGateway(data: any): Observable<Gateway> {
    return this.http.post<Gateway>('http://localhost:3000/gateways', data);
  }

  updateGateway(data: any): Observable<Gateway> {
    console.log(data);
    return this.http.put<Gateway>(`http://localhost:3000/gateways/${data.id}`, {name: data.data.name, ip: data.data.ip});
  }

  getGateway(id: any): Observable<Gateway> {
    return this.http.get<Gateway>(`http://localhost:3000/gateways/${id}`);
  }
}
