import { Component, OnInit } from '@angular/core'
import { MovieService } from '../movie.service'

@Component({
    selector: 'app-movielist',
    templateUrl: './movielist.component.html',
    styleUrls: ['./movielist.component.scss'],
})

export class MovielistComponent implements OnInit {
    movies = []

    constructor(public ms: MovieService) { }

    ngOnInit() { 
        this.movies = this.ms.movieList
    }
}
