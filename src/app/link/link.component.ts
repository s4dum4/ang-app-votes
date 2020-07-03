import { Component, OnInit, Input, HostBinding } from '@angular/core';
// Input to be able call the Class Link of link.model.ts
import { Link } from './link.model';
// HostBinding to be able to assign class row at component



@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row'; // Assign class row at component
  @Input() link: Link;

  constructor() { 
    
    
  }

  ngOnInit(): void {
    
  }

}
