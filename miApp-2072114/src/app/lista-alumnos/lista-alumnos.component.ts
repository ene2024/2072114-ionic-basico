import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { alumno } from '../alumno.model';


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent  implements OnInit {
  alumnos : alumno[] = [
  ];

  constructor(private actionSheetCtrl: ActionSheetController) {}
  
  alumno: alumno = {
    nombre: '',
    presente: false
  }

  ngOnInit() {}
  async Eliminar() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }

  result: string = ''

   nuevoAlumno: alumno = {
   nombre: '',
   presente: false
 }

 agregaAlumno(): void {
   this.alumnos.push(this.nuevoAlumno);

   this.nuevoAlumno = {
     nombre: '',
     presente: false
   }
  }
}
