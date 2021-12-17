import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqr'
})
export class SqrPipe implements PipeTransform {

  transform(data: number): number {
    return data*data ;
  }

}


/*
//sqr-pipe.ts 

@Pipe({
	name:'sqr'
})


class SqrPipe implements PipeTransform{

	transform(data:number):number{
		return data * data ;
		//return Math.sqrt(data)  
	}

}





app.module.ts

declaration: [
	SqrPipe
]



use in html 

{{ 9 | sqr }} 



*/
