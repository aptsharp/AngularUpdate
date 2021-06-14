import { VideoService } from './../video.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private VideoService: VideoService
  ) { }

  ngOnInit() {
    const params = this.activatedRoute;

  }

}
