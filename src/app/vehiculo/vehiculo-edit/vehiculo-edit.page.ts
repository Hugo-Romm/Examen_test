import { Component, OnInit } from '@angular/core';
import { collection, addDoc, updateDoc, getDoc, doc, Firestore, deleteDoc } from '@angular/fire/firestore';
import { Storage, StorageError, UploadTaskSnapshot, getDownloadURL, ref, uploadBytesResumable, deleteObject } from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehiculo-edit',
  templateUrl: './vehiculo-edit.page.html',
  styleUrls: ['./vehiculo-edit.page.scss'],
})
export class VehiculoEditPage implements OnInit {
  id: any;  //atributo que recibe el id del reg. desde la ruta
  vehiculo: any = {};
  isNew: boolean = false;
  avatar: string = '';

  constructor(
    private readonly firestore: Firestore,
    private route: ActivatedRoute,
    private router: Router,
    private storage: Storage
  ) { }

  //metodo de la interfaz OnInit
  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
      if (params.id == 'new') {
        this.isNew = true;
      } else {
        this.obtenerVehiculo(this.id);
      }
    });
  }

  incluirVehiculo = () => {
    let calificacion = Number(this.vehiculo.calificacion);
    if (calificacion >= 1 && calificacion <= 5) {
      let vehiculosRef = collection(this.firestore, "vehiculo");
  
      addDoc(vehiculosRef, {
        codigo: Number(this.vehiculo.codigo),
        marca: this.vehiculo.marca,
        ano: Number(this.vehiculo.ano),
        calificacion: calificacion,
        nuevo: this.vehiculo['nuevo'] || false,
        fecha: new Date(this.vehiculo.fecha),
      }).then(doc => {
        console.log("Registro Incluido");
        this.router.navigate(['/vehiculo-list']);
      }).catch(error => {
        // Manejar errores
      });
    } else {
      console.log("La calificación debe estar entre 1 y 5.");
    }
  }
  
  editarVehiculo = () => {
    let calificacion = Number(this.vehiculo.calificacion);
    if (calificacion >= 1 && calificacion <= 5) {
      console.log("Aqui editar en firebase");
      const document = doc(this.firestore, "vehiculo", this.id);
  
      updateDoc(document, {
        codigo: Number(this.vehiculo.codigo),
        marca: this.vehiculo.marca,
        ano: Number(this.vehiculo.ano),
        calificacion: calificacion,
        nuevo: this.vehiculo['nuevo'] || false,
        fecha: new Date(this.vehiculo.fecha),
      }).then(doc => {
        console.log("Registro Editado");
        this.router.navigate(['/vehiculo-list']);
      }).catch(error => {
        //Informar al usuario
      });
    } else {
      console.log("La calificación debe estar entre 1 y 5.");
    }
  }

  obtenerVehiculo = (id: string) => {
    const document = doc(this.firestore, "vehiculo", id);
    getDoc(document).then(doc => {

      console.log("Registro a editar", doc.data());

      if(doc.data()){
        this.vehiculo = doc.data();
        this.vehiculo.fecha = this.vehiculo.fecha.toDate().toISOString().substring(0,10)+"";

      }else{
        this.vehiculo = {};
      }
    });
  }

  guardarVehiculo = () => {
    if (this.isNew) {
      this.incluirVehiculo();
    } else {
      this.editarVehiculo();
    }
  }

  eliminarVehiculo = () => {
    console.log("Aqui editar en firebase");
    const document = doc(this.firestore, "vehiculo", this.id);

    deleteDoc(document).then(doc => {
      console.log("Registro Eliminado");
      this.router.navigate(['/vehiculo-list']);
    }).catch(error => {
      //Informar al usuario
    });

  }

}
