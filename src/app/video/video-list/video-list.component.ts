import { VideoService } from "./../video.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

interface Repository {
  name: string;
  description: string;
}

@Component({
  selector: "app-video-list",
  templateUrl: "./video-list.component.html",
  styleUrls: ["./video-list.component.css"],
})
export class VideoListComponent implements OnInit {

  repos: Observable<Repository[]>;

  constructor(
    private VideoService: VideoService // injeção do service
  ) {}

  ngOnInit(): void {
    this.repos = this.VideoService.getRespos();
  }

  navigateToDetail(): void{

  }
}
