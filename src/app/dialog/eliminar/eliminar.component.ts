import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.scss']
})
export class EliminarComponent implements OnInit{

  nombrePersonaje: string = '';

  constructor(private dialogRef: MatDialogRef<EliminarComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
  }

  ngOnInit(): void {
    this.nombrePersonaje = this.data;
  }

  onCancel() {
    this.dialogRef.close(false);
  }

  onDelete() {
    this.dialogRef.close(true)
  }
}
