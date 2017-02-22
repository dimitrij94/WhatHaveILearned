import {Component, OnInit} from "@angular/core";
import {Folder} from "./folder";
import {FolderService} from "./folder.service";
import {ActivatedRoute, Params} from "@angular/router";
@Component({
  selector: 'folder',
  moduleId: module.id,
  templateUrl: "./folder.component.html"
})
export class FolderComponent implements OnInit {
  private folder:Folder;
  //private interest:UserInterest;
  //private breadcrumbs:Array<Breadcrumb>;

  constructor(private route:ActivatedRoute,
              private folderService:FolderService) {

  }


  ngOnInit():void {
    this.getFolder();
  }


  getFolder():void {
    let self = this;
    this.route.params.subscribe((params:Params)=> {
      this.folderService.get(+params['folder_id'], (folder:Folder)=> {
        self.folder = folder;
      })
    })
  }

}
