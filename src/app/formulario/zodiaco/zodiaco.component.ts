import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})

export default class ZodiacoComponent implements OnInit{
    formGroup!:FormGroup;
    nombre!:'';
    amaterno!:'';
    apaterno!:'';
    dia!:number;
    mes!:number;
    anoN!:number;
    genero!:'';
    vAnimal!:string;
    link='';
    edad=0;
    
  constructor( private fb:FormBuilder){}
  ngOnInit(): void {
    this.formGroup=this.initForm();
  }

  initForm():FormGroup{
    return this.fb.group({
      nombre:[''],
      apaterno:[''],
      amaterno:[''],
      dia:[''],
      mes:[''],
      anoN:[''],
      genero:[''],
      edad:[''],
    })
  }

  OnSubmit():void{
    const{nombre, apaterno, amaterno, dia, mes, anoN, genero}=this.formGroup.value;
    this.vAnimal='';
    this.vAnimal=this.animal(anoN)
    this.nombre=nombre;
    this.apaterno=apaterno;
    this.amaterno=amaterno;
    this.dia=dia;
    this.mes=mes;
    this.anoN=anoN;
    this.genero=genero;
    
    this.edad = 2024-anoN;

    if(mes<=10 && dia<=16){
      this.edad=this.edad-1;
    }

    console.log(anoN);

    switch(this.vAnimal){
      case 'rata':
        this.link='https://content.clara.es/medio/2023/04/26/horoscopo-chino-rata_6b14b60c_230426100231_1280x886.jpg';
        break;
      case 'Buey':
        this.link='https://content.clara.es/medio/2023/10/31/horoscopo-chino-clara_06cc1194_231031092220_1280x886.jpg';
        break;
      case 'Tigre':
        this.link='https://content.clara.es/medio/2023/04/26/horoscopo-chino-tigre_feec3cec_230426114744_1280x886.jpg';
        break;
      case 'Conejo':
        this.link='https://content.clara.es/medio/2023/04/26/horoscopo-chino-conejo_324f06f1_230426115500_1280x886.jpg';
        break;
      case 'Dragón':
        this.link='https://content.clara.es/medio/2023/04/26/horoscopo-chino-dragon_3df9a310_230426114559_1280x886.jpg';
        break;
      case 'Serpiente':
        this.link='https://content.clara.es/medio/2023/04/26/horoscopo-chino-serpiente_849c5175_230426095404_1280x886.jpg';
        break;
      case 'Caballo':
        this.link='https://content.clara.es/medio/2023/04/26/horoscopo-chino-caballo_35b118fa_230426121218_1280x886.jpg';
        break;
      case 'Cabra':
        this.link='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgisN8-p2d1_f6ymDk0ggFS-S34VNkRsncHQ&s';
        break;
      case 'Mono':
        this.link='https://content.clara.es/medio/2023/04/26/horoscopo-chino-mono_096ecc04_230426111924_1280x886.jpg';
        break;
      case 'Gallo':
        this.link='https://content.clara.es/medio/2023/04/26/horoscopo-chino-gallo_d9996cda_230426113933_1280x886.jpg';
        break;
      case 'Perro':
        this.link='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToYjImphah3qA7l11xvPz6lAM_luo0aut0Dg&s';
        break;
      case 'Cerdo':
        this.link='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMmF_Qo2Z3KAy8W--sENG7r7cf7mi0f-Ib9A&s';
        break;
        default:
          this.link= "lo siento, NO CONGENIAS CON NINGUNO";
    }

  }

  animal(x:number):string{
    switch (x) {
      case 1900: case 1912: case 1924: case 1936: case 1948: case 1960: 
      case 1972: case 1984: case 1996: case 2008: case 2020:
        return "Rata";
    
      case 1901: case 1913: case 1925: case 1937: case 1949: case 1961: 
      case 1973: case 1985: case 1997: case 2009: case 2021:
        return "Buey";
    
      case 1902: case 1914: case 1926: case 1938: case 1950: case 1962: 
      case 1974: case 1986: case 1998: case 2010: case 2022:
        return "Tigre";
    
      case 1903: case 1915: case 1927: case 1939: case 1951: case 1963: 
      case 1975: case 1987: case 1999: case 2011: case 2023:
        return "Conejo";
    
      case 1904: case 1916: case 1928: case 1940: case 1952: case 1964: 
      case 1976: case 1988: case 2000: case 2012: case 2024:
        return "Dragón";
    
      case 1905: case 1917: case 1929: case 1941: case 1953: case 1965: 
      case 1977: case 1989: case 2001: case 2013: case 2025:
        return "Serpiente";
    
      case 1906: case 1918: case 1930: case 1942: case 1954: case 1966: 
      case 1978: case 1990: case 2002: case 2014: case 2026:
        return "Caballo";
    
      case 1907: case 1919: case 1931: case 1943: case 1955: case 1967: 
      case 1979: case 1991: case 2003: case 2015: case 2027:
        return "Cabra";
    
      case 1908: case 1920: case 1932: case 1944: case 1956: case 1968: 
      case 1980: case 1992: case 2004: case 2016: case 2028:
        return "Mono";
    
      case 1909: case 1921: case 1933: case 1945: case 1957: case 1969: 
      case 1981: case 1993: case 2005: case 2017: case 2029:
        return "Gallo";
    
      case 1910: case 1922: case 1934: case 1946: case 1958: case 1970: 
      case 1982: case 1994: case 2006: case 2018: case 2030:
        return "Perro";
    
      case 1911: case 1923: case 1935: case 1947: case 1959: case 1971: 
      case 1983: case 1995: case 2007: case 2019: case 2031:
        return "Cerdo";
    
      default:
        return "Año fuera del rango";
    }
    
  
  }

  

}

