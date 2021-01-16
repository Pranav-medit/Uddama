import { Injectable } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})

export class PublicPostService {

  constructor(private apollo: Apollo) { }

  getAllPosts(){
    return this.apollo
    .watchQuery({
      query: gql`
        {
          getPosts {
            id
            title
            content
          }
        }
      `,
    })
    .valueChanges
  }
}