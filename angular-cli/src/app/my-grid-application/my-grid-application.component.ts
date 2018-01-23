import "ag-grid-enterprise"; // import here to apply enterprise-license features

import { Component, Input } from "@angular/core";
import {RedComponentComponent} from "../red-component/red-component.component";

import {GridOptions} from "ag-grid/main";

@Component({
    selector: 'app-my-grid-application',
    templateUrl: './my-grid-application.component.html'
})
export class MyGridApplicationComponent<T> {

  // The description of the grid item
  @Input("gdlDescription")
  public description;

  // The row data being passed
  @Input("gdlRowData")
  public rowData: T[];

  // The column header definitions
  @Input("gdlColumnDefinitions")
  public columnDefinitions: any[];

  // ag-grid variables
  public gridApi: any;

  // Grid options need to be both public and defined in the constructor in order to be correctly utilized by unit testing
  public gridOptions: GridOptions;
  private gridColumnApi: any;
  constructor() {
    this.gridOptions = <GridOptions> {
    };
  }

  public ngOnInit(): void {
    // this.gridOptions = gridDefaultOptions;
  }

  /**
   * ag-grid event reference; please do not remove
   * This runs after ngAftreViewInit, so it is an
   * additional lifecycle hook specifically for grid
   *
   * @param {AgGridEvent} params
   */
  public onGridReady(params: any): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.gridApi.sizeColumnsToFit();
  }
}

