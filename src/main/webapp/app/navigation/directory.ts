/**
 * Created by Dmitrij on 22.01.2017.
 */
import {User} from "../user/user";
import {Folder} from "../folders/folder";
import {UserInterest} from "../interest/user-interest";

export class Directory {
  title:string;
  icon:string;
  childDirectories:Array<Directory>;
  href:any[];
  open:boolean = true;
  treeDepth?:number;


  static constructFromUser(user:User):Directory {
    let newDir = new Directory();
    newDir.title = user.name;
    newDir.icon = 'person';
    newDir.href = ['/user',"home"];
    newDir.childDirectories = user.interests.map((interest:UserInterest) => Directory.constructFromInterest(user, interest));
    newDir.treeDepth = 0;
    return newDir;
  }

  static constructFromInterest(user:User, interest:UserInterest):Directory {
    let newDir = new Directory();
    newDir.title = interest.name;
    newDir.icon = "folder_shared";
    newDir.href = ['/user', user.id, 'interest', interest.id];
    newDir.treeDepth = 1;
    if (interest.folders)
      newDir.childDirectories = interest.folders.map((folder:Folder)=>Directory.constructFromFolder(user, interest, folder));
    return newDir;
  }

  static constructFromFolder(user:User, interest:UserInterest, folder:Folder):Directory {
    let newDir = new Directory();
    newDir.title = folder.title;
    newDir.treeDepth = 2;
    newDir.href = ['/user', user.id, 'interest', interest.id, 'folder', folder.id];
    newDir.icon = "folder";
    return newDir;
  }

}
