import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { MovieModel } from '../movie.model';

@Component({
    selector: 'app-moviedetail',
    templateUrl: './moviedetail.component.html',
    styleUrls: ['./moviedetail.component.scss'],
})
export class MoviedetailComponent implements OnInit {
    judul: string = ''
    sinopsis: string = ''
    poster: string = ''

    constructor(public ms: MovieService, public route: ActivatedRoute) { }

    ngOnInit() {
        var id: number = this.route.snapshot.params['id']
        var mm: MovieModel = this.ms.movieList[id]

        this.judul = mm.judul
        this.sinopsis = mm.sinopsis
        this.poster = mm.poster
    }
}
