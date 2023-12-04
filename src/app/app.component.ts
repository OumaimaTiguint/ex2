import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SearchComponent} from './shared/components/search/search.component';
import {MovieService} from './shared/services/movie.service';
import {HttpClientModule} from '@angular/common/http';


@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		CommonModule, 
		RouterOutlet,
		MatToolbarModule,
    	MatIconModule,
    	MatButtonModule,
		SearchComponent,
		HttpClientModule
	],
	providers: [MovieService],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'ex2';
}
