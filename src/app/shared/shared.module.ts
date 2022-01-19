import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {IntercepterService} from "../service/intercepter.service";
import {PrimeIcons} from "primeng/api";
import {TableBody, TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {AutoCompleteModule} from "primeng/autocomplete";
import {AvatarGroupModule} from "primeng/avatargroup";
import {DropdownModule} from "primeng/dropdown";
import {FullCalendarModule} from "primeng/fullcalendar";
import {MenuModule} from "primeng/menu";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {SelectButtonModule} from "primeng/selectbutton";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {PanelMenuModule} from "primeng/panelmenu";
import {MegaMenuModule} from "primeng/megamenu";
import {RippleModule} from "primeng/ripple";
import {GalleriaModule} from "primeng/galleria";
import {TabMenuModule} from "primeng/tabmenu";
import {TimelineModule} from "primeng/timeline";
import {TreeTableModule} from "primeng/treetable";
import {PaginatorModule} from "primeng/paginator";
import {TagModule} from "primeng/tag";
import {AvatarModule} from "primeng/avatar";
import {ChartModule} from "primeng/chart";
import {InputSwitchModule} from "primeng/inputswitch";
import {TreeModule} from "primeng/tree";
import {ToastModule} from "primeng/toast";
import {InplaceModule} from "primeng/inplace";
import {SidebarModule} from "primeng/sidebar";
import {PanelModule} from "primeng/panel";
import {PickListModule} from "primeng/picklist";
import {ListboxModule} from "primeng/listbox";
import {CardModule} from "primeng/card";
import {ChipsModule} from "primeng/chips";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {SliderModule} from "primeng/slider";
import {DragDropModule} from "primeng/dragdrop";
import {AccordionModule} from "primeng/accordion";
import {ChipModule} from "primeng/chip";
import {PasswordModule} from "primeng/password";
import {TerminalModule} from "primeng/terminal";
import {MultiSelectModule} from "primeng/multiselect";
import {DividerModule} from "primeng/divider";
import {MessagesModule} from "primeng/messages";
import {ReactiveFormsModule} from "@angular/forms";
import {RadioButtonModule} from "primeng/radiobutton";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {ToolbarModule} from "primeng/toolbar";
import {KnobModule} from "primeng/knob";
import {SkeletonModule} from "primeng/skeleton";
import {FileUploadModule} from "primeng/fileupload";
import {TieredMenuModule} from "primeng/tieredmenu";
import {ToggleButtonModule} from "primeng/togglebutton";
import {CascadeSelectModule} from "primeng/cascadeselect";
import {ContextMenuModule} from "primeng/contextmenu";
import {SlideMenuModule} from "primeng/slidemenu";
import {DialogModule} from "primeng/dialog";
import {MenubarModule} from "primeng/menubar";
import {LightboxModule} from "primeng/lightbox";
import {ProgressBarModule} from "primeng/progressbar";
import {ColorPickerModule} from "primeng/colorpicker";
import {CalendarModule} from "primeng/calendar";
import {DataViewModule} from "primeng/dataview";
import {InputMaskModule} from "primeng/inputmask";
import {InputNumberModule} from "primeng/inputnumber";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {TooltipModule} from "primeng/tooltip";
import {CheckboxModule} from "primeng/checkbox";
import {StepsModule} from "primeng/steps";
import {CarouselModule} from "primeng/carousel";
import {SplitterModule} from "primeng/splitter";
import {TabViewModule} from "primeng/tabview";
import {OrderListModule} from "primeng/orderlist";
import {VirtualScrollerModule} from "primeng/virtualscroller";
import {FieldsetModule} from "primeng/fieldset";
import {BadgeModule} from "primeng/badge";
import {RatingModule} from "primeng/rating";
import {ScrollTopModule} from "primeng/scrolltop";
import {MessageModule} from "primeng/message";
import {CodeHighlighterModule} from "primeng/codehighlighter";
import {OrganizationChartModule} from "primeng/organizationchart";
import {SplitButtonModule} from "primeng/splitbutton";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    AccordionModule,
    AutoCompleteModule,
    AvatarGroupModule,
    AvatarModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    CarouselModule,
    CascadeSelectModule,
    ChartModule,
    CheckboxModule,
    ChipModule,
    ChipsModule,
    CodeHighlighterModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    ColorPickerModule,
    ContextMenuModule,
    DataViewModule,
    DialogModule,
    DividerModule,
    DropdownModule,
    FieldsetModule,
    FileUploadModule,
    FullCalendarModule,
    GalleriaModule,
    InplaceModule,
    InputNumberModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    KnobModule,
    LightboxModule,
    ListboxModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    MultiSelectModule,
    OrderListModule,
    OrganizationChartModule,
    OverlayPanelModule,
    PaginatorModule,
    PanelModule,
    PanelMenuModule,
    PasswordModule,
    PickListModule,
    ProgressBarModule,
    RadioButtonModule,
    RatingModule,
    RippleModule,
    ScrollPanelModule,
    ScrollTopModule,
    SelectButtonModule,
    SidebarModule,
    SkeletonModule,
    SlideMenuModule,
    SliderModule,
    SplitButtonModule,
    SplitterModule,
    StepsModule,
    TableModule,
    TabMenuModule,
    TabViewModule,
    TagModule,
    TerminalModule,
    TieredMenuModule,
    TimelineModule,
    ToastModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule,
    TreeModule,
    TreeTableModule,
    VirtualScrollerModule,
    TableModule,
    ButtonModule,
    DialogModule,
    ProgressSpinnerModule,
    DragDropModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: IntercepterService, multi: true }
  ],
exports :[HttpClientModule,
  TableModule,
  ButtonModule,
  InputTextModule,
  AccordionModule,
  AutoCompleteModule,
  AvatarGroupModule,
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonModule,
  CalendarModule,
  CardModule,
  CarouselModule,
  CascadeSelectModule,
  ChartModule,
  CheckboxModule,
  ChipModule,
  ChipsModule,
  CodeHighlighterModule,
  ConfirmDialogModule,
  ConfirmPopupModule,
  ColorPickerModule,
  ContextMenuModule,
  DataViewModule,
  DialogModule,
  DividerModule,
  DropdownModule,
  FieldsetModule,
  FileUploadModule,
  FullCalendarModule,
  GalleriaModule,
  InplaceModule,
  InputNumberModule,
  InputMaskModule,
  InputSwitchModule,
  InputTextModule,
  InputTextareaModule,
  KnobModule,
  LightboxModule,
  ListboxModule,
  MegaMenuModule,
  MenuModule,
  MenubarModule,
  MessageModule,
  MessagesModule,
  MultiSelectModule,
  OrderListModule,
  OrganizationChartModule,
  OverlayPanelModule,
  PaginatorModule,
  PanelModule,
  PanelMenuModule,
  PasswordModule,
  PickListModule,
  ProgressBarModule,
  RadioButtonModule,
  RatingModule,
  RippleModule,
  ScrollPanelModule,
  ScrollTopModule,
  SelectButtonModule,
  SidebarModule,
  SkeletonModule,
  SlideMenuModule,
  SliderModule,
  SplitButtonModule,
  SplitterModule,
  StepsModule,
  TableModule,
  TabMenuModule,
  TabViewModule,
  TagModule,
  TerminalModule,
  TieredMenuModule,
  TimelineModule,
  ToastModule,
  ToggleButtonModule,
  ToolbarModule,
  TooltipModule,
  TreeModule,
  TreeTableModule,
  VirtualScrollerModule,
  TableModule,
  ButtonModule,
  DialogModule,
  ProgressSpinnerModule,
  DragDropModule]})
export class SharedModule { }
