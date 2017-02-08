import {Component, OnInit} from "@angular/core";
import {Folder} from "./folder";
import {FolderService} from "./folder.service";
import {Breadcrumb} from "../breadcrumb/breadcrumb";
import {ActivatedRoute} from "@angular/router";
import "rxjs/add/operator/switchMap";
@Component({
  selector: 'folder',
  moduleId: module.id,
  templateUrl: "./folder.component.html"
})
export class FolderComponent implements OnInit {
  private folder:Folder;
  private breadcrumbs:Array<Breadcrumb>;

  constructor(private route:ActivatedRoute,
              private folderService:FolderService) {

  }


  ngOnInit():void {
    this.getFolder();
  }

  getBreadcrumbs(folder:Folder):Array<Breadcrumb> {
    return [
      {
        name: folder.interest.name.toUpperCase(),
        href: ['/user/', this.route.params['user_id'], '/interest/', this.route.params['interest_id']]
      },
      {
        name: folder.title.toUpperCase(),
        href: ['/user/', this.route.params['user_id'], '/interest/', this.route.params['interest_id'], '/folder/', folder.id]
      }
    ];
  }


  getFolder():void {
    this.route.params
      .switchMap((params) => this.folderService.getFolder(+params['folder_id']))
      .subscribe((folder:Folder) => {
        this.folder = folder;
        this.breadcrumbs = this.getBreadcrumbs(folder);
      });
  }
}
