import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http:HttpClient) {
   }

   async getPokemon(): Promise<any> {
    return firstValueFrom(this.http.get('https://pokeapi.co/api/v2/pokemon/1'))
  }

  public tasks: string[] = [];



}
