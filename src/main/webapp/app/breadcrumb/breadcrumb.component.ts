/**
 * Created by Dmitrij on 19.01.2017.
 */
import {Component, Input} from "@angular/core";
import {Breadcrumb} from "./breadcrumb";
@Component({
  selector: 'my-breadcrumbs',
  moduleId: module.id,
  templateUrl: 'breadcrumb.template.html'
})
export class BreadcrumbComponent{

  @Input('breadcrumbs')
  private breadcrumbs:Breadcrumb[];

}
