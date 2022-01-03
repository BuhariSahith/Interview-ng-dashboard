import { Component } from '@angular/core';
import {
  faBarcode,
  faBars,
  faBell,
  faCalendar,
  faChartBar,
  faCog,
  faComment,
  faFileInvoice,
  faGlobe,
  faHome,
  faMailBulk,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dasboard';
  faHome = faHome;
  faUSer = faUser;
  faBar = faBarcode;
  faMsg = faMailBulk;
  faUser = faUser;
  faChatBar = faChartBar;
  faCalendar = faCalendar;
  faSearch = faSearch;
  faSettings = faCog;
  faHelp = faGlobe;
  faBell = faBell;
  faChat = faComment;
  faFile = faFileInvoice;
  faBars = faBars;
}
