import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbTooltipModule, NgbDropdownModule, NgbAccordionModule, NgbProgressbarModule, NgbNavModule, NgbPaginationModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

// Feather Icon
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';

// Calendar package
import { FullCalendarModule } from '@fullcalendar/angular';
// Flat Picker
import { FlatpickrModule } from 'angularx-flatpickr';
// Simplebar
import { SimplebarAngularModule } from 'simplebar-angular';
// Ck Editer
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
// Counter
import { CountUpModule } from 'ngx-countup';
// Apex Chart Package
import { NgApexchartsModule } from 'ng-apexcharts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

// Emoji Picker
import { PickerModule } from '@ctrl/ngx-emoji-mart';

// Load Icon
import { defineElement } from '@lordicon/element';
import lottie from 'lottie-web';

//  Drag and drop
import { DndModule } from 'ngx-drag-drop';

// Select Droup down
import { NgSelectModule } from '@ng-select/ng-select';

// NG2 Search Filter
import { NgPipesModule } from 'ngx-pipes';

// drag and droup row table
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTableModule } from '@angular/material/table';

import { DatePipe } from '@angular/common';

// Component Pages
import { AppsRoutingModule } from "./apps-routing.module";
import { SharedModule } from '../../shared/shared.module';
import { MainCalendarComponent } from './calendar/main-calendar/main-calendar.component';
import { MonthGridComponent } from './calendar/month-grid/month-grid.component';
import { ChatComponent } from './chat/chat.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { EmailBasicComponent } from './email/email-basic/email-basic.component';
import { EmailEcommerceComponent } from './email/email-ecommerce/email-ecommerce.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { TodoComponent } from './todo/todo.component';

import { SortByPipe } from '../apps/sort-by.pipe';
import { ApikeyComponent } from './apikey/apikey.component';

// Mask
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask, IConfig } from 'ngx-mask';

// Swiper Slider
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    MonthGridComponent,
    MainCalendarComponent,
    ChatComponent,
    MailboxComponent,
    WidgetsComponent,
    EmailBasicComponent,
    EmailEcommerceComponent,
    FileManagerComponent,
    TodoComponent,
    SortByPipe,
    ApikeyComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTooltipModule,
    NgbDropdownModule,
    NgbAccordionModule,
    NgbProgressbarModule,
    NgbNavModule,
    NgbPaginationModule,
    NgbCollapseModule,
    FeatherModule.pick(allIcons),
    FullCalendarModule,
    FlatpickrModule.forRoot(),
    SimplebarAngularModule,
    CKEditorModule,
    CountUpModule,
    NgApexchartsModule,
    AppsRoutingModule,
    SharedModule,
    PickerModule,
    DndModule,
    NgSelectModule,
    DragDropModule,
    MatTableModule,
    NgPipesModule,
    NgxMaskDirective,
    NgxMaskPipe,
    SlickCarouselModule,
    LeafletModule,

  ],
  providers: [
    provideNgxMask(),
    DatePipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppsModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
