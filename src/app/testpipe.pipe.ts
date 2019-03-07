import { Pipe, PipeTransform, Output } from '@angular/core';

@Pipe({
  name: 'testpipe'
})
export class TestpipePipe implements PipeTransform {

  transform(input) {
var Output=50-input.lenght;
   return Output;

  }

}
