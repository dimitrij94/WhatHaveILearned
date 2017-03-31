import {Component, OnInit} from "@angular/core";
import {Folder} from "../folder";
import {FolderService} from "../folder.service";
import {ActivatedRoute, Params} from "@angular/router";
import "rxjs/add/operator/switchMap";
import {MyRoutingService} from "../../my-routing.service";
@Component({
  selector: 'folder',
  moduleId: module.id,
  templateUrl: "./folder.component.html",

})
export class FolderComponent implements OnInit {
  private folder:Folder;
  private params:Params;


  //private interest:UserInterest;
  //private breadcrumbs:Array<Breadcrumb>;

  constructor(private route:ActivatedRoute,
              private folderService:FolderService,
              private routingService:MyRoutingService) {

  }

  private export() {

  }

  private import() {

  }

  ngOnInit():void {
    this.getFolder();
  }


  getFolder():void {
    this.route.params
      .switchMap((params:Params)=> {
        this.params = params;
        return this.folderService.get(+params['folder_id'], true);
      })
      .subscribe((folder:Folder)=> {
        this.folderService.cacheValue(folder);
        this.folder = folder;
      })
  }

}
